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

	private myState = this.draftState.addReminder;

	open() {
		this.myState.isOpen = true;
	}

	close() {
		this.myState.isOpen = false;
	}
}
