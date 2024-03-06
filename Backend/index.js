const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoute");
const cookieParser = require("cookie-parser");