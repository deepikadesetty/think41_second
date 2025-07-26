export default function Message({sender,text}){
    const isUser=sender === "user";
    return(
        <div
            style={{{
            textAlign: isUser ? "right":"left",
                margin: "5px",
            }}
                >
                <div
                style={{
            display: "inline-block",
                padding:"8px 12px",
                borderRaduis:
                "12px"
                background: isUser ?"#4CAF50" : "#e0e0e0",
                color: isUser ?"white":"black",
            }}
                 >
            {text}
                </div>
    );
}