from flask import Flask
from flask_cors import CORS
from endpoints.answer import handle_answer
import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())
app = Flask(__name__)
origins = [
    # just localhost for now, can add others later
    "http://localhost:3000",  
]



cors = CORS(app, resources={r"/*": {"origins": "*"}})

# can add more challenges if needed
app.add_url_rule('/answer', 'handle_answer', handle_answer, methods=['POST'])
