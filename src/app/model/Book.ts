import { Author } from './Author';
import { Genre } from './Genre';

export class Book {
  id: number;
  urlImage: string;
  name: string;
  price: number;
  totalViews: number;
  rating: number;
  genreId: number;
  authorId: number;
  author: Author;
  genre: Genre;
  constructor(theRating: number) {
    this.rating = theRating;
  }
}
