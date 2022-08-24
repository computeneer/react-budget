interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="app-container">{children}</div>;
};

export default Container;
