import Modal from '../Modal';
import InputGroup from './InputGroup';
import TextGroup from './TextGroup';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';

const AddTask = () => {
  return (
    <Modal>
      <div className="flex justify-between">
        <h1 className="text-lg text-font font-medium mb-4">Add New Task</h1>
        <svg className="cursor-pointer" fill="#505250" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
          <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
        </svg>
      </div>
      <form>
        <InputGroup
          label="Title"
          placeholder="e.g. Take coffee break outline-0"
          htmlFor="title"
          id="title"
        />
        <TextGroup
          label="Desciption"
          placeholder="e.g. Its always good to take a break. This 15 minute break will rechrge the battries a litte"
          htmlFor="title"
          id="title"
        />
        <div className="">
          <h1 className="text-font text-xl">Subtasks</h1>
          <Input
            placeholder="e.g. Make coffee"
          />
          <Input
            placeholder="e.g. Make coffee"
          />
          <Input
            placeholder="e.g. Make coffee"
          />
          <Button
            title="+ Add New Subtask"
          />
        </div>
        <div className="mt-4 mb-8">
          <Dropdown />
        </div>
        <Button
          title="Create Task"
        />
      </form>
    </Modal>
  );
};

export default AddTask;
