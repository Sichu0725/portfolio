import { BsFillPersonLinesFill } from "react-icons/bs"
import { AiFillHome } from 'react-icons/ai'
import { IoShareSocial } from 'react-icons/io5'
import { MdLabelImportant } from 'react-icons/md'
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div>
            <div className="header">
                Choi Hong Chan
            </div>
            <div className="nav">
                <ul>
                    <Link to="/"><li><AiFillHome/> HOME</li></Link>
                    <Link to="/about"><li><BsFillPersonLinesFill/> ABOUT ME</li></Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    <li><MdLabelImportant/> PORTFOLIO</li>
                    <li><IoShareSocial/> MY SNS</li>
                </ul>
            </div>
        </div>
    );
}