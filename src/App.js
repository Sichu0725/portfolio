import { Route, Link } from 'react-router-dom';
import { BsFillPersonLinesFill } from "react-icons/bs"
import { RiAwardFill } from 'react-icons/ri'
import { AiFillHome } from 'react-icons/ai'
import { IoShareSocial } from 'react-icons/io5'
import { MdLabelImportant } from 'react-icons/md'
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Award from './pages/award';
import './style/index.css'

function App() {
  return (
    <div>
      <div className="header">
          Choi Hong Chan
      </div>
      <div className="nav">
          <ul>
              <Link to="/"><li><AiFillHome/> HOME</li></Link>
              <Link to="/about"><li><BsFillPersonLinesFill/> ABOUT ME</li></Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
              <Link to="/award&license"><li><RiAwardFill/> AWARDS & LICENSE</li></Link>
              <Link to="portfolio"><li><MdLabelImportant/> PORTFOLIO</li></Link>
              <Link to="/contact"><li><IoShareSocial/> MY SNS</li></Link>
          </ul>
      </div>
      <div className='container'>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/award&license" component={Award} />
      </div>
    </div>
  );
}

export default App;
