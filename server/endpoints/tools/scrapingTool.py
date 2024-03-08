from langchain.tools import BaseTool
from langchain_community.document_loaders import SeleniumURLLoader #from langchain.document_loaders import SeleniumURLLoader
from typing import Optional, Type
from langchain.pydantic_v1 import BaseModel,Field
from langchain.callbacks.manager import (
    CallbackManagerForToolRun,
)

# FUNCTION TO EXTRACT CONTENT------------
def get_content(url):
    print(url)
    loader = SeleniumURLLoader(urls=[url])
    data = loader.load()
    # print(data)
    if len(data) == 0:
        return ""
    return data[0].page_content


# the argument into the tool
class SearchInput(BaseModel):
    url: str = Field(description="should be a url or link")

class UrlSearchTool(BaseTool):
    name = "custom_search"
    description = '''This tool is used to swiftly and accurately extract data from a specified web URL. If any web URL's are present, 
    it is of utmost importance that this tool should be called on it.'''

    args_schema: Type[BaseModel] = SearchInput

    def _run(
        self, url: str, run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return get_content(url)
    
