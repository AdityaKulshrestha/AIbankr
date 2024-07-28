import os 
from dotenv import load_dotenv
from crewai import Agent, Crew, Task, Process
from crewai_tools import (
    FileReadTool,
    WebsiteSearchTool, 
    CSVSearchTool
)
from langchain_openai import AzureOpenAI, AzureOpenAIEmbeddings


load_dotenv()

azure_llm = AzureOpenAI(
    azure_endpoint=os.environ.get("AZURE_OPENAI_ENDPOINT"),
    api_key=os.environ.get("AZURE_OPENAI_KEY"), 
    api_version="2024-02-01", 
    deployment_name="GPT"
)

embedding = AzureOpenAIEmbeddings(
    azure_endpoint = os.environ.get("AZURE_OPENAI_ENDPOINT"), 
    api_key = os.environ.get("AZURE_OPENAI_KEY"),
    api_version=os.environ.get("AZURE_OPENAI_API_VERSION"), 
    deployment_name='Embedding'
)


financial_analyst = Agent(
            role="The Best Financial Analyst",
            goal = "Impress all customer with your financial data and customer finance data analysis.", 
            backstory = """The most seasoned financial analyst with lots of expertise in understanding customer's expenditure and finanical assests management. Well acknowledged for extracing userful insights for the banks from the customer's data""", 
            verbose = True, 
            tools = [
                FileReadTool(file_path = "data/financial_transactions.csv")
            ], 
            llm = azure_llm
)

task1 = Task(
    description=(
        "Analyze transaction history to discern recurring purchase habits and anticipate future needs. "
        "Use insights from past purchases to create personalized offers and recommendations campaigns"
    ),
    expected_output='A detailed finance recommendation report.',
    agent=financial_analyst,
)


recommendation_agent = Crew(
  agents=[financial_analyst],
  tasks=[task1],
  verbose=2, # You can set it to 1 or 2 to different logging levels
  process=Process.sequential

)

# Get your crew to work!
# result = crew.kickoff()

data_bot = Agent(
            role="AI Bot for finance related question-answer.",
            goal = "Read the user transaction history from the file and answer the user questions. User your critical thinking to provide the best answer to the user.", 
            backstory = """The most seasoned and critical financial expert who can analyse user's transaction history, generate insights and give the best answer to the user query based on his transaction history.""", 
            verbose = True, 
            tools = [
                CSVSearchTool(
                    config=dict(
                            llm=dict(
                                provider="azure_openai",
                                config=dict(
                                    model="gpt-35-turbo-instruct",
                                    deployment_name="GPT"
                                ),
                            ),
                            embedder=dict(
                                provider="azure_openai", 
                                config=dict(
                                    model="text-embedding-3-small",
                                    deployment_name="Embedding", 
                                ),
                            ),
                        ),
                        csv='data/financial_transactions.csv'
                    ) 
            ], 
            llm = azure_llm

)

csv_rag = Task(
    description=(
        "Answer the question based on his trasaction history {question}"
    ),
    expected_output='Short and accurate answer to the user query.',
    agent=data_bot,
)


chatbot = Crew(
  agents=[data_bot],
  tasks=[csv_rag],
  verbose=2, # You can set it to 1 or 2 to different logging levels
  process=Process.sequential

)


# output = chatbot.kickoff(inputs={'question': "What is the total amount for the credit transaction for customer_id 926?"})
# print(output)