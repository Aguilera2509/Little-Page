export const ReadAllMessages = ({ data }) => {
    return(
        <li className="messageNotStyle">
            <b>{`[${data.name}]`} -- {`[${data.time}]`}</b> : {data.message}
        </li>
    );
};