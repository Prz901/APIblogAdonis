"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArticlesSchema extends Schema {
  up() {
    this.create("articles", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("categories_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("title", 80).notNullable();
      table.string("body", 240).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("articles");
  }
}

module.exports = ArticlesSchema;
