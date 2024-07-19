import { ActionReducerMap } from '@ngrx/store';
import { mouseReducer } from './reducers/mouse.reducer';
import { MouseState } from '../interfaces/MouseState';

export interface AppState {
  mouse: MouseState;
}

export const reducers: ActionReducerMap<AppState> = {
  mouse: mouseReducer,
};
