CREATE TABLE [dbo].[TeacherActivities] (
    [teacher_id] INT PRIMARY KEY IDENTITY(1, 1),
    [name] NVARCHAR(128) NOT NULL,
    [last_active] DATETIME2 NOT NULL,
    [activity_score] INT NOT NULL CHECK([activity_score] >= 0),
    [student_interaction_rating] DECIMAL(3, 1) DEFAULT 0.00 NOT NULL CHECK([student_interaction_rating] >= 0),
    [subjects_taught] NVARCHAR(255)
);

CREATE TABLE [dbo].[StudentProgress] (
    [class_id] INT PRIMARY KEY IDENTITY(1,1),
    [subject] NVARCHAR(255) NOT NULL,
    [average_score_improvement] INT NOT NULL,
    [homework_completion_rate] DECIMAL(5, 2) NOT NULL,
    [attendance_rate] DECIMAL(5, 2) NOT NULL
);

CREATE TABLE [dbo].[ResourceManagement] (
    [resource_id] INT PRIMARY KEY IDENTITY(1,1),
    [resource_name] NVARCHAR(255) NOT NULL,
    [utilization_rate] INT NOT NULL
);

CREATE TABLE [dbo].[TeacherResources] (
    [teacher_id] INT NOT NULL,
    [resource_id] INT NOT NULL
);

CREATE TABLE [dbo].[CoachDetails] (
    [coach_id] INT PRIMARY KEY IDENTITY(1,1),
    [name] NVARCHAR(128) NOT NULL,
    [specialization] NVARCHAR(255) NOT NULL,
    [years_of_experience] INT NOT NULL
);

CREATE TABLE [dbo].[CoachTeacherInteractions] (
    [coach_id] INT NOT NULL,
    [teacher_id] INT NOT NULL,
    [last_meeting_date] DATETIME2,
    [meeting_notes] NVARCHAR(MAX),
);

-------------------------------------------------------

ALTER TABLE [dbo].[CoachTeacherInteractions]
ADD FOREIGN KEY ([coach_id])
REFERENCES [dbo].[CoachDetails]([coach_id]);

ALTER TABLE [dbo].[CoachTeacherInteractions]
ADD FOREIGN KEY ([teacher_id])
REFERENCES [dbo].[TeacherActivities]([teacher_id]);

ALTER TABLE [dbo].[TeacherResources]
ADD FOREIGN KEY ([teacher_id])
REFERENCES [dbo].[TeacherActivities]([teacher_id]);

ALTER TABLE [dbo].[TeacherResources]
ADD FOREIGN KEY ([resource_id])
REFERENCES [dbo].[ResourceManagement]([resource_id]);

------------------------------------------------------
INSERT INTO [dbo].[TeacherActivities] (name, last_active, activity_score, student_interaction_rating, subjects_taught)
    VALUES 
        ('John Doe', '2023-11-10', 82, 4.5, 'Mathematics, Physics'),
        ('Jane Smith', '2023-11-09', 76, 4.7, 'Biology, Chemistry'),
        ('Alice Johnson', '2023-11-11', 89, 4.8, 'History, English'),
        ('Mark Brown', '2023-11-08', 79, 4.4, 'Art, Social Studies');

INSERT INTO [dbo].[StudentProgress] (subject, average_score_improvement, homework_completion_rate, attendance_rate)
    VALUES 
        ('Mathematics', 12, 95, 98),
        ('Science', 9, 90, 92),
        ('English', 15, 97, 96),
        ('History', 7, 88, 90);

INSERT INTO [dbo].[ResourceManagement] (resource_name, utilization_rate)
    VALUES 
        ('Interactive Geometry Software', 87),
        ('Online Chemistry Lab', 75),
        ('Historical Documentaries Archive', 65),
        ('Grammar and Composition Platform', 82);

INSERT INTO [dbo].[TeacherResources] (teacher_id, resource_id)
    VALUES 
        (1, 1);

INSERT INTO [dbo].[TeacherResources] (teacher_id, resource_id)
    VALUES 
        (2, 2),
        (3, 2);

INSERT INTO [dbo].[TeacherResources] (teacher_id, resource_id)
    VALUES 
        (3, 3),
        (4, 3);

INSERT INTO [dbo].[TeacherResources] (teacher_id, resource_id)
    VALUES (4, 4);

INSERT INTO [dbo].[CoachDetails] (name, specialization, years_of_experience)
    VALUES 
        ('Emily Turner', 'Student Engagement', 5),
        ('Michael Rodriguez', 'Curriculum Development', 8);

INSERT INTO [dbo].[CoachTeacherInteractions] (coach_id, teacher_id, last_meeting_date, meeting_notes)
    VALUES 
        (1, 1, '2023-11-08', 'Discussed student engagement strategies.'),
        (1, 2, '2023-11-07', 'Reviewed upcoming curriculum changes.'),
        (2, 3, '2023-11-10', 'Planned history project outline.'),
        (2, 4, '2023-11-09', 'Analyzed challenges in student art engagement.');

-------------------------------------------------------------------

SELECT * FROM [dbo].[TeacherActivities];
SELECT * FROM [dbo].[StudentProgress];
SELECT * FROM [dbo].[ResourceManagement];
SELECT * FROM [dbo].[TeacherResources];
SELECT * FROM [dbo].[CoachDetails];
SELECT * FROM [dbo].[CoachTeacherInteractions];

