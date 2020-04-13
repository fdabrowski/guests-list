import * as fromRoot from '../../state/app.state';
import { createReducer, on, Action, createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromActions from '../state/guests.actions';
import { state } from '@angular/animations';

export interface AppState extends fromRoot.AppState {
    isListVisible: boolean;
}

export const stateKey = 'guests';

const initialState = {
    isListVisible: false
};

const guestsFeatureSelector = createFeatureSelector<AppState>(stateKey);

export const guestsListVisibleSelector = createSelector(
    guestsFeatureSelector,
    state => state.isListVisible
);

const guestsReducer = createReducer(
    initialState,
    on(fromActions.toggleGuestListAction, state => ({ ...state, isListVisible: !state.isListVisible}))
);

export function reducer(state: AppState | undefined, action: Action) {
    return guestsReducer(state, action);
}
