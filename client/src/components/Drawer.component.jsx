import React from 'react';
// matrial-ui
import {
	Drawer,
	List,
	Divider,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom'
const drawerWidth = 240
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		backgroundColor: "rgb(40, 44, 52)",
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	link: {
		textDecoration: 'none',
		color: '#222'
	},
	// icon: {
	// 	'&:hover': {
	// 		opacity: .8,
	// 		fontweight: 'bolder'
	// 	}
	// }
}))

export default function DrawerComponent({handleDrawerClose, open}) {
	const classes = useStyles()
	const theme = useTheme()
	const itemsList= [
		{name: 'Docs', link: '/docs'},
		{name: 'API', link: '/api'},
	]
	return (
		<>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{itemsList.map((item, index) => (
							<Link key={index} className={classes.link} to={item.link}>
						<ListItem button key={item.name} className={classes.icon}>
							<ListItemIcon >{index % 2 === 0 ? <InboxIcon/> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={item.name} />
						</ListItem>
							</Link>
					))}
				</List>
			</Drawer>
		</>
	)
}
