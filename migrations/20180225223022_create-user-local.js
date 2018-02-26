
exports.up = function (knex, Promise) {
    return knex.schema.createTable("users_local", (table) => {
        table.increments();
        table.string("firstname");
        table.string("lastname");
        table.string('account')
        table.string("password");
        table.timestamps(false, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("users_local");
};