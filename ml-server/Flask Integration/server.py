from flask import Flask, redirect, url_for, render_template, request,jsonify, make_response
import New_Bucket
import pandas as pd
from flask_cors import CORS

data = pd.DataFrame()
app = Flask(__name__)
CORS(app)

@app.route("/",methods=["POST", "GET"])
def home():
    
    if request.method == "POST":
        print(request.json)
        business_code = request.json["business_code"]
        cust_number = request.json['cust_number']
        name_customer = request.json['name_customer']
        clear_date = request.json['clear_date']
        buisness_year = int(request.json['buisness_year'])
        doc_id = int(request.json['doc_id'])
        posting_date = request.json['posting_date']
        due_in_date = request.json['due_in_date']
        baseline_create_date = request.json['baseline_create_date']
        cust_payment_terms = request.json['cust_payment_terms']
        converted_usd = float(request.json['converted_usd'])
 
        data['business_code'] = [business_code]
        data['cust_number'] = [cust_number]
        data['name_customer'] = [name_customer]
        data['clear_date'] = [clear_date]
        data['buisness_year'] = [buisness_year]
        data['doc_id'] = [doc_id]
        data['posting_date'] =[posting_date]
        data['due_in_date'] = [due_in_date]
        data['baseline_create_date'] = [baseline_create_date]
        data['cust_payment_terms'] = [cust_payment_terms]
        data['converted_usd'] = [converted_usd]
        
        
        print(request.json)
        
       
        
        response = make_response(jsonify(New_Bucket.predict(data)),200)
        response.headers["Content-Type"] = "application/json"
        return response
    else:
        return render_template("index1.html")
        
@app.route("/get_prediction", methods=["GET",'POST'])
def get_prediction():    
    if request.method == "POST":
        doc_id_list = list(request.json["data"])
        print(doc_id_list)
        response = make_response(jsonify(New_Bucket.doc_id_bucket(doc_id_list)),200)
        response.headers["Access-Control-Allow-Origin"]="*"
        response.headers["Content-Type"] = "application/json"
        return response
    else:
        return render_template("index2.html")
    

@app.route("/all", methods=["GET",'POST'])
def alll():    
    if request.method == "POST":        
        response = make_response(jsonify(New_Bucket.alll()),200)       
        response.headers["Content-Type"] = "application/json"
        return response
    else:
        return render_template("index3.html")    
    
@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        user = request.form["nm"]
        return redirect(url_for("user", usr=user))
    else:
        return render_template("login.html")

@app.route("/<usr>")
def user(usr):
    return f"<h1>{usr}</h1>"

if __name__ == "__main__":
    app.run()