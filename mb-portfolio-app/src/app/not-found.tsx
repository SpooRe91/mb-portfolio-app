import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen-h-md sm:min-h-screen-h-sm bg-bg-transparent-black-tretriary text-colorLight">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8">Page Not Found</p>
            <Link href="/">
                <p className="px-4 py-2 bg-colorMedLightBlue text-licorice rounded-md shadow-lg hover:bg-greenHover transition-all duration-300">
                    Go Back Home
                </p>
            </Link>
        </div>
    );
};

export default NotFoundPage;
