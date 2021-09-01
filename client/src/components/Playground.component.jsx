import React, { useState } from 'react'
// components
import Translate from './Translate.component'
import Nakdan from './Nakdan.component'
import Weather from './Weather.component'
import QuickAnswer from './QuickAnswer.component'
import News from './News.component'
// ui
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Playground() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="bg-dark">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="תרגום" {...a11yProps(0)} />
          <Tab label="נקדן" {...a11yProps(1)} />
          <Tab label="תשובה מהירה" {...a11yProps(2)} />
          <Tab label="מזג אוויר" {...a11yProps(3)} />
          <Tab label="חדשות" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
			  <Translate/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Nakdan/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QuickAnswer/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Weather/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <News/>
      </TabPanel>
    </div>
  );
}
