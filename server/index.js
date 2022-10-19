const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { tempList, farToCel, calToFar, currencyList } = require("./data");
const client = require("./config/redis");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/temp", async (req, res) => {
  const { from, to, measure } = req.body;
  const key = `temp-conversion-${from}-${to}-${measure}`;

  const a = await client.get(key).then(res => JSON.parse(res));
  if (a) {
    console.log(`get query from cached ${key}`);
    res.send(a);
  } else {
    let result = 0;
    if (from === to) result = measure;
    else if (from === "fahrenheit") result = (Math.round(farToCel(measure) * 100) / 100).toFixed(2);
    else if (from === "celsius") result = (Math.round(calToFar(measure) * 100) / 100).toFixed(2);

    res.send({ result });
    await client.set(key, JSON.stringify({ result })).then(res => console.log(`set redis cache for ${key} sucess`));
  }
});

app.get("/temp", async (req, res) => {
  const key = "templist";

  const a = await client.get(key).then(res => JSON.parse(res));

  if (a) {
    console.log(`get query from cached ${key}`);
    res.send(a);
  } else {
    res.send(tempList);
    await client.set(key, JSON.stringify(tempList)).then(res => console.log(`set redis cache for ${key} sucess`));
  }
});

app.post("/currency", async (req, res) => {
  const { from, to, amount } = req.body;
  const key = `currency-conversion-${from}-${to}-${amount}`;

  const a = await client.get(key).then(res => JSON.parse(res));
  if (a) {
    console.log(`get query from cached ${key}`);
    res.send(a);
  } else {
    let result = 0;
    axios
      .get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
      .then(async ress => {
        result = (Math.round(ress.data.result * 100) / 100).toFixed(2);
        res.send({ result });
        await client.set(key, JSON.stringify({ result })).then(res => console.log(`set redis cache for ${key} sucess`));
      })
      .catch(err => {
        res.send({ result });
      });
  }
});

app.get("/currency", async (req, res) => {
  const key = "currencylist";

  const a = await client.get(key).then(res => JSON.parse(res));

  if (a) {
    console.log(`get query from cached ${key}`);
    res.send(a);
  } else {
    res.send(currencyList);
    await client.set(key, JSON.stringify(currencyList)).then(res => console.log(`set redis cache for ${key} success`));
  }
});

app.get("/trigger", async (req, res) => {
  for (let i = 0; i < currencyList.length; i++) {
    for (let j = 0; j < currencyList.length; j++) {
        const key = `currency-conversion-${currencyList[i].code}-${currencyList[j].code}-1`;
        console.log({key})
        let result = 0;
        axios
          .get(`https://api.exchangerate.host/convert?from=${currencyList[i].code}&to=${currencyList[j].code}&amount=1`)
          .then(async ress => {
            result = (Math.round(ress.data.result * 100) / 100).toFixed(2);
            console.log({ result });
            await client.set(key, JSON.stringify({ result })).then(res => console.log(`set redis cache for ${key} sucess`));
          })
          .catch(err => {
            console.log({ result });
          });
    }
  }
  res.send("sucess")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Listening at port : ${PORT}`);
