# CP1 Task Sheet — Repository Setup

**Time target:** 25–30 minutes

Checkpoint 1 tests both **repository creation** and **repository modification**. You must create the repository yourself first, then clone it and improve it locally.

## 1. Create the repository yourself

On GitHub, choose **New repository** and create a new **Public** repository in your own account.

Name it exactly:

```text
cp1-repository-setup-YOUR-GITHUB-USERNAME
```

Example:

```text
cp1-repository-setup-octocat
```

Requirements:

- owner: your own GitHub account;
- visibility: **Public**;
- initialize with a `README.md`;
- do **not** fork another repository;
- do **not** use a template repository.

The initial README gives the new repository its first commit and a `main` branch.

## 2. Clone the repository

Clone the repository to your computer and enter the repository folder.

Before changing anything, inspect the repository state with:

```bash
git status
```

## 3. Modify the repository locally

Your finished repository must contain all three of these files at the repository root:

```text
README.md
.gitignore
LICENSE
```

### README.md

Modify the initial README into a useful project README. It must include:

- an H1 project title;
- a clear explanation of the repository;
- a **Setup**, **Usage**, **Getting Started**, **Installation**, or **How to Run** section;
- at least one useful instruction another developer could follow.

### .gitignore

Create a real `.gitignore` appropriate for your project. It must contain at least one non-comment ignore rule, for example:

```text
node_modules/
.env
.DS_Store
dist/
```

### LICENSE

Add the complete text of a real open-source license such as MIT, Apache-2.0, or GPL-3.0.

## 4. Commit the modification

Use `git status` to inspect your changes, then stage, commit, and push them to `main`.

Your repository must have **at least two commits**:

```text
Commit 1 — repository creation / initial README
Commit 2+ — your repository setup modifications
```

This requirement distinguishes **creating** a repository from **modifying** an existing repository.

CP1 does **not** assess feature branches or Pull Requests. Those begin in CP2.

## 5. Before you submit

- [ ] I created the repository manually with GitHub **New repository**.
- [ ] Repository name is exactly `cp1-repository-setup-YOUR-GITHUB-USERNAME`.
- [ ] Repository is Public.
- [ ] Repository belongs to my GitHub account.
- [ ] I did not use a template or fork.
- [ ] I cloned the repository to my computer.
- [ ] I modified the initial `README.md` locally.
- [ ] I created a meaningful `.gitignore`.
- [ ] I added a complete `LICENSE`.
- [ ] The repository has at least two commits.
- [ ] I pushed my changes to GitHub.
- [ ] I did not commit passwords, tokens, API keys, or other secrets.

## 6. Submit CP1

[![Submit CP1](https://img.shields.io/badge/SUBMIT%20CP1-%E2%86%92-0969da?style=for-the-badge&logo=github)](https://github.com/KLIS-CS/GitHub-Repository-Setup/issues/new?template=cp1-submission.yml)

The submission form asks for your repository URL, GitHub username, short explanations of your README / `.gitignore` / LICENSE decisions, and one reflection.

After submission:

```text
Automatic grader → /60
Teacher file review → README + .gitignore + LICENSE
Teacher /manual-grade → /40
Final → /100
```

[Open the CP1 assessment repository](https://github.com/KLIS-CS/GitHub-Repository-Setup)
