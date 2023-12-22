import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import statisticData from '../data/statisticData';
import StatisticsCard from './StatisticsCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SectionHeader from './SectionHeader';
import SectionFooter from './SectionFooter';
import Style from '../styles/Statistics.module.css';
import ROUTE from '../consts/route';

function Statistics() {
  return (
    <Paper component='section' elevation={3} className={Style.section}>
      <SectionHeader title='The Overall Data' />
      <Grid container component='div' spacing={1}>
        {statisticData.map((data) => (
          <Grid key={data.title} item component='div' md={6} xl={4}>
            <StatisticsCard
              title={data.title}
              metrics={data.metrics}
              desc={data.desc}
              icon={data.status ? <TrendingUpIcon /> : <TrendingDownIcon />}
              percentage={data.varyingFigures}
              unit={data.unit}
              status={data.status}
              url={data.url}
            />
          </Grid>
        ))}
      </Grid>
      <SectionFooter label='Go to reports' url={ROUTE.REPORT} />
    </Paper>
  );
}

export default Statistics;
