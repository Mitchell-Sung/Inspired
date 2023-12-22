function getTeacherActivitiesWithCoaches(teachers, coaches, interactions) {
  const teachersWithCoaches = teachers.map((teacher) => {
    const relatedInteractions = interactions.filter(
      (interaction) => interaction.teacher_id === teacher.teacher_id
    );

    const coachNames = relatedInteractions
      .map((interaction) => {
        const foundCoach = coaches.find(
          (coach) => coach.coach_id === interaction.coach_id
        );

        const coachName = foundCoach ? foundCoach.name : null;
        return coachName;
      })
      .filter((name) => name !== null);

    return { ...teacher, coaches: coachNames };
  });

  return teachersWithCoaches;
}

export default getTeacherActivitiesWithCoaches;
