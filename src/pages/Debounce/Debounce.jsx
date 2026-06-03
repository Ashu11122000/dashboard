import { useState } from "react";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import useDebounce from "../../hooks/useDebounce";

const Debounce = () => {
    const [search, setSearch] = useState("");

    const debouncedSearch = useDebounce(search, 500);

    return (
        <Card>
            <h1 className="text-3xl font-bold mb-6">
                Debounced Search
            </h1>

            <Input
                placeholder="Type something..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="mt-6">
                <p>Current Value: {search || "-"}</p>
                <p>Debounced Value: {debouncedSearch || "-"}</p>
            </div>
        </Card>
    );
};

export default Debounce;