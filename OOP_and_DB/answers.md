CREATE TABLE Books (isbn INT PRIMARY KEY, title VARCHAR(25), author VARCHAR(25), isCheckedOut BOOLEAN, borrower_id INT);
CREATE TABLE Members (memberId INT PRIMARY KEY, memberName VARCHAR(25));

