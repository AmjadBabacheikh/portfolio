import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./screens/About";
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/about" component={About} exact />
          <Route path="/experience" component={Experience} exact />
          <Route path="/work" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
