import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProfileTabs() {
  const classes = useStyles();
  const tab = useSelector(state => state.tab)
  const dispatch = useDispatch()

  const handleChange = (e, newValue) => {
    console.log(newValue)
    dispatch({
        type: "SET_TAB_VALUE",
        tab: newValue
    });
  };

  return (
    <Tabs
        value={tab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
    >
        <Tab label="My Stories" />
        <Tab label="Following" />
        <Tab label="Favorites" />
    </Tabs>
  );
}