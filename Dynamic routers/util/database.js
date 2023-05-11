const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'node-complete',
    password: '1pl@teGolibaje'
});

module.exports = pool.promise();

/*
1.we use sql when we want our data to follow a certain schema and our data has relations with other data in the data base. On the other hand we use nosql when our data dont follows any schema and the relation between the data is less. sql has the limitation on the read and writing of the data per second whereas nosql doesnt have any.



2.Vertical scaling means adding computational power to our server by increasing cpu , ram and hard drive capacity.

Horizontal scaling means increasing the number of servers which handels the data and connecting them togather. */