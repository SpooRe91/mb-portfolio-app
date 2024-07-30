import { FORBIDDEN_PATTERNS } from "./constants";

export const formValidator = (value: string) => {
    let isInvalid = false;

    for (const pattern of FORBIDDEN_PATTERNS) {
        if (pattern.test(value)) {
            isInvalid = true;
            break;
        }
    }

    return isInvalid;
};
