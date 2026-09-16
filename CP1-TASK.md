# CP1 Task Sheet — Repository Setup

**Time target:** 25 minutes

## 1. Create the repository yourself

Go to **GitHub → New repository**. Do not use a template and do not fork another repository.

Create a **Public** repository in your own account named exactly:

```text
cp1-repository-setup-YOUR-GITHUB-USERNAME
```

During repository creation:

- add a `README.md`;
- choose an appropriate `.gitignore` template;
- choose a real open-source `LICENSE`.

This step assesses whether you can make the repository-setup decisions yourself.

## 2. Clone and inspect it locally

Clone the repository to your computer. Then inspect the repository state before changing anything.

```bash
git status
```

You should know which repository you cloned and what branch you are on before making changes.

## 3. Modify the repository locally

Your finished repository must contain:

```text
README.md
.gitignore
LICENSE
```

### README.md

Improve the README so it includes:

- an H1 project title;
- a clear explanation of the repository;
- a **Setup**, **Usage**, **Getting Started**, **Installation**, or **How to Run** section;
- at least one useful instruction another developer could follow.

### .gitignore

Review the `.gitignore` created during repository setup. Keep or modify it so it contains at least one meaningful ignore rule appropriate for the project.

### LICENSE

Confirm that the repository contains the complete text of the open-source license you selected and that you can explain what the license permits or requires.

## 4. Commit and push your local modification

Use the normal local Git workflow:

```text
git status
→ git add
→ git status
→ git commit
→ git push
```

Your repository should show a meaningful commit produced after the initial repository creation.

CP1 does **not** assess feature branches or Pull Requests. Those begin in CP2.

## 5. Before you submit

- [ ] I created the repository myself with **GitHub → New repository**
- [ ] Repository name is exactly `cp1-repository-setup-YOUR-GITHUB-USERNAME`
- [ ] Repository is Public
- [ ] Repository belongs to my GitHub account
- [ ] Repository is not a fork and was not created with **Use this template**
- [ ] `README.md` is useful and complete
- [ ] `.gitignore` contains at least one real ignore rule
- [ ] `LICENSE` contains complete license text
- [ ] I cloned the repository locally and made a meaningful modification
- [ ] I committed and pushed that modification
- [ ] No passwords, tokens, API keys, or secrets were committed

## 6. Submit CP1

[![Submit CP1](https://img.shields.io/badge/SUBMIT%20CP1-%E2%86%92-0969da?style=for-the-badge&logo=github)](https://github.com/KLIS-CS/GitHub-Repository-Setup/issues/new?template=cp1-submission.yml)

The central submission form asks for your repository URL, GitHub username, short explanations of your README / `.gitignore` / LICENSE decisions, and one reflection.

After submission:

```text
Automatic grader → /60
Teacher review → /40
Final → /100
```
