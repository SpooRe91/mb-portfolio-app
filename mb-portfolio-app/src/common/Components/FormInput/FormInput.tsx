import React from 'react';

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> &
	React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
		id: string;
		name: string;
		value: string;
		onChange: (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
		) => void;
		onBlur?: (
			e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
		) => void;
		error?: boolean;
		as?: 'input' | 'textarea';
	};

export const FormInput = ({
	id,
	name,
	value,
	onChange,
	onBlur,
	error,
	placeholder,
	pattern,
	required = false,
	type = 'text',
	as = 'input',
	maxLength,
	spellCheck,
}: FormInputProps) => {
	const inputClasses = `mt-1 p-2 w-full border border-colorMediumDark bg-input-field-bg rounded-md shadow-box-shadow-dark text-slate-50 focus-visible:outline-none focus-within:outline-none
    ${error ? 'border-error ring-error ring-2' : ''}
    ${value && !error ? 'border-success ring-success ring-2' : ''}`;

	return as === 'input' ? (
		<input
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			placeholder={placeholder}
			required={required}
			type={type}
			className={inputClasses}
			pattern={pattern}
			maxLength={maxLength}
			spellCheck={spellCheck}
		/>
	) : (
		<textarea
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			placeholder={placeholder}
			required={required}
			className={inputClasses}
			maxLength={maxLength}
			spellCheck={spellCheck}
		/>
	);
};
