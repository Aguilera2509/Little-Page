import { useState } from "react";

const refData = {
    Name : "",
    Email : "",
    Asunt : "",
    Comment : ""
};

export const Form = () =>{

    const [data, setData] = useState(refData);

    function handleSubmit(e){
        e.preventDefault();
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
        <div>
        <h4>Identificate, has tu comentario y envialo</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label bold">Name</label>
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
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label bold">Email Address</label>
                    <div className="col-sm-10">
                        <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail"
                        autoComplete="off"
                        name="Email"
                        value={data.Email}
                        onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAsunt" className="col-sm-2 col-form-label bold">Asunt</label>
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
                    <label htmlFor="inputComment" className="col-sm-2 col-form-label bold">Comment</label>
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
        </div>
    );
};