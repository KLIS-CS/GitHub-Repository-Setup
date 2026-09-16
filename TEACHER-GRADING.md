# Teacher Grading — Checkpoint 1

Checkpoint 1 is an **issue-based assessment**, not a branch/PR exercise. Students create a separate public practice repository from scratch and submit its URL through the CP1 Issue Form.

Final score: **60 automatic + 40 teacher-reviewed = 100**.

## What the automatic grader verifies — 60 points

The grader checks the public practice repository linked in the student's submission Issue.

| Check | Points |
|---|---:|
| Repository is public, owned by the student, not a fork/template copy, and uses the required name | 15 |
| README has a heading, useful content, and a setup/usage-style section | 15 |
| `.gitignore` contains at least one real ignore rule | 10 |
| LICENSE contains substantial license text | 10 |
| All written submission responses are complete | 10 |
| **Automatic subtotal** | **60** |

## Manual Rubric — 40 points

| Category | Full-credit evidence | Points |
|---|---|---:|
| README quality | Clear title, purpose, organization, and a useful setup/usage instruction | 10 |
| `.gitignore` judgment | Rules are appropriate for the project and the explanation shows understanding of what should not be tracked | 10 |
| LICENSE understanding | A real license is present and the student accurately explains what it communicates to other developers | 10 |
| Reflection and repository judgment | Responses are specific, accurate, and connected to the repository the student created | 10 |
| **Total** |  | **40** |

## Entering the Teacher Grade

Open the student's **CP1 Submission Issue** and add a comment containing:

```text
/manual-grade 36

README: 9/10
.gitignore: 9/10
LICENSE: 9/10
Reasoning: 9/10

Feedback: ...
```

The newest valid `/manual-grade 0-40` comment from an approved grader is used. The workflow automatically recalculates and updates the score comment in the same Issue.

## Recommended teacher check

Before entering the manual grade, open the submitted repository and verify that the student actually made reasonable choices rather than merely satisfying the automatic text checks. In particular, look at the README organization, whether `.gitignore` rules make sense, and whether the license choice is understood.
