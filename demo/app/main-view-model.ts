import {Observable} from 'data/observable';
import {Facebook} from 'nativescript-facebook';

export class HelloWorldModel extends Observable {
  public message: string;
  private facebook: Facebook;

  constructor() {
    super();

    this.facebook = new Facebook();
    this.message = this.facebook.message;
  }
}