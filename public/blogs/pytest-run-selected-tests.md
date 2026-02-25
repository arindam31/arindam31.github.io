## The Problem

You have a large test suite spread across multiple files and folders. You don't want to run all of it —
just a specific subset. Pytest gives you two clean ways to do this.

---

## Method 1: Direct Path Selection

Specify the exact test(s) using `file::Class::method` notation. Useful when you know exactly which
tests you want and they live in different files.

```bash
python -m pytest \
  test/stress/test_performance.py::TestPerformance::test_continuous_trigger \
  test/integration/test_config.py::TestConfig::test_valid_config
```

> **Downside:** It gets long and ugly fast when you need more than two or three tests.

---

## Method 2: Keyword Expressions (`-k` flag)

The `-k` flag filters tests by matching their **name** (or their **class name**) against an expression.
You can combine names with `or`, `and`, and `not`.

### Case 1 — OR: run whichever is found

```bash
python -m pytest -k 'test_password_valid or test_no_configuration'
```

Runs any test whose name matches either keyword. If both exist, both run. If only one exists, that
one runs. No error if a name is not found.

---

### Case 2 — OR with a typo: only the valid one runs

```bash
python -m pytest -k 'test_password_validzzzzzz or test_no_configuration'
```

`test_password_validzzzzzz` matches nothing, so only `test_no_configuration` is collected and run.
Pytest does **not** error on unmatched names with `or`.

---

### Case 3 — AND: run all or none

```bash
python -m pytest -k 'test_password_valid and test_no_configuration'
```

A test must satisfy **both** keywords to be selected. In practice this is useful when both names
exist — pytest collects tests matching the combined expression. If either name is wrong, nothing runs.

---

### Case 4 — Limit scope to one folder

```bash
python -m pytest test/project1/integration -k 'test_password_valid or test_no_configuration'
```

Pytest only looks inside `test/project1/integration/` before applying the `-k` filter. Faster and
avoids accidental matches in other parts of the suite.

---

### Case 5 — Limit scope to one file

```bash
python -m pytest test/integration/test_authentication.py -k 'test_password_expiry or test_incorrect_password'
```

Same idea — narrows collection to a single file first, then applies the keyword filter.

---

### Case 6 — Exclude a test with NOT

```bash
python -m pytest test/integration/test_authentication.py -k 'not test_incorrect_password'
```

Runs everything in `test_authentication.py` **except** `test_incorrect_password`. Clean way to skip
a single flaky or slow test without modifying the source.

---

### Case 7 — Scope keyword to a specific test class

Useful when a test method name like `test_valid_events` is common across multiple classes and you
only want to run it for one of them.

```bash
python -m pytest -k "TestClassSomeFeature and test_valid_events"
```

Pytest matches on both the class name and the test name, so only
`TestClassSomeFeature::test_valid_events` is collected — not `test_valid_events` in any other class.

---

## Quick Reference

| Goal | Command |
|---|---|
| Run specific tests by path | `pytest path/file.py::Class::method` |
| Run by name (either match) | `pytest -k 'name_a or name_b'` |
| Run by name (both must exist) | `pytest -k 'name_a and name_b'` |
| Exclude a test | `pytest -k 'not name_a'` |
| Scope to a folder | `pytest folder/ -k 'name_a'` |
| Scope to a file | `pytest folder/test_file.py -k 'name_a'` |
| Scope to a class | `pytest -k 'ClassName and test_name'` |
