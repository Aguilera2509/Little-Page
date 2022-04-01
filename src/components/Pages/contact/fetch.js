export const formSubmit = (data, setLoader, setErrSending) => {
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
        alert(data.message);
    })
    .catch(err => {
        setErrSending(true);
    })
    .finally(() =>{
        setLoader(false);
    })
};