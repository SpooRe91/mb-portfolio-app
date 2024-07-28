import ContactForm from "@PortfolioApp/Components/Form/ContactForm";
import TextBlock from "@PortfolioApp/Components/TextBlock/TextBlockComponent";

const Contact = () => {
    return (
        <div className="w-full p-8">
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="md:text-4xl sm:text-xl font-bold text-colorDark mb-8">Contact me</h1>
                <TextBlock
                    className="text-colorMediumDark p-[0.8rem] text-center"
                    titleClassName="sm:text-base md-text-4xl"
                    title="You can send me an e-mail via the form below."
                    content="And I will make sure to look into it as soon as possible!"
                    contentClassName="sm:text-base md-text-4xl"
                />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;