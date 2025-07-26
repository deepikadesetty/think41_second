import { useState} from "react";
import MessageList from "./MessageList";
import UserInput from "./UserInput";
import useChatStore from "../store/chatStore";
import axios from "axios";
 const API_URL ="http:// localhost:8000/api/chat";

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
    const sendMessage =async(text) =>{
        addMessage({ sender: "user" ,text});
        setLoading(true);
        try {
            const res = await axios.post(API_URL, {
                message: text,
                conversation_id: null,
            });
            addMessage({sender: "ai", text: res.data.response});
        }
        catch (err){
            addMessage({ sender:"ai",text:"Error contacting server"});
        }finally{
            setLoading(false);
        }
    };
    return (
        <div style  ={{
            display:"flex",
            height:"90vh",
            width:"400px",
            margin:"auto"
        }}>
            <MessageList messages={messages} />
            <UserInput onSend={sendMessage} />
        </div>
    );

}