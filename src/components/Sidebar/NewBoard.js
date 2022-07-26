import { useDispatch } from 'react-redux';
// redux action
import { addTasks } from '../../_redux';

import { ReactComponent as TodoLogo } from '../../assets/todo.svg';

const NewBoard = ({ toggleAddTask }) => {
  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    dispatch(addTasks(data));
    toggleAddTask();
  };
  return (
    <li className="flex p rounded-tr-full rounded-br-full mr-8 cursor-pointer hover:bg-dark-bullace">
      <TodoLogo className="h-6 mr-2" style={{ fill: '#ffffff' }} />
      <form onSubmit={handleSumbit}>
        <input
          className="tex-[#000000] shadow appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline appearance-none p-[1px] w-full rounded"
          name="task"
        />
        <button type="submit" className="hidden">.</button>
      </form>
      <svg
        className="cursor-pointer"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="30px"
        height="30px"
        onClick={toggleAddTask}
      >
        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
      </svg>
    </li>
  );
};

export default NewBoard;
