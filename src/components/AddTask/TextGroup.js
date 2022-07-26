const TextGroup = ({
  htmlFor, label, id, name, placeholder,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-font text-xl mt-10">{label}</label>
      <textarea rows="6" className="shadow appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline appearance-none p-[10px] w-full rounded mt-1.5" id={id} name={name} placeholder={placeholder} />
    </div>
  );
};

export default TextGroup;
