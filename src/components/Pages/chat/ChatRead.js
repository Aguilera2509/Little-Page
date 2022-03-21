export const ReadAllMessages = ({ data }) => {
    return(
        <li style={{"listStyle" : "none"}} >
            <b>{`[${data.name}]`} -- {`[${data.time}]`}</b> : {data.message}
        </li>
    );
};