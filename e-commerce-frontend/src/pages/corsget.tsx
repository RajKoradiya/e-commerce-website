import { useState } from "react";

interface ApiResponse {
  message: string;
}

const TestCors: React.FC = () => {
  const [getResponse, setGetResponse] = useState<ApiResponse | null>(null);

  const apiBase = process.env.NEXT_PUBLIC_API_BASE;

  const testGetAPI = async () => {
    try {
      const response = await fetch(`${apiBase}/corsget`);
      if (!response.ok) throw new Error("Failed to fetch get api");
      const data: ApiResponse = await response.json();
      setGetResponse(data);
    } catch (error) {
      console.log("error while fetch", error);
    }
  };

  return (
    <div className="p-4">
      <h1>Test Cors connection</h1>

      {/* get Response */}

      <button
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
        onClick={testGetAPI}
      >
        Test GET API
      </button>
      {getResponse && (
        <p className="mt-2">Response Message: {getResponse.message}</p>
      )}
    </div>
  );
};

export default TestCors;
