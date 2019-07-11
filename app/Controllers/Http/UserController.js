"use strict";

const User = use("App/Models/User");

class UserController {
  //Route  Get all Users
  async index() {
    const users = await User.all();

    return users;
  }
  //Route Get user by id
  async show({ params }) {
    const users = await User.findOrFail(params.id);

    return users;
  }
  //Route to Update user
  async update({ params, request, response }) {
    const data = request.all();
    const { id } = params;
    const users = await User.findBy("id", id);
    users.merge(data);
    await users.save();
    return response.send(users);
  }
  //Route to Delete user
  async destroy({ params }) {
    const users = await User.findByOrFail("id", params.id);

    await users.delete();
  }
}

module.exports = UserController;
