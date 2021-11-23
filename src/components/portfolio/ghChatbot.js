import img from '../../assets/chatbot.png'

export default function ghChatbot() {
    return (
        <div>
            <div className='ymanager'>
            <img src={img} alt='영매니저 TODO 페이지' width="490px" />
            <p>
                <span className='port_h'>프로젝트 이름 :</span> 
                경소고 챗봇(CHATBOT)<br/><br/>

                <span className='port_h'>소개 :</span> 
                2021년도 1학기 때 제작한 프로젝트로 경소고에 입학하고싶은<br/>
                예비 고1 학생들을 위해 궁금해하는 정보를 제공해주는 <br/>
                학교 홍보용 챗봇 서비스이다.<br/><br/>

                <span className='port_h'>기능 :</span> 
                질문 답해주기(ANSWER 기능)
            </p>
        </div>
        </div>
    )
}