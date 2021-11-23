import Dorimap from "./portfolio/dorimap"
import GhChatbot from "./portfolio/ghChatbot"
import Ymanager from "./portfolio/Ymanager"

export default function Port_contents(props) {
    if (props.page === 1) {
        return (
            <div>
                <Dorimap/>
            </div>
        )
    }
    else if (props.page === 2) {
        return (
            <div>
                fdsdf
            </div>
        )
    }
    else if (props.page === 3) {
        return (
            <div>
                <GhChatbot/>
            </div>
        )
    }
    else if (props.page === 4) {
        return (
            <div>
                fdsdf
            </div>
        )
    }
    else if (props.page === 5) {
        return (
            <div>
                <Ymanager/>
            </div>
        )
    }
    else if (props.page === 6) {
        return (
            <div>
                fdsdf
            </div>
        )
    }
}