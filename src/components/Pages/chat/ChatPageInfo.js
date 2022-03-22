import { useEffect, useState } from "react";
import { ref, set, onValue } from "firebase/database";
import { db, userdb } from "./ChatOptionsAPI";
import { ReadAllMessages } from "./ChatRead";
import { useAuth0 } from "@auth0/auth0-react";

const data = {
    name : "",
    message : "",
    id : null,
    time : null
};

export const ChatLive = () => {

    const [messValue, setMessValue] = useState(data);
    const [allMessages, setAllMessages] = useState([]);
    const { user } = useAuth0();

    function writeUserData({ id, name, message, time }){
        set(ref(db, `chat/${id- 1}`), {
            name,
            message,
            id,
            time
        });
    };

    function readUserData(){
        onValue(userdb, (snapshot) => {
            const dataMessages = snapshot.val();
            if(dataMessages === null) return;
            setAllMessages([...allMessages, dataMessages]);
        });
    };

    useEffect(() => {
        readUserData();
    }, []);

    function handleSubmit(e){
        e.preventDefault();

        messValue.name = user.name || user.nickname;
        messValue.id = allMessages.length === 0 ? 1 : allMessages[0].length + 1;
        messValue.time = new Date().toLocaleTimeString();

        writeUserData(messValue);

        setMessValue(data);
    };

    function handleChange(e){
        setMessValue({
            ...messValue,
            [e.target.name] : e.target.value
        });
    };

    return(
        <div>
            <div style={{"backgroundColor" : "lightcyan", "opacity" : "0.8" , "width" : "50vw", "height" : "50vh", "overflowY" : "auto", "textAlign" : "left" }}>
                <ul>
                    {allMessages.map(el => el.map(el => <ReadAllMessages key={el.id} data={el} />))}
                </ul>
            </div>

            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" name="message" autoComplete="off" value={messValue.message} onChange={handleChange} placeholder="Escribe tu mensaje" />
                <button type="submit" className="btn btn-dark" >Enviar</button>
            </form>
        </div>
    );
};