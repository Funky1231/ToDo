import ky from 'ky';

export const api = ky.create({
  prefixUrl: __API__,
});
