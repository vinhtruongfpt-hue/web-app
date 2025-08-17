```javascript
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/upload', formData);
      setResponse(res.data);
    } catch (error) {
      setResponse('Error uploading file');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl mb-4">Source Code Analyzer</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2 ml-2">
        Upload
      </button>
      <div className="mt-4">
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default App;