"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  articles() {
    return this.hasMany("App/Models/Article", "id", "categories_id");
  }
}

module.exports = Category;
