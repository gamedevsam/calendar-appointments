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

	#state = this.draftState.agenda;

	open(date: Date) {
		this.#state.date = date;
		this.#state.isOpen = true;
	}

	close() {
		this.#state.date = null;
		this.#state.isOpen = false;
	}
}
