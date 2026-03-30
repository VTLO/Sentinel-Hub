from fastapi import FastAPI
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Sentinel-Hub Analysis Engine")

@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "analysis-engine"}

@app.post("/scan")
async def run_scan(target: str):
    logger.info(f"Starting scan for target: {target}")
    # Placeholder for actual scanning logic
    return {"target": target, "status": "completed", "findings": []}
