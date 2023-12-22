import teacherHeader from '../data/teacherHeader';
import Statistics from '../components/Statistics';
import TeacherTable from '../components/tables/TeacherTable';
import StudentProgressChart from '../components/charts/StudentProgressChart';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import style from '../styles/Home.module.css';
import useHome from '../hooks/useHome';

function Home(): JSX.Element {
  const { isLoading, teachers, studentProgresses } = useHome();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box component='section' className={style.section}>
      <Grid container component='div' spacing={2}>
        <Grid item component='div' xs={12} md={6}>
          <Statistics />
        </Grid>
        <Grid item component='div' xs={12} md={6}>
          <StudentProgressChart students={studentProgresses} />
        </Grid>
      </Grid>
      <TeacherTable columns={teacherHeader} rows={teachers} />
    </Box>
  );
}

export default Home;
