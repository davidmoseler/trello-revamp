import Vue from 'vue';
import repositoryFactory from '@/repositories/repositoryFactory';

const authRepository = repositoryFactory.get('auth');

describe('authRepository', () => {
  test('should not authenticate nonexistent user', async () => {
    const res = await authRepository.authenticate('idontexist', '123');
    expect(res.ok).toBe(false);
  });

  test('should register user', async () => {
    const res = await authRepository.register('idontexist', '123');
    expect(res.ok).toBe(true);
  });

  test('should register user', async () => {
    const res = await authRepository.authenticate('idontexist', '123');
    expect(res.ok).toBe(true);
  });

  test('should delete user', async () => {
    const res = await authRepository.delete('idontexist', '123');
    expect(res.ok).toBe(true);
  });

  test('should not authenticate deleted user', async () => {
    const res = await authRepository.authenticate('idontexist', '123');
    expect(res.ok).toBe(false);
  });
});
