import { BsGithub, BsInstagram } from 'react-icons/bs'
export default function Contact() {
    return (
        <div className='contact'>
            <a href='https://github.com/Sichu0725' target="_blank">
            <div className='github'>
                <BsGithub/>
                <br/>
                <p>https://github.com/Sichu0725</p>
            </div>
            </a>
            <div className='instagram'>
                <BsInstagram/>
                <br/>
                <p>Shih_tzu0725</p>
            </div>
        </div>
    )
}