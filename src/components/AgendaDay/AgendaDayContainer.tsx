import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AgendaActions, CalendarAppState } from '../../redux';
import AgendaDay from './AgendaDay';

const mapStateToProps = (state: CalendarAppState) => ({
	date: state.agenda.date,
	isOpen: state.agenda.isOpen,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onClose: () => dispatch(AgendaActions.close()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AgendaDay);
