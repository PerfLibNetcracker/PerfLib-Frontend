import { Author } from './Author';
import { Genre } from './Genre';

export class Book {
  id: number;
  urlImage: string;
  name: string;
  price: number;
  totalViews: number;
  rating: number;
  author: Author;
  genre: Genre;
  releaseYear: number;
  constructor(theRating: number) {
    this.rating = theRating;
  }
}
