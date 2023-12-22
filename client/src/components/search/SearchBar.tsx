import { ChangeEvent, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import style from '../../styles/SearchBar.module.css';

function SearchBar() {
  const [input, setInput] = useState<string>('');

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onReset = () => setInput('');

  return (
    <Paper component='section' className={style.search} variant='outlined'>
      <IconButton className={style.search_button}>
        <SearchIcon />
      </IconButton>
      <InputBase
        className={style.search_input}
        value={input}
        onChange={onInput}
        placeholder='Search ...'
      />
      <IconButton className={style.search_button} onClick={onReset}>
        {/* todo: change icon from closeIcon to filterIcon */}
        <CloseIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
