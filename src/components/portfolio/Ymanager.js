import img from '../../assets/ymanager.png'
export default function Ymanager() {
    return (
        <div className='ymanager'>
            <img src={img} alt='영매니저 TODO 페이지' />
            <p>
                <span className='port_h'>프로젝트 이름 :</span> 
                Young Manager(영 매니저)<br/><br/>

                <span className='port_h'>소개 :</span> 
                2021년도 경소고 해커톤 때 제작한 프로젝트로 바쁜 아침을 보내는<br/>
                학생들을 위해 TODO를 지원하고 학교의 공지사항을 알려주는 등 학생들의 <br/>
                학교생활을 도와주는 프로젝트이다.<br/><br/>

                <span className='port_h'>기능 :</span> 
                TODO기능, 급식 & 시간표 기능, 공지사항 기능
            </p>
        </div>
    )
}