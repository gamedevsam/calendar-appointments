import { format } from 'date-fns';
import { ImmerReducer } from 'immer-reducer';
import { Reminder } from '../models/Reminder';
import { Immutable } from '../types/immutable';

export type State = Immutable<{
	agenda: {
		isOpen: boolean;
		reminders: Record<string, Reminder[]>;
		date: Date | null;
	};
}>;

export class AgendaReducer extends ImmerReducer<State> {
	static readonly initialState: State = {
		agenda: {
			isOpen: false,
			reminders: {},
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

	addReminder(reminder: Reminder) {
		const formattedDay = format(reminder.date, 'P');
		if (!this.myState.reminders[formattedDay]) {
			this.myState.reminders[formattedDay] = [reminder];
		} else {
			this.myState.reminders[formattedDay].push(reminder);
			this.myState.reminders[formattedDay].sort((a, b) => b.date.getTime() - a.date.getTime());
		}
	}
}
