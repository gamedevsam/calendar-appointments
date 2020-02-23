import { ImmerReducer } from 'immer-reducer';
import { Immutable } from '../types/immutable';

type State = Immutable<{
	addReminder: {
		isOpen: boolean;
		selectedColor?: number;
	};
}>;

export class AddReminderReducer extends ImmerReducer<State> {
	static readonly initialState: State = {
		addReminder: {
			isOpen: false
		}
	};

	open() {
		this.draftState.addReminder.isOpen = true;
	}

	close() {
		this.draftState.addReminder.selectedColor = undefined;
		this.draftState.addReminder.isOpen = false;
	}

	setSelectedColor(color: number) {
		this.draftState.addReminder.selectedColor = color;
	}
}
