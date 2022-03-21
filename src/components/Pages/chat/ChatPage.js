import { Base } from "../backgroundPage/image"
import { ChatLive } from "./ChatPageInfo";

export const ChatPage = () =>{
    return(
        <Base content={<ChatLive />} />
    );
};