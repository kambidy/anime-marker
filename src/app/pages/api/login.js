export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Dummy validation (replace with database/user store check)
    if (email === "ryan@gmail.com" && password === "batman11624646") {
      // Set a cookie or return a token
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
