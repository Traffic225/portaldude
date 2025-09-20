from flask import Flask, jsonify, request
import os
from datetime import datetime

app = Flask(__name__)

# Ensure logs directory exists
logs_dir = os.path.join(os.path.dirname(__file__), 'logs')
os.makedirs(logs_dir, exist_ok=True)
flask_log = os.path.join(logs_dir, 'flask.log')

@app.before_request
def log_request():
    entry = f"{datetime.utcnow().isoformat()} {request.method} {request.path} {request.remote_addr}\n"
    print(entry, end='')
    try:
        with open(flask_log, 'a', encoding='utf-8') as f:
            f.write(entry)
    except Exception as e:
        print('Failed to write flask log:', e)


@app.route('/api/hello')
def hello():
    return jsonify(msg='Hello from Flask')


if __name__ == '__main__':
    app.run(debug=True, port=5000)
