import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);

  const add = () => {
    setResult(Number(firstNumber) + Number(secondNumber));
  };

  const subtract = () => {
    setResult(Number(firstNumber) - Number(secondNumber));
  };

  const multiply = () => {
    setResult(Number(firstNumber) * Number(secondNumber));
  };

  const divide = () => {
    if (Number(secondNumber) === 0) {
      setResult("Cannot divide by zero");
      return;
    }

    setResult(Number(firstNumber) / Number(secondNumber));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Calculator</h1>

        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Enter first number"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
          />

          <Input
            type="number"
            placeholder="Enter second number"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <Button onClick={add} className="bg-blue-600 hover:bg-blue-700">
              Add
            </Button>

            <Button
              onClick={subtract}
              className="bg-green-600 hover:bg-green-700"
            >
              Subtract
            </Button>

            <Button
              onClick={multiply}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              Multiply
            </Button>

            <Button onClick={divide} className="bg-red-600 hover:bg-red-700">
              Divide
            </Button>
          </div>

          {result !== null && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
              <h2 className="text-xl font-semibold">Result: {result}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
