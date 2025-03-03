/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

// 'use strict';

// module.exports = require('./lib/express');

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, FunctionCat!");
});

// FunctionCat 需要监听 9000 端口
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
