import { Link } from "react-router-dom";

const Card = ({ title, description, route }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
                {title}
            </h2>

            <p className="text-gray-600 mb-5">
                {description}
            </p>

            <Link
                to={route}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Open
            </Link>
        </div>
    );
};

export default Card;