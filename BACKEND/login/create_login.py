import os
from flask import Flask, request, jsonify
import psycopg2
import bcrypt
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# Upload settings
UPLOAD_FOLDER = "uploads/aadhar_cards"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "pdf"}

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# Database connection
conn = psycopg2.connect(
    dbname="login",
    user="postgres",
    password="4321",  # change this
    host="localhost",
    port="5432"
)
cursor = conn.cursor()

# ---------- REGISTER STUDENT ----------
@app.route('/register/user', methods=['POST'])
def register_user():
    try:
        # text fields
        name = request.form.get("name")
        aadhar = request.form.get("aadhar")
        phone = request.form.get("phone")
        email = request.form.get("email")
        username = request.form.get("username")
        password = request.form.get("password")

        father_name = request.form.get("fatherName")
        father_occ = request.form.get("fatherOcc")
        mother_name = request.form.get("motherName")
        mother_occ = request.form.get("motherOcc")
        annual_income = request.form.get("annualIncome")

        state = request.form.get("state")
        district = request.form.get("district")
        city = request.form.get("city")
        pincode = request.form.get("pincode")
        address_line = request.form.get("addressLine")

        # hash password
        hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        # Aadhaar upload
        file = request.files.get("aadharCard")
        aadhar_path = None
        if file and allowed_file(file.filename):
            filename = secure_filename(f"{username}_aadhar.{file.filename.rsplit('.',1)[1]}")
            filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            file.save(filepath)
            aadhar_path = filepath

        # insert into DB
        cursor.execute("""
            INSERT INTO users (name, aadhar, phone, email, username, password_hash,
                               father_name, father_occ, mother_name, mother_occ,
                               annual_income, state, district, city, pincode, address_line,
                               aadhar_card_path)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """, (
            name, aadhar, phone, email, username, hashed.decode('utf-8'),
            father_name, father_occ, mother_name, mother_occ,
            annual_income, state, district, city, pincode, address_line,
            aadhar_path
        ))
        conn.commit()
        return jsonify({"message": "User registered successfully!"}), 201

    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 400


# ---------- LOGIN STUDENT ----------
@app.route('/login/user', methods=['POST'])
def login_user():
    try:
        data = request.json
        username = data['username']
        password = data['password']

        cursor.execute("SELECT password_hash FROM users WHERE username=%s", (username,))
        row = cursor.fetchone()

        if row and bcrypt.checkpw(password.encode('utf-8'), row[0].encode('utf-8')):
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"message": "Invalid username or password"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)

