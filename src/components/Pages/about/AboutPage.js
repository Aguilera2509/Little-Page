import { Base } from "../backgroundPage/BaseImagePage";
import { InfoCreator } from "./AboutInfo";

export const AboutPage = () =>{
    return(
        <Base content={ <InfoCreator /> }/>
    );
};