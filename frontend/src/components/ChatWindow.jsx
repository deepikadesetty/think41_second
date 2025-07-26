import { useState} from "react";
import MessageList from "./MessageList";
import UserInput from "./UserInput";

export default function chatWindow(){
    const[messages,setMessages]=useState([]);
    const sendMessage=(text) =>{
        const userMsg={sender :"user",text};
        setMessages((prev) =>[..prev,userMsg]);
        setTimeout(() => {
            const aiMsg = {sender: "ai", text: `echo :${text}`};
            setMessages((prev) => [
        ..
            prev, aiMsg
        ])
            ;
        },500);
        };
    return (
        <div style  ={{
            display:"flex",
            height:"90vh",
            width="400px",
            margin:"auto"
        }}>
            <MessageList messages={messages} />
            <UserInput onSend={sendMessage} />
        </div>
    );

}