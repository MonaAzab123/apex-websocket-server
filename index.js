const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// بيانات التوكن والرقم
const token = "EAAPbXCsa050BPFtpGZAl9T3EZBWHHxbZBaXq10MZBQXgcsT3lUY92pKGA5ABKxKcNfidpw5NQWpGtjYJgFfn70GmPsNLqZBCt1nf7zHNkJWujceeokTxkg9Tdbu9DElZBpavhydm2HfBIp6td6br5uZBMCgrlA3i84QZBddshKg2zf7ZCDadWA0KnkbLZBZAyHDWUDR7uZC1ZBMFsq3EbZAtvmLFHXs2xcRkJH6JGGg8mXcWndQweS2QZDZD"; // حطي التوكن الكامل
const phoneNumberId = "691143610752358";

// استقبال رسائل من واتساب
app.post("/webhook", (req, res) => {
  console.log("Webhook received:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

// لتأكيد التحقق (verification callback)
app.get("/webhook", (req, res) => {
  const verify_token = "test123"; // اختاري توكن بنفسك

  const mode = req.query["hub.mode"];
  const token_query = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token_query === verify_token) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.listen(3000, () => {
  console.log("Webhook is running on port 3000");
});
