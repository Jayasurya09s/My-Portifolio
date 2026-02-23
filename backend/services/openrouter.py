import os

import requests
from dotenv import load_dotenv
from fastapi import HTTPException

load_dotenv()

API_KEY = os.getenv("OPENROUTER_API_KEY")
MODEL = os.getenv("OPENROUTER_MODEL", "openai/gpt-4o-mini")

def ask_ai(system_prompt, question, history):
    if not API_KEY:
        raise HTTPException(status_code=500, detail="OPENROUTER_API_KEY is not configured")

    try:
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": MODEL,
                "messages": [
                    {"role": "system", "content": system_prompt},
                    *history,
                    {"role": "user", "content": question},
                ],
            },
            timeout=30,
        )
    except requests.RequestException:
        raise HTTPException(status_code=502, detail="Failed to connect to OpenRouter")

    if not response.ok:
        raise HTTPException(
            status_code=502,
            detail=f"OpenRouter request failed ({response.status_code})",
        )

    payload = response.json()
    try:
        return payload["choices"][0]["message"]["content"]
    except (KeyError, IndexError, TypeError):
        raise HTTPException(status_code=502, detail="Invalid response from OpenRouter")
