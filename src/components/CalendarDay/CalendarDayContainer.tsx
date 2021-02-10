import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AgendaActions } from '../../redux';
import { Immutable } from '../../types/immutable';
import CalendarDay from './CalendarDay';

export type OwnProps = Immutable<{
	cellDate: Date;
	calendarDate: Date;
}>;

export type StateProps = Immutable<{}>;

export type DispatchProps = Immutable<{
	onDayClick: (date: Date) => void;
}>;

const mapStateToProps = (state: StateProps, ownProps: OwnProps): StateProps => {
	return { ...state, ...ownProps };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onDayClick: (date: Date) => dispatch(AgendaActions.open(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);
