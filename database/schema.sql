CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	email VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL, 
	role VARCHAR(15) NOT NULL DEFAULT 'student',
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	profile_picture VARCHAR(255) DEFAULT 'profile.png',
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	last_login TIMESTAMP NULL
);

CREATE TABLE students(
	id SERIAL PRIMARY KEY,
	user_id INT NOT NULL UNIQUE,
	access_status VARCHAR(30) DEFAULT 'pending',
	CONSTRAINT fk_student_user
	FOREIGN KEY (user_id)
	REFERENCES users(id)
);

CREATE TABLE teachers(
	id SERIAL PRIMARY KEY,
	user_id INT NOT NULL UNIQUE,
	specialization VARCHAR(30) NOT NULL DEFAULT 'GENERAL TUTOR',
	bio VARCHAR(255) NOT NULL DEFAULT 'Motivated Tutor',
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_teacher_user
	FOREIGN KEY(user_id)
	REFERENCES users(id)
);

CREATE TABLE student_teachers(
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    teacher_id INT NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_student_teacher_student
    FOREIGN KEY(student_id)
    REFERENCES students(id),

    CONSTRAINT fk_student_teacher_teacher
    FOREIGN KEY(teacher_id)
    REFERENCES teachers(id)
);

CREATE TABLE assignments(
	id SERIAL PRIMARY KEY ,
	teacher_id INT NOT NULL, 
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255) NULL DEFAULT '',
	due_date TIMESTAMP NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT fk_teacher_assignment
	FOREIGN KEY(teacher_id)
	REFERENCES teachers(id)
);

CREATE TABLE submissions(
	id SERIAL PRIMARY KEY,
	assignment_id INT NOT NULL,
	student_id INT NOT NULL,
	submission_text VARCHAR(255) NULL,
	file_url VARCHAR(255) NOT NULL,
	feedback VARCHAR(255) NULL,
	submission_status VARCHAR(30) DEFAULT 'Pending',
	submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT fk_assignment_submission
	FOREIGN KEY(assignment_id)
	REFERENCES assignments(id),

	CONSTRAINT fk_student_submission
	FOREIGN KEY(student_id)
	REFERENCES students(id)
);

INSERT INTO users(id, email, password, role, first_name, last_name)
VALUES(1, 'emmasanyaolu1@gmail.com', 'oreoluwa', 'dev', 'Ore', 'Sanyaolu');
