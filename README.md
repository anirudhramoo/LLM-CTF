# LLM CTF Project

## Overview
This project hosts a Capture The Flag (CTF) challenge, leveraging Language Learning Models (LLM) to process and respond to user queries and submissions. It's designed to test participants' abilities in understanding and manipulating LLMs to solve various tasks, as well as their understanding of cryptography. Best of luck 🚀.

## Installation

### Prerequisites
- Python 3.10.2
- Flask
- Selenium WebDriver

Ensure you have Python 3.10.2 installed on your system. You can use pyenv or any other version management tool to set your Python version.

### Setup
1. Clone the mono-repository to your local machine.
2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
3. Create a `.env` file in both the frontend and server folders
4. In your server `.env` file add your OpenAI key as follows: `OPENAI_API_KEY=<key here>`
4. In your frontend `.env` file add your API key as follows: `REACT_APP_API_URL=<url here>` (the url is your local server;s url)
