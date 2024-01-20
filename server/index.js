const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connection = require('./config/db');
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");
const PaymentRoute = require("./routes/stripe");

app.use(express.json());
app.use(cors());
dotenv.config();


connection()
    .then((res) => {
        app
            .listen(process.env.PORT || 5000, () => {
                console.log("backend server is running");
            })
    })
    .catch((err) => { console.log("There is an error not expected"); });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", OrderRoute);
app.use("/api/checkout", PaymentRoute);