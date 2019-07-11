"use strict";

const User = use("App/Models/User");

class ArticleUserController {
  async index({ params, response }) {
    const user = await User.findByOrFail("id", params.id);
    const articles = await user.article().fetch();

    return response.send(articles);
  }
}

module.exports = ArticleUserController;
