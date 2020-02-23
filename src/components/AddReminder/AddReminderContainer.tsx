import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddReminderActions, CalendarAppState } from '../../redux';
import AddReminder from './AddReminder';

interface OwnProps {}

export interface StateProps {
	isOpen: boolean;
	selectedColor?: number;
}

export interface DispatchProps {
	onClose: () => void;
	setSelectedColor: (color: number) => void;
}

const mapStateToProps = (state: CalendarAppState, _ownProps: OwnProps): StateProps => ({
	isOpen: state.addReminder.isOpen,
	selectedColor: state.addReminder.selectedColor
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onClose: () => dispatch(AddReminderActions.close()),
	setSelectedColor: (color) => dispatch(AddReminderActions.setSelectedColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);
