import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import style from '../styles/StatisticsCard.module.css';
import SectionFooter from './SectionFooter';

type StatisticsCardProps = {
  title: string;
  metrics: number;
  desc: string;
  icon: JSX.Element;
  percentage: number;
  unit: string;
  status: boolean;
  url: string;
};

function StatisticsCard(props: StatisticsCardProps) {
  const { title, metrics, desc, icon, percentage, unit, status, url } = props;

  return (
    <Paper component='section' elevation={3} className={style.card}>
      <Typography variant='subtitle1'>{title}</Typography>
      <Box component='div' className={style.card_body}>
        <Typography variant='h6'>{metrics}</Typography>
        <Box
          component='div'
          className={`${style.card_body_box} ${
            status ? style.increase : style.decrease
          }`}
        >
          {icon}
          <Typography>{`${percentage} ${unit}`}</Typography>
        </Box>
      </Box>
      <Typography variant='body2'>{desc}</Typography>
      <SectionFooter url={url} />
    </Paper>
  );
}

export default StatisticsCard;
