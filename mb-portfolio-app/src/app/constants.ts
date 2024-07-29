export const UTIL_KEY = process.env.NEXT_PUBLIC_UTIL_KEY;
export const BASE_URL = "https://mb-multi-tool-api.vercel.app/personal";
export const TECHS_USED =
    "JavaScript, TypeScript, React, Next, Redux, HTML5, CSS3, SASS, Tailwind, Vite, NPM, Mocha, Chai, RTL, Vitest, Cypress, MongoDB, PostgreSQL, Node.js, Express.js, Firebase, Git";
export const FORBIDDEN_PATTERNS = [/<script.*?>.*?<\/script>/gi, /javascript:/gi, /<.*?>/g, /\/|\\/g, /:/g];
export const MAX_RETRIES = 3;
export const RETRY_DELAY = 1000;