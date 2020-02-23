import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddReminderActions } from '../../redux';
import App from './App';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	onFabAddClick: () => dispatch(AddReminderActions.open()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
