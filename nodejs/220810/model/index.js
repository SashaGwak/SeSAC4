const Sequelize = require('sequelize');

const config = require("../config/config.json")["development"];
// config.json에서 "development부분 가져옴"
/* 따라서 이런 형태로 불러옴
{
    "host": "localhost", 
    "database": "sesac", 
    "username": "user",
    "password": "Mini1028!",
    "dialect": "mysql" 
    }, */

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username, 
    config.password,
    config
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db = {"sequelize": sequelize, "Sequelize":Sequelize}; 

db.Visitor = require('./Visitor')(sequelize, Sequelize);

module.exports = db;
