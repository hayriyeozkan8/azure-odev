const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Bulut Bilişim Ödevi</title>
      </head>
      <body style="text-align:center; margin-top:100px; font-family:Arial;">
        <h1>Hayriye Özkan</h1>
        <h2>231001025</h2>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server çalışıyor:", PORT);
});