import os
import resend
import test
from flask import Flask, request, jsonify

app = Flask(__name__)
resend.api_key = os.environ.get("API_KEY")

@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.get_json()
    email=data.get("email")
    nom=data.get("name")
    msg=data.get("message")
    test.send_email("Mostfa <onboarding@resend.dev>",nom,msg)
    return data
if __name__ == '__main__':
    app.run(debug=True)