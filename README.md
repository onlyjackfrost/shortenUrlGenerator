Run Server

1. clone this repository.
2. cd to the directory of this repository.
3. npm install
4. npm start


Test API

5. curl --request POST \
        --url http://localhost:3000/short/url \
        --header 'Content-Type: application/json' \
        --data '{
            "url": "your_testing_url"
        }'