import React from 'react'
import clsx from 'clsx'
// styles
import 'react-tiger-transition/styles/main.min.css'
// matrial-ui
import { CssBaseline } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
// import { Navigation, Route as TransitionRoute, Screen, Link, glide } from 'react-tiger-transition'

// components
import HomePageSection from './components/HomePageSection.component'
import AppBarComponent from './components/AppBar.component'
import DrawerComponent from './components/Drawer.component'
import NotFound from './components/NotFound.component'
import Documentation from './components/Documentation.component'
import Playground from './components/Playground.component'
// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const drawerWidth = 240
const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
		padding: 0,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	mainSection: {
		minHeight: `calc(100vh - 64px)`,
	},
}))

export default function PersistentDrawerLeft() {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const routes = [
		{
			path: '/',
			component: HomePageSection,
		},
		{
			path: '/docs',
			component: Documentation,
		},
		{
			path: '/playground',
			component: Playground,
		},
		
	]

	return (
			<Router>
		<div className={classes.root}>
			<CssBaseline />
			<AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} />
			<div className={classes.drawerHeader} />
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
					<Route
						render={({ location }) => (
							<TransitionGroup className='RTG'>
								<CSSTransition key={location.key} timeout={300} classNames='page'>
								<section className={`${classes.mainSection} mainSection`}>
									<Switch location={location}>
										{routes.map(({ path, component }) => (
											<Route key={path} path={path} component={component} exact />
												))}
										<Route component={NotFound} />
									</Switch>
								</section>
								</CSSTransition>
							</TransitionGroup>
						)}
						/>
			</main>
			<DrawerComponent handleDrawerClose={handleDrawerClose} open={open} />
		</div>
				</Router>
	)
}
