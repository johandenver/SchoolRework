import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/about";
import Discover from "./pages/discover";
import Search from "./pages/search";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route path="/search" component={Search} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
