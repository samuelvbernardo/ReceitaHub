# Backend - Receita Hub

Este é o backend do projeto **ReceitaHub** utilizando **Django REST Framework** e outras tecnologias.  
Ele fornecerá a API que será consumida pelo app React Native.

--- 
### Configuração inicial para rodar o servidor
1. **Dentro da pasta backend, crie e ative o ambiente virtual:**
    ```bash
    # Windows
    python -m venv venv
    .\venv\Scripts\Activate

    # macOS / Linux
    python3 -m venv venv
    source venv/bin/activate

2. **Após isso instale as dependências do projeto:**
    ```bash
    pip install -r requirements.txt

3. **Configure o dotenv do projeto.** <br> Dentro da pasta ``ReceitaApi`` crie o arquivo ``.env`` e configure as informações sensiveis, nesse caso só vai precisar das configurações para ``SECRET_KEY`` e ``DEBUG``. <br> 
**A estrutura esperada é:**
    ```bash
    ├── backend/
    │   ├── ReceitApi/
    │   │   ├── ReceitApi/
    │   │   ├── .env  # O arquivo nesse nivel
    │   │   ├── .gitignore
    │   │   ├── db.sqlite3
    │   │   ├── manage.py
    │   │   └── requirements.txt
    │   ├── venv/
    │   └── README.md

4. **Agora entre dentro da pasta do projeto:**
    ```bash
    cd ReceitApi

5. **Rode o comando de migração:**
    ```bash
    python manage.py migrate

6. **Inicie o servidor:**
    ```bash
    python manage.py runserver

---
## Conclusão

Se tudo der certo o servidor irá rodar e ao abrir a porta de acesso você poderá ver as rotas fornecidas pela API, caso queira acessar a documentação acesse o endpoint: ``/api/docs/``


