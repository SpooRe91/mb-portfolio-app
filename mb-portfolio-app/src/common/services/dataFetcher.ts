import { BASE_URL, UTIL_KEY, ProjectType } from '@CommonImports';
import axios from 'axios';

export const fetchPortfolioData = async ({
	signal,
}: {
	signal: AbortSignal;
}) => {
	if (!UTIL_KEY) {
		throw new Error(
			'NEXT_PUBLIC_UTIL_KEY is not defined in the environment variables.'
		);
	}
	const { data } = await axios.get<ProjectType[]>(`${BASE_URL}/portfolio`, {
		headers: {
			'x-util-key': UTIL_KEY,
		},
		signal,
	});
	return data;
};
