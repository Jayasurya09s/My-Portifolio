from fastapi import APIRouter
from fastapi import HTTPException
from pydantic import BaseModel

router = APIRouter()

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

@router.post("/contact")
def contact(req: ContactRequest):
    raise HTTPException(
        status_code=503,
        detail="Contact API email delivery is disabled. Please use direct email.",
    )
