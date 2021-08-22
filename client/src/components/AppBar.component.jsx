import React from 'react'
import clsx from 'clsx'
// matrial-ui
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		backgroundColor: 'rgb(40, 44, 52)',
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
	title: {
    flexGrow: 1,
  },
}))
const drawerWidth = 240

export default function AppBarComponent({ handleDrawerOpen, open }) {
	const classes = useStyles()
	return (
		<AppBar
			position='fixed'
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open,
			})}>
			<Toolbar>
				<Typography variant='h6' noWrap className={classes.title}>
					<Link  style={{ textDecoration: 'none' }} to='/'>
						<code className='text-light'>HeJS</code>
					</Link>
				</Typography>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					edge='end'
					onClick={handleDrawerOpen}
					className={clsx(open && classes.hide)}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
