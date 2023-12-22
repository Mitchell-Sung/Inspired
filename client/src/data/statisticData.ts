import ROUTE from '../consts/route';

const statisticData = [
  {
    title: 'Students',
    metrics: 777,
    desc: 'Students increased by 12%',
    varyingFigures: 12,
    unit: '%',
    status: true,
    url: ROUTE.STUDENT,
  },
  {
    title: 'Teachers',
    metrics: 27,
    desc: 'Teacher-student ratio is low.',
    varyingFigures: 7,
    unit: 'person',
    status: false,
    url: ROUTE.TEACHER,
  },
  {
    title: 'Coaches',
    metrics: 47,
    desc: 'Coach-student ratio is high.',
    varyingFigures: 1,
    unit: 'person',
    status: true,
    url: ROUTE.COACH,
  },
  {
    title: 'Score Improvement',
    metrics: 8,
    desc: 'The overall average score has increased by 3%.',
    varyingFigures: 3,
    unit: '%',
    status: true,
    url: ROUTE.TEACHER,
  },
  {
    title: 'Homework Completion',
    metrics: 92,
    desc: 'The overall average homework completion rate has decreased by 3%.',
    varyingFigures: 3,
    unit: '%',
    status: false,
    url: ROUTE.TEACHER,
  },
  {
    title: 'Attendance Rate',
    metrics: 90,
    desc: 'The overall average attendance rate has increased by 7%.',
    varyingFigures: 7,
    unit: '%',
    status: true,
    url: ROUTE.TEACHER,
  },
];

export default statisticData;
