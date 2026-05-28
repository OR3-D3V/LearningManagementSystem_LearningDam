# Backend Vulnerabilities Review

This list is ranked from High to Low severity.

## 1. High - Privilege Escalation via Client-Controlled Role
Problem:
The register endpoint trusts `role` from the request body.

Why this is a problem:
A malicious client can submit elevated roles such as admin/dev and gain unauthorized permissions.

Possible solutions:
1. Ignore client-provided role for public registration.
2. Force `role = 'student'` on the server during registration.
3. Restrict privileged role assignment to protected admin-only endpoints.

## 2. High - Race Condition in Duplicate User Registration
Problem:
Registration does a check-then-insert flow (check user exists, then insert).

Why this is a problem:
Two simultaneous requests can both pass the check, and one will fail on the database unique constraint. Without proper error handling, this causes inconsistent responses.

Possible solutions:
1. Treat the database UNIQUE constraint as the source of truth.
2. Catch PostgreSQL duplicate key error (`23505`) and return HTTP 409.
3. Keep pre-check only as an optimization, not for correctness.

## 3. Medium - Missing Input Validation and Normalization
Problem:
Name/email/password are accepted without strict server-side validation.

Why this is a problem:
Invalid or weak input can reduce security and reliability, and may cause bad data to enter the system.

Possible solutions:
1. Validate required fields and types.
2. Validate email format and normalize email to lowercase.
3. Enforce password policy (minimum length/strength).
4. Trim whitespace and enforce max input lengths.

## 4. Medium - Incorrect Return Value from createUser
Problem:
`createUser` returns `result.row` instead of `result.rows[0]`.

Why this is a problem:
The function returns `undefined`, causing potential downstream logic bugs.

Possible solutions:
1. Return `result.rows[0]`.
2. Add a guard that throws if no row is returned.

## 5. Medium - Plain-Text Password in Seed Data
Problem:
The schema seed inserts a user with a plain-text password.

Why this is a problem:
Plain-text passwords are a major security risk and can be exposed if DB data is leaked.

Possible solutions:
1. Seed only bcrypt-hashed passwords.
2. Remove or replace insecure seed records.
3. Keep demo/test seed data separate from production.

## 6. Medium - Email Column Length Too Small
Problem:
Email column uses `VARCHAR(30)`.

Why this is a problem:
Many legitimate emails exceed 30 characters, causing registration failures.

Possible solutions:
1. Change to `VARCHAR(254)` or `TEXT` with validation.
2. Add a migration for existing environments.

## 7. Medium - Phone Number Not Persisted
Problem:
`phone_number` is accepted and stored in session but not saved in the users table.

Why this is a problem:
Data behavior is inconsistent, causing confusion and possible feature bugs.

Possible solutions:
1. Add `phone_number` column and persist it on registration.
2. Or remove `phone_number` from request/session until implemented.

## 8. Low - User Enumeration Through Error Message
Problem:
The API clearly returns "User Already Exists".

Why this is a problem:
Attackers can test which emails are registered.

Possible solutions:
1. Return generic responses for registration outcomes.
2. Log detailed failure reasons server-side only.
3. Add rate limiting for auth endpoints.

## 9. Low - Hardcoded Session Secret
Problem:
Session secret is hardcoded in source code.

Why this is a problem:
If source code leaks, attackers can forge session data more easily.

Possible solutions:
1. Move secret to environment variables.
2. Rotate secrets periodically.
3. Use different secrets per environment.

## 10. Low - Broken Root Route
Problem:
Root route returns `result.rows` but `result` is never defined.

Why this is a problem:
This causes runtime errors and reduces service reliability.

Possible solutions:
1. Remove the route if unused.
2. Implement a valid query and proper error handling.
3. Add centralized error middleware for consistent failures.
