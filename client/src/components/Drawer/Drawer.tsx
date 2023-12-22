import useNavigateTo from '../../hooks/useNavigateTo';
import ROUTE from '../../consts/route';
import drawerData from '../../data/drawerData';
import logo from '../../assets/logo.svg';
import DrawerListItem from './DrawerListItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import style from '../../styles/Drawer.module.css';

function Drawer() {
  const navigateToUrl = useNavigateTo();

  return (
    <Box component='section' className={style.drawer}>
      <Box
        className={style.drawer_logo}
        component='img'
        src={logo}
        alt='logo'
        loading='lazy'
        onClick={() => navigateToUrl(ROUTE.HOME)}
      />
      <List>
        {drawerData.map((data) => (
          <DrawerListItem
            key={data.label}
            primary={data.label}
            icon={data.icon}
            url={data.url}
          />
        ))}
      </List>
    </Box>
  );
}

export default Drawer;
