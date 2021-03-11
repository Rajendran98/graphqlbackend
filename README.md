Testing example
==================================

This is a simple experimental example of how to match graphql-js and MySQL for the implementation of a GraphQL API.

- This project requires a version of NodeJS with support for async-await

Getting Started
---------------

```sh
# clone the project
git clone git@github.com:YuLeven/nodejs-graphql-mysql-example.git
cd nodejs-graphql-mysql-example

# Install dependencies
npm install

# Create Schema in MySQLfor Linux/Unix/MacOS
mysql -h <host> -P 3306  -u <user>  -p  < ./sql/exapp.sql

# Run the server
PORT=8080 MYSQL_DB_USER=root MYSQL_DB_NAME=exapp MYSQL_DB_PASSWORD=secret MYSQL_DB_ADDRESS=localhost MYSQL_DB_POOL_SIZE=10 npm start

# Access GraphQLi
http://localhost:8080/graphql
```

Please remember to export the example SQL schema located in ./sql/exapp.sql

## Example operations

#### Show all bacons
```js
{
  devicetype {
    ID,
    DeviceType,
    IsActive
  }
}
```
