import express from "express";

import filmRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let getCount = 0;
app.use((req, _res, next) => {
    if(req.method === 'GET'){
        getCount++;
        console.log('GET counter = ' + getCount);
    }
    next();
});

app.use("/films", filmRouter);

export default app;
