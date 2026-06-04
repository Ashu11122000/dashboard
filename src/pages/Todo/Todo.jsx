import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Todo = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (!task.trim()) return;

        const newTodo = {
            id: Date.now(),
            text: task.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setTask("");
    };

    const handleToggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Todo Application
                </h1>

                <div className="flex gap-3 mb-6">
                    <Input
                        type="text"
                        placeholder="Enter a task..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />

                    <Button
                        onClick={handleAddTodo}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        Add
                    </Button>
                </div>

                {todos.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No tasks added yet.
                    </p>
                ) : (
                    <div className="space-y-3">
                        {todos.map((todo) => (
                            <div
                                key={todo.id}
                                    className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                            >
                                <p
                                    onClick={() => handleToggleTodo(todo.id)}
                                        className={`flex-1 cursor-pointer ${
                                        todo.completed
                                        ? "line-through text-gray-500"
                                        : "text-gray-800"
                                    }`}
                                >
                                    {todo.text}
                                </p>

                                <Button
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    className="bg-red-500 hover:bg-red-600"
                                >
                                    Delete
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Todo;