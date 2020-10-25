const Knex = require('knex');

const state = process.env.NODE_ENV || 'development';
const dotenv = require('dotenv');
dotenv.config();

// These values might change with some env values
// This is the instance in which all models get db access from
const KnexI = Knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
});

console.log(process.env.DATABASE_URL)

async function f() {
    console.log(await KnexI.raw("select * from one;"))
}

f();