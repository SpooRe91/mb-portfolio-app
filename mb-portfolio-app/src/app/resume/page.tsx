'use client';
import { LinkedIn, GitHub, TextCard } from '@UI';
import { useExtractText } from '@CommonImports';
import Link from 'next/link';

const Resume: React.FC = () => {
	const { keyToText } = useExtractText();

	return (
		<div className="mx-auto max-w-screen-lg rounded-lg p-6 pb-[15rem] shadow-lg sm:min-h-screen-h-sm sm:pt-[5rem] md:min-h-screen-h-md">
			<div className="h-full w-full rounded-[10px] bg-bg-transparent-black-main p-[1rem]">
				<div className="mb-8 text-center">
					<h1 className="text-4xl font-bold text-colorMedLightBlue">
						{keyToText('RESUME.NAME') as string}
					</h1>
					<p className="text-lg text-[#a2c9fc]">
						{keyToText('RESUME.TITLE') as string}
					</p>
					<p className="text-sm text-white">
						{keyToText('RESUME.LOCATION') as string}
					</p>

					{/* Links with MUI icons */}
					<div className="mt-4 flex justify-center space-x-4">
						<Link
							className="flex items-center text-colorMediumLight underline"
							href="https://linkedin.com/in/mbogdanov9110"
							passHref
						>
							<LinkedIn className="mr-1" />{' '}
							{keyToText('RESUME.LINKEDIN_LINK') as string}
						</Link>
						<Link
							className="flex items-center text-colorMediumLight underline"
							href="https://github.com/SpooRe91"
							passHref
						>
							<GitHub className="mr-1" />{' '}
							{keyToText('RESUME.GITHUB_LINK') as string}
						</Link>
					</div>
				</div>

				{/* Work Experience */}
				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-semibold text-colorMedLightBlue">
						{keyToText('RESUME.WORK_EXPERIENCE') as string}
					</h2>

					<TextCard
						title={
							keyToText('RESUME.JUNIOR_FRONTEND_TITLE') as unknown as string
						}
						text={keyToText('RESUME.JUNIOR_FRONTEND_DESC') as string}
						titleClassName="text-xl font-semibold text-[#a2c9fc]"
						textClassName="text-[#a2c9fc]"
					/>
					<ul className="mx-auto my-[1rem] list-disc text-[#90cb86]">
						{(
							(keyToText(
								'RESUME.JUNIOR_FRONTEND_RESPONSIBILITIES'
							) as string[]) || []
						).map((item: string, index: number) => (
							<li key={index}>{item}</li>
						))}
					</ul>

					<TextCard
						title={
							keyToText(
								'RESUME.PAYMENT_TEAM_SUPERVISOR_TITLE'
							) as unknown as string
						}
						text={keyToText('RESUME.PAYMENT_TEAM_SUPERVISOR_DESC') as string}
						titleClassName="text-xl font-semibold text-[#a2c9fc]"
						textClassName="text-[#a2c9fc]"
					/>
					<ul className="mx-auto my-[1rem] list-disc text-[#90cb86]">
						{(
							(keyToText(
								'RESUME.PAYMENT_TEAM_SUPERVISOR_RESPONSIBILITIES'
							) as string[]) || []
						).map((item: string, index: number) => (
							<li key={index}>{item}</li>
						))}
					</ul>

					<TextCard
						title={
							keyToText('RESUME.CUSTOMER_SERVICE_TITLE') as unknown as string
						}
						text={keyToText('RESUME.CUSTOMER_SERVICE_DESC') as string}
						titleClassName="text-xl font-semibold text-[#a2c9fc]"
						textClassName="text-[#a2c9fc]"
					/>
					<ul className="mx-auto my-[1rem] list-disc text-[#90cb86]">
						{(
							(keyToText(
								'RESUME.CUSTOMER_SERVICE_RESPONSIBILITIES'
							) as string[]) || []
						).map((item: string, index: number) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>

				{/* Education */}
				<section className="mb-8 flex flex-col gap-[1rem]">
					<h2 className="mb-4 text-2xl font-semibold text-colorMedLightBlue">
						{keyToText('RESUME.EDUCATION') as string}
					</h2>

					<TextCard
						title={
							keyToText('RESUME.JAVASCRIPT_WEB_DEV_TITLE') as unknown as string
						}
						containerClassName="flex flex-col gap-[0.5rem]"
						text={keyToText('RESUME.JAVASCRIPT_WEB_DEV_DESC') as string}
						titleClassName="text-xl font-semibold text-[#a2c9fc]"
						textClassName="text-[#90cb86]"
					/>

					<TextCard
						title={
							keyToText('RESUME.HOTEL_MANAGEMENT_TITLE') as unknown as string
						}
						text={keyToText('RESUME.HOTEL_MANAGEMENT_DESC') as string}
						containerClassName="flex flex-col gap-[0.5rem]"
						titleClassName="text-xl font-semibold text-[#a2c9fc]"
						textClassName="text-[#90cb86]"
					/>
				</section>

				{/* Technical Skills */}
				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-semibold text-colorMedLightBlue">
						{keyToText('RESUME.TECHNICAL_SKILLS') as string}
					</h2>
					<div className="grid gap-4 font-semibold text-[#90cb86] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{(
							(keyToText('RESUME.TECHNICAL_SKILLS_LIST') as string[]) || []
						).map((skill: string, index: number) => (
							<p key={index} className="text-[#90cb86]">
								{skill}
							</p>
						))}
					</div>
				</section>

				{/* Certificates & Recommendations */}
				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-semibold text-colorMedLightBlue">
						{keyToText('RESUME.CERTIFICATES') as string}
					</h2>
					<Link
						className="text-colorMediumLight underline"
						href="https://drive.google.com/drive/folders/15ph-4P-49KmEBNtvA9Wcxr3OgOwIRSTx"
					>
						Software University Certificates
					</Link>
					<br />
					<Link
						className="mt-2 inline-block text-colorMediumLight underline"
						href="https://www.linkedin.com/in/mbogdanov9110/details/recommendations/"
					>
						Recommendations
					</Link>
				</section>

				{/* Languages */}
				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-semibold text-colorMedLightBlue">
						{keyToText('RESUME.LANGUAGES') as string}
					</h2>
					<div className="text-[#a2c9fc]">
						<p className="text-[#90cb86]">Bulgarian</p>
						<p className="text-[#90cb86]">English</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Resume;
