const express = require("express");

const app = express();
app.use(express.json());

app.post("/moderate", (req, res) => {
    const message = req.body.message || "";

    console.log("Received:", message);

    if (message.toLowerCase().includes("bad")) {
        return res.json({ result: "TOXIC" });
    }

    return res.json({ result: "SAFE" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
