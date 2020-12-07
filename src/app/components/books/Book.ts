import {Author} from './author';
import {Genre} from './genre';

export class Book {
  id: number;
  name: string;
  price: number;
  totalViews: number;
  rating: number;
  genreId: number;
  authorId: number;
  author: Author;
  genre: Genre;
}
