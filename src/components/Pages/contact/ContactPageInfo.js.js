import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { formSubmit } from "./fetch";
import { Loader } from "./loader";
import { Error } from "./errMessage";
import { ErrorSending } from "./errSending";
import './Contact.css'

const refData = {
    Name : "",
    Email : "",
    Asunt : "",
    Comment : ""
};

export const Form = () =>{

    const [data, setData] = useState(refData);
    const { user } = useAuth0();
    const [loader, setLoader] = useState(false);
    const [errName, setErrName] = useState(false);
    const [errAsunt, setErrAsunt] = useState(false);
    const [errComment, setErrComment] = useState(false);
    const [errSending, setErrSending] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        
        if(!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(data.Name)){
            setErrName(true);
            return 
        }else{
            setErrName(false);
        }

        if(!/^[\w'\-,.][^?÷?¿/\\+=@#$%ˆ*(){}|~<>;:[\]]{2,}$/.test(data.Asunt)){
            setErrAsunt(true);
            return 
        }else{
            setErrAsunt(false);
        }

        if(/^ *$/.test(data.Comment)){
            setErrComment(true);
            return 
        }else{
            setErrComment(false);
        }
        
        setLoader(true);
        data.Email = user.email;
        formSubmit(data, setLoader, setErrSending);

        handleReset();
    };

    function handleChange(e){
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };

    const handleReset = () =>{
        setData(refData);
    };

    return(
        <div className="centeredDiv">
        <h4 className="styleTitlesBold">Hazme saber que piensas</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label styleTitlesBold">Name</label>
                    <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputName"
                        autoComplete="off" 
                        name="Name"
                        value={data.Name}
                        onChange={handleChange} />
                    </div>
                    {errName && <Error />}
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAsunt" className="col-sm-2 col-form-label styleTitlesBold">Asunt</label>
                    <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputAsunt"
                        autoComplete="off"
                        name="Asunt"
                        value={data.Asunt}
                        onChange={handleChange} />
                    </div>
                    {errAsunt && <Error />}
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputComment" className="col-sm-2 col-form-label styleTitlesBold">Comment</label>
                    <div className="col-sm-10">
                        <textarea 
                        className="form-control resizeTextarea" 
                        id="inputComment" 
                        rows="3"
                        name="Comment"
                        value={data.Comment}
                        onChange={handleChange}></textarea>
                    </div>
                    {errComment && <Error />}
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" id="disabled" type="submit">Submit</button>
                </div>
            </form>
            {loader && <Loader />}
            {errSending && <ErrorSending />}
        </div>
    );
};