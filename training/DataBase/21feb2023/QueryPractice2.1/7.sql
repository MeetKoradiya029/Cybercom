/*
Create a database schema for student grade system. It contains
student data and their grade of each subject based on the
different semester.

*/

create table Students(
	id int auto_increment,
    name varchar(256) not null,
    contact_no varchar(256),
    address varchar(256) not null,
    primary key(id)
);

insert into students (name,contact_no,address) values("meet koradiya","7284021006","junagadh");
insert into students (name,contact_no,address) values("janish patel","7384021006","junagadh");
insert into students (name,contact_no,address) values("vivek vachhani","7384021007","rajkot");
insert into students (name,contact_no,address) values("nil ladani","7385021007","rajkot");
insert into students (name,contact_no,address) values("nilesh kamani","7384021004","gir somnath");
insert into students (name,contact_no,address) values("pankaj advani","7384022007","ahmedabad");


CREATE TABLE Grades (
    id INT AUTO_INCREMENT,
    student_id int  NOT NULL,
    semester_one VARCHAR(16) NOT NULL,
    semester_two VARCHAR(16) NOT NULL,
    semester_three VARCHAR(16) NOT NULL,
    semster_four VARCHAR(16) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id)
        REFERENCES students (id)
        ON DELETE CASCADE
); 

insert into grades (student_id,semester_one,semester_two,semester_three,semster_four) values (2,"AB","BB","AB","BC");
insert into grades (student_id,semester_one,semester_two,semester_three,semster_four) values (1,"AB","BC","AA","CC");
insert into grades (student_id,semester_one,semester_two,semester_three,semster_four) values (3,"AA","BC","AB","BC");
insert into grades (student_id,semester_one,semester_two,semester_three,semster_four) values (4,"BB","BC","CC","DD");
insert into grades (student_id,semester_one,semester_two,semester_three,semster_four) values (5,"AB","BB","AB","BC");
insert into grades (student_id,semester_one,semester_two,semester_three,semster_four) values (6,"AB","BB","AB","DD");




select s.name ,g.semester_one from students s
inner join grades g on s.id = g.student_id 
where g.semester_one="AB"
order by g.semester_one;
