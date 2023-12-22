import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import style from '../styles/SectionFooter.module.css';
import useNavigateTo from '../hooks/useNavigateTo';

type SectionFooterProps = {
  label?: string;
  url: string;
};

function SectionFooter(props: SectionFooterProps) {
  const navigateToUrl = useNavigateTo();

  const { label = 'Learn more...', url } = props;

  return (
    <Box component='section' className={style.section}>
      <Button
        className={style.button}
        variant='text'
        onClick={() => navigateToUrl(url)}
      >
        {label}
      </Button>
    </Box>
  );
}

export default SectionFooter;
