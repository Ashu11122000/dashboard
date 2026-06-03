import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
                <h1 className="text-3xl font-bold text-center mb-8">
                    Counter Application
                </h1>

                <div className="text-center">
                    <p className="text-6xl font-bold text-blue-600 mb-8">
                        {count}
                    </p>

                    <div className="flex justify-center gap-4">
            
                    <button
                        onClick={handleDecrement}
                        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                        -1
                    </button>

                    <button
                        onClick={handleReset}
                        className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
                    >
                        Reset
                    </button>

                    <button
                        onClick={handleIncrement}
                        className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        +1
                    </button>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Counter;