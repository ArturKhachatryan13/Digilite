const Container = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default Container;
