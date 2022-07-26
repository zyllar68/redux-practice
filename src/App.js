import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// redux actions
import { fetchTasks } from './_redux';
// components
import {
  Sidebar, Header, MainContent,
} from './components';

const App = () => {
  const tasks = useSelector((state) => { return state; });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks(tasks));
  }, []);

  return (
    <Router>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <main className="col-span-11 bg-dark-bullace w-full">
          <Header />
          <Routes>
            <Route path="/:id" element={<MainContent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
