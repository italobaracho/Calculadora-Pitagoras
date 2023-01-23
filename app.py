from flask import Flask, jsonify, request
import math
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/pitagoras', methods=['POST'])
def pitagoras():
    data = request.get_json()
    a = data['a']
    b = data['b']
    c = math.sqrt(a**2 + b**2)
    return jsonify({'c': c})

if __name__ == '__main__':
    app.run(debug=True)

