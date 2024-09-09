import {Link} from "react-router-dom";

export const Index = () => {
    return (
        <>
            <div className="lg:bg-geometry flex justify-center text-center lg:text-start items-start mt-20 sm:mt-0 sm:items-center h-full sm:h-screen lg:flex-col lg:pl-72 lg:pb-16">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-7xl">Safety in Bytes</p>
                    <p className="text-xl font-bold">Hochschule RheinMain Wiesbaden, Raum C 102 (hybrid)</p>
                    <p className="text-xl font-bold">26.09.2024</p>
                    <p className="text-xl leading-relaxed lg:w-1/2 px-12 text-justify lg:text-start lg:p-0">
                        Dein Workshop auf dem Informatik Festival 2024: IT-Security am Puls der Zeit. Für junge Menschen und mit Top-Speakern aus Wirtschaft, Politik und Wissenschaft.
                    </p>
                    <div className="mt-4 flex gap-4 px-12 lg:p-0">
                        <Link to="/speaker" className="text-white p-2 text-xl rounded-md bg-gradient-to-r from-purple-500 to-pink-500">
                            Speaker
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
