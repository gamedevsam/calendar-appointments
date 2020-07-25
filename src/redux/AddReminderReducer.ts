import { ImmerReducer } from 'immer-reducer';
import { Immutable } from '../types/immutable';
import { limitText } from '../utils/stringUtils';

export type State = Immutable<{
	addReminder: {
		isOpen: boolean;
		madeChanges: boolean;
		date: Date | null;
		text?: string;
		color?: string;
	};
}>;

export class AddReminderReducer extends ImmerReducer<State> {
	static readonly initialState: State = {
		addReminder: {
			isOpen: false,
			madeChanges: false,
			date: null
		}
	};

	#state = this.draftState.addReminder;

	open() {
		this.#state.isOpen = true;
	}

	tryClose() {
		if (!this.#state.madeChanges || window.confirm('Continue without saving?')) {
			this.close();
		}
	}

	close() {
		this.#state.color = undefined;
		this.#state.text = undefined;
		this.#state.madeChanges = false;
		this.#state.isOpen = false;
	}

	setDate(date: Date | null) {
		this.#state.date = date;
		this.#state.madeChanges = true;
	}

	setText(text: string) {
		this.#state.text = limitText(text, 30);
		this.#state.madeChanges = true;
	}

	setColor(color: string) {
		this.#state.color = color;
		this.#state.madeChanges = true;
	}
}
