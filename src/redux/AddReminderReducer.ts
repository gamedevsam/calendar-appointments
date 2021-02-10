import { ImmerReducer } from 'immer-reducer';
import { Immutable } from '../types/immutable';

export type State = Immutable<{
	addReminder: {
		isOpen: boolean;
	};
}>;

export class AddReminderReducer extends ImmerReducer<State> {
	static readonly initialState: State = {
		addReminder: {
			isOpen: false
		}
	};

	#state = this.draftState.addReminder;

	open() {
		this.#state.isOpen = true;
	}

	close() {
		this.#state.isOpen = false;
	}
}
