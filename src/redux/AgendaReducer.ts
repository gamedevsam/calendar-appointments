import { ImmerReducer } from 'immer-reducer';
import { Immutable } from '../types/immutable';

export type State = Immutable<{
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

	private myState = this.draftState.agenda;

	open(date: Date) {
		this.myState.date = date;
		this.myState.isOpen = true;
	}

	close() {
		this.myState.date = null;
		this.myState.isOpen = false;
	}
}
