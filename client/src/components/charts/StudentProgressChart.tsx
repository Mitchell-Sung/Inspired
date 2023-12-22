import { Bar } from 'react-chartjs-2';
import { StudentProgress } from '../../types';
import SectionHeader from '../SectionHeader';
import SectionFooter from '../SectionFooter';
import Paper from '@mui/material/Paper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ROUTE from '../../consts/route';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ProgressChartProps = {
  students: StudentProgress[];
};

function StudentProgressChart({ students }: ProgressChartProps) {
  const data = {
    labels: students.map((student) => student.subject),
    datasets: [
      {
        label: 'Average Score Improvement',
        data: students.map((student) => student.average_score_improvement),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: 'Homework Completion Rate',
        data: students.map((student) => student.homework_completion_rate),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: 'Attendance Rate',
        data: students.map((student) => student.attendance_rate),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  return (
    <Paper component='section' elevation={3} sx={{ padding: '1rem' }}>
      <SectionHeader title='Student Progress' />
      <Bar data={data} />
      <SectionFooter url={ROUTE.TEACHER} />
    </Paper>
  );
}

export default StudentProgressChart;
