//Name: Ryan Kyaka
//Date: 6th July 2025
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isCheckedOut = false; 
    this.borrower = null;
  }

  checkOut(member) {
    if (this.isCheckedOut) {
      console.log(`${this.title} is already checked out.`);
      return false; 
    } else {
      this.isCheckedOut = true;
      this.borrower = member;
      console.log(`${this.title} has been checked out by ${member.name}`);
      return true; 
    }
  }

  returnBook() {
    if (this.isCheckedOut) {
      console.log(`${this.title} returned by ${this.borrower.name}`);
      this.isCheckedOut = false;
      this.borrower = null;
    } else {
      console.log(`${this.title} was not checked out.`);
    }
  }
}

class Member {
  constructor(memberName, memberId) {
    this.name = memberName;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }

  borrow(book) {
    if (book.checkOut(this)) {
      this.borrowedBooks.push(book);
    } else {
      console.log(`${this.name} can't borrow ${book.title}`);
    }
  }

  return(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      book.returnBook();
      this.borrowedBooks.splice(index, 1);
    } else {
      console.log(`${this.name} did not borrow ${book.title}`);
    }
  }
}
