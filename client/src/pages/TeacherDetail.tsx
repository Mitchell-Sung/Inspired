import useNavigateTo from '../hooks/useNavigateTo';
import ROUTE from '../consts/route';
import Button from '@mui/material/Button';
import style from '../styles/Page.module.css';

function TeacherDetail() {
  const navigateToUrl = useNavigateTo();

  return (
    <section className={style.page}>
      <h1 className={style.page_h1}>Hello Teacher Detail Page</h1>
      <h2>CRUD (Create, Read, Update, Delete) functionalities.</h2>
      <Button
        variant='outlined'
        size='large'
        onClick={() => navigateToUrl(ROUTE.HOME)}
      >
        Go Back To Home Page
      </Button>
    </section>
  );
}

export default TeacherDetail;
