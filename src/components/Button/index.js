const Button = ({ onClick, title }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-xsm w-40 text-font rounded-full bg-dark-bullace hover:bg-semi-dark-bullace w-[100%] mt-4"
    >
      {title}
    </button>
  );
};

export default Button;
