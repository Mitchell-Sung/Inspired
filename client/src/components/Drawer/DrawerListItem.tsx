import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import style from '../../styles/Drawer.module.css';
import useNavigateTo from '../../hooks/useNavigateTo';

type DrawerListItemProps = {
  primary: string;
  icon: JSX.Element;
  url: string;
};

function DrawerListItem({ primary, icon, url }: DrawerListItemProps) {
  const navigateToUrl = useNavigateTo();

  return (
    <ListItem disablePadding className={style.list_item}>
      <ListItemButton onClick={() => navigateToUrl(url)}>
        <ListItemIcon className={style.list_item_icon}>{icon}</ListItemIcon>
        <ListItemText className={style.list_item_text} primary={primary} />
      </ListItemButton>
    </ListItem>
  );
}

export default DrawerListItem;
