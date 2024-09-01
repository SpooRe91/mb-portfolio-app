'use client';
import {
	FormInput,
	GlobalLoader,
	MAX_MESSAGE_LENGTH,
	Notification,
	useContactForm,
	useExtractText,
} from '@CommonImports';
import { Button } from '@UI';

export const ContactForm = () => {
	const {
		status,
		isLoading,
		formData,
		formError,
		isFormDisabled,
		handleClearMessage,
		handleFormCheck,
		handleChange,
		handleSubmit,
	} = useContactForm();

	const { keyToText } = useExtractText();

	return (
		<div className="relative w-full rounded-lg bg-bg-transparent-black-tretriary shadow-md backdrop-blur-[5px] sm:max-w-[500px] md:max-w-[600px] md:p-0">
			{status.error || status.notification ? (
				<Notification
					{...status}
					mainClassName="fixed md:top-[0] right-0"
					secondaryClassname="md:text-[1rem] sm:text-[0.8rem]"
					handleClearMessage={handleClearMessage}
					hasAnimation={true}
				/>
			) : null}
			{isLoading && (
				<div className="p-[1rem 0.8rem] absolute left-0 top-0 min-h-full w-full">
					<GlobalLoader
						loadingText={keyToText('FORM.LOADING_MESSAGE') as string}
						mainClassName="p-[1rem] min-w-full rounded-[8px] absolute h-full"
						secondaryClassName="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full"
						textClassName="text-colorMedLightBlue sm:text-base md:text-xl"
					/>
				</div>
			)}
			<form
				onSubmit={handleSubmit}
				className="space-y-4 rounded-[8px] shadow-box-shadow-border-bottom sm:p-[1rem]"
			>
				<section className="flex w-full text-colorMediumDark sm:flex-col sm:gap-[1rem] md:flex-row md:gap-[2rem]">
					<div className="md:w-full">
						<label htmlFor="firstName" className="block text-colorDark">
							{keyToText('FORM.FIRST_NAME_LABEL') as string}
						</label>
						<FormInput
							id="firstName"
							name="firstName"
							value={formData?.firstName}
							onChange={e => {
								handleChange(e);
								handleFormCheck(e);
							}}
							error={formError.firstName}
							required
						/>
						{formError.firstName && (
							<p className="p-[0.25rem] text-red-600">{'Invalid input!'}</p>
						)}
					</div>
					<div className="sm:w-max-[550px] w-full">
						<label htmlFor="lastName" className="block text-colorDark">
							{keyToText('FORM.LAST_NAME_LABEL') as string}
						</label>
						<FormInput
							id="lastName"
							name="lastName"
							value={formData?.lastName}
							onChange={e => {
								handleChange(e);
								handleFormCheck(e);
							}}
							error={formError.lastName}
							required
						/>
						{formError.lastName && (
							<p className="p-[0.25rem] text-red-600">{'Invalid input!'}</p>
						)}
					</div>
				</section>
				<div>
					<label htmlFor="email" className="block text-colorDark">
						{keyToText('FORM.EMAIL_LABEL') as string}
					</label>
					<FormInput
						id="email"
						name="email"
						value={formData?.email}
						onChange={e => {
							handleChange(e);
							handleFormCheck(e);
						}}
						error={formError.email}
						type="email"
						pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
						required
					/>
					{formError.email && (
						<p className="p-[0.25rem] text-red-600">{'Invalid input!'}</p>
					)}
				</div>
				<div>
					<label htmlFor="message" className="block text-colorDark">
						{keyToText('FORM.MESSAGE_LABEL') as string}
					</label>
					<FormInput
						id="message"
						name="message"
						value={formData?.message}
						onChange={e => {
							handleChange(e);
							handleFormCheck(e);
						}}
						error={formError.message}
						as="textarea"
						maxLength={1000}
						required
						spellCheck={true}
					/>
					<p
						className={`text-left ${formData.message.length === MAX_MESSAGE_LENGTH ? 'text-error' : 'text-success'}`}
					>{`${formData.message.length}/${MAX_MESSAGE_LENGTH}`}</p>
					{formError.message && (
						<p className="p-[0.25rem] text-red-600">{'Invalid input!'}</p>
					)}
				</div>
				{!isFormDisabled && (
					<Button
						type="submit"
						className="w-full rounded-md bg-colorMedLightBlue py-2 text-white hover:bg-colorMediumDark"
						disabled={isFormDisabled}
						variant="contained"
					>
						Send
					</Button>
				)}
			</form>
		</div>
	);
};
