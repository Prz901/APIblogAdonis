"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

Route.get("/users", "UserController.index");
Route.get("/users/:id", "UserController.show");
Route.put("/users/:id", "UserController.update");
Route.delete("/users/:id", "UserController.destroy");

Route.post("/categories", "CategoryController.store");
Route.get("/categories/:id", "CategoryController.show");
Route.get("/categories", "CategoryController.index");
Route.delete("/categories/:id", "CategoryController.destroy");
Route.put("/categories/:id", "CategoryController.update");

Route.get("/categories/:id/articles", "ArticleCategoryController.index");
Route.get("/user/:id/articles", "ArticleUserController.index");

Route.group(() => {
  Route.resource("articles", "ArticleController")
    .apiOnly()
    .except("create", "edit");
}).middleware("auth");
