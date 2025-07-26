from fastapi import FastAPI
from .database import SessionLocal
from . import models
app=FastAPI()
@app.post("/api/chat")
def chat(user_id: int,message:str, conversation_id: int=None):
    db=SessionLocal()
    if not conversation_id:
        convo=models.Conversation(user_id=user_id)
        db.add(convo)
        db.commit()
        db.refresh(convo)
        conversation_id=convo.id

        user_msg=models.Message(conversation_id=conversation_id,sender="user",text=message)
        db.add(user_msg)
        ai_response=f"Echo: {message}"
        ai_msg=models.Message(conversation_id=conversation_id,sender="user",text=ai_response)
        db.add(ai_msg)
        db.commit()
        return {"conversation_id":conversation_id,"response":ai_response}