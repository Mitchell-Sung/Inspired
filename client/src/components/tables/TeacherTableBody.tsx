import { TeacherActivityWithCoaches } from '../../types';
import teacherActivityScoreData from '../../data/teacherActivityScoreData';
import teacherStudentinteractionRating from '../../data/teacherStudentinteractionRating';
import getInitials from '../../libs/getInitials';
import TooltipIconButton from '../buttons/TooltipIconButton';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import style from '../../styles/TeacherTable.module.css';

type TeacherTableBodyProps = {
  rows: TeacherActivityWithCoaches[];
};

function TeacherTableBody(props: TeacherTableBodyProps): JSX.Element {
  return (
    <TableBody>
      {props.rows.map((row, index) => (
        <TableRow key={index} hover className={style.table_body_row}>
          <TableCell className={style.table_body_cell}>{row.name}</TableCell>
          <TableCell>
            <Button size='small' className={style.table_body_cell_active}>
              {row.last_active}
            </Button>
          </TableCell>
          <TableCell>
            <Slider
              className={style.table_body_cell_slider}
              value={row.activity_score}
              valueLabelDisplay='auto'
              marks={teacherActivityScoreData}
            />
          </TableCell>
          <TableCell>
            <Slider
              className={style.table_body_cell_slider}
              value={row.student_interaction_rating}
              min={0}
              max={5}
              valueLabelDisplay='auto'
              marks={teacherStudentinteractionRating}
            />
          </TableCell>
          <TableCell>
            <Box component='div' className={style.table_body_cell_subject}>
              {row.subjects_taught.map((subject, index) => (
                <Chip
                  key={index}
                  label={subject}
                  size='small'
                  variant='outlined'
                />
              ))}
            </Box>
          </TableCell>
          <TableCell>
            <Box component='div' className={style.table_body_cell_coach}>
              <AvatarGroup max={4}>
                {row.coaches.map((coach, index) => (
                  <Tooltip key={index} title={coach}>
                    <Avatar className={style.table_body_cell_coach_avatar}>
                      {getInitials(coach)}
                    </Avatar>
                  </Tooltip>
                ))}
              </AvatarGroup>
            </Box>
          </TableCell>
          <TableCell className={style.table_body_cell_more}>
            <TooltipIconButton
              title='More Detail'
              icon={<ReadMoreIcon fontSize='small' />}
              url='/teacher/123'
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TeacherTableBody;
