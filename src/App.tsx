import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './page/home';
import task from './page/task';
import setting from './page/setting';
import notFound from './page/notFound';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/home" element={home()} />
        <Route path="/task" element={task()} />
        <Route path="/setting" element={setting()} />
        <Route path="*" element={notFound()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
