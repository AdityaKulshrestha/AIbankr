from pydantic import BaseModel
from typing import List, Optional

class ChatBotResponse(BaseModel):
    id: int
    question: str
    answer: str


class Recommendation(BaseModel): 
    id: int 
    recommendation: str 


class AskQuestion(BaseModel):
    id: int 
    question: str 
