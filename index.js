const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const xivApiPrivateKey = '77e71ea12ea143c7b0520295eb1cc31b0be74519e5924792917a4c191ae44fbc';
const worldIds = [34, 37, 41, 62, 74, 75, 81, 91];
// GET search call
app.get('/search', (req, res) => {
    const item_name = req.query.item_name;

    const xivApiQuery = `https://xivapi.com/search?string=${item_name}&indexes=Item?private_keys=${xivApiPrivateKey}`;
    // const { item_name } = req.body;
    
    axiox.get(xivApi)
        .then((res) => {
            const { Results } = res;
            const listOfItemIds
            // call xivapi.com with the itemname        

        })
        .catch((err) => {

        });
        // if a successful array returns
            // call the last updated
    // axios.get("https://universalis.app/api/v2/data-centers")
    // .then((res) => {
    //     console.log(res.data)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
    // ;
    // res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Server started in PORT: ${port}`)
});