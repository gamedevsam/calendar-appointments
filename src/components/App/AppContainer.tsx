import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddReminderActions, CalendarAppState } from '../../redux';
import { Immutable } from '../../types/immutable';
import App from './App';

export type OwnProps = Immutable<{}>;

export type StateProps = Immutable<{}>;

export type DispatchProps = Immutable<{
	onFabAddClick: () => void;
}>;

const mapStateToProps = (_state: CalendarAppState, _ownProps: OwnProps): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onFabAddClick: () => dispatch(AddReminderActions.open())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
