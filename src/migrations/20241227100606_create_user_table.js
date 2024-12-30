// const { Model }   = require('objection')
exports.up = function(knex) {
    return knex.schema.createTable('createusers', table => { 
        table.increments('id').primary(); 
        table.string('name'); 
        table.date('due_by'); 
        table.boolean('is_done').defaultTo(false); 
        // table.timestamps(true, true); 
        // table.unique(['name']); 
      }); 
    }; 

/**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.down = knex => { 
  
    // Drop the tasks table 
    return knex.schema.dropTableIfExists('createusers'); 
  };
