import authRepository from '@/repositories/authRepository';

const repositories = {
  auth: authRepository
};

export default {
  get: name => repositories[name]
};
