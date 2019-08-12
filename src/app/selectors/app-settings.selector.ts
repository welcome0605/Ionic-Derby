import { createSelector } from '@ngrx/store';
import * as AppSettings from '../reducers/app-settings.reducer';
import { State } from '../reducers';

export const selectAppSettings = (state: State) => state.appSettings;

export const selectAllLanguages = createSelector(
  selectAppSettings,
  (state: AppSettings.State) => state.languages,
);
