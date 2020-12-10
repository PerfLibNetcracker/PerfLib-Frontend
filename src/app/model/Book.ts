import {Author} from './Author';
import {Genre} from './Genre';

export class Book {
  id: number;
  urlimage: string;
  name: string;
  price: number;
  totalViews: number;
  rating: number;
  genreId: number;
  authorId: number;
  author: Author;
  genre: Genre;
}
