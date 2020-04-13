import { Injectable } from '@angular/core';
import { Guest } from './model/guest';
import { Subject, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private guests: Guest[] = [];
  updateSubject = new Subject<Guest[]>();

  constructor() {}

  getGuests(): Observable<Guest[]> {
    return of([...this.guests]);
  }

  addGuest(guest: Guest): void {
    this.guests.push(guest);
    this.updateSubject.next([...this.guests]);
  }
}
