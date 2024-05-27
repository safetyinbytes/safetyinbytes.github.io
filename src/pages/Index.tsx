import {Link} from "react-router-dom";

export const Index = () => {
    return (
        <>
            <div className="lg:bg-geometry flex justify-center text-center lg:text-start items-start mt-20 sm:mt-0 sm:items-center h-full sm:h-screen lg:flex-col lg:pl-72 lg:pb-16">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-7xl">Safety in Bytes</p>
                    <p className="text-xl font-bold">Hochschule RheinMain Wiesbaden</p>
                    <p className="text-xl font-bold">26.09.2024</p>
                    <p className="text-xl leading-relaxed lg:w-1/2 px-12 text-justify lg:text-start lg:p-0">
                        Dieses Jahr findet das nächste Informatik Festival der GI statt
                        und du hast die Möglichkeit einen Workshop im Bereich der IT-Sicherheit
                        mitzugestalten.
                    </p>
                    <div className="mt-4">
                        {/* <Link to="/call-for-participation" className="text-white p-2 text-xl rounded-md bg-gradient-to-r from-purple-500 to-pink-500">
                            Idee einreichen
                        </Link> */ }
                        <Link to="/speaker" className="text-white p-2 text-xl rounded-md bg-gradient-to-r from-purple-500 to-pink-500">
                            Speaker
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}