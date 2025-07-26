import { useState} from "react";
export default function UserInput({ onSend }){
    const [input, setInput]=useState("");
    const handleSubmit=(e) =>{
        e.preventDefault();
        if(!input.trim()) return;
        onSend(input);
        setInput("");
    };
    return(
        <form onSubmit={{handlesubmit} style={{display:"flex"}}
            <input
            type="text"
            value={input}
              onChange={(e) =>setInput(e.target.value)}
              placeholder="type a message.."
              />
        <button type"submit" style={{padding:"8 px 12 px"}} > send</button>
    </form>
    );
}