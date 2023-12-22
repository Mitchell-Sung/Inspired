import { useState, ChangeEvent } from 'react';
import { TeacherActivityWithCoaches } from '../../types';
import SectionHeader from '../SectionHeader';
import SectionFooter from '../SectionFooter';
import TeacherTableHead from './TeacherTableHead';
import TeacherTableBody from './TeacherTableBody';
import TeacherTableFooter from './TeacherTableFooter';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import style from '../../styles/TeacherTable.module.css';
import ROUTE from '../../consts/route';

type TeacherTableProps = {
  columns: { id: string; label: string }[];
  rows: TeacherActivityWithCoaches[];
};

function TeacherTable({ columns, rows }: TeacherTableProps) {
  const [page, setPage] = useState<number>(0);
  const [dense, setDense] = useState<boolean>(true);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const onChangePage = (e: unknown, newPage: number) => setPage(newPage);

  const onChangeRows = (e: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const onChangeDense = (e: ChangeEvent<HTMLInputElement>) =>
    setDense(e.target.checked);

  return (
    <Paper component='section' elevation={3} className={style.paper}>
      <SectionHeader title='Teacher Activities' />
      <TableContainer>
        <Table size={dense ? 'small' : 'medium'}>
          <TeacherTableHead columns={columns} />
          <TeacherTableBody rows={rows} />
        </Table>
      </TableContainer>
      <TeacherTableFooter
        dense={dense}
        onChangeDense={onChangeDense}
        rows={rows}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onChangePage}
        onChangeRows={onChangeRows}
      />
      <SectionFooter url={ROUTE.TEACHER} />
    </Paper>
  );
}

export default TeacherTable;
