'use client';
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import {
	sendFormData,
	FormFieldTypes,
	formValidator,
	fieldValidator,
} from '@CommonImports';

type FormFieldErrorTypes = {
	firstName: boolean;
	lastName: boolean;
	email: boolean;
	message: boolean;
};

type SendStatus = {
	error: string;
	notification: string;
};

type UseContactFormResult = {
	status: SendStatus;
	isLoading: boolean;
	formData: FormFieldTypes;
	formError: FormFieldErrorTypes;
	isFormDisabled: boolean;
	handleClearMessage: () => void;
	handleFormCheck: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleSubmit: (e: FormEvent) => void;
};
/**
 * Custom hook to manage contact form state and handle submission.
 * @returns {object} - The contact form state and handlers.
 */
export const useContactForm = (): UseContactFormResult => {
	const [status, setStatus] = useState<SendStatus>({
		error: '',
		notification: '',
	});
	const [formData, setFormData] = useState<FormFieldTypes>({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});
	const [formError, setFormError] = useState<FormFieldErrorTypes>({
		firstName: false,
		lastName: false,
		email: false,
		message: false,
	});

	const handleClearMessage = useCallback(() => {
		setStatus({ error: '', notification: '' });
	}, []);

	const handleFormCheck = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		const sanitizedValue = DOMPurify.sanitize(value);

		const isInvalid = fieldValidator(sanitizedValue);

		if (name === 'email' && value) {
			const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			setFormError(prevErrors => ({
				...prevErrors,
				[name]: !emailPattern.test(sanitizedValue),
			}));
			return;
		}

		setFormError(prevErrors => ({
			...prevErrors,
			[name]: isInvalid,
		}));

		setFormData(prevData => ({
			...prevData,
			[name]: sanitizedValue,
		}));
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});

		setFormError({
			...formError,
			[name]: false,
		});
	};

	const mutation = useMutation({
		mutationFn: sendFormData,
		onSuccess: () => {
			setStatus({ ...status, notification: 'E-mail sent successfully!' });
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				message: '',
			});
		},
		onError: (error: any) => {
			setStatus({
				...status,
				error: error.message || 'Failed to send email.',
			});
		},
	});

	const isFormDisabled = useMemo(
		() => !!Object.values(formError).find(el => !!el) || mutation.isPending,
		[formError, mutation.isPending]
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (isFormDisabled) {
			return;
		}
		const isFormInvalid = formValidator(formData);

		if (isFormInvalid) {
			setStatus({
				...status,
				error: 'Your form is not valid, please check your inputs',
			});
			return;
		}

		mutation.mutate(formData);
	};

	return {
		status,
		isLoading: mutation.isPending,
		formData,
		formError,
		isFormDisabled,
		handleClearMessage,
		handleFormCheck,
		handleChange,
		handleSubmit,
	};
};

export default useContactForm;
