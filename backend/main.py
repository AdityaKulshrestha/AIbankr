import uvicorn 
from fastapi import FastAPI 
from agents import chatbot, recommendation_agent
from models.model_schema import ChatBotResponse, Recommendation, AskQuestion


app = FastAPI()


@app.post("/askquestion", response_model = ChatBotResponse)
def ask_chatbot(request: AskQuestion):
  ai_response = chatbot.kickoff(inputs = {'question': request.question })
  return ChatBotResponse(id = request.id, question = request.question, answer = str(ai_response))


@app.get("/get_recommendation", response_model=Recommendation)
def get_recommendation():
  ai_recommendation = recommendation_agent.kickoff()
  return Recommendation(id=2, recommendation=str(ai_recommendation))




if __name__ == "__main__": 
  uvicorn.run(app, host="127.0.0.1", port=8000)