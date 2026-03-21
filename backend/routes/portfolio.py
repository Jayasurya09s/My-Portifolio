import json
from pathlib import Path
from typing import Any

from fastapi import APIRouter

router = APIRouter()

DATA_FILE = Path(__file__).resolve().parents[1] / "data.json"


def load_portfolio_data() -> dict[str, Any]:
    with DATA_FILE.open(encoding="utf-8") as f:
        return json.load(f)


@router.get("/portfolio-data")
def get_portfolio_data():
    data = load_portfolio_data()
    return {
        "featured_projects": data.get("featured_projects", []),
        "hackathons": data.get("hackathons", []),
        "stats": data.get("stats", {}),
    }
