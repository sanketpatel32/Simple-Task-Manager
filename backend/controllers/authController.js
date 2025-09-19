const User = require("../models/User");
const { signToken } = require("../utils/jwt");

//
// --- SIGN UP ---
// Creates a new user, returns JWT + user details
//
exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password || password.length < 6) {
      return res
        .status(400) // Bad Request
        .json({ error: "Email and password (min 6 chars) required" });
    }

    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res
        .status(409) // Conflict
        .json({ error: "Email already in use" });
    }

    // Create new user (hashed password handled in model)
    const user = await User.createFromPassword(email, password);

    // Issue JWT
    const token = signToken(user);

    // Send success response
    return res
      .status(201) // Created
      .json({ token, user: { id: user._id, email: user.email } });
  } catch (err) {
    next(err); // Let error middleware handle it
  }
};

//
// --- SIGN IN ---
// Authenticates user, returns JWT + user details
//
exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400) // Bad Request
        .json({ error: "Email and password required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401) // Unauthorized
        .json({ error: "Invalid credentials" });
    }

    // Verify password
    const ok = await user.verifyPassword(password);
    if (!ok) {
      return res
        .status(401) // Unauthorized
        .json({ error: "Invalid credentials" });
    }

    // Issue JWT
    const token = signToken(user);

    // Send success response
    return res
      .status(200) // OK
      .json({ token, user: { id: user._id, email: user.email } });
  } catch (err) {
    next(err);
  }
};
