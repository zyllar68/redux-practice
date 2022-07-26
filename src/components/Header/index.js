const Header = () => {
  return (
    <div className="bg-semi-dark-bullace">
      <div className="pl-sm pr-sm flex items-center h-24 justify-between">
        <h1 className="text-2xl font-medium text-font">Platform Launch</h1>
        <button type="button" className="p-xsm w-40 text-font rounded-full bg-dark-bullace hover:bg-bullace" onClick={() => { return alert('yeah'); }}>
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default Header;
