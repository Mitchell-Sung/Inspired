import Home from '@mui/icons-material/Home';
import Teacher from '@mui/icons-material/RecordVoiceOver';
import Coach from '@mui/icons-material/LocalLibrary';
import Student from '@mui/icons-material/Person';
import Report from '@mui/icons-material/Assessment';
import Class from '@mui/icons-material/Class';
import ROUTE from '../consts/route';

const iconStyle = { fontSize: '1.75rem' };

const drawerData = [
  { label: 'Home', icon: <Home sx={iconStyle} />, url: ROUTE.HOME },
  { label: 'Teacher', icon: <Teacher sx={iconStyle} />, url: ROUTE.TEACHER },
  { label: 'Coach', icon: <Coach sx={iconStyle} />, url: ROUTE.COACH },
  { label: 'Student', icon: <Student sx={iconStyle} />, url: ROUTE.STUDENT },
  { label: 'Report', icon: <Report sx={iconStyle} />, url: ROUTE.REPORT },
  { label: 'Class', icon: <Class sx={iconStyle} />, url: ROUTE.CLASS },
];

export default drawerData;
