import { BASE_URL, UTIL_KEY } from "@PortfolioApp/app/utils/constants";
import { extractAndReturnError } from "@PortfolioApp/app/utils/generalUtils";
import axios from "axios";
import { z } from "zod";

const ProjectTypeSchema = z.object({
    img: z.string(),
    title: z.string(),
    url: z.string().url(),
    text: z.string(),
    content: z.string(),
});

const ProjectTypeArraySchema = z.array(ProjectTypeSchema);

type ProjectType = z.infer<typeof ProjectTypeSchema>;

export const fetchPortfolioData = async (): Promise<ProjectType[] | null> => {
    if (!UTIL_KEY) {
        throw new Error("NEXT_PUBLIC_UTIL_KEY is not defined in the environment variables.");
    }

    try {
        const res = await axios.get<ProjectType[]>(`${BASE_URL}/portfolio`, {
            headers: {
                "x-util-key": UTIL_KEY,
            },
        });

        if (!res.data) {
            console.error("No data returned from the API.");
            return null;
        }

        const validationResult = ProjectTypeArraySchema.safeParse(res.data);
        if (!validationResult.success) {
            console.error("Validation error: ", validationResult.error.errors);
            return null;
        }

        return validationResult.data;
    } catch (error) {
        throw extractAndReturnError(error);
    }
};
