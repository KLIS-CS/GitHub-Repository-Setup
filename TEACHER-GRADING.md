# Teacher Grading — Checkpoint 1

Checkpoint 1 uses the official **Copy Exercise** but does **not** use a feature branch or Pull Request.

Students create their own copy from `KLIS-CS/GitHub-Repository-Setup`, name it:

```text
cp1-repository-setup-YOUR-GITHUB-USERNAME
```

and complete the assessed files directly on the default `main` branch.

Their finished repository must show these three files on `main`:

```text
README.md
.gitignore
LICENSE
```

Final score: **60 automatic + 40 teacher-reviewed = 100**.

## What the automatic grader verifies — 60 points

| Check | Points |
|---|---:|
| Repository is public, student-owned, correctly named, uses `main`, and comes from the approved CP1 source | 15 |
| `README.md` is the student's own finished README, not the copied starter, and includes usable project/setup information | 15 |
| `.gitignore` contains at least one real ignore rule | 10 |
| `LICENSE` contains substantial license text | 10 |
| Written submission responses are complete | 10 |
| **Automatic subtotal** | **60** |

The grader accepts the official CP1 template source and also keeps compatibility with older approved CP1 repositories created before the Copy Exercise flow was restored. Forks and unrelated templates do not receive full repository-setup credit.

## Teacher file review panel

Each CP1 Submission Issue automatically gets a **CP1 Teacher Review Files** comment containing:

- a direct link to the student's repository;
- a direct link to `README.md`;
- a direct link to `.gitignore`;
- a direct link to `LICENSE`;
- collapsible previews of all three files.

This is the main teacher workflow: open the student's CP1 Submission Issue, review the three files there, then enter the manual grade in the same Issue.

## Manual Rubric — 40 points

| Category | Full-credit evidence | Points |
|---|---|---:|
| README quality | Clear title, purpose, organization, and a useful setup/usage instruction | 10 |
| `.gitignore` judgment | Rules are appropriate and the explanation shows understanding | 10 |
| LICENSE understanding | A real license is present and accurately explained | 10 |
| Reasoning / reflection | Explanations are specific, accurate, and connected to the submitted repository | 10 |
| **Total** |  | **40** |

## Entering the Teacher Grade

Use the fixed grading template shown by the bot in the Submission Issue:

```text
/manual-grade
README: 0/10
.gitignore: 0/10
LICENSE: 0/10
Reasoning: 0/10

Feedback:
Write concise feedback here.
```

Replace the four scores and add feedback. The workflow calculates the teacher subtotal and final score automatically.

The older short form is still accepted:

```text
/manual-grade 36
```

CP1 deliberately leaves feature-branch and Pull Request workflow for CP2.
