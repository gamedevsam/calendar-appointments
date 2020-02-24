import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Reminder } from '../../models/Reminder';
import { AddReminderActions, AgendaActions, CalendarAppState } from '../../redux';
import AddReminder from './AddReminder';

interface OwnProps {}

export interface StateProps {
	isOpen: boolean;
	date: Date | null;
	text?: string;
	color?: string;
}

export interface DispatchProps {
	close: () => void;
	tryClose: () => void;
	setDate: (date: Date | null) => void;
	setText: (text: string) => void;
	setColor: (color: string) => void;
	addReminder: (reminder: Reminder) => void;
}

const mapStateToProps = (state: CalendarAppState, _ownProps: OwnProps): StateProps => ({
	isOpen: state.addReminder.isOpen,
	date: state.addReminder.date,
	text: state.addReminder.text,
	color: state.addReminder.color
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	close: () => dispatch(AddReminderActions.close()),
	tryClose: () => dispatch(AddReminderActions.tryClose()),
	setDate: (date) => dispatch(AddReminderActions.setDate(date)),
	setText: (text) => dispatch(AddReminderActions.setText(text)),
	setColor: (color) => dispatch(AddReminderActions.setColor(color)),
	addReminder: (reminder) => dispatch(AgendaActions.addReminder(reminder))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);
