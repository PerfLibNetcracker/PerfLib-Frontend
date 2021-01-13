import { Book } from './Book';

export interface UserBoughtBooksDTO {
  id: number;
  username: string;
  boughtBooks: Array<Book>;
  bought: boolean;
}
