import useNavigateTo from '../../hooks/useNavigateTo';
import getInitials from '../../libs/getInitials';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import style from '../../styles/UserInfoButton.module.css';
import ROUTE from '../../consts/route';

type UserInfoButtonProps = {
  title?: string;
  username: string;
};

function UserInfoButton(props: UserInfoButtonProps) {
  const navigateToUrl = useNavigateTo();

  const { title = 'User Information', username } = props;

  const initials = getInitials(username);

  return (
    <Tooltip arrow title={title}>
      <Button
        className={style.button}
        onClick={() => navigateToUrl(ROUTE.USER_INFO)}
      >
        <Avatar className={style.button_avatar} variant='rounded'>
          {initials}
        </Avatar>
        <Typography className={style.button_typo}>{username}</Typography>
      </Button>
    </Tooltip>
  );
}

export default UserInfoButton;
