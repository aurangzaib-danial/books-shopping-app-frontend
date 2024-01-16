export function apiHost() {
  const development = 'http://localhost:3000';
  const production = 'http://example.com';

  return process.env.NODE_ENV === 'development' ? development : production;
}
