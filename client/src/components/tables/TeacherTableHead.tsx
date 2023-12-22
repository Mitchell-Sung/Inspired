import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import style from '../../styles/TeacherTable.module.css';

type TeacherTableHeadProps = {
  columns: { id: string; label: string }[];
};

function TeacherTableHead({ columns }: TeacherTableHeadProps): JSX.Element {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id} className={style.table_head_row_cell}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TeacherTableHead;
