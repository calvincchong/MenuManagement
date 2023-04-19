const Button = ({ children, onClick, className, type, icon }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-thin py-1 px-4 rounded ${className}`}
      onClick={onClick}
      type={type}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
