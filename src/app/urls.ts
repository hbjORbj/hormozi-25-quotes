export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://hormozi-25-quotes.vercel.app';
export const QUOTES_API = '/api/quotes';
