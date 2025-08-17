```python
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse

app = FastAPI()

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    # Here you would add the logic to analyze the code and return build issues
    # For demo purposes, we just return the length of the file
    return JSONResponse(content={"filename": file.filename, "size": len(contents)})