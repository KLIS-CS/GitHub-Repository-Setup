# Checkpoint 1 — GitHub Repository Setup

## Goal

Prove that you can create a new GitHub repository from scratch and configure the three files every professional project should start with:

```text
README.md
.gitignore
LICENSE
```

**CP1 intentionally does not test `git clone`, branches, commits, pushes, or Pull Requests.** Those skills begin in CP2. This checkpoint is only about setting up a repository correctly in GitHub and explaining your decisions.

## What you must create

Create a **new public practice repository in your own GitHub account** with this exact name:

```text
cp1-repository-setup-YOUR-GITHUB-USERNAME
```

Example:

```text
cp1-repository-setup-octocat
```

Do **not** fork another repository and do **not** generate this repository from a template. The purpose of CP1 is to prove that you can create a repository yourself.

When creating the repository on GitHub:

1. Make it **Public** so the automatic grader can inspect it.
2. Initialize it with a `README.md`.
3. Add a real `.gitignore` appropriate for a development project. For JavaScript work, the **Node** template is a good choice. You may also add rules such as `.env` or `.DS_Store` when appropriate.
4. Add a real open-source `LICENSE` using GitHub's license chooser. MIT, Apache-2.0, and GPL-3.0 are all acceptable for this practice checkpoint.

> Do not put passwords, API keys, tokens, or other secrets in this practice repository.

## Repository requirements

### `README.md`

Your README must include:

- a clear project title using a Markdown heading;
- a short explanation of what the practice repository is for;
- a **Setup**, **Usage**, **Getting Started**, or **Installation** section;
- at least one useful instruction a new developer could follow.

### `.gitignore`

Your `.gitignore` must contain at least one real ignore rule. Examples include:

```text
node_modules/
.env
.DS_Store
dist/
```

### `LICENSE`

Your `LICENSE` must contain the complete license text, not just the name of a license.

## Submit your checkpoint

After your practice repository is ready, submit it through the CP1 submission form:

[![Submit CP1](https://img.shields.io/badge/Submit%20CP1-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/KLIS-CS/GitHub-Repository-Setup/issues/new?template=cp1-submission.yml)

The submission form asks for your practice repository URL and four short explanations. When you submit the Issue, GitHub Actions automatically checks the repository and posts a live score in that same Issue.

You can fix your practice repository and then edit the submission Issue to trigger grading again.

## Scoring

### Automatic evidence — 60 points

| Check | Points |
|---|---:|
| Public repository exists, belongs to you, is not a fork/template copy, and uses the required name | 15 |
| `README.md` exists and has meaningful structure | 15 |
| `.gitignore` exists and contains a real ignore rule | 10 |
| `LICENSE` exists and contains substantial license text | 10 |
| Submission explanations are complete | 10 |
| **Automatic subtotal** | **60** |

### Teacher review — 40 points

The teacher reviews the quality of your README, `.gitignore` decisions, license explanation, and reflection.

**Final score = automatic 60 + teacher 40 = 100.**

## What CP1 is testing

By the end of this checkpoint you should be able to answer:

- Why does a repository need a README?
- What belongs in `.gitignore`, and why?
- What does a software license allow or restrict?
- How do you create a clean repository without relying on an existing template?

## Checkpoint Navigation

| Checkpoint | Skill | Link |
|---|---|---|
| **CP1 — You are here** | Repository Setup | [Open](https://github.com/KLIS-CS/GitHub-Repository-Setup) |
| CP2 | Feature Branch & Pull Request | [Open](https://github.com/KLIS-CS/GitHub-Feature-Branch-Pull-Request-Workflow) |
| CP3 | Issues & Projects | [Open](https://github.com/KLIS-CS/GitHub-Issues-Projects-Workflow) |
| CP4 | Local ↔ Remote | [Open](https://github.com/KLIS-CS/KLIS-CS-Git-Local-Remote-Workflow) |
| CP5 | Final Integrated Challenge | [Open](https://github.com/KLIS-CS/GitHub-Final-Integrated-Challenge) |

[Back to GitHub Foundations Hub](https://github.com/KLIS-CS/GitHub-Foundations)
