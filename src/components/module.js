const { Model }   = require('objection');

class createuserModel extends Model {

    static get tableName(){
        return 'createusers'
    }
    
    // static get idColumn() {
    //     return 'id';
    // }

  
}

module.exports = createuserModel;