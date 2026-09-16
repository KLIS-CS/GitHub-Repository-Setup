# CP1 — GitHub Repository Setup

CP1 tests whether you can **create and configure a GitHub repository from scratch**, then clone it locally, modify it, commit, and push your changes.

## Start CP1 — do NOT copy this repository

This KLIS-CS repository is the **instruction and grading portal only**. Your assessed repository must be created by you from **GitHub → New repository**.

Create a new **Public** repository in your own GitHub account named exactly:

```text
cp1-repository-setup-YOUR-GITHUB-USERNAME
```

Example:

```text
cp1-repository-setup-octocat
```

When creating it on GitHub, configure the repository yourself:

- add a `README.md`;
- choose an appropriate `.gitignore` template;
- choose a real open-source `LICENSE`.

Do **not** use **Use this template** and do not fork another repository. The point of CP1 is to prove that you can create the repository yourself.

## Student flow

```text
GitHub → New repository
→ name it correctly
→ add README + .gitignore + LICENSE
→ Create repository
→ git clone the repository locally
→ inspect with git status
→ improve README.md
→ review / modify .gitignore if needed
→ git add
→ git commit
→ git push to main
→ Submit CP1
→ Automatic grading
→ Teacher grading
```

This checkpoint deliberately includes **both creation and modification**. Creating the repository in the GitHub UI is only the first half; you must also clone it and make a meaningful local change before submission.

## Required finished repository

Your repository root must contain:

```text
README.md
.gitignore
LICENSE
```

### README.md

Your final README must include:

- an H1 project title;
- a clear explanation of what the repository is for;
- a **Setup**, **Usage**, **Getting Started**, **Installation**, or **How to Run** section;
- at least one useful instruction another developer could follow.

### .gitignore

Your `.gitignore` must contain at least one real ignore rule appropriate for the project. You may start with a GitHub `.gitignore` template, but you should understand and adjust it if needed.

### LICENSE

Your repository must contain the complete text of a real open-source license such as MIT, Apache-2.0, or GPL-3.0.

## Local modification requirement

After the repository is created, clone it to your computer and make at least one meaningful local modification, such as improving the README or adding an appropriate `.gitignore` rule.

Use Git locally to save and publish the modification:

```text
git status
→ git add
→ git commit
→ git push
```

CP1 does **not** assess feature branches or Pull Requests. Those begin in CP2.

## Submit CP1

When the repository is complete, use the central submission form:

[![Submit CP1](https://img.shields.io/badge/SUBMIT%20CP1-%E2%86%92-0969da?style=for-the-badge&logo=github)](https://github.com/KLIS-CS/GitHub-Repository-Setup/issues/new?template=cp1-submission.yml)

The automatic grader inspects your public repository. The teacher then reviews your repository choices and explanations.

## Scoring

| Evidence | Points |
|---|---:|
| Public, correctly named, student-owned repository created from scratch | 15 |
| Finished `README.md` | 15 |
| `.gitignore` | 10 |
| `LICENSE` | 10 |
| Submission explanations | 10 |
| **Automatic subtotal** | **60** |
| Teacher review | **40** |
| **Final** | **100** |

[Back to GitHub Foundations Hub](https://github.com/KLIS-CS/GitHub-Foundations)
