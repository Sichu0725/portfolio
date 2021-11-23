import { useState } from "react";
import Port_contents from "../components/port_contents"

export default function Portfolio() {

    const [page, setPage] = useState(1)

    return (
        <div className="portfolio">
            {/* 도리맵, 챗봇, 투바이트, 해커톤, 도대회 해커톤, 
            <br/>
            아이디어뱅크(최우수상), 교내 알고리즘 대회 은상, 교내 해커톤(우수상), 도대회 해커톤(지속 발전상), 사이버가디언즈 5위(장려상)  */}
            <div className="port-list">
                <ul>
                <li onClick={() => setPage(1)}>부우욱마크(lofi girl)</li>
                <li onClick={() => setPage(2)}>도리맵</li>
                <li onClick={() => setPage(3)}>경소고 챗봇</li>
                <li onClick={() => setPage(4)}>WE_25</li>
                <li onClick={() => setPage(5)}>영매니저</li>
                <li onClick={() => setPage(6)}>거기누구업소</li>
                </ul>
            </div>
            <div className="port-contents">
                <Port_contents page={page} />
            </div>
        </div>
    )
}