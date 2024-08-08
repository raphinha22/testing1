import Home from "./components/Home";
import Navbar from "./components/Navbar";
import '../src/App.css'; 
import Service from "./components/Service";
import Blog from "./components/Blog";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <Blog />
    </>
  );
};

export default App;
