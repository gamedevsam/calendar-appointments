import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { format } from 'date-fns';
import React from 'react';
import { DispatchProps, StateProps } from './AgendaDayContainer';

const styles = () =>
	createStyles({
		remindersContainer: {
			minHeight: '250px',
			marginTop: '10px'
		},
		list: {
			width: '100%'
		},
		closeButton: {
			position: 'absolute',
			right: '10px',
			top: '10px'
		}
	});

type Props = WithStyles<typeof styles> & StateProps & DispatchProps;

const AgendaDay = (props: Props) => {
	const { classes, date, reminders, isOpen, onClose } = props;
	const dateTitle = date ? format(date, 'LLLL do, yyyy') : 'Closing';

	return (
		<Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth="md">
			<DialogTitle id="form-dialog-title">
				{dateTitle}
				<IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<Divider light />
			<DialogContent className={classes.remindersContainer}>
				<List dense className={classes.list}>
					{reminders &&
						reminders.map((reminder) => (
							<ListItem key={reminder.date.getDate()}>
								<ListItemAvatar>
									<div
										title={reminder.color}
										style={{
											height: '32px',
											width: '32px',
											borderRadius: '50%',
											backgroundColor: reminder.color
										}}
									/>
								</ListItemAvatar>
								<ListItemText primary={reminder.text} secondary={format(reminder.date, 'p')} />
							</ListItem>
						))}
				</List>
			</DialogContent>
		</Dialog>
	);
};

export default withStyles(styles)(AgendaDay);
