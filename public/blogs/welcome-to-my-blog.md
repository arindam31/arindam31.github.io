## Introduction

Welcome to my blog! This is a space where I write about **Python**, **test automation**, and building
reliable software systems. After years in QA and backend development, I have a lot to share.

This post also serves as a *feature showcase* — it demonstrates everything this blog renderer supports.

---

## Why I Started Writing

I believe that writing forces clarity. When you explain something in words, you discover the gaps in
your own understanding. The goal is simple: document what I learn, share practical examples, and build
a reference I can point colleagues to.

> "If you can't explain it simply, you don't understand it well enough."
> — Often attributed to Einstein

---

## Python Code Example

Here is a simple function that calculates estimated read time from a block of text:

```python
def estimate_read_time(text: str, words_per_minute: int = 200) -> int:
    """Returns estimated reading time in minutes."""
    word_count = len(text.split())
    minutes = max(1, round(word_count / words_per_minute))
    return minutes


if __name__ == "__main__":
    sample = "This is a sample blog post with several words in it."
    print(f"Estimated read time: {estimate_read_time(sample)} minute(s)")
```

Notice how `estimate_read_time` uses a default parameter of `200` words per minute — a commonly
accepted average reading speed.

---

## Running the Script

To run this locally, assuming you have Python 3.10+:

```bash
# Clone the repo
git clone https://github.com/arindam31/my-scripts.git
cd my-scripts

# Create a virtual environment
python -m venv .venv
source .venv/bin/activate   # On Windows: .venv\Scripts\activate

# Run the script
python read_time.py
```

---

## Tools I Use Daily

Here are the tools that make up my daily workflow:

- **Pytest** — for unit and integration tests
- **Docker** — for reproducible environments
- **GitHub Actions** — for CI/CD pipelines
- **FastAPI** — for lightweight backend services
- **Claude AI** — for pair programming and documentation

---

## My Learning Path

The order in which I picked up these technologies:

1. Python fundamentals
2. SQL and relational databases
3. Django for web applications
4. REST API design patterns
5. Test automation with Pytest
6. Containerisation with Docker
7. Frontend with React and TypeScript

---

## Tech Stack Comparison

| Tool       | Category | Primary Use               |
|------------|----------|---------------------------|
| Pytest     | Testing  | Unit and API tests        |
| Playwright | Testing  | End-to-end browser tests  |
| FastAPI    | Backend  | REST APIs                 |
| React      | Frontend | Single-page apps          |
| Docker     | DevOps   | Containerisation          |

---

## What's Next

In future posts I plan to cover:

- Writing a full Pytest fixture hierarchy from scratch
- Integrating Allure reports into a CI pipeline
- A deep dive into FastAPI dependency injection

Stay tuned, and feel free to reach out via the [Contact](/contact) page if you have topic suggestions.
