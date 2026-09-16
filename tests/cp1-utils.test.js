'use strict';

const assert = require('assert');
const { extractSection, parseRepoUrl, evaluateSubmission } = require('../.github/scripts/cp1-utils');

const student = 'octocat';
const issueBody = `### Practice Repository URL

https://github.com/octocat/cp1-repository-setup-octocat

### GitHub Username

octocat

### README Explanation

A README explains the purpose of a project and helps another developer understand how to use it. Mine includes a title, project purpose, and a setup section with clear instructions.

### .gitignore Explanation

I ignore dependencies and local environment files because they can be regenerated or may contain machine-specific information. This keeps the repository clean and avoids committing unnecessary files.

### LICENSE Explanation

I chose the MIT License because it clearly allows reuse and modification while preserving the copyright and license notice. It tells other developers the conditions under which they may use the code.

### Reflection

Creating the repository established the remote project and initial main branch, while modifying it required cloning, editing files, checking status, committing, and pushing. The modification step required more judgment because I had to decide what belonged in the README and .gitignore.

### Integrity Check

- [x] I created this repository manually with GitHub New repository; I did not use a template or fork.
- [x] I cloned the repository and made a later modification commit after the initial repository-creation commit.
- [x] I created my own README, .gitignore, and LICENSE choices.
- [x] I did not include passwords, API keys, tokens, or other secrets in the repository.
`;

const meta = {
  private: false,
  fork: false,
  owner: { login: student },
  name: 'cp1-repository-setup-octocat',
  default_branch: 'main'
};

const readme = `# CP1 Repository Setup Practice

This public practice repository demonstrates a clean professional GitHub repository setup for a small JavaScript project. It documents the purpose of the project and gives a new developer enough information to begin using it.

## Setup

Run npm install before starting development, then open the project files in your editor.
`;

const gitignore = `node_modules/\n.env\n.DS_Store\n`;
const license = `MIT License\n\nCopyright (c) 2026 Student\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n`;

assert.deepStrictEqual(parseRepoUrl('https://github.com/octocat/cp1-repository-setup-octocat'), {
  owner: 'octocat',
  repo: 'cp1-repository-setup-octocat'
});
assert.strictEqual(parseRepoUrl('not-a-url'), null);
assert.strictEqual(parseRepoUrl('https://github.com/octocat/repo/blob/main/README.md'), null);
assert.strictEqual(extractSection(issueBody, 'GitHub Username'), 'octocat');

const full = evaluateSubmission({ meta, readme, gitignore, license, commitCount: 2, issueBody, student });
assert.strictEqual(full.automatic, 60, `Expected from-scratch create-and-modify fixture to score 60, got ${full.automatic}`);
assert.strictEqual(full.integrityConfirmed, true);

const oneCommitOnly = evaluateSubmission({
  meta,
  readme,
  gitignore,
  license,
  commitCount: 1,
  issueBody,
  student
});
assert.strictEqual(oneCommitOnly.automatic, 55, 'A single-commit repository must lose the 5 modification-evidence points');

const templateCopy = evaluateSubmission({
  meta: { ...meta, template_repository: { full_name: 'KLIS-CS/GitHub-Repository-Setup' } },
  readme,
  gitignore,
  license,
  commitCount: 2,
  issueBody,
  student
});
assert.ok(templateCopy.automatic < 60, 'Template copies must not receive full CP1 credit');

const wrongOwner = evaluateSubmission({
  meta: { ...meta, owner: { login: 'someone-else' } },
  readme,
  gitignore,
  license,
  commitCount: 2,
  issueBody,
  student
});
assert.ok(wrongOwner.automatic < 60, 'Wrong repository owner must lose points');

const weakFiles = evaluateSubmission({
  meta,
  readme: '# Too short',
  gitignore: '# comments only',
  license: 'MIT',
  commitCount: 2,
  issueBody,
  student
});
assert.ok(weakFiles.automatic <= 40, `Weak repository files should score at most 40, got ${weakFiles.automatic}`);

const forked = evaluateSubmission({
  meta: { ...meta, fork: true },
  readme,
  gitignore,
  license,
  commitCount: 2,
  issueBody,
  student
});
assert.ok(forked.automatic < 60, 'Forked repository must not receive full credit');

console.log('CP1 grader fixture tests passed.');
