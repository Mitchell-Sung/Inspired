import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Drawer from '../components/Drawer/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import style from '../styles/RouteLayout.module.css';

function RouteLayout(): JSX.Element {
  return (
    <main className={style.main}>
      <Box component='section' className={style.drawer}>
        <Drawer />
      </Box>
      <Divider orientation='vertical' flexItem />
      <Box component='section' className={style.content}>
        <Header />
        <Box component='section' className={style.outletContainer}>
          <Outlet />
        </Box>
      </Box>
    </main>
  );
}

export default RouteLayout;
