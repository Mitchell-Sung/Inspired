import { ChangeEvent } from 'react';
import { TeacherActivityWithCoaches } from '../../types';
import TablePaginationActions from './TablePaginationActions';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TablePagination from '@mui/material/TablePagination';
import style from '../../styles/TeacherTable.module.css';

type TeacherTableFooterProps = {
  dense: boolean;
  onChangeDense: (e: ChangeEvent<HTMLInputElement>) => void;
  rows: TeacherActivityWithCoaches[];
  rowsPerPage: number;
  page: number;
  onChangePage: (e: unknown, newPage: number) => void;
  onChangeRows: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TeacherTableFooter(props: TeacherTableFooterProps): JSX.Element {
  return (
    <Box component='div' className={style.table_footer}>
      <FormControlLabel
        control={
          <Switch checked={props.dense} onChange={props.onChangeDense} />
        }
        label='Dense'
      />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component='div'
        count={props.rows.length}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onPageChange={props.onChangePage}
        onRowsPerPageChange={props.onChangeRows}
        ActionsComponent={TablePaginationActions}
      />
    </Box>
  );
}

export default TeacherTableFooter;
