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

Route.post("/categories", "CategoryController.store");
Route.get("/categories/:id", "CategoryController.show");
Route.delete("/categories/:id", "CategoryController.delete");

Route.group(() => {
  Route.resource("articles", "ArticleController")
    .apiOnly()
    .except("create", "edit", "update");
}).middleware("auth");

// Route.group(() => {
//   Route.resource("categories", "CategoryController")
//     .apiOnly()
//     .except("create", "edit", "update");
// });
