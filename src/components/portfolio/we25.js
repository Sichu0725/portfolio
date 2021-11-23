import img from '../../assets/we25.png'
export default function We25 () {
    return (
        <div className='ymanager'>
            <img src={img} alt='WE25 메인 페이지' />
            <p>
                <span className='port_h'>프로젝트 이름 :</span> 
                WE25_우리가 만드는 25시<br/><br/>

                <span className='port_h'>소개 :</span> 
                2021년도에 투바이트랑 경소고가 함께한 프로젝트이다.<br/>
                이때 처음으로 리액트를 사용하기 시작하였으며<br/>
                데드라인이 진짜 내 생명줄이였을 뻔 했었다.(병원 데드라인 에바;;)
                <br/><br/>

                <span className='port_h'>기능 :</span> 
                게시판 기능 (글쓰기, 검색 등)
                <br/><br/>

                <span className='port_h'>주소 : </span>
                <a href='https://we25.space'>https://we25.space</a> (안 될 가능성 있음)
            </p>
        </div>
    )
}