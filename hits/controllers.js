var rp = require('request-promise');
const hitsModel = require('./models');

// Func for get data from API
const fetchData = () => {
    var options = {
        uri: 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    return rp(options);
}

const fillDB = async () => {
    try {
        const hitsFromCloud = await fetchData();
        for (const hit of hitsFromCloud.hits) {
            try {
                console.log(`Save ID =  ${hit.objectID}`);
                if (hit.story_title || hit.title) {
                    const hitSaved = await insertData(hit);
                    console.log('hitSaved', hitSaved);
                }
            } catch (error){
                console.log('Error inesperado', error);
            }
        }
    } catch (error) {
        console.log('Error inesperado', error);
    } 
}

const insertData = (element) => {

    const hit = new hitsModel({
        story_title: element.story_title,
        title: element.title,
        objectID: element.objectID,
        author: element.author,
        created_at_i: element.created_at_i,
        story_url: element.story_url,
        url: element.url,
        status: true,
    });

    return new Promise( (res, rej) => {
        hit.save(function (err, hit) {
            if (err) {
                rej(err);
            } else {
                res(hit);
            } 
        });
    })
}

const getHits = async () => {
    try {
        const hits = await hitsModel.find({status: true}).sort({created_at_i: 'descending'});
        return hits;
    } catch (error) {
        console.log(`Error Find BD ${error}`);
    }

}

const updateHit = async (objectID) => {
    try {
        const res = await hitsModel.updateOne({objectID} , { status: false });
        console.log(`MODIFICADOS ${res.nModified}`);
        return res;
    } catch (error) {
        console.log(`Error Update BD ${error}`);
    }

}

module.exports = {
    fetchData,
    insertData,
    fillDB,
    getHits,
    updateHit
}