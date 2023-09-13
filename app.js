const express = require('express');
const path = require('path');
const app = express();

app.get('/survey',(req,res,next) => {
    res.sendFile(path.join(__dirname, 'views', 'survey.html'));
});
app.post('/survey/submitted',(req,res,next) => {
    res.sendFile(path.join(__dirname, 'views', 'submit.html'));
});

app.listen(3000);