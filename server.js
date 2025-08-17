```javascript
const express = require('express');
const bodyParser = require('body-parser');
const { Octokit } = require('@octokit/rest');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// Endpoint to pull branch and read feedback
app.post('/api/pull-branch', async (req, res) => {
    const { owner, repo, branch_name } = req.body;
    try {
        // Pull branch logic here using octokit
        // e.g., fetch PR comments and pull the branch
        res.status(200).send('Branch pulled and feedback read.');
    } catch (error) {
        res.status(500).send('Error pulling branch: ' + error.message);
    }
});

// Endpoint to push changes
app.post('/api/push-changes', async (req, res) => {
    const { owner, repo, changes } = req.body;
    try {
        // Logic to push changes back to GitHub
        res.status(200).send('Changes pushed back to GitHub.');
    } catch (error) {
        res.status(500).send('Error pushing changes: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```