import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css']
})
export class AuthorSearchComponent {
  authorId: string = '';
  author: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  searchAuthor() {
    this.http.get(`/api/authors/${this.authorId}`).subscribe(
      (data) => {
        this.author = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Author not found';
        this.author = null;
      }
    );
  }
}
