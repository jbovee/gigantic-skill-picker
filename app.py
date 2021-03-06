from flask import Flask, render_template, jsonify, request
import os, re, json

app = Flask(__name__, template_folder='')

@app.route("/heroes")
def heroes():
	hero = request.args.get('name')
	with open('heroes/' + hero + '.json') as heroFile:
		return jsonify(json.load(heroFile))

@app.route("/")
def index():
	return render_template("index.html")

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=5000, debug=True)