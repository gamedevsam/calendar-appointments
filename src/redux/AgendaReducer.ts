import { ImmerReducer } from 'immer-reducer';

export class AgendaReducer extends ImmerReducer<typeof AgendaReducer.initialState> {
	static readonly initialState = Object.freeze({
		agenda: Object.freeze({
			isOpen: false,
			date: null,
		}),
	});

	open(date: Date) {
		this.draftState.agenda.date = date;
		this.draftState.agenda.isOpen = true;
	}

	close() {
		this.draftState.agenda.date = null;
		this.draftState.agenda.isOpen = false;
	}
}
