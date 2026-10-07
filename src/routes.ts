export const routes = {
  home: '/',
  tribes: '/cultures',
  story: '/story',
  tribe: (id: string) => `/cultures/${id}`,
} as const
