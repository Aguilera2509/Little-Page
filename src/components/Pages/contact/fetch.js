export const formSubmit = (data, setLoader) => {
    fetch("https://formsubmit.co/ajax/ja846699@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.ok) return res.json(); 
        return Promise.reject(res);
    })
    .then(data => {
        alert(data.message)
        //Cancelar la solicitus despues de cierto tiempo. Usar Abort
        setLoader(false);
    })
    .catch(err => console.error(err));
};