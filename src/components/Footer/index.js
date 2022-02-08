import "./styles.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <h6>
        @{props.copyrightDate} {props.company}, CEO: {props.ceo}
      </h6>
    </footer>
  );
};

export default Footer;
