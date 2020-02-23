// ImmerReducer docs: https://github.com/esamattis/immer-reducer

import { composeReducers, createActionCreators, createReducerFunction } from 'immer-reducer';
import { createStore } from 'redux';
import { AddReminderReducer } from './AddReminderReducer';
import { AgendaReducer } from './AgendaReducer';

const initialState = {
	...AgendaReducer.initialState,
	...AddReminderReducer.initialState
};

const reducer = composeReducers<Partial<CalendarAppState>>(
	createReducerFunction(AgendaReducer),
	createReducerFunction(AddReminderReducer)
);

export type CalendarAppState = typeof initialState;
export const AgendaActions = createActionCreators(AgendaReducer);
export const AddReminderActions = createActionCreators(AddReminderReducer);

export default createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
