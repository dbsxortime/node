//test apiKey
const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');


const server = app.listen(8082,()=>{
    console.log('listening on 8082');
});

//console.log(uuidAPIKey.create());

const key = {
    apiKey: 'CD16CY3-E244BEX-MDP3MHF-B9X6C7A',
    uuid: '63426678-7088-45bb-a36c-3a455a7a661d'
}


app.get('/api/users/:apikey/:type',async(req,res)=>{
    let {
        apikey,
        type
    } = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey,key.uuid)){
        res.send('apikey is not valid')
    }else {
        if(type=='seoul'){
            let data=[
                {name:'ParkYunTaek',city:'seoul'},
                {name:'qtime',city:'seoul'}
            ];
            res.send(data);
        }else if(type=='jeju'){
            let data=[
                {name:'AhnTaeKyun',city:'jeju'},
                {name:'dbsxortime',city:'jeju'}
            ];
        }else {
            res.send('Type is not correct.')
        }
    }
    
});

app.get('/api/products/:apikey/:type',async(req,res)=>{
    let {
        apikey,
        type
    } = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey,key.uuid)){
        res.send('apikey is not valid')
    }else {
        if(type=='2019'){
            let data=[
                {product:'PC',amount:3000},
                {name:'notebook',city:2500}
            ];
            res.send(data);
        }else if(type=='2020'){
            let data=[
                {name:'PC2020',city:'3500'},
                {name:'notebook2020',city:'4200'}
            ];
        }else {
            res.send('Type is not correct.')
        }
    }
});