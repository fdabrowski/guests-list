import { Component, OnInit} from '@angular/core';
import { Guest } from '../model/guest';
import { GuestService } from '../guest.service';
import { Store } from '@ngrx/store';
import * as questsState from '../state/guests.reducer';
import * as guestsActions from '../state/guests.actions';

@Component({
  selector: 'guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.css']
})
export class GuestsListComponent implements OnInit {

  guests: Guest[];
  isAdmin: boolean;

  constructor(private guestsService: GuestService,
              private readonly store: Store<questsState.AppState>) {
  }

  ngOnInit() {

    this.store.select(questsState.guestsListVisibleSelector).subscribe( isListVisible => this.isAdmin = isListVisible);
    // this.isAdmin = true;
    this.guestsService.getGuests().subscribe(
      (guests: Guest[]) => this.guests = guests
    );
    this.guestsService.updateSubject.subscribe(
      (guests: Guest[]) => this.guests = guests
    );
  }

  toogleIsAdmin() {
    this.store.dispatch(guestsActions.toggleGuestListAction());
  }

}
