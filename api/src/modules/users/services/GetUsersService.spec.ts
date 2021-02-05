import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import GetUsersService from './GetUsersService';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

let fakeUsersRepository: FakeUsersRepository;
let getUsersService: GetUsersService;
let fakeCacheProvider: FakeCacheProvider;

describe('GetUsersService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    getUsersService = new GetUsersService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to get all users', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Tre',
      email: 'johntre@example.com',
      password: '123456',
    });

    const users = await getUsersService.execute();

    expect(users).toEqual([user, user2]);
  });
});
