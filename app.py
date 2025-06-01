from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/buy', methods=['POST'])
def buy():
    product = request.form.get('product')
    user_id = request.form.get('user_id')
    # Here you would handle payment, validation, etc.
    return f"Order placed successfully for {product} for user ID {user_id}!"

if __name__ == '__main__':
    app.run(debug=True)