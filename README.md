# PortalDude Workspace

This workspace contains a simple demo with:

- Static front-end in `public/` (HTML, JS, CSS)
- Node/Express server in `server.js` (serves `public/` and `/api/hello`)
- Python/Flask server in `app.py` (provides `/api/hello` on port 5000)

Quick start (PowerShell):

```powershell
cd C:\sw\portaldude
npm install
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
# In one terminal: npm start
# In another terminal: .venv\Scripts\Activate.ps1; python app.py
# Open http://localhost:3000
```
