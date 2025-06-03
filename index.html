from flask import Flask, request, render_template_string

app = Flask(__name__)

HTML_TEMPLATE = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gaming E-Store - BGMI UC & IDs</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #0e0e0e;
            color: white;
            margin: 0;
            padding: 0;
        }
        header {
            text-align: center;
            padding: 2rem;
            background: linear-gradient(to right, #ff416c, #ff4b2b);
            color: white;
        }
        .product-list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 2rem;
            gap: 2rem;
        }
        .product {
            background: #1e1e1e;
            padding: 1.5rem;
            border-radius: 15px;
            box-shadow: 0 0 20px #ff4b2b80;
            width: 300px;
            text-align: center;
        }
        .product input, .product button {
            margin-top: 10px;
            padding: 0.7rem;
            width: 90%;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
        }
        .product button {
            background: #ff4b2b;
            color: white;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .product button:hover {
            background: #e03e24;
        }
        footer {
            text-align: center;
            padding: 1rem;
            background: #111;
        }
        .success {
            text-align: center;
            margin-top: 2rem;
            font-size: 1.2rem;
            color: #0f0;
        }
    </style>
</head>
<body>
    <header>
        <h1>🔥 Gaming E-Store 🔥</h1>
        <p>Your go-to place for BGMI UC, IDs & more</p>
    </header>

    {% if success %}
    <div class="success">
        ✅ Order placed successfully for <b>{{ product }}</b><br>
        👤 User ID: {{ user_id }}
    </div>
    {% endif %}

    <section class="product-list">
        <div class="product">
            <h2>BGMI UC - 60</h2>
            <p>₹75 only</p>
            <form method="post">
                <input type="hidden" name="product" value="BGMI UC - 60">
                <input type="text" name="user_id" placeholder="Enter BGMI ID" required>
                <button type="submit">Buy Now</button>
            </form>
        </div>

        <div class="product">
            <h2>Premium BGMI Account</h2>
            <p>₹999 with 10 outfits</p>
            <form method="post">
                <input type="hidden" name="product" value="Premium BGMI Account">
                <input type="text" name="user_id" placeholder="Enter Contact ID" required>
                <button type="submit">Buy Now</button>
            </form>
        </div>
    </section>

    <footer>
        <p>© 2025 Gaming E-Store. All rights reserved.</p>
    </footer>
</body>
</html>
'''

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        product = request.form.get('product')
        user_id = request.form.get('user_id')
        return render_template_string(HTML_TEMPLATE, success=True, product=product, user_id=user_id)
    return render_template_string(HTML_TEMPLATE, success=False, product="", user_id="")

if __name__ == '__main__':
    app.run(debug=True)
