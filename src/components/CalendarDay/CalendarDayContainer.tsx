import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AgendaActions } from '../../redux';
import CalendarDay from './CalendarDay';

interface DispatchProps {
	onDayClick: (date: Date) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onDayClick: (date: Date) => dispatch(AgendaActions.open(date))
});

export default connect(null, mapDispatchToProps)(CalendarDay);
