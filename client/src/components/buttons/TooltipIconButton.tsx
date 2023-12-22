import useNavigateTo from '../../hooks/useNavigateTo';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import style from '../../styles/TooltipIconButton.module.css';

type TooltipIconButtonProps = {
  title: string;
  icon: JSX.Element;
  url?: string;
};

function TooltipIconButton({ title, icon, url }: TooltipIconButtonProps) {
  const navigateToUrl = useNavigateTo();

  const onCheck = () => {
    if (url) navigateToUrl(url);
  };

  return (
    <Tooltip className={style.tooltip} arrow title={title}>
      <IconButton onClick={onCheck}>{icon}</IconButton>
    </Tooltip>
  );
}

export default TooltipIconButton;
