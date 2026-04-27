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

app.listen(3000, () => {
    console.log("AI Moderation API running on http://localhost:3000");
});