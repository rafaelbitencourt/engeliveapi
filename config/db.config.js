// module.exports = {
//     username: 'root',
//     password: 'engelive',
//     database: 'engelive',
//     host: 'localhost',
//     dialect: 'mysql',
//     define: {
//         timestamps: false
//     }
// }
module.exports = {
    username: 'rayztlsmiezlqp',
    password: '8dad7d4dbcf679ce575ee26acf41fdddccf2c8bbfdc1b50ce7dddf7dda2576bd',
    database: 'd7a77br37jhvei',
    host: 'ec2-100-24-139-146.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    define: {
        timestamps: false
    }
}