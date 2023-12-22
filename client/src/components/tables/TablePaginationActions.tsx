import { MouseEvent } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
};

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const onChangePage = (e: MouseEvent<HTMLButtonElement>) => {
    let newPage = page;

    const buttonType = (e.target as HTMLButtonElement).name;

    switch (buttonType) {
      case 'first':
        newPage = 0;
        break;
      case 'previous':
        newPage = page - 1;
        break;
      case 'next':
        newPage = page + 1;
        break;
      case 'last':
        newPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
        break;
      default:
        break;
    }

    onPageChange(e, newPage);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton name='first' onClick={onChangePage} disabled={page === 0}>
        <FirstPageIcon />
      </IconButton>
      <IconButton name='previous' onClick={onChangePage} disabled={page === 0}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton
        name='next'
        onClick={onChangePage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
      <IconButton
        name='last'
        onClick={onChangePage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
}

export default TablePaginationActions;
