# Teacher Grading — Checkpoint 1

Checkpoint 1 is an **issue-based assessment**, not a branch/PR exercise. Students create a public CP1 repository from the official `KLIS-CS/GitHub-Repository-Setup` template, replace the starter README, create their own `.gitignore`, add a real LICENSE, and submit the repository URL through the central CP1 Issue Form.

Legacy from-scratch CP1 submissions remain accepted by the grader.

Final score: **60 automatic + 40 teacher-reviewed = 100**.

## What the automatic grader verifies — 60 points

| Check | Points |
|---|---:|
| Repository is public, student-owned, correctly named, not a fork/unrelated template | 15 |
| Starter README has been replaced with a meaningful project README | 15 |
| `.gitignore` contains at least one real ignore rule | 10 |
| LICENSE contains substantial license text | 10 |
| All written submission responses are complete | 10 |
| **Automatic subtotal** | **60** |

## Teacher file review panel

Each central CP1 submission Issue automatically gets a **CP1 Teacher Review Files** comment containing:

- a direct link to the student repository;
- direct links to `README.md`, `.gitignore`, and `LICENSE`;
- collapsible previews of all three files.

This lets the teacher review the actual submitted files without searching through the student's GitHub account.

## Manual Rubric — 40 points

| Category | Full-credit evidence | Points |
|---|---|---:|
| README quality | Clear title, purpose, organization, and a useful setup/usage instruction | 10 |
| `.gitignore` judgment | Rules are appropriate for the project and the explanation shows understanding of what should not be tracked | 10 |
| LICENSE understanding | A real license is present and the student accurately explains what it communicates to other developers | 10 |
| Reflection and repository judgment | Responses are specific, accurate, and connected to the repository the student configured | 10 |
| **Total** |  | **40** |

## Entering the Teacher Grade

Every student submission Issue automatically contains a fixed grading template:

```text
/manual-grade
README: 0/10
.gitignore: 0/10
LICENSE: 0/10
Reasoning: 0/10

Feedback:
Write concise feedback here.
```

Copy that block into a **new comment**, replace the scores, and add feedback.

Example:

```text
/manual-grade
README: 9/10
.gitignore: 8/10
LICENSE: 10/10
Reasoning: 9/10

Feedback:
Clear repository setup. The .gitignore choices are mostly appropriate, but explain why each project-specific rule is needed.
```

The workflow calculates the teacher subtotal and combines it with the automatic score.

The older short form remains supported:

```text
/manual-grade 36
```

The fixed four-category template is preferred because it records the rubric breakdown directly in the Issue.
