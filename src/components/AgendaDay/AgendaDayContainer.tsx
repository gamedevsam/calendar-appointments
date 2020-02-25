import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Reminder } from '../../models/Reminder';
import { AgendaActions, CalendarAppState } from '../../redux';
import { getDateReminders } from '../../redux/AgendaReducer';
import { Immutable } from '../../types/immutable';
import AgendaDay from './AgendaDay';

interface OwnProps {}

export type StateProps = Immutable<{
	date: Date | null;
	isOpen: boolean;
	reminders?: Reminder[];
}>;

export type DispatchProps = Immutable<{
	onClose: () => void;
}>;

const mapStateToProps = (state: CalendarAppState, _ownProps: OwnProps): StateProps => ({
	date: state.agenda.date,
	isOpen: state.agenda.isOpen,
	reminders: getDateReminders(state, state.agenda.date)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onClose: () => dispatch(AgendaActions.close())
});

export default connect(mapStateToProps, mapDispatchToProps)(AgendaDay);
