import { ImmerReducer } from 'immer-reducer';

export class AddReminderReducer extends ImmerReducer<typeof AddReminderReducer.initialState> {
	static readonly initialState = Object.freeze({
		addReminder: Object.freeze({
			isOpen: false,
		}),
	});

	open() {
		this.draftState.addReminder.isOpen = true;
	}

	close() {
		this.draftState.addReminder.isOpen = false;
	}
}
