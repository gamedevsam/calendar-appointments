import { ImmerReducer } from 'immer-reducer';
import { Immutable } from '../types/immutable';

type State = Immutable<{
	agenda: {
		isOpen: boolean;
		date: Date | null;
	};
}>;

export class AgendaReducer extends ImmerReducer<State> {
	static readonly initialState: State = {
		agenda: {
			isOpen: false,
			date: null
		}
	};

	open(date: Date) {
		this.draftState.agenda.date = date;
		this.draftState.agenda.isOpen = true;
	}

	close() {
		this.draftState.agenda.date = null;
		this.draftState.agenda.isOpen = false;
	}
}
