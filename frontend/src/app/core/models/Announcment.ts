import { User } from './user';

export class Announcement {
  id: number;
  announcementName: string;
  articlePrice: number;
  articlePicture: string;
  valid: boolean;
  quantity: number;
  score?: number;
  user: User;

  // constructor(id: number, announcementName: string, articlePrice: number, articlePicture: string, valid: boolean, quantity: number, user: User, score?: number) {
  //   this.id = id;
  //   this.announcementName = announcementName;
  //   this.articlePrice = articlePrice;
  //   this.articlePicture = articlePicture;
  //   this.valid = valid;
  //   this.quantity = quantity;
  //   this.user = user;
  //   this.score = score;
  // }
}
