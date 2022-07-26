const Input = ({ id, name, placeholder }) => {
  return (
    <input
      className="shadow appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline appearance-none p-[10px] w-full rounded mt-1.5"
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
