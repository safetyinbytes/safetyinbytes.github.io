import {Link} from "react-router-dom";

export const Index = () => {
    return (
        <div className="flex text-7xl justify-center items-center h-screen flex-col gap-8">
            <p>Safety in Bytes</p>
            <Link to="/call-for-participation" className="text-3xl hover:underline">Call For Papers</Link>
        </div>
    );
}