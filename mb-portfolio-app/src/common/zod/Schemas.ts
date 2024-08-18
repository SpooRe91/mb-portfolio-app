import { z } from 'zod';
import { LETERS_ONLY_REGEX } from '../constants/constants';

export const FormFieldSchema = z.object({
	firstName: z
		.string()
		.min(1, 'First name is required')
		.regex(LETERS_ONLY_REGEX, 'First name must contain only English letters'),
	lastName: z
		.string()
		.min(1, 'Last name is required')
		.regex(LETERS_ONLY_REGEX, 'Last name must contain only English letters'),
	email: z.string().min(1).email('Invalid email address'),
	message: z.string().min(1, 'Message is required'),
});

export type FormFieldTypes = z.infer<typeof FormFieldSchema>;
