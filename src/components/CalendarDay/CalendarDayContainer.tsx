import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Reminder } from '../../models/Reminder';
import { AgendaActions, CalendarAppState } from '../../redux';
import { getDateReminders } from '../../redux/AgendaReducer';
import { Immutable } from '../../types/immutable';
import CalendarDay from './CalendarDay';

export type OwnProps = Immutable<{
	cellDate: Date;
	calendarDate: Date;
}>;

export type StateProps = Immutable<{
	reminders?: Reminder[];
}>;

export type DispatchProps = Immutable<{
	onDayClick: (date: Date) => void;
}>;

const mapStateToProps = (state: CalendarAppState, ownProps: OwnProps): StateProps => ({
	reminders: getDateReminders(state, ownProps.cellDate)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onDayClick: (date: Date) => dispatch(AgendaActions.open(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);
