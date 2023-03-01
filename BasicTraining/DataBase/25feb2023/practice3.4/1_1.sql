/*
case 01:
1. Retrieve the top 10 most expensive cars from the Cars
table.
*/

-- Create the Cars table
CREATE TABLE Cars (
    CarID int PRIMARY KEY,
    Brand varchar(50),
    Model varchar(50),
    Year int,
    Mileage int,
    Price decimal(10,2),
    Available bit
);

-- Insert example data into the Cars table
INSERT INTO Cars (CarID, Brand, Model, Year, Mileage, Price, Available) 
VALUES 
    (1, 'Honda', 'Civic', 2021, 100, 20000.00, 1),
    (2, 'Toyota', 'Camry', 2020, 500, 25000.00, 1),
    (3, 'Nissan', 'Sentra', 2019, 1000, 18000.00, 0),
    (4, 'Ford', 'F-150', 2018, 20000, 35000.00, 1),
    (5, 'Tesla', 'Model 3', 2022, 50, 45000.00, 0);
INSERT INTO Cars (CarID, Brand, Model, Year, Mileage, Price, Available) 
VALUES    
    (6, 'Mahindra', 'Thar', 2023, 16, 1500000.00, 1),
    (7, 'Mahindra', 'scorpio', 2022, 20, 1000000.00, 1),
    (8, 'Tata', 'Nexon', 2023, 40, 1400000.00, 0),
    (9, 'Tata', 'Safari', 2023, 35, 2500000.00, 0),
    (10, 'Toyota', 'Fortuner', 2022, 50, 4500000.00, 0),
    (11, 'Hyundai', 'creta', 2023, 50, 1200000.00, 1),
    (12, 'Tesla', 'Model 3', 2022, 50, 4650000.00, 1),
    (13, 'Hyundai', 'venue', 2022, 50, 1500000.00, 1),
    (14, 'MG', 'Hector', 2023, 50, 4000000.00, 1),
    (15, 'Tesla', 'Model 4', 2022, 50, 6000000.00, 0),
    (16, 'Tesla', 'Model 6', 2023, 50, 6000000.00, 0);

-- Create the Customers table
CREATE TABLE Customers (
    CustomerID int PRIMARY KEY,
    FirstName varchar(50),
    LastName varchar(50),
    Email varchar(100),
    PhoneNumber varchar(20)
);

-- Insert example data into the Customers table
INSERT INTO Customers (CustomerID, FirstName, LastName, Email, PhoneNumber)
VALUES 
    (1, 'John', 'Doe', 'johndoe@email.com', '123-456-7890'),
    (2, 'Jane', 'Doe', 'janedoe@email.com', '987-654-3210'),
    (3, 'Bob', 'Smith', 'bobsmith@email.com', '555-555-5555'),
    (4, 'Alice', 'Johnson', 'alicejohnson@email.com', '111-222-3333');

-- Create the Sales table
CREATE TABLE Sales (
    SaleID int PRIMARY KEY,
    CarID int,
    CustomerID int,
    SaleDate date,
    SalePrice decimal(10,2),
    FOREIGN KEY (CarID) REFERENCES Cars(CarID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Insert example data into the Sales table
INSERT INTO Sales (SaleID, CarID, CustomerID, SaleDate, SalePrice)
VALUES 
    (1, 1, 1, '2022-02-01', 20000.00),
    (2, 2, 2, '2022-02-10', 25000.00),
    (3, 5, 3, '2022-02-15', 45000.00),
    (4, 4, 4, '2022-02-20', 35000.00);
    
    
    select * from cars 
    order by price desc
    limit 10;
    
    
