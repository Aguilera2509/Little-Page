import { Base } from "../backgroundPage/BaseImagePage";
import { Form } from "./ContactPageInfo.js";

export const ContactPage = () =>{
    return(
        <Base content={ <Form />} />
    );
};