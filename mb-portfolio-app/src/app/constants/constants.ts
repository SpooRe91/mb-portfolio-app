export const UTIL_KEY = process.env.NEXT_PUBLIC_UTIL_KEY;
export const BASE_URL = "https://mb-multi-tool-api.vercel.app/personal";
export const FORBIDDEN_PATTERNS = [/<script.*?>.*?<\/script>/gi, /javascript:/gi, /<.*?>/g, /\/|\\/g, /:/g];
export const LETERS_ONLY_REGEX = /^[A-Za-z]+$/;
export const MAX_RETRIES = 4;
export const RETRY_DELAY = 1000;
export const PATHS = ["/", "/projects", "/about", "/contactMe"];
export const ICON_NAMES_URLS = [
    { name: "JavaScript", extUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", extUrl: "https://www.typescriptlang.org/docs/" },
    { name: "React", extUrl: "https://react.dev/" },
    { name: "Next", extUrl: "https://nextjs.org/docs" },
    { name: "css3", extUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Tailwind", extUrl: "https://tailwindcss.com/docs" },
    { name: "SASS", extUrl: "https://sass-lang.com/guide" },
    { name: "HTML5", extUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "MaterialUI", extUrl: "https://mui.com/getting-started/installation/" },
    { name: "Redux", extUrl: "https://redux.js.org/introduction/getting-started" },
    { name: "GraphQL", extUrl: "https://graphql.org/learn/" },
    { name: "Vite", extUrl: "https://vitejs.dev/guide/" },
    { name: "NodeJs", extUrl: "https://nodejs.org/en/docs/" },
    { name: "NPM", extUrl: "https://docs.npmjs.com/" },
    { name: "MongoDB", extUrl: "https://www.mongodb.com/docs/" },
    { name: "Git", extUrl: "https://git-scm.com/doc" },
    { name: "GitHub", extUrl: "https://docs.github.com/en" },
    { name: "Gitlab", extUrl: "https://docs.gitlab.com/ee/" },
];
