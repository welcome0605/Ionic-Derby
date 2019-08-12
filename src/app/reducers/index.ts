import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as AppSettings from './app-settings.reducer';
import { environment } from '../../environments/environment';

export interface State {
  appSettings: AppSettings.State;
}

export const reducers: ActionReducerMap<State> = {
  appSettings: AppSettings.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
