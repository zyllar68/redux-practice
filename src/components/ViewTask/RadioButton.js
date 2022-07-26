const RadioButton = () => {
  return (
    <div className="bg-dark-bullace flex align-center p-[10px] rounded mt-2">
      <input type="radio" className="mt-[4px] mr-[10px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <p className="text-[#c0b7c4]">Task name</p>
    </div>
  );
};

export default RadioButton;
