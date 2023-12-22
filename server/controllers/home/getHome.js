// import sql from 'mssql';
// import dbConnect from '../../config/db.js';
import teacherActivityData from '../../data/teacherActivityData.js';
import coachDetailData from '../../data/coachDetailData.js';
import coachTeacherInteractionData from '../../data/coachTeacherInteractionData.js';
import studentProgressData from '../../data/studentProgressData.js';
import getTeacherActivitiesWithCoaches from '../../libs/getTeacherActivitiesWithCoaches.js';

function getHome(request, response) {
  const teachers = getTeacherActivitiesWithCoaches(
    teacherActivityData,
    coachDetailData,
    coachTeacherInteractionData
  );

  const result = { teachers, studentProgressData };

  response.status(200).json(result);
}

// async function fetchTeacherActivitiesWithCoaches() {
//   try {
//     await dbConnect();
//     const teacherResult = await sql.query(
//       'SELECT * FROM [dbo].[TeacherActivities]'
//     );
//     const coachResult = await sql.query('SELECT * FROM [dbo].[CoachDetails]');
//     const interactionResult = await sql.query(
//       'SELECT * FROM [dbo].[CoachTeacherInteractions]'
//     );

//     const teachers = getTeacherActivitiesWithCoaches(
//       teacherResult.recordset,
//       coachResult.recordset,
//       interactionResult.recordset
//     );

//     return teachers;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Database query failed');
//   }
// }

// async function getHome(request, response) {
//   try {
//     await dbConnect();
//     const teachers = await fetchTeacherActivitiesWithCoaches();
//     const studentProgressResult = await sql.query(
//       'SELECT * FROM StudentProgress'
//     );

//     const result = {
//       teachers,
//       studentProgressData: studentProgressResult.recordset,
//     };

//     response.status(200).json(result);
//   } catch (err) {
//     console.error(err);
//     response.status(500).send('Internal Server Error');
//   }
// }

export default getHome;
