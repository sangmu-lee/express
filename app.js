/******* import external modules *******/
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
/******* import internal modules *******/
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

/**
 * public 폴더에 대한 사용자 접근 권한 부여
 */
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
