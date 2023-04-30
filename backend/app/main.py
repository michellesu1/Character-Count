from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI() # create an instance of FastAPI

# allow the frontend to make requests
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

# enable cross-origin resource sharing
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"]
    )

# declare a request body because the JSON object containing the paragraph is sent as a request body
class ParagraphObject(BaseModel):
    text: str # the paragraph entered by the user

@app.post("/count",tags=["count"])
async def countChar(paragraphObj: ParagraphObject):
    return {"count": len(paragraphObj.text)}



