import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { formSubmit } from "./fetch";
import { Loader } from "./loader";

const refData = {
    Name : "",
    Email : "",
    Asunt : "",
    Comment : ""
};

export const Form = () =>{

    const [data, setData] = useState(refData);
    const [loader, setLoader] = useState(false);
    const { user } = useAuth0();

    function handleSubmit(e){
        e.preventDefault();
        setLoader(true);
        
        //Usar algunas validaciones

        data.Email = user.email;
        formSubmit(data, setLoader);

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
        <div style={{"backgroundColor" : "lightblue", "width" : "56vw", "height" : "50vh", "overflowY" : "auto", "overflowX" : "hidden"}}>
        <h4 style={{"fontWeight" : "bold"}}>Hazme saber que piensas</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label bold" style={{"fontWeight" : "bold"}}>Name</label>
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
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAsunt" className="col-sm-2 col-form-label bold" style={{"fontWeight" : "bold"}}>Asunt</label>
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
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputComment" className="col-sm-2 col-form-label bold" style={{"fontWeight" : "bold"}}>Comment</label>
                    <div className="col-sm-10">
                        <textarea 
                        className="form-control" 
                        id="inputComment" 
                        rows="3"
                        name="Comment"
                        value={data.Comment}
                        onChange={handleChange}
                        style={{"resize" : "none"}}></textarea>
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" id="disabled" type="submit">Submit</button>
                </div>
            </form>
            {loader && <Loader />}
        </div>
    );
};