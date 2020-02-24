import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './components/App/AppContainer';
import './index.css';
import store from './redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	<Provider store={store as any}>
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<AppContainer />
		</MuiPickersUtilsProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
