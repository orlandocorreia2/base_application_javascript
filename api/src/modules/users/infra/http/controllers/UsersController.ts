import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';
import GetUsersService from '@modules/users/services/GetUsersService';

class UsersController {
  public async index(_: Request, response: Response): Promise<Response> {
    const getUsers = container.resolve(GetUsersService);
    const users = await getUsers.execute();

    return response.json(classToClass(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
      user_id: request.user ? request.user.id : null,
    });

    return response.json(classToClass(user));
  }
}

export default UsersController;
