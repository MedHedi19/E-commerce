const User = require("../models/User");
const Crypt = require("crypto-js");
const jwt = require("jsonwebtoken");
// const validatePassword = require('../validator/passwordValidator');

async function Register(req, res) {
    try {
        const { username, email, password } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({ message: "missing statment" });
        }
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(409).json({ message: "User with this email/username already exists" });
        }
        // const validationResult = validatePassword(password);
        // if (validationResult.length > 0) {
        //     return res.status(400).json({ message: "Invalid password format", errors: validationResult });
        // }
        const crytptedPass = Crypt.AES.encrypt(password, process.env.PASS_SEC).toString();
        const newUser = new User({ username, email, password: crytptedPass });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err)
    }
}
async function Login(req, res) {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json("Wrong credentials - User not found");
        }

        const hashedPassword = Crypt.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(Crypt.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials - Incorrect password");
        }
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_KEY, { expiresIn: "3d" })
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    Register,
    Login
};