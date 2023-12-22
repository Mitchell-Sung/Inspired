interface CoachTeacherInteraction {
  coach_id: number;
  teacher_id: number;
  last_meeting_date: string;
  meeting_notes: string;
}

interface TeacherActivity {
  teacher_id: number;
  name: string;
  last_active: string;
  activity_score: number;
  student_interaction_rating: number;
  subjects_taught: string[];
}

interface CoachDetails {
  coach_id: number;
  name: string;
  specialization: string;
  years_of_experience: number;
}

interface TeacherActivityWithCoaches extends TeacherActivity {
  coaches: string[];
}

function getTeacherActivitiesWithCoaches(
  coachTeacherInteractions: CoachTeacherInteraction[],
  teacherActivities: TeacherActivity[],
  coachDetails: CoachDetails[]
): TeacherActivityWithCoaches[] {
  return teacherActivities.map((teacher) => {
    const relatedInteractions = coachTeacherInteractions.filter(
      (interaction) => interaction.teacher_id === teacher.teacher_id
    );

    const coachNames = relatedInteractions
      .map((interaction) => {
        const coach = coachDetails.find(
          (detail) => detail.coach_id === interaction.coach_id
        );
        return coach ? coach.name : null;
      })
      .filter((name): name is string => name !== null);

    return {
      ...teacher,
      coaches: coachNames,
    };
  });
}

export default getTeacherActivitiesWithCoaches;
