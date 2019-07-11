"use strict";

const Category = use("App/Models/Category");

class ArticleCategoryController {
  async index({ params, response }) {
    const category = await Category.findByOrFail("id", params.id);
    const articles = await category.articles().fetch();

    return response.send(articles);
  }
}

module.exports = ArticleCategoryController;
