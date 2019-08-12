import { Action, createReducer } from '@ngrx/store';

export enum Languages {
  Es = 'es',
  En = 'en',
  Ca = 'ca',
  Fr = 'fr',
}

export interface State {
  languages: Languages[];
}

export const initialState: State = {
  languages: [Languages.Es, Languages.En, Languages.Ca, Languages.Fr],
};

const appSettingsReducer = createReducer(initialState);

export const reducer = (state: State | undefined, action: Action) =>
  appSettingsReducer(state, action);
