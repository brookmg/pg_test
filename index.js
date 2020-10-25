const Knex = require('knex');

const state = process.env.NODE_ENV || 'normal';
const dotenv = require('dotenv');
dotenv.config();

const connectionString = state == "testing" ? process.env.DATABASE_URL : process.env.TEST_DATABASE_URL

// These values might change with some env values
// This is the instance in which all models get db access from
const KnexI = Knex({
    client: 'pg',
    connection: connectionString
});

console.log(connectionString)

async function f() {
    console.log(await KnexI.raw("select * from one;"))
}

f();