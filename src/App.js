import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BsFillPersonLinesFill } from "react-icons/bs"
import { AiFillHome } from 'react-icons/ai'
import { IoShareSocial } from 'react-icons/io5'
import { MdLabelImportant } from 'react-icons/md'
import Home from './pages/home';
import About from './pages/about';
import './style/index.css'
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <div className="header">
          Choi Hong Chan
      </div>
      <div className="nav">
          <ul>
              <li><AiFillHome/> HOME</li>
              <li><BsFillPersonLinesFill/> ABOUT ME</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
              <li><MdLabelImportant/> PORTFOLIO</li>
              <li><IoShareSocial/> MY SNS</li>
          </ul>
      </div>
      <div className='container'>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
      </div>
    </div>
  );
}

export default App;
