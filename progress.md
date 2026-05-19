# Progress

## Current Frontend Status

- A Register page exists in the React frontend.
- The Register page has form fields for:
  - Full name
  - Email address
  - Phone number
  - Password
  - Confirm password
- The Register page currently sends a POST request to:

```text
http://localhost:3000/auth/register
```

- The request body currently includes:
  - `name`
  - `email`
  - `phone_number`
  - `role`
  - `password`

## Where I Stopped

The next task is to set up the register endpoint on the Express backend.

## Backend Work To Do

- Create or finish the `/auth/register` POST endpoint in Express.
- Make sure Express can read JSON request bodies using:

```js
app.use(express.json())
```

- Validate incoming registration data:
  - Name is required
  - Email is required
  - Password is required
  - Phone number can be saved if needed

- Check whether the user already exists by email.
- Hash the user password before saving it.
- Save the new user to the database.
- Return a useful JSON response to the frontend.

## bcrypt Setup

Install bcrypt:

```bash
npm install bcrypt
```

Use bcrypt to hash passwords before storing them:

```js
const bcrypt = require("bcrypt")

const hashedPassword = await bcrypt.hash(password, 10)
```

Never store plain text passwords in the database.

## JWT Setup

Install jsonwebtoken:

```bash
npm install jsonwebtoken
```

Use JWT to create a token after successful registration or login:

```js
const jwt = require("jsonwebtoken")

const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
)
```

## Environment Variables To Add Later

Create a `.env` file for backend secrets:

```text
JWT_SECRET=your_secret_here
```

The `.env` file should not be committed to git.

## Next Session Goal

Build the Express register endpoint using bcrypt and JWT, then connect it properly to the existing React Register page.
