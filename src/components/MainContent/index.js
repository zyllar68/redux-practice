import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import TaskBoard from '../TaskBoard';

const MainContent = () => {
  const task = useSelector((state) => { return state.tasks; });

  const { id } = useParams();

  const filtered = task?.filter((tasks) => {
    return tasks === id;
  });

  useEffect(() => {
    console.log(filtered);
  }, [id]);

  return (
    <div className="min-w-full overflow-x-auto" style={{ minHeight: 'calc(100% - 95px)' }}>
      <ul className="p flex gap-4 mr-8">
        <li>
          <TaskBoard />
        </li>
      </ul>
    </div>
  );
};

export default MainContent;
