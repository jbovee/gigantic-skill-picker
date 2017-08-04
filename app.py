from flask import Flask, render_template, jsonify, request
import os, re

app = Flask(__name__, template_folder='')

@app.route("/")
def index():
	return render_template("index.html")

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5000, debug=True)