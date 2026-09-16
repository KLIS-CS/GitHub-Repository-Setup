# CP1 Task Sheet — Repository Setup

**Time target:** 25 minutes

Keep this page open while you work. CP1 is intentionally different from later checkpoints: you create your own repository from scratch, so this task sheet is **not copied into your student repository**.

## Your task

Create a new **public** GitHub repository in your own account with this exact name:

```text
cp1-repository-setup-YOUR-GITHUB-USERNAME
```

Example:

```text
cp1-repository-setup-octocat
```

Do **not** fork a repository and do **not** generate the repository from a template.

## Required repository setup

Your repository must contain all three of these:

1. `README.md`
2. `.gitignore`
3. `LICENSE`

### README requirements

Your `README.md` must include:

- an H1 project title;
- a short explanation of the repository;
- a **Setup**, **Usage**, **Getting Started**, or **Installation** section;
- at least one useful instruction a new developer could follow.

### .gitignore requirements

Your `.gitignore` must contain at least one real ignore rule appropriate for the project, for example:

```text
node_modules/
.env
.DS_Store
dist/
```

### LICENSE requirements

Use GitHub's license chooser and add a real open-source license such as MIT, Apache-2.0, or GPL-3.0. The `LICENSE` file must contain the complete license text.

## Local clone — optional for CP1

You may clone **your own CP1 repository** if you want to inspect or edit it locally:

```bash
git clone https://github.com/YOUR-USERNAME/cp1-repository-setup-YOUR-GITHUB-USERNAME.git
```

CP1 does **not** require clone, branch, push, or Pull Request skills. Those are assessed later. Because your CP1 repository must be created from scratch, this task sheet will not appear inside the cloned student repository.

## Before you submit

Check all of the following:

- [ ] Repository name exactly matches `cp1-repository-setup-YOUR-GITHUB-USERNAME`
- [ ] Repository is Public
- [ ] Repository belongs to your GitHub account
- [ ] Repository was created from scratch
- [ ] `README.md` meets the requirements
- [ ] `.gitignore` contains a real ignore rule
- [ ] `LICENSE` contains complete license text
- [ ] No passwords, tokens, API keys, or secrets were committed

## Submit CP1

When your repository is ready, click the button below.

[![Submit CP1](https://img.shields.io/badge/SUBMIT%20CP1-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/KLIS-CS/GitHub-Repository-Setup/issues/new?template=cp1-submission.yml)

The submission form asks for:

- your CP1 repository URL;
- your GitHub username;
- short explanations of your README, `.gitignore`, and LICENSE decisions;
- one reflection.

After you submit the Issue, the automatic grader checks the repository and posts your score in the same Issue.

[Back to CP1 overview](https://github.com/KLIS-CS/GitHub-Repository-Setup)
