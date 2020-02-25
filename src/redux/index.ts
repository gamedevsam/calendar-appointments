// ImmerReducer docs: https://github.com/esamattis/immer-reducer

import { composeReducers, createActionCreators, createReducerFunction, setPrefix } from 'immer-reducer';
import { createStore } from 'redux';
import { AddReminderReducer, State as AddReminderState } from './AddReminderReducer';
import { AgendaReducer, State as AgendaState } from './AgendaReducer';

// This gives a friendly name to our actions in Redux Dev Tools
setPrefix('Calendar');

export type CalendarAppState = AgendaState & AddReminderState;

export const AgendaActions = createActionCreators(AgendaReducer);
export const AddReminderActions = createActionCreators(AddReminderReducer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = composeReducers<any>(createReducerFunction(AgendaReducer), createReducerFunction(AddReminderReducer));

const initialState = {
	...AgendaReducer.initialState,
	...AddReminderReducer.initialState
};

export default createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
