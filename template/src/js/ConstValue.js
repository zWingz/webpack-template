export const isProduction = process.env.NODE_ENV === 'production';

export const HttpRoot = !isProduction ? '/' : '/';

export const BeDomain = !isProduction ? '/' : '/'
