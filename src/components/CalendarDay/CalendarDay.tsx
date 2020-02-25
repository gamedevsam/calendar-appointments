import { Box, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { format, getDate, isSameDay, isSameMonth } from 'date-fns';
import React, { useState } from 'react';
import { DispatchProps, OwnProps, StateProps } from './CalendarDayContainer';

const styles = () =>
	createStyles({
		dayCell: {
			display: 'flex',
			flex: '1 0 13%',
			flexDirection: 'column',
			border: '1px solid lightgray',
			cursor: 'pointer'
		},
		dayCellOutsideMonth: {
			display: 'flex',
			flex: '1 0 13%',
			flexDirection: 'column',
			border: '1px solid lightgray',
			backgroundColor: 'rgba( 211, 211, 211, 0.4 )',
			cursor: 'pointer'
		},
		dateNumber: {
			margin: 5,
			height: '28px',
			width: '28px',
			fontSize: '0.85rem',
			color: '#000',
			backgroundColor: 'transparent'
		},
		todayAvatar: {
			margin: 5,
			height: '28px',
			width: '28px',
			fontSize: '0.85rem',
			color: '#fff',
			backgroundColor: deepPurple[400]
		},
		focusedAvatar: {
			margin: 5,
			height: '28px',
			width: '28px',
			fontSize: '0.85rem',
			color: '#000',
			backgroundColor: '#f1f1f1'
		},
		focusedTodayAvatar: {
			margin: 5,
			height: '28px',
			width: '28px',
			fontSize: '0.85rem',
			color: '#fff',
			backgroundColor: deepPurple[800]
		},
		topContainer: {
			display: 'flex'
		},
		remindersContainer: {
			height: '100%',
			overflow: 'auto',
			maxHeight: 60
		},
		otherRemindersText: {
			paddingTop: 5,
			paddingRight: 5,
			fontSize: '0.8rem',
			marginLeft: 'auto',
			marginTop: 'auto'
		},
		reminderContent: {
			display: 'flex'
		}
	});

type Props = WithStyles<typeof styles> & OwnProps & StateProps & DispatchProps;

const CalendarDay = (props: Props) => {
	const { classes, cellDate, calendarDate, onDayClick, reminders } = props;
	const [focused, setFocused] = useState(false);

	const isToday = isSameDay(cellDate, new Date());
	const avatarClass =
		isToday && focused
			? classes.focusedTodayAvatar
			: isToday
			? classes.todayAvatar
			: focused
			? classes.focusedAvatar
			: classes.dateNumber;

	return (
		<div
			onMouseOver={() => setFocused(true)}
			onMouseOut={() => setFocused(false)}
			onClick={() => onDayClick(cellDate)}
			className={isSameMonth(cellDate, calendarDate) ? classes.dayCell : classes.dayCellOutsideMonth}
		>
			<Avatar className={avatarClass}>{getDate(cellDate)}</Avatar>
			<div className={classes.remindersContainer}>
				{reminders && reminders.length > 0 && (
					<div className={classes.reminderContent}>
						<div
							title={reminders[0].color}
							style={{
								height: '16px',
								width: '16px',
								borderRadius: '50%',
								backgroundColor: reminders[0].color,
								alignSelf: 'center',
								margin: '5px'
							}}
						/>
						<div>
							<Typography component="div">
								<Box fontSize={12} fontWeight="fontWeightRegular" m={1}>
									{reminders[0].text}
								</Box>
							</Typography>
							<Typography component="div">
								<Box fontSize={10} fontWeight="fontWeightLight" m={1}>
									{format(reminders[0].date, 'p')}
								</Box>
							</Typography>
						</div>
					</div>
				)}
			</div>
			{reminders && reminders.length > 1 && (
				<Typography color="primary" className={classes.otherRemindersText}>{`${reminders.length - 1} other reminder${
					reminders.length > 2 ? 's' : ''
				}`}</Typography>
			)}
		</div>
	);
};

export default withStyles(styles)(CalendarDay);
