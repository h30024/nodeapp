# nodeapp

Installation instructions

install mongo db

npm i

export vidly_jwtPrivateKey=myPrivateKey

nodemon index.js

create user
POST http://localhost:3000/api/users
{
    "name": "johndoe",
    "email": "john@yahoo.com",
    "password": "mypassword"
}
This will return a jwt in header


POST http://localhost:3000/api/auth
{
    "email": "john@yahoo.com",
    "password": "mypassword"
}
will return jwt as response

use jwt in x-auth-token header to access 

http://localhost:3000/api/genres

will need jwt with isAdmin=true to delete
DELETE http://localhost:3000/api/genres/1
