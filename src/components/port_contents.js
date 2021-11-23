import Dorimap from "./portfolio/dorimap"
import GhChatbot from "./portfolio/ghChatbot"
import Ymanager from "./portfolio/Ymanager"
import Bookmark from "./portfolio/bookmark"
import We25 from "./portfolio/we25"
import Whoseupso from "./portfolio/whoseupso"

export default function Port_contents(props) {
    if (props.page === 1) {
        return (
            <div>
                <Bookmark/>
            </div>
        )
    }
    else if (props.page === 2) {
        return (
            <div>
                <Dorimap/>
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
                <We25/>
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
                <Whoseupso/>
            </div>
        )
    }
}