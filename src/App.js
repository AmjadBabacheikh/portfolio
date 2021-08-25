import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
