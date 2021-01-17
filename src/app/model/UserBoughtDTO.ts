import { Observable } from 'rxjs';
import { Book } from './Book';

export interface UserBoughtBooksDTO {
  id: number;
  username: string;
  boughtBooks: Observable<Book>;
  bought: boolean;
}
