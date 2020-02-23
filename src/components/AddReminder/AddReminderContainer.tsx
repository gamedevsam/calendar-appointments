import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddReminderActions, CalendarAppState } from '../../redux';
import AddReminder from './AddReminder';

const mapStateToProps = (state: CalendarAppState) => ({
	isOpen: state.addReminder.isOpen,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onClose: () => dispatch(AddReminderActions.close()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);
