from fastapi import FastAPI 

app = FastAPI()


@app.get("/askquestion"):
def ask_chatbot():
  return 



if __name__ == "__main__": 
  uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)