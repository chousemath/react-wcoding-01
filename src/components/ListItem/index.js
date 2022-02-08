import "./styles.css";

const ListItem = (props) => {
  return (
    <li className="list-item-text" style={{ color: props.color }}>
      <h1>{props.children}</h1>
    </li>
  );
};

export default ListItem;
