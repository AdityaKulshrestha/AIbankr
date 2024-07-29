# AIBankr 

## Setup the environment

1. Create and activate environment
    ```
    conda create -n agents python=3.10
    conda activate agents
    ```

2. Install the dependencies 

    ```
    pip install -r requirements.txt
    ```

3. Run the server 
    ```
    python main.py
    ```



## For setting the AzureEmbedding - Change the import in EmbedChain 
`from langchain_openai import AzureOpenAIEmbeddings`
backend\.venv\lib\site-packages\embedchain\embedder\azure_openai.py
This is mainly due to a deprecated import error because of langchain. 
