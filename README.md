Run Server

1. clone this repository.
2. cd to the directory of this repository.
3. npm install
4. npm start

---------------------------------------------------------
Test API

curl --request POST \
     --url http://localhost:3000/short/url \
     --header 'Content-Type: application/json'
     --data '{
         "url": "your_testing_url"
       }'
// response:{originUrl: "your_testing_url", url:"someShortenUrl"}
---------------------------------------------------------
Description:

使用了 tinyurl package 來完成產生短網址任務
https://www.npmjs.com/package/tinyurl
