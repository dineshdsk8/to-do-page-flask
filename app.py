from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017/")
db = client.todoDB
collection = db.items

@app.route('/submittodoitem', methods=['POST'])
def submit():
    data = {
        "itemName": request.form['itemName'],
        "itemDescription": request.form['itemDescription']
    }
    collection.insert_one(data)
    return "Saved Successfully"

