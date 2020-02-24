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

	private myState = this.draftState.addReminder;

	open() {
		this.myState.isOpen = true;
	}

	tryClose() {
		if (!this.myState.madeChanges || window.confirm('Continue without saving?')) {
			this.close();
		}
	}

	close() {
		this.myState.color = undefined;
		this.myState.text = undefined;
		this.myState.madeChanges = false;
		this.myState.isOpen = false;
	}

	setDate(date: Date | null) {
		this.myState.date = date;
		this.myState.madeChanges = true;
	}

	setText(text: string) {
		this.myState.text = limitText(text, 30);
		this.myState.madeChanges = true;
	}

	setColor(color: string) {
		this.myState.color = color;
		this.myState.madeChanges = true;
	}
}
