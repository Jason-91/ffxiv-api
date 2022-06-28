const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// const xivApiPrivateKey = 'API_KEY';
const xivApiPrivateKey = '77e71ea12ea143c7b0520295eb1cc31b0be74519e5924792917a4c191ae44fbc';
// world IDs
const worldIds = [34, 37, 41, 62, 74, 75, 81, 91];
// GET search item by item name
/**
 * use req.query.item_name to call xiv API to pull the item IDs[]
 * use item IDs from xiv API to call universalis API and map item_id, item_name and item_type
 */
app.get('/search-itemname', (req, res) => {
    const item_name = req.query.item_name;
    const xivApiGetItemDetailQuery = `https://xivapi.com/search?indexes=item&string=${item_name}&private_keys=${xivApiPrivateKey}`;
    // `https://xivapi.com/search
    // ?indexes=item
    // &filters=ItemSearchCategory.ID%3E%3D1
    // &columns=ID
    // %2CIcon
    // %2CName
    // %2CLevelItem
    // %2CRarity
    // %2CItemSearchCategory.Name
    // %2CItemSearchCategory.ID
    // %2CItemKind.Name
    // &string=calf
    // &limit=100
    // &sort_field=LevelItem&sort_order=desc
    // &string_algo=fuzzy&language=en`
    let result;
    axios({
        method: 'get',
        url: xivApiGetItemDetailQuery
    })
        .then((res) => {
            console.log('RESULTS', res)
            const { data } = res;
            const { Results } = data;
            console.log(Results)
            // const listOfItemIds
            // call xivapi.com with the itemname
            result = {
                message: 'success',
                data: Results.map(data => {
                    return {   
                        item_id: data.ID,
                        item_name: data.Name,
                        item_url: data.Url,
                        item_icon: data.Icon,
                    }
                })
            }        

        })
        .catch((err) => {
            result = 'error: something happend to the ffxivapi';
        });
    return result;
});

app.get('/item-market', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server started in PORT: ${port}`)
});