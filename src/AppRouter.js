import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from 'react-router-dom';

import StartPage from './components/StartPage';
import UnoTodo from './UnoTodo';

window.env = {
  ENV_HOST: '/project-uno-practice/'
};

function AppRouter() {
  const host = window.env.ENV_HOST;
  
  return (
    <Router>
      <Routes>
        <Route path="/uno-todo" element={<UnoTodo/>} />
        <Route path="/" element={<StartPage/>} />
        <Route path="*" element={<h1>404<br/>Нет такой страницы</h1>} />
      </Routes>
    </Router>
  )
}


export default AppRouter;
