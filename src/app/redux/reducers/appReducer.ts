import { Action, createReducer, on } from '@ngrx/store';

import { changeLocale, changeFilter, changeAuthors } from '../actions';
import { IAppReducer } from '../state.model';
import { AppLanguageStore } from 'src/app/services/language-store.service';

export const initialState: IAppReducer = {
  locale: AppLanguageStore.loadLocale() || 'en',
  filter: '',
  authors: [],
};

const reducer = createReducer(
  initialState,
  on(changeLocale, (state, { locale }) => ({ ...state, locale })),
  on(changeFilter, (state, { filter }) => ({ ...state, filter })),
  on(changeAuthors, (state, { authors }) => ({ ...state, authors })),
);

export const appReducer = (state: IAppReducer, action: Action): IAppReducer => reducer(state, action);
