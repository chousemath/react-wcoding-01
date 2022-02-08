import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="app-container">
      <Header
        title="This title is a prop!"
        subtitle="This subtitle is also a prop!"
      />
      <Content title="Another prop title!">
        <ul>
          <ListItem color="red">Item #0</ListItem>
          <ListItem color="blue">Item #1</ListItem>
          <ListItem color="yellow">Item #2</ListItem>
          <ListItem color="white">Item #3</ListItem>
          <ListItem color="pink">Item #4</ListItem>
          <ListItem color="black">Item #5</ListItem>
        </ul>
      </Content>
      <Footer copyrightDate={2022} company="The Firm" ceo="Bob the Blob" />
    </div>
  );
}

export default App;
