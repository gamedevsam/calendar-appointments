import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AgendaActions, CalendarAppState } from '../../redux';
import { Immutable } from '../../types/immutable';
import AgendaDay from './AgendaDay';

export type OwnProps = Immutable<{}>;

export type StateProps = Immutable<{
	date: Date | null;
	isOpen: boolean;
}>;

export type DispatchProps = Immutable<{
	onClose: () => void;
}>;

const mapStateToProps = (state: CalendarAppState, _ownProps: OwnProps): StateProps => ({
	date: state.agenda.date,
	isOpen: state.agenda.isOpen
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	onClose: () => dispatch(AgendaActions.close())
});

export default connect(mapStateToProps, mapDispatchToProps)(AgendaDay);
