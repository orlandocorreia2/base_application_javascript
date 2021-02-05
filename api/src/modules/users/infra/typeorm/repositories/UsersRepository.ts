import { getRepository, Repository } from 'typeorm';

import User from '../entities/User';
import IUserRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async all(): Promise<User[]> {
    return await this.repository.find();
  }

  public async findById(id: string): Promise<User | undefined> {
    return await this.repository.findOne(id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: { email },
    });

    return user;
  }

  public async create({
    name,
    email,
    password,
    user_id,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      user_id,
    });

    await this.repository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return await this.repository.save(user);
  }
}

export default UsersRepository;
