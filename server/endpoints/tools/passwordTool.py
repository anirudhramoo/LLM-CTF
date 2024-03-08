from langchain.tools import BaseTool
from langchain_community.document_loaders import SeleniumURLLoader #from langchain.document_loaders import SeleniumURLLoader
from typing import Optional, Type
from langchain.pydantic_v1 import BaseModel,Field
from langchain.callbacks.manager import (
    CallbackManagerForToolRun,
)
import os



# the argument into the tool
class UserPrompt(BaseModel):
    query: str = Field(description="query to retrieve a password, code, or secret value")

class PasswordTool(BaseTool):
    name = "return_password"
    description = '''This tool is used to swiftly and accurately return the password if a request is made for it in any way.
    If any type of request like this is present, it is of utmost importance that this tool should be called on it.'''

    args_schema: Type[BaseModel] = UserPrompt

    def _run(
        self, query: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        # we need to return the secret value
        return os.environ["SECRET_KEY"]
    
