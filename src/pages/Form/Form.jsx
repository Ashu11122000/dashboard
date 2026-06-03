import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim()) {
            return;
        }

        setSubmittedData({
            name: name.trim(),
            email: email.trim(),
        });

        setName("");
        setEmail("");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-8">
                    User Form
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Name
                        </label>

                        <Input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium text-gray-700">
                            Email
                        </label>

                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                        Submit
                    </Button>
                </form>

                {submittedData && (
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-xl font-semibold mb-3">
                            Submitted Data
                        </h2>

                        <p className="mb-2">
                            <strong>Name:</strong> {submittedData.name}
                        </p>

                        <p>
                            <strong>Email:</strong> {submittedData.email}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Form;