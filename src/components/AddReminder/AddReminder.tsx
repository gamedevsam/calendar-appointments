import { Button, DialogActions, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { DateTimePicker } from '@material-ui/pickers';
import React from 'react';
import { CirclePicker } from 'react-color';
import { assertIsDefined } from '../../utils/assertUtils';
import { DispatchProps, StateProps } from './AddReminderContainer';

const styles = () =>
	createStyles({
		addReminderFormContainer: {
			minHeight: '260px',
			marginTop: '10px',
			display: 'flex',
			flexDirection: 'column'
		},
		dateTimeContainer: {
			paddingTop: '1em'
		},
		colorContainer: {
			paddingTop: '1em'
		},
		colorList: {
			paddingTop: '0.5em'
		},
		closeButton: {
			position: 'absolute',
			right: '10px',
			top: '10px'
		}
	});

type Props = WithStyles<typeof styles> & StateProps & DispatchProps;

const AddReminder = (props: Props) => {
	const { classes, isOpen, close, tryClose, text, date, color, setText, setDate, setColor, addReminder } = props;

	return (
		<Dialog open={isOpen} onClose={close} aria-labelledby="form-dialog-title" maxWidth="sm" fullWidth>
			<DialogTitle id="form-dialog-title">
				Add Reminder
				<IconButton aria-label="Close" className={classes.closeButton} onClick={tryClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<Divider light />
			<DialogContent className={classes.addReminderFormContainer}>
				<TextField
					type="text"
					id="reminder-text"
					label="Reminder Text (max. 30 characters)"
					value={text || ''}
					onChange={(event) => setText(event.currentTarget.value)}
					autoFocus
					fullWidth
				/>
				<div className={classes.dateTimeContainer}>
					<DateTimePicker label="Reminder Date & Time" value={date} onChange={setDate} disablePast showTodayButton />
				</div>
				<div className={classes.colorContainer}>
					<Typography>Select a color for your reminder:</Typography>
					<div className={classes.colorList}>
						<CirclePicker
							width="512px"
							circleSize={32}
							circleSpacing={20}
							color={color}
							onChangeComplete={(color) => setColor(color.hex)}
						/>
					</div>
				</div>
			</DialogContent>
			<DialogActions>
				<Button onClick={tryClose}>Cancel</Button>
				<Button
					onClick={() => {
						assertIsDefined(date);
						assertIsDefined(text);
						assertIsDefined(color);
						addReminder({ date, text, color });
						close();
					}}
					color="primary"
					disabled={!text || !color}
				>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default withStyles(styles)(AddReminder);
