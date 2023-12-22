import { useState, useEffect } from 'react';
import fetchData from '../libs/fetchData';
import { StudentProgress, TeacherActivityWithCoaches } from '../types';
import URL from '../consts/urls';
// import {
//   coachDetails,
//   coachTeacherInteractions,
//   studentProgress,
//   teacherActivities,
// } from '../data';
// import getTeacherActivitiesWithCoaches from '../libs/getTeacherActivitiesWithCoaches';

function useHome() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teachers, setTeachers] = useState<TeacherActivityWithCoaches[]>([]);
  const [studentProgresses, setStudentProgresses] = useState<StudentProgress[]>(
    []
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { teachers, studentProgressData } = await fetchData(URL.BASE);
        // const teachers = getTeacherActivitiesWithCoaches(
        //   coachTeacherInteractions,
        //   teacherActivities,
        //   coachDetails
        // );
        setTeachers(teachers);
        // setStudentProgresses(studentProgress);
        setStudentProgresses(studentProgressData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { isLoading, teachers, studentProgresses };
}

export default useHome;
