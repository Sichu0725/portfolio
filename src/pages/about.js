import img from '../assets/my_img.jpg'
export default function About() {
    return (
        <div className="about">
            <img src={img} width="360px" />
            <div className='my_info'>
                <p><span>이름 :</span> 최홍찬 ( Choi HongChan, 17, 경북소프트웨어고등학교 1학년 )</p>
                <p><span>주 개발 직군(?) :</span> 프론트 엔드 ( 노예 )</p>
                <p><span>사용 언어 :</span> html, css, js( 바닐라 & 리액트 ), flutter, java</p>
                <p><span>관심분야 :</span> 웹 & 앱( 프론트엔드 ), 보안</p>
                <p>
                    <span>소개 :</span> 안녕하세요. 모든게 귀찮지만 스스로 열심히 하려하는 개발자 희망생이며,<br/>
                    머리가 좋진 않지만 노력하는 사람(학생)입니다.( 강아지 아님 )
                </p>
            </div>
        </div>
    )
}