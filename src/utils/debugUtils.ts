import { add, format } from 'date-fns';
import { Reminder } from '../models/Reminder';
import { Immutable } from '../types/immutable';
import { limitText } from './stringUtils';

function makeReminder(date: Date) {
	return {
		date,
		text: limitText(`Reminder on ${date}`, 30),
		color:
			'#' +
			Math.random()
				.toString(16)
				.substr(-6)
	};
}

let date = new Date();
const oneDay = { days: 1 };
const oneHour = { hours: 1 };
const reminders: Record<string, Reminder[]> = {};
for (let i = 0; i < 180; ++i) {
	const key = format(date, 'P');
	reminders[key] = [];
	let reminderDate = date;
	for (let j = 0; j < 24; ++j) {
		reminders[key].push(makeReminder(reminderDate));
		reminderDate = add(reminderDate, oneHour);
	}
	date = add(date, oneDay);
}

export const debugReminders: Immutable<Record<string, Reminder[]>> = reminders;
