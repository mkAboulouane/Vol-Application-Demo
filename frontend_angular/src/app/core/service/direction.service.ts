import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DirectionService {
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable();

  constructor() {}

  updateDirection(item: any) {
    this.data.next(item);
  }
}
