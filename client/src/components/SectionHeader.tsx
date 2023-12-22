import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableChartIcon from '@mui/icons-material/TableChart';
import style from '../styles/SectionHeader.module.css';

type SectionTitleProps = {
  title: string;
};

function SectionHeader({ title }: SectionTitleProps) {
  return (
    <Box component='section' className={style.section}>
      <TableChartIcon />
      <Typography variant='h5'>{title}</Typography>
    </Box>
  );
}

export default SectionHeader;
