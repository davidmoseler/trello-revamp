import authRepository from '@/repositories/authRepository';

const repositories = {
  auth: authRepository
};

const defaultConfig = {
  mockResources: false
};

export default {
  get: (name, config = defaultConfig) => repositories[name](config)
};
