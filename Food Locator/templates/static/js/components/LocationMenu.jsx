import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [location, setLocation] = React.useState('');
  const handleChange = event => {
    setLocation(event.target.value);
  };
  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="location">Location</InputLabel>
        <NativeSelect
          value={location}
          onChange={handleChange}
          id='food_location'
          input={<BootstrapInput name="location" id="location" />}
        >
          <option value={0}>Donnelly Field</option>
          <option value={1}>Cooper Square</option>
          <option value={2}>Sennott Park</option>
          <option value={3}>Corporal Burns Playground</option>
          <option value={4}>Green-Rose Heritage Park</option>
          <option value={5}>Clement Morgan Park</option>
          <option value={6}>Dana Park</option>
          <option value={7}>University Park Commons</option>
          <option value={8}>Old Morse Park</option>
          <option value={9}>Fort Washington Park</option>
        </NativeSelect>
      </FormControl>
    </form>
  );
}
