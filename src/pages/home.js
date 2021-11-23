import img1 from '../assets/dog1.png'
import moment from 'moment'
import { useState } from 'react'
export default function Home () {
    const [time, setTime] = useState()
    const [time2, setTime2] = useState()
    setInterval(() => {
        setTime(moment().format('YYYY년 MM월 DD일'))
        setTime2(moment().format('HH시 mm분 ss초'))
    }, 1000);

    return (
        <div className='home'>
            <img src={img1} />
            <h2>움직이기 싫고 모든게 귀찮은 놈이 만든 포트폴리오</h2>
            <p>{/* 년,월,일 표시 */} {time} <br/> {/* 시, 분, 초 표시 */}{time2}</p>
        </div>
    )
}