/*
Create a database structure for students and its college. One
student can be on one college only. 
*/


CREATE TABLE colleges
(
	college_id INT,
    college_name VARCHAR(128),
    city VARCHAR(16),
    PRIMARY KEY (college_id)
);
CREATE TABLE students
(
	student_id INT,
    student_name VARCHAR(128),
    college_id INT UNIQUE,
    PRIMARY KEY (student_id),
    FOREIGN KEY (college_id) REFERENCES colleges(college_id)
);
