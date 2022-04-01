import { Base } from "../backgroundPage/BaseImagePage"
import { ChatLive } from "./ChatPageInfo";

export const ChatPage = () =>{
    return(
        <Base content={<ChatLive />} />
    );
};