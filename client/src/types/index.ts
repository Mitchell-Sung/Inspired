export interface TeacherActivity {
  teacher_id: number;
  name: string;
  last_active: string;
  activity_score: number;
  student_interaction_rating: number;
  subjects_taught: string[];
}

export interface TeacherActivityWithCoaches extends TeacherActivity {
  coaches: string[];
}

export interface StudentProgress {
  class_id: number;
  subject: string;
  average_score_improvement: number;
  homework_completion_rate: number;
  attendance_rate: number;
}

export interface ResourceManagement {
  resource_id: number;
  resource_name: string;
  allocated_teachers: number[];
  utilization_rate: number;
}

export interface CoachDetails {
  coach_id: number;
  name: string;
  specialization: string;
  years_of_experience: number;
}

export interface CoachTeacherInteractions {
  coach_id: number;
  teacher_id: number;
  last_meeting_date: string;
  meeting_notes: string;
}
