'use strict';

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractSection(body, label) {
  const escaped = escapeRegex(label);
  const re = new RegExp(`### ${escaped}\\s*\\n+([\\s\\S]*?)(?=\\n### |$)`, 'i');
  const value = body?.match(re)?.[1]?.trim() || '';
  return value === '_No response_' ? '' : value;
}

function parseRepoUrl(url) {
  const m = (url || '').trim().match(/^https:\/\/github\.com\/([^/\s]+)\/([^/#?\s]+?)(?:\.git)?\/?$/i);
  if (!m) return null;
  return { owner: m[1], repo: m[2].replace(/\.git$/i, '') };
}

function evaluateSubmission({ meta, readme = '', gitignore = '', license = '', issueBody = '', student }) {
  const repositoryUrl = extractSection(issueBody, 'Practice Repository URL');
  const statedUsername = extractSection(issueBody, 'GitHub Username').replace(/^@/, '').trim();
  const readmeAnswer = extractSection(issueBody, 'README Explanation');
  const gitignoreAnswer = extractSection(issueBody, '.gitignore Explanation');
  const licenseAnswer = extractSection(issueBody, 'LICENSE Explanation');
  const reflection = extractSection(issueBody, 'Reflection');
  const integrity = extractSection(issueBody, 'Integrity Check');
  const parsed = parseRepoUrl(repositoryUrl);

  const expectedRepo = `cp1-repository-setup-${student}`;
  const officialTemplate = 'klis-cs/github-repository-setup';
  const templateSource = meta?.template_repository?.full_name?.toLowerCase() || '';

  const repoAccessible = Boolean(meta && meta.private === false);
  const ownerMatches = Boolean(
    meta &&
    meta.owner?.login?.toLowerCase() === student.toLowerCase() &&
    statedUsername.toLowerCase() === student.toLowerCase()
  );
  const nameMatches = Boolean(meta && meta.name?.toLowerCase() === expectedRepo.toLowerCase());
  const sourceAllowed = Boolean(
    meta &&
    meta.fork === false &&
    (!templateSource || templateSource === officialTemplate)
  );
  const mainIsDefault = Boolean(meta && (meta.default_branch || '').toLowerCase() === 'main');

  const starterReadmePresent = /CP1-STARTER-README/i.test(readme);
  const readmeExists = Boolean(readme.trim());
  const readmeStructured = !starterReadmePresent && readme.trim().length >= 120 && /^#\s+\S/m.test(readme);
  const readmeHasSetup = !starterReadmePresent && /^#{1,3}\s+(setup|usage|getting started|installation|how to run)\b/im.test(readme);

  const ignoreExists = Boolean(gitignore.trim());
  const ignoreRules = gitignore
    .split(/\r?\n/)
    .map(x => x.trim())
    .filter(x => x && !x.startsWith('#'));
  const ignoreMeaningful = ignoreRules.length > 0;

  const licenseExists = Boolean(license.trim());
  const licenseSubstantial = license.trim().length >= 400 && /(copyright|permission|license|licensed)/i.test(license);

  const answerChecks = [
    ['README explanation', readmeAnswer, 2],
    ['.gitignore explanation', gitignoreAnswer, 2],
    ['LICENSE explanation', licenseAnswer, 3],
    ['Reflection', reflection, 3]
  ];
  const answerScore = answerChecks.reduce(
    (sum, [, text, pts]) => sum + (text.trim().length >= 40 ? pts : 0),
    0
  );

  const repoSetupScore =
    (repoAccessible ? 3 : 0) +
    (ownerMatches ? 3 : 0) +
    (nameMatches ? 3 : 0) +
    (sourceAllowed ? 3 : 0) +
    (mainIsDefault ? 3 : 0);

  const readmeScore =
    (readmeExists ? 5 : 0) +
    (readmeStructured ? 5 : 0) +
    (readmeHasSetup ? 5 : 0);

  const ignoreScore = (ignoreExists ? 5 : 0) + (ignoreMeaningful ? 5 : 0);
  const licenseScore = (licenseExists ? 5 : 0) + (licenseSubstantial ? 5 : 0);

  const repoDetail = !parsed ? 'Enter the full repository URL, not a README or file URL.' :
    !repoAccessible ? 'Repository not found or not public.' :
    !ownerMatches ? `Repository and submitted username must belong to @${student}.` :
    !nameMatches ? `Repository must be named ${expectedRepo}.` :
    !sourceAllowed ? 'Use the official KLIS-CS CP1 Copy Exercise; forks and unrelated templates are not accepted.' :
    !mainIsDefault ? 'CP1 must use main as the default branch.' :
    templateSource === officialTemplate ? 'Official CP1 Copy Exercise detected; repository is public, correctly named, student-owned, and uses main.' :
    'Approved CP1 repository detected; repository is public, correctly named, student-owned, and uses main.';

  const checks = [
    ['Repository setup', repoSetupScore, 15, repoDetail],
    ['README.md', readmeScore, 15,
      !readmeExists ? 'README.md was not found at repository root.' :
      starterReadmePresent ? 'Replace the copied CP1 starter README with your own README.' :
      !readmeStructured ? 'Add an H1 title and at least 120 characters of useful content.' :
      !readmeHasSetup ? 'Add a Setup, Usage, Getting Started, Installation, or How to Run section.' :
      'README structure passed automatic checks.'],
    ['.gitignore', ignoreScore, 10,
      !ignoreExists ? '.gitignore was not found at repository root.' :
      !ignoreMeaningful ? 'Add at least one non-comment ignore rule.' :
      `${ignoreRules.length} ignore rule(s) detected.`],
    ['LICENSE', licenseScore, 10,
      !licenseExists ? 'LICENSE was not found at repository root.' :
      !licenseSubstantial ? 'LICENSE appears incomplete; use full license text.' :
      'Substantial license text detected.'],
    ['Written explanations', answerScore, 10,
      answerScore === 10 ? 'All four responses contain substantive answers.' :
      'Each explanation should contain at least about two complete sentences.']
  ];

  return {
    repositoryUrl,
    statedUsername,
    parsed,
    integrityConfirmed: /\[x\]/i.test(integrity),
    checks,
    automatic: checks.reduce((sum, [, score]) => sum + score, 0)
  };
}

module.exports = {
  extractSection,
  parseRepoUrl,
  evaluateSubmission
};
