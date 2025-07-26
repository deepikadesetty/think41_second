import { useState} from "react";
import MessageList from "./MessageList";
import UserInput from "./UserInput";
import useChatStore from "../store/chatStore";

export default function chatWindow(){
    const[messages,setMessages]=useState([]);
    const sendMessage=(text) => {
        const userMsg = {sender: "user", text};
        addMessages((prev) => [
    ..
        prev, userMsg
    ])
        ;
        setLoading(true);
        setTimeout(() => {
            addMessage({sender: "ai", text: `Echo: ${text}`});
            setLoading(false);
        }, 500);
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