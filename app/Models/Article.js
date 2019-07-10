"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Article extends Model {
  user() {
    return this.hasMany("App/Models/User", "user_id", "id");
  }
  category() {
    return this.hasMany("App/Models/Category", "categories_id", "id");
  }
}

module.exports = Article;
