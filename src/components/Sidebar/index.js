import { useState } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../assets/companyLogo.jpg';
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';
import BoardList from './BoardList';
import NewBoard from './NewBoard';

const Sidebar = () => {
  const taskList = useSelector((state) => { return state.tasks; });

  const [addInput, setAddInput] = useState(false);

  const toggleAddTask = () => {
    setAddInput(!addInput);
  };

  return (
    <div className="flex flex-col bg-semi-dark-bullace min-h-screen border-r-2 border-[#7e7f80]">
      <div className="mt-6 flex justify-center">
        <img className="h-32 rounded-full" src={logo} alt="company logo" />
      </div>
      <div className="ml-8 mt-6">
        <h5 className="text-lg uppercase text-font font-medium">all boards (4)</h5>
      </div>
      <ul className="mt-6">
        {taskList.tasks.map((tasks) => {
          return <BoardList key={tasks.id} title={tasks.task} paramData={tasks.task} />;
        })}
        {addInput && <NewBoard toggleAddTask={toggleAddTask} />}
        {!addInput
          && (
            <li
              className="flex p rounded-tr-full rounded-br-full mr-8 cursor-pointer hover:bg-dark-bullace hover:text-font"
              onClick={toggleAddTask}
              role="presentation"
            >
              <AddIcon className="h-6 mr-2" style={{ fill: '#ffffff' }} />
              <p className="text-font text-sm">Create New Board </p>
            </li>
          )}
      </ul>
    </div>
  );
};
export default Sidebar;
