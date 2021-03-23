var TinyURL = require('tinyurl');

export const generateShortenUrl = async(originUrl)=>{
    const shortenUrl = await shortenByTinyUrl(originUrl)
    return shortenUrl
}

const shortenByTinyUrl = async(originUrl)=>{
    const shortenUrl = await new Promise((resolve,reject) => {        
        TinyURL.shorten(originUrl, function(res, err) {
            if(err){reject(err)}
            resolve(res)
        })
    });
    return shortenUrl
}