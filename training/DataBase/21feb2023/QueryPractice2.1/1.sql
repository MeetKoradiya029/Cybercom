/*
Create a database structure for employee leave application. It
should include all the employee's information as well as their
leave information. 
*/


create table Employee (
	id int auto_increment,
    name varchar(256) not null,
    email varchar(256) unique not null,
    phone_no varchar(256) unique not null,
    hire_date date not null,
    job_title varchar(256) not null,
    primary key(id)
);
insert into employee (name,email,phone_no,hire_date,job_title) values ("MIKE PEAR","mike@gmail.com","7898456512","2022-06-01","Jr. WebDev");
insert into employee (name,email,phone_no,hire_date,job_title) values ("john doe","john@gmail.com","7898456545","2022-06-01","Jr. WebDev");
insert into employee (name,email,phone_no,hire_date,job_title) values ("Nikhil Sharma","nikhil@gmail.com","8898456512","2022-01-01","Jr. Mobile app. Dev");
insert into employee (name,email,phone_no,hire_date,job_title) values ("james bond","bond@yahoo.com","7894565123","2015-02-01","QA");
insert into employee (name,email,phone_no,hire_date,job_title) values ("Tony stark","tony@gmail.com","7798456512","2010-05-01","MD");


create table leaveApp(
  id INT auto_increment,
  employee_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  leave_type VARCHAR(128) NOT NULL,
  reason VARCHAR(256) NOT NULL,
  status VARCHAR(64) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (employee_id) REFERENCES Employee(id) on delete cascade
);

INSERT INTO leaveApp (employee_id, start_date, end_date, leave_type, reason, status)
VALUES (1, '2023-03-01', '2023-03-05', 'Vacation', 'Taking a trip to Hawaii', 'Pending');
INSERT INTO leaveApp (employee_id, start_date, end_date, leave_type, reason, status)
VALUES (5, '2023-04-01', '2023-04-02', 'Emergency leave', 'Medical Emergrncy', 'Approved');
INSERT INTO leaveApp (employee_id, start_date, end_date, leave_type, reason, status)
VALUES (2, '2023-05-05', '2023-04-02', 'Sick leave', 'fever', 'Approved');
INSERT INTO leaveApp (employee_id, start_date, end_date, leave_type, reason, status)
VALUES (5, '2023-07-01', '2023-07-15', 'Vacation', 'Merriage', 'Approved');



select employee.name,  employee.phone_no, leaveapp.id as leave_id,leaveapp.start_date , leaveapp.end_date from employee 
inner join leaveapp on employee.id=leaveapp.id;

