const Knex = require('knex');

const { Model } = require('objection')

const knexconfig = require('./knex');


(async () => {
    try {
        // Bind all Models to a knex instance.
        const knex = Knex(knexconfig);
        Model.knex(knex);
        // console.log('established connection to db');

        knex.raw('SELECT 1')
        .then(() => console.log('Database connection established'))
        .catch((error) => console.error('Failed to establish database connection.'));
        // .catch((error) => console.error('Failed to establish database connection:', error)); //
    } catch (error) {
        console.log(error.stack);
    }
})();