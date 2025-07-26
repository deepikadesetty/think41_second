import Message  from "./Message";
export default function MessageList({messages}){
    return(
        <div style={{ felx:1,overflowY: "auto",Padding: "10px"}}>
            {messages.map(msg,i) =>(
                <Message key={i} sender={msg.sender} text={{msg.text}} />
    ))}

        </div>
    );
}