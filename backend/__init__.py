from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Allow cross-origin requests



#No, __name__ is not your project name—it refers to the name of the current module or script.

@app.route('/')
def home(): 
    return "welcome!"

@app.route('/summarize')
def summ(): 
   return jsonify({"message": "i summarize stuff for you"})


#routes : 

#this is for like app.listen()
if __name__ == "__main__": 
    app.run(debug = True)



