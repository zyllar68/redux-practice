import { NavLink } from 'react-router-dom';

import { ReactComponent as TodoLogo } from '../../assets/todo.svg';

const BoardList = ({ title, paramData }) => {
  return (
    <NavLink to={paramData} activeclassname="bg-dark-bullace text-font">
      <li className="flex p rounded-tr-full rounded-br-full mr-8 cursor-pointer hover:bg-dark-bullace hover:text-font">
        <TodoLogo className="h-6 mr-2" style={{ fill: '#ffffff' }} />
        <p className="text-font text-sm">{title}</p>
      </li>
    </NavLink>
  );
};

export default BoardList;
