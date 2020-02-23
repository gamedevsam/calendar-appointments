import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AgendaActions, CalendarAppState } from '../../redux';
import AgendaDay from './AgendaDay';

interface OwnProps {}

export interface StateProps {
	date: Date;
	isOpen: boolean;
}

export interface DispatchProps {
	onClose: () => void;
}

const mapStateToProps = (state: CalendarAppState, _ownProps: OwnProps): StateProps => ({
	date: state.agenda.date,
	isOpen: state.agenda.isOpen
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onClose: () => dispatch(AgendaActions.close())
});

export default connect(mapStateToProps, mapDispatchToProps)(AgendaDay);
