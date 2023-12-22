import useNavigateTo from '../../hooks/useNavigateTo';
import TooltipIconButton from '../buttons/TooltipIconButton';
import TooltipIconBadgeButton from '../buttons/TooltipIconBadgeButton';
import SearchBar from '../search/SearchBar';
import UserInfoButton from './UserInfoButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import style from '../../styles/Header.module.css';
import ROUTE from '../../consts/route';

function Header(): JSX.Element {
  const navigateToUrl = useNavigateTo();

  return (
    <Box component='section' className={style.header}>
      <Box component='div' className={style.section}>
        <TooltipIconButton
          title={'Unexpand Menu'}
          icon={<FormatIndentDecreaseIcon className={style.icon} />}
        />
        <SearchBar />
      </Box>
      <Box component='div' className={style.section}>
        <TooltipIconBadgeButton
          title='Notification'
          content={3}
          icon={<NotificationsIcon className={style.icon} />}
          url={ROUTE.NOTIFICATION}
        />
        <TooltipIconButton
          title='Setting'
          icon={<SettingsIcon className={style.icon} />}
          url={ROUTE.SETTING}
        />
        <UserInfoButton username='Mitchell Sung' />
        <Button variant='contained' onClick={() => navigateToUrl(ROUTE.LOGIN)}>
          Sign Out
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
