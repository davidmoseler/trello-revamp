import Vue from 'vue'
import AuthRepository from '@/repositories/AuthRepository'

describe('AuthRepository', () => {
  test('should not authenticate nonexistent user', async () => {
    const res = await AuthRepository.authenticate('idontexist', '123')
    expect(res.ok).toBe(false)
  })

  test('should register user', async () => {
    const res = await AuthRepository.register('idontexist', '123');
    expect(res.ok).toBe(true)
  })

  test('should register user', async () => {
    const res = await AuthRepository.authenticate('idontexist', '123');
    expect(res.ok).toBe(true)
  })

  test('should delete user', async () => {
    const res = await AuthRepository.delete('idontexist', '123');
    expect(res.ok).toBe(true)
  })

  test('should not authenticate deleted user', async () => {
    const res = await AuthRepository.authenticate('idontexist', '123')
    expect(res.ok).toBe(false)
  })
})
