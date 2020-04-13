import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { GuestsListComponent } from './guests-list/guests-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromGuestsReducer from './state/guests.reducer';

@NgModule({
  declarations: [
    GuestFormComponent,
    GuestsListComponent
  ],
  exports: [
    GuestFormComponent,
    GuestsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(fromGuestsReducer.stateKey, fromGuestsReducer.reducer)
  ]
})
export class GuestsModule { }
