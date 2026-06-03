import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";

const Home = () => {
    const features = [
        {
            title: "Counter",
            description: "Learn useState and event handling.",
            route: "/counter",
        },
        {
            title: "Form",
            description: "Practice controlled components and form handling.",
            route: "/form",
        },
        {
            title: "Todo",
            description: "Manage array state with CRUD operations.",
            route: "/todo",
        },
        {
            title: "Debounce",
            description: "Learn useEffect and custom hooks.",
            route: "/debounce",
        },
        {
            title: "Calculator",
            description: "Practice state updates and event handling.",
            route: "/calculator",
        },
        {
            title: "Weather",
            description: "Fetch live weather data using APIs.",
            route: "/weather",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    React Practice Assignment
                </h1>

                <p className="text-lg text-gray-600">
                    Learn React Fundamentals Through Mini Projects
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <Card key={feature.title}>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {feature.title}
                        </h2>

                        <p className="text-gray-600 mb-4">
                            {feature.description}
                        </p>

                        <Link
                            to={feature.route}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Open →
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Home;