import "./styles.css";
const Header = (props) => {
  return (
    <header className="header">
      <h1>
        {props.title} - {props.subtitle}
      </h1>
    </header>
  );
};

export default Header;
