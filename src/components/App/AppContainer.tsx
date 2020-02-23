import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddReminderActions } from '../../redux';
import App from './App';

export interface StateProps {}

export interface DispatchProps {
	onFabAddClick: () => void;
}

const mapStateToProps = (): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onFabAddClick: () => dispatch(AddReminderActions.open())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
