```javascript
import React, { useState } from 'react';

function PullBranch() {
    const [branchName, setBranchName] = useState('');

    const handlePullBranch = () => {
        // Use fetch or axios to call the backend API 
        fetch('/api/pull-branch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ owner: 'user', repo: 'repo', branch_name: branchName })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Branch pulled and feedback read!');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter Branch Name" 
                value={branchName} 
                onChange={(e) => setBranchName(e.target.value)} 
            />
            <button onClick={handlePullBranch}>Pull Branch</button>
        </div>
    );
}

export default PullBranch;
```