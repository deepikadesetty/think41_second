import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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
        ai_response=get_llm_response(message)
        ai_msg=models.Message(conversation_id=conversation_id,sender="user",text=ai_response)
        db.add(ai_msg)
        db.commit()
        return {"conversation_id":conversation_id,"response":ai_response}
    load_dotenv()
    client=Groq(api_key=os.getenv("GROQ_API_KEY"))
def get_llm_response(prompt):
    response=client.chat.completions.create(
        messages=[{"role":"user","content":prompt}],
        model="mixtral-8x7b-32768"
    )
    return response.choices[0].message.content
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/api/chat")
async def chat_endpoint(message :dict):
    user_text=message.get("message")
    conversation_id=message.get("conversation_id")
    ai_response={ AI response to: {user_text}"}
    return{
        "response":ai_response,
        "conversation_id":conversation_id or 1
    }