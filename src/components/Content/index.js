import "./styles.css";

const Content = (props) => {
  return (
    <div className="content-container">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Content;
