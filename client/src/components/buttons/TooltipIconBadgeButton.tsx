import useNavigateTo from '../../hooks/useNavigateTo';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import style from '../../styles/TooltipIconButton.module.css';

type TooltipBadgeProps = {
  title: string;
  content: number;
  icon: JSX.Element;
  url: string;
};

function TooltipIconBadgeButton(props: TooltipBadgeProps) {
  const navigateToUrl = useNavigateTo();

  return (
    <Tooltip className={style.tooltip} arrow title={props.title}>
      <IconButton onClick={() => navigateToUrl(props.url)}>
        <Badge badgeContent={props.content} color='secondary'>
          {props.icon}
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default TooltipIconBadgeButton;
