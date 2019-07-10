"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  article() {
    return this.belongsTo("App/Models/Articles", "id", "categories_id");
  }
}

module.exports = Category;
