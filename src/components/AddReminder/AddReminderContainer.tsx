import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddReminderActions, CalendarAppState } from '../../redux';
import { Immutable } from '../../types/immutable';
import AddReminder from './AddReminder';

export type OwnProps = Immutable<{}>;

export type StateProps = Immutable<{
	isOpen: boolean;
}>;

export type DispatchProps = Immutable<{
	onClose: () => void;
}>;

const mapStateToProps = (state: CalendarAppState, _ownProps: OwnProps): StateProps => ({
	isOpen: state.addReminder.isOpen
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onClose: () => dispatch(AddReminderActions.close())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);
