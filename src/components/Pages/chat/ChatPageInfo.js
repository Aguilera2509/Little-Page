import { useEffect, useState } from "react";
import { ref, set, onValue, remove } from "firebase/database";
import { db, userdb } from "./ChatOptionsAPI";
import { ReadAllMessages } from "./ChatRead";
import { useAuth0 } from "@auth0/auth0-react";
import './Chat.css'

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
            if(dataMessages === null) return setAllMessages([]);
            setAllMessages([...allMessages, dataMessages]);
        });
    };

    function handleSubmit(e){
        e.preventDefault();

        messValue.name = user.name || user.nickname;
        messValue.id = allMessages.length === 0 ? 1 : allMessages[0].length + 1;
        messValue.time = new Date().toLocaleTimeString();

        if(messValue.message === "DeleteAllDataDDBBNow"){
            remove(userdb);
            messValue.message = "";
            return
        };

        writeUserData(messValue);

        setMessValue(data);
    };

    function handleChange(e){
        setMessValue({
            ...messValue,
            [e.target.name] : e.target.value
        });
    };

    useEffect(() => {
        readUserData();
    }, []);

    return(
        <div>
            <div className="styleMessages">
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