import { createBrowserRouter } from 'react-router-dom';
import ROUTE from '../consts/route';
import RouteLayout from './RouteLayout';
import Home from '../pages/Home';
import Teacher from '../pages/Teacher';
import Coach from '../pages/Coach';
import Student from '../pages/Student';
import Report from '../pages/Report';
import Class from '../pages/Class';
import TeacherDetail from '../pages/TeacherDetail';
import Setting from '../pages/Setting';
import UserInfo from '../pages/UserInfo';
import Login from '../pages/Login';
import Notification from '../pages/Notification';

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <RouteLayout />,
    children: [
      { path: ROUTE.HOME, element: <Home /> },
      { path: ROUTE.TEACHER, element: <Teacher /> },
      { path: ROUTE.TEACHER_DETAIL, element: <TeacherDetail /> },
      { path: ROUTE.COACH, element: <Coach /> },
      { path: ROUTE.STUDENT, element: <Student /> },
      { path: ROUTE.REPORT, element: <Report /> },
      { path: ROUTE.CLASS, element: <Class /> },
      { path: ROUTE.LOGIN, element: <Login /> },
      { path: ROUTE.NOTIFICATION, element: <Notification /> },
      { path: ROUTE.SETTING, element: <Setting /> },
      { path: ROUTE.USER_INFO, element: <UserInfo /> },
    ],
  },
]);

export default router;
