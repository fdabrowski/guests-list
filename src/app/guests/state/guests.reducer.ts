import * as fromRoot from '../../state/app.state';
import { createReducer, on, Action, createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromActions from '../state/guests.actions';
import { state } from '@angular/animations';

export interface AppState extends fromRoot.AppState {
    isGuestListVisible: boolean;
}

export const stateKey = 'guests';

const initialState = {
    isListVisible: false
};

const guestsFeatureSelector = createFeatureSelector<AppState>(stateKey);

export const guestsListVisibleSelector = createSelector(
    guestsFeatureSelector,
    guestsState => guestsState.isGuestListVisible
);

const guestsReducer = createReducer(
    initialState,
    on(fromActions.toggleGuestListAction, guestsState => ({ ...state, isListVisible: !guestsState.isListVisible}))
);

export function reducer(guestsState: AppState | undefined, action: Action) {
    return guestsReducer(guestsState, action);
}
