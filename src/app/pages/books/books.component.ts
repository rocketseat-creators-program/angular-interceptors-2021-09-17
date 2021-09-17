import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book, BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  bookForm: FormGroup =  new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
  });

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  select(book: Book) {
    this.bookForm.setValue({...book});
  }

  delete(book: Book) {
    this.booksService
      .deleteBookById(book.id)
      .subscribe(() => this.getAllBooks());
  };

  save(event: Event) {
    event.preventDefault();
    const { id, title, author} = this.bookForm.value;

    if (!id) {
      const newBook: Omit<Book, 'id'> = { title, author };
      this.booksService
        .createBook(newBook)
        .subscribe(() => this.getAllBooks());
    } else {
      const book: Book = { id, title, author };
      this.booksService
        .updateBook(book)
        .subscribe(() => this.getAllBooks());
    }

    this.bookForm.reset();

  }

  private getAllBooks(): void {
    this.booksService
      .getAllBooks()
      .subscribe((books) => this.books = books);
  }

}
