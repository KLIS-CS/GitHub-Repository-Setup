# CP1 — GitHub Repository Setup

Checkpoint 1 tests two separate skills:

1. **Create** a GitHub repository yourself from the GitHub **New repository** screen.
2. **Modify** that repository locally so it becomes a usable project repository.

Do **not** use a template repository and do **not** fork another repository for CP1.

## Required repository

Create a new **Public** repository in your own GitHub account named exactly:

```text
cp1-repository-setup-YOUR-GITHUB-USERNAME
```

Example:

```text
cp1-repository-setup-octocat
```

When creating it on GitHub, initialize it with a `README.md` so the repository has a `main` branch that you can clone.

## Student flow

```text
GitHub → New repository
→ create the repository yourself
→ initialize with README.md
→ clone it to your computer
→ modify README.md
→ create .gitignore
→ add LICENSE
→ git status
→ git add
→ git commit
→ git push
→ submit CP1
→ automatic grading
→ teacher grading
```

This is intentional: CP1 should prove that you can both **build** a repository and **change** it after creation.

## What you must modify or add

### README.md

Replace the initial README content with a useful project README containing:

- an H1 project title;
- a clear explanation of what the repository is for;
- a **Setup**, **Usage**, **Getting Started**, **Installation**, or **How to Run** section;
- at least one useful instruction another developer could follow.

### .gitignore

Create a real `.gitignore` appropriate for your project. It must contain at least one non-comment ignore rule such as:

```text
node_modules/
.env
.DS_Store
dist/
```

### LICENSE

Add the complete text of a real open-source license such as MIT, Apache-2.0, or GPL-3.0.

## Required modification evidence

Your repository must show that it was created first and then modified afterward. The automatic grader therefore expects **at least two commits** on the repository:

```text
Commit 1 — repository created / initial README
Commit 2+ — your local repository setup changes
```

Use `git status` while working, then commit and push your completed changes to `main`.

CP1 does **not** assess feature branches or Pull Requests. Those begin in CP2.

Full instructions: [CP1-TASK.md](./CP1-TASK.md)

## Submit CP1

When the repository is complete, use the central submission form:

[![Submit CP1](https://img.shields.io/badge/SUBMIT%20CP1-%E2%86%92-0969da?style=for-the-badge&logo=github)](https://github.com/KLIS-CS/GitHub-Repository-Setup/issues/new?template=cp1-submission.yml)

The central submission Issue is where:

- the automatic grader inspects your public repository;
- the teacher sees direct links and previews for your `README.md`, `.gitignore`, and `LICENSE`;
- the teacher enters the 40-point manual score.

## Scoring

| Evidence | Points |
|---|---:|
| Correct public student-owned repository created from scratch | 10 |
| Evidence that the repository was modified after creation | 5 |
| Finished `README.md` | 15 |
| `.gitignore` | 10 |
| `LICENSE` | 10 |
| Submission explanations | 10 |
| **Automatic subtotal** | **60** |
| Teacher review | **40** |
| **Final** | **100** |

[Back to GitHub Foundations Hub](https://github.com/KLIS-CS/GitHub-Foundations)
