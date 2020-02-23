import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AgendaActions } from '../../redux';
import CalendarDay from './CalendarDay';

interface Props {}

interface State {}

interface DateObj {
	date: Date;
}

const mapStateToProps = (state: State, ownProps: Props) => {
	return { ...state, ...ownProps };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onDayClick: (date: Date) => dispatch(AgendaActions.open(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);
