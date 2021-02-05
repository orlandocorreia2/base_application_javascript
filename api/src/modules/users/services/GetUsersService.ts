import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { classToClass } from 'class-transformer';
import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class GetUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<User[]> {
    let users = await this.cacheProvider.recover<User[]>('users:all');

    if (!users) {
      users = await this.usersRepository.all();

      await this.cacheProvider.save('users:all', classToClass(users));
    }

    return users;
  }
}

export default GetUsersService;
