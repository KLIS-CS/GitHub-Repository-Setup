# CP1 — GitHub Repository Setup

CP1 checks whether you can create and configure a clean GitHub repository with the three required project files:

```text
README.md
.gitignore
LICENSE
```

## Important — CP1 does not use branches or Pull Requests

For CP1, work directly on the repository's default `main` branch.

- No feature branch
- No Pull Request
- No branch naming requirement

Branch and Pull Request workflow begins in CP2.

## Start CP1

Create a new **Public** repository in your own GitHub account using **GitHub → New repository**.

Name it exactly:

```text
cp1-repository-setup-YOUR-GITHUB-USERNAME
```

Example:

```text
cp1-repository-setup-octocat
```

Do not fork another repository and do not use **Use this template**.

## Required files

Your finished repository must contain all three files at the repository root.

### `README.md`

Your README must include:

- an H1 project title;
- a clear explanation of what the repository is for;
- a **Setup**, **Usage**, **Getting Started**, **Installation**, or **How to Run** section;
- at least one useful instruction another developer could follow.

### `.gitignore`

Your `.gitignore` must contain at least one meaningful ignore rule appropriate for the project, such as:

```text
node_modules/
.env
.DS_Store
dist/
```

### `LICENSE`

Your repository must contain the complete text of a real open-source license such as MIT, Apache-2.0, or GPL-3.0.

## Student flow

```text
GitHub → New repository
→ create the correctly named Public repository
→ complete README.md
→ complete .gitignore
→ complete LICENSE
→ save / push the finished files to main
→ Submit CP1
→ Automatic grading /60
→ Teacher review /40
```

You may edit the files directly on GitHub or locally. CP1 does not grade branch workflow.

## Submit CP1

When the three files are finished, submit the repository through the central CP1 submission form:

[![Submit CP1](https://img.shields.io/badge/SUBMIT%20CP1-%E2%86%92-0969da?style=for-the-badge&logo=github)](https://github.com/KLIS-CS/GitHub-Repository-Setup/issues/new?template=cp1-submission.yml)

The submission form asks for the repository URL and short explanations of the three setup decisions.

After submission, the teacher sees the student's repository plus direct links and previews for:

```text
README.md
.gitignore
LICENSE
```

The teacher can therefore review the three files from the CP1 Submission Issue before entering `/manual-grade`.

## Scoring

| Evidence | Points |
|---|---:|
| Public, correctly named, student-owned repository created by the student | 15 |
| `README.md` | 15 |
| `.gitignore` | 10 |
| `LICENSE` | 10 |
| Written explanations | 10 |
| **Automatic subtotal** | **60** |
| Teacher review | **40** |
| **Final** | **100** |

[Open the CP1 Task Sheet](./CP1-TASK.md)

[Back to GitHub Foundations Hub](https://github.com/KLIS-CS/GitHub-Foundations)
