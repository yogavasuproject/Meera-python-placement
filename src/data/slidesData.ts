export interface SlideData {
  slideNumber: number;
  section: string;
  sectionNumber: number;
  title: string;
  bullets: string[];
  codeSnippet?: string;
  output?: string;
  interviewPoints?: string;
  calloutType?: 'PLACEMENT TIP' | 'INTERVIEW TIP' | 'COMMON MISTAKE' | 'REMEMBER' | 'IMPORTANT' | 'CODING TIP';
  calloutText?: string;
  trainerNote?: string;
}

export const slidesData: SlideData[] = [
  // SECTION 1: Python Introduction
  {
    slideNumber: 1,
    section: "Section 1: Python Introduction",
    sectionNumber: 1,
    title: "Python Placement Masterclass: Introduction",
    bullets: [
      "Welcome to Python Technical Placement Training designed for Engineering campus recruitment.",
      "High-level, interpreted, dynamically typed, and garbage-collected language created by Guido van Rossum (1991).",
      "Massively preferred by top recruiters (TCS, Infosys, Cognizant, Wipro, Accenture, Zoho, Startups).",
      "Clean syntax enables candidates to write error-free code 3x faster than C++ or Java during timed assessments."
    ],
    calloutType: "PLACEMENT TIP",
    calloutText: "In first-round coding rounds, logic speed matters most. Python requires minimal boilerplate compared to Java and C.",
    trainerNote: "Set student expectations: we focus on clearing screening rounds, output prediction, and standard coding rounds."
  },
  {
    slideNumber: 2,
    section: "Section 1: Python Introduction",
    sectionNumber: 1,
    title: "Core Features of Python (Interview Essential)",
    bullets: [
      "Interpreted: Executes code line-by-line via Python Virtual Machine (PVM). No manual compile step.",
      "Dynamically Typed: Variable types are checked at runtime, not during compile time.",
      "Automatic Memory Management: Reference counting and cyclic garbage collector manage memory.",
      "Batteries Included: Vast standard library with built-in data structures (Lists, Dicts, Sets) and math utilities."
    ],
    interviewPoints: "Q: Is Python compiled or interpreted? A: Python compiles source code (.py) into bytecode (.pyc) first, which is then interpreted by PVM.",
    calloutType: "INTERVIEW TIP",
    calloutText: "Never say 'Python is strictly interpreted'. Mention the intermediate bytecode (.pyc) step to impress technical interviewers.",
    trainerNote: "Draw on board: .py -> Bytecode (.pyc) -> Python Virtual Machine (PVM) -> CPU machine instructions."
  },
  {
    slideNumber: 3,
    section: "Section 1: Python Introduction",
    sectionNumber: 1,
    title: "Variables & Dynamic Typing in Python",
    bullets: [
      "Variables in Python are object references (pointers/tags), NOT fixed memory boxes.",
      "No type declaration needed (`int x = 10` is invalid in Python; simply write `x = 10`).",
      "A variable can reference an integer, then later reference a string without error.",
      "Built-in function `id()` returns the unique memory address of the referenced object."
    ],
    codeSnippet: `x = 100
print(type(x), id(x))
x = "Placements"
print(type(x), id(x))`,
    output: `<class 'int'> 14072384920
<class 'str'> 24891024816`,
    calloutType: "IMPORTANT",
    calloutText: "When `x = 'Placements'` runs, 100 is not overwritten. `x` simply binds to a newly allocated string object in heap memory.",
    trainerNote: "Contrast with C/C++: in C, variable is a bucket of fixed type. In Python, variable is a sticky note pointing to an object."
  },
  {
    slideNumber: 4,
    section: "Section 1: Python Introduction",
    sectionNumber: 1,
    title: "Variable Naming Rules & Python Keywords",
    bullets: [
      "Valid identifiers: Must start with a letter (a-z, A-Z) or underscore (_), followed by letters, digits (0-9), or underscores.",
      "Cannot start with a digit (`2count` is a SyntaxError; `count2` is valid).",
      "Case-sensitive: `Age`, `age`, and `AGE` are three completely distinct identifiers.",
      "Cannot use Python keywords (`def`, `class`, `if`, `for`, `pass`, `return`, `True`, `None`)."
    ],
    codeSnippet: `# Valid identifiers
_total = 100
student_age = 21

# Invalid identifiers (SyntaxError)
# 1st_rank = 1     # Starts with digit
# class = "CS"     # Keyword`,
    output: `# SyntaxError: invalid syntax (if uncommented)`,
    calloutType: "COMMON MISTAKE",
    calloutText: "Using single underscore `_` as a throwaway variable in loops is a standard Python idiom: `for _ in range(5):`.",
    trainerNote: "Ask students: 'Can variable name contain hyphen?' No! Hyphen is subtraction operator."
  },
  {
    slideNumber: 5,
    section: "Section 1: Python Introduction",
    sectionNumber: 1,
    title: "Basic Input & Output: print() and input()",
    bullets: [
      "`input([prompt])`: Always returns a `str` (string). You MUST explicitly typecast to `int` or `float`.",
      "`print(*objects, sep=' ', end='\\n')`: Prints objects separated by `sep` and terminated by `end`.",
      "Default `sep` is a single space `' '`; default `end` is a newline `'\\n'`."
    ],
    codeSnippet: `# Basic print customization
print("TCS", "Infosys", "Wipro", sep=" -> ")
print("Batch", end=" ")
print("2026")

# Input typecasting
# n = int(input("Enter number: "))`,
    output: `TCS -> Infosys -> Wipro
Batch 2026`,
    calloutType: "COMMON MISTAKE",
    calloutText: "If you do `a = input()` and type `5`, then `a + a` outputs `'55'`, not `10`! Always use `int(input())` for math.",
    trainerNote: "Placement assessments frequently ask output of print('A', 'B', sep='*', end='#'). Stress sep and end!"
  },

  // SECTION 2: Variables, Data Types and Operators
  {
    slideNumber: 6,
    section: "Section 2: Variables, Data Types & Operators",
    sectionNumber: 2,
    title: "Built-in Fundamental Data Types",
    bullets: [
      "`int`: Arbitrary precision integers (no integer overflow in Python 3; can hold huge numbers).",
      "`float`: 64-bit IEEE 754 floating point numbers.",
      "`bool`: Subclass of int with values `True` (1) and `False` (0).",
      "`str`: Immutable sequence of Unicode characters.",
      "`NoneType`: Represents absence of value (`None`). Equivalent to `null` in other languages."
    ],
    codeSnippet: `print(type(42))         # <class 'int'>
print(type(3.14))       # <class 'float'>
print(type(True))       # <class 'bool'>
print(True + True)      # 2 (since True == 1)
print(type(None))       # <class 'NoneType'>`,
    output: `<class 'int'>
<class 'float'>
<class 'bool'>
2
<class 'NoneType'>`,
    calloutType: "INTERVIEW TIP",
    calloutText: "`bool` inherits from `int` in Python: `isinstance(True, int)` evaluates to `True`. `True == 1` and `False == 0` are True.",
    trainerNote: "Demonstrate that True + 5 = 6. Students from C/Java are often amazed by this."
  },
  {
    slideNumber: 7,
    section: "Section 2: Variables, Data Types & Operators",
    sectionNumber: 2,
    title: "Type Conversion (Casting) & Truthiness",
    bullets: [
      "Explicit conversion: `int()`, `float()`, `str()`, `bool()`, `list()`, `set()`, `tuple()`.",
      "Falsy values in Python: `0`, `0.0`, `''` (empty str), `[]` (empty list), `()` (empty tuple), `{}` (empty dict), `set()`, `None`, `False`.",
      "Truthy values: Any non-zero number, non-empty string, or non-empty collection."
    ],
    codeSnippet: `print(bool(0))          # False
print(bool(""))         # False
print(bool("False"))    # True (non-empty string!)
print(bool([]))         # False
print(bool([0]))        # True (list is not empty!)`,
    output: `False
False
True
False
True`,
    calloutType: "COMMON MISTAKE",
    calloutText: "`bool('False')` is `True` because `'False'` is a non-empty string! Only `bool('')` is `False`.",
    trainerNote: "This exact question appears in almost every Cognizant and TCS technical screening MCQ."
  },
  {
    slideNumber: 8,
    section: "Section 2: Variables, Data Types & Operators",
    sectionNumber: 2,
    title: "Arithmetic Operators: / vs // and %",
    bullets: [
      "`/` (True Division): ALWAYS returns a `float`, even if operands divide evenly (e.g. `4 / 2 -> 2.0`).",
      "`//` (Floor Division): Returns integer quotient rounded towards negative infinity (`floor(a / b)`).",
      "`%` (Modulus): Returns remainder (`a % b = a - (a // b) * b`).",
      "`**` (Exponentiation): `2 ** 3` evaluates to `8`."
    ],
    codeSnippet: `print(7 / 2)    # 3.5 (float)
print(7 // 2)   # 3 (floor)
print(-7 // 2)  # -4 (floored towards -inf!)
print(7 % 2)    # 1
print(-7 % 2)   # 1 (in Python, remainder has sign of divisor)`,
    output: `3.5
3
-4
1
1`,
    calloutType: "IMPORTANT",
    calloutText: "In C/Java, `-7 / 2` is `-3`. In Python, `-7 // 2` is `-4`. Interviewers love testing this floor rounding trap!",
    trainerNote: "Explain floor towards negative infinity: -3.5 rounded down is -4, not -3."
  },
  {
    slideNumber: 9,
    section: "Section 2: Variables, Data Types & Operators",
    sectionNumber: 2,
    title: "Relational & Chained Comparison Operators",
    bullets: [
      "Comparisons: `==` (equal), `!=` (not equal), `>`, `<`, `>=`, `<=`.",
      "Python supports chained comparisons: `1 < x < 10` is equivalent to `(1 < x) and (x < 10)`.",
      "Evaluates from left to right with short-circuiting.",
      "Can chain multiple operations: `a == b == c` checks if all three are equal."
    ],
    codeSnippet: `x = 5
print(1 < x < 10)       # True
print(10 > x > 2 < 8)   # True (10>5 AND 5>2 AND 2<8)
print(1 == 1.0)         # True (value equality across types)`,
    output: `True
True
True`,
    calloutType: "CODING TIP",
    calloutText: "Use `10 <= age <= 60` directly in Python instead of `age >= 10 and age <= 60` for cleaner placement code.",
    trainerNote: "Point out that in C, `1 < x < 10` evaluates `(1 < x)` to 1 or 0, then compares to 10. Python handles it mathematically!"
  },
  {
    slideNumber: 10,
    section: "Section 2: Variables, Data Types & Operators",
    sectionNumber: 2,
    title: "Logical Operators & Short-Circuit Evaluation",
    bullets: [
      "Logical operators: `and`, `or`, `not` (lowercase keywords, NOT symbols like `&&`, `||`, `!`).",
      "`and`: Returns first falsy operand, or the last operand if all are truthy.",
      "`or`: Returns first truthy operand, or the last operand if all are falsy.",
      "Short-circuit: Evaluation stops as soon as the outcome is determined."
    ],
    codeSnippet: `print(0 and "Python")      # 0 (first falsy)
print("Hi" and "Python")   # Python (all truthy -> last)
print("" or "Default")     # Default (first truthy)
print("Apple" or "Banana") # Apple (first truthy)`,
    output: `0
Python
Default
Apple`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Python logical operators do not return `True`/`False` when given non-boolean operands; they return the operand itself!",
    trainerNote: "Demonstrate default value assignment: name = user_input or 'Anonymous'. Very popular in real code."
  },
  {
    slideNumber: 11,
    section: "Section 2: Variables, Data Types & Operators",
    sectionNumber: 2,
    title: "Equality (==) vs Identity (is)",
    bullets: [
      "`==` checks **VALUE EQUALITY**: Do both operands hold the same data?",
      "`is` checks **OBJECT IDENTITY**: Do both operands point to the exact same memory address (`id(a) == id(b)`)?",
      "Integer Interning: Python caches small integers from -5 to 256 for memory optimization."
    ],
    codeSnippet: `list1 = [1, 2, 3]
list2 = [1, 2, 3]
print(list1 == list2)   # True (identical content)
print(list1 is list2)   # False (different heap objects!)

a = 250
b = 250
print(a is b)           # True (cached small integer)`,
    output: `True
False
True`,
    calloutType: "PLACEMENT TIP",
    calloutText: "Always compare `None` using `is`: `if item is None:` (PEP 8 standard), never `if item == None:`.",
    trainerNote: "Emphasize: `is` is NOT `==`. Two identical twins have the same face (==), but they are two distinct human beings (is False)."
  },
  {
    slideNumber: 12,
    section: "Section 2: Variables, Data Types & Operators",
    sectionNumber: 2,
    title: "Membership Operators (in, not in) & Precedence",
    bullets: [
      "`in` and `not in`: Test membership in sequences (strings, lists, tuples, sets, dict keys).",
      "For dictionaries, `in` checks **keys**, not values.",
      "Operator Precedence: `**` > unary (+, -) > `*`, `/`, `//`, `%` > `+`, `-` > comparisons, `is`, `in` > `not` > `and` > `or`."
    ],
    codeSnippet: `msg = "Placement ready"
print("place" in msg)           # False (case-sensitive)
print("Place" in msg)           # True

d = {"a": 1, "b": 2}
print("a" in d)                 # True (checks keys)
print(1 in d)                   # False (1 is a value, not a key)`,
    output: `False
True
True
False`,
    calloutType: "COMMON MISTAKE",
    calloutText: "Searching in a list `x in my_list` takes O(N) time. Searching in a set or dict `x in my_set` takes O(1) time!",
    trainerNote: "Mention this O(1) vs O(N) difference early; placement interviewers love to ask about lookup performance."
  },

  // SECTION 3: Conditional Statements
  {
    slideNumber: 13,
    section: "Section 3: Conditional Statements",
    sectionNumber: 3,
    title: "Conditional Statements: if, elif, else",
    bullets: [
      "Branching allows code execution based on boolean conditions.",
      "Syntax uses a colon `:` and consistent indentation (4 spaces) instead of curly braces `{}`.",
      "`elif` is short for 'else if'. Evaluated sequentially until a True condition is encountered.",
      "The optional `else` block runs only when none of the preceding conditions are True."
    ],
    codeSnippet: `score = 85
if score >= 90:
    grade = "A+"
elif score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
else:
    grade = "C"
print("Grade:", grade)`,
    output: `Grade: A`,
    calloutType: "REMEMBER",
    calloutText: "Missing the colon `:` at the end of `if`, `elif`, or `else` is the #1 syntax error freshers make under exam stress.",
    trainerNote: "Remind students that once an `elif` succeeds, all remaining `elif` and `else` branches are skipped."
  },
  {
    slideNumber: 14,
    section: "Section 3: Conditional Statements",
    sectionNumber: 3,
    title: "Nested Conditions & Logical Grouping",
    bullets: [
      "An `if` statement can reside inside another `if` statement for hierarchical filtering.",
      "Indentation depth signifies the nesting hierarchy.",
      "Prefer combining conditions with `and` / `or` when nested logic is simple to reduce visual complexity."
    ],
    codeSnippet: `num = 28
if num > 0:
    if num % 2 == 0:
        print("Positive Even")
    else:
        print("Positive Odd")
else:
    print("Non-positive")`,
    output: `Positive Even`,
    calloutType: "CODING TIP",
    calloutText: "Flatten deep nested ifs using guard clauses (`if num <= 0: return ...`) to keep placement code readable.",
    trainerNote: "Demonstrate how to rewrite nested conditions into a clean single line using `and`."
  },
  {
    slideNumber: 15,
    section: "Section 3: Conditional Statements",
    sectionNumber: 3,
    title: "Ternary Operator (Conditional Expression)",
    bullets: [
      "Python provides a compact one-line ternary expression.",
      "Syntax: `value_if_true if condition else value_if_false`.",
      "Evaluates lazily: only the chosen branch is computed.",
      "Widely tested in MCQs and useful for concise variable assignments."
    ],
    codeSnippet: `age = 20
status = "Eligible" if age >= 18 else "Not Eligible"
print(status)

# Nested ternary
n = 0
sign = "Positive" if n > 0 else ("Negative" if n < 0 else "Zero")
print(sign)`,
    output: `Eligible
Zero`,
    calloutType: "PLACEMENT TIP",
    calloutText: "In Python ternary, the true value comes FIRST: `x if condition else y`. In C/Java, condition comes first (`cond ? x : y`).",
    trainerNote: "Highlight the syntax order difference from C-family languages so students don't reverse the terms."
  },
  {
    slideNumber: 16,
    section: "Section 3: Conditional Statements",
    sectionNumber: 3,
    title: "Condition Pitfalls: Assignment vs Equality",
    bullets: [
      "In C/Java, `if (x = 5)` accidentally compiles and causes bugs.",
      "In Python, statements cannot be expressions: `if x = 5:` triggers an immediate `SyntaxError`.",
      "To check multiple options: `if x in (1, 2, 3):` is much cleaner than `if x == 1 or x == 2 or x == 3:`."
    ],
    codeSnippet: `x = 5
# if x = 5:    # SyntaxError!

# Common bug:
fruit = "apple"
if fruit == "banana" or "orange":
    print("Matches!")  # Always executes! "orange" is truthy!

# Correct way:
if fruit in ("banana", "orange"):
    print("Correct match")`,
    output: `Matches!`,
    calloutType: "COMMON MISTAKE",
    calloutText: "`if x == 'a' or 'b':` does NOT check if x is 'a' or 'b'. It checks `(x == 'a') or ('b')`, which is always True!",
    trainerNote: "Spend 2 minutes on this slide. Almost 60% of freshers fall into this exact trap in coding tests."
  },
  {
    slideNumber: 17,
    section: "Section 3: Conditional Statements",
    sectionNumber: 3,
    title: "Interview Problem: Leap Year Determination",
    bullets: [
      "Rules for a Leap Year:",
      "1. Year must be divisible by 4.",
      "2. Century years (ending in 00) must ALSO be divisible by 400 (not just 100).",
      "Example: 2000 is a leap year; 1900 is NOT a leap year; 2024 is a leap year."
    ],
    codeSnippet: `def is_leap_year(year):
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)

print("2000:", is_leap_year(2000))
print("1900:", is_leap_year(1900))
print("2024:", is_leap_year(2024))
print("2023:", is_leap_year(2023))`,
    output: `2000: True
1900: False
2024: True
2023: False`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Explain the `400` rule first. Interviewers specifically test if the candidate accounts for century years like 1700, 1800, 1900.",
    trainerNote: "Ask students why 1900 is not a leap year. Ensure they understand the astronomical reason (calendar alignment)."
  },

  // SECTION 4: Loops
  {
    slideNumber: 18,
    section: "Section 4: Loops & Control Flow",
    sectionNumber: 4,
    title: "The while Loop & Infinite Loop Prevention",
    bullets: [
      "Executes a block of code as long as a given condition remains `True`.",
      "Loop condition is evaluated before every iteration (pre-test loop).",
      "Requires manual initialization, condition check, and loop variable update.",
      "Failure to update the loop counter results in an infinite loop."
    ],
    codeSnippet: `count = 1
while count <= 4:
    print("Round", count)
    count += 1    # Note: count++ does not exist in Python!`,
    output: `Round 1
Round 2
Round 3
Round 4`,
    calloutType: "COMMON MISTAKE",
    calloutText: "`count++` and `count--` DO NOT exist in Python! Always write `count += 1` or `count = count + 1`.",
    trainerNote: "Point out that `+ + count` in Python is interpreted as two unary plus operators (+ (+count)), not increment!"
  },
  {
    slideNumber: 19,
    section: "Section 4: Loops & Control Flow",
    sectionNumber: 4,
    title: "The for Loop & range() Function",
    bullets: [
      "`for` loop iterates directly over any iterable sequence (string, list, tuple, range, dict).",
      "`range(stop)`: Generates numbers from `0` up to `stop - 1`.",
      "`range(start, stop)`: Generates numbers from `start` up to `stop - 1`.",
      "`range(start, stop, step)`: Increments by `step` (can be negative for reverse counting)."
    ],
    codeSnippet: `print("range(4):", list(range(4)))
print("range(2, 6):", list(range(2, 6)))
print("range(10, 0, -2):", list(range(10, 0, -2)))`,
    output: `range(4): [0, 1, 2, 3]
range(2, 6): [2, 3, 4, 5]
range(10, 0, -2): [10, 8, 6, 4, 2]`,
    calloutType: "REMEMBER",
    calloutText: "The `stop` parameter is ALWAYS EXCLUDED in `range(start, stop)`. To loop 1 to N, write `range(1, N + 1)`.",
    trainerNote: "In Python 3, range() is a memory-efficient generator object, not a pre-allocated list. Explain O(1) memory."
  },
  {
    slideNumber: 20,
    section: "Section 4: Loops & Control Flow",
    sectionNumber: 4,
    title: "Loop Control: break, continue, and pass",
    bullets: [
      "`break`: Terminates the innermost loop immediately and transfers control to the statement after the loop.",
      "`continue`: Skips the remainder of the current iteration and jumps to the next cycle.",
      "`pass`: A null operation / placeholder used when syntax requires a statement but no action is needed."
    ],
    codeSnippet: `for i in range(1, 6):
    if i == 3:
        continue  # skip 3
    if i == 5:
        break     # stop at 5
    print(i, end=" ")`,
    output: `1 2 4 `,
    calloutType: "INTERVIEW TIP",
    calloutText: "`pass` vs `continue`: `continue` jumps to the next loop iteration. `pass` does nothing and executes the very next line!",
    trainerNote: "Ask students: 'What will happen if we leave a function body empty without pass?' IndentationError."
  },
  {
    slideNumber: 21,
    section: "Section 4: Loops & Control Flow",
    sectionNumber: 4,
    title: "The Unique for-else and while-else Construct",
    bullets: [
      "Python loops can have an `else:` clause!",
      "The `else` block executes **ONLY IF** the loop terminates normally (without hitting a `break`).",
      "If the loop exits via `break`, the `else` block is completely skipped.",
      "Perfect for search algorithms (e.g. 'found' vs 'not found' flag)."
    ],
    codeSnippet: `def search(target, items):
    for x in items:
        if x == target:
            print("Found:", target)
            break
    else:
        print("Not Found:", target)

search(3, [1, 2, 3, 4])
search(9, [1, 2, 3, 4])`,
    output: `Found: 3
Not Found: 9`,
    calloutType: "PLACEMENT TIP",
    calloutText: "This construct eliminates the need for boolean `found = False` flags in search loops. A classic placement MCQ favorite!",
    trainerNote: "Reiterate: 'loop else' means 'no break occurred'. Read it mentally as 'for ... nobreak:'."
  },
  {
    slideNumber: 22,
    section: "Section 4: Loops & Control Flow",
    sectionNumber: 4,
    title: "Nested Loops & Pattern Printing Fundamentals",
    bullets: [
      "Outer loop controls rows; inner loop controls columns / row contents.",
      "Critical for pattern printing problems in first-round assessments.",
      "Time complexity of double nested loops over N is typically O(N²)."
    ],
    codeSnippet: `rows = 4
for i in range(1, rows + 1):
    for j in range(i):
        print("*", end=" ")
    print()  # newline after each row`,
    output: `* 
* * 
* * * 
* * * * `,
    calloutType: "CODING TIP",
    calloutText: "In Python, string multiplication can simplify patterns: `for i in range(1, 5): print('* ' * i)` achieves the exact same output!",
    trainerNote: "Demonstrate both ways: nested loops (algorithmic thinking) and string multiplication (Pythonic speed)."
  },
  {
    slideNumber: 23,
    section: "Section 4: Loops & Control Flow",
    sectionNumber: 4,
    title: "Interview Problem: Prime Number Checker",
    bullets: [
      "A prime number is greater than 1 and has no positive divisors other than 1 and itself.",
      "Optimization: We only need to check divisors up to `int(sqrt(N))` or `i * i <= N`.",
      "Checking up to N takes O(N); checking up to `sqrt(N)` takes O(√N), which passes all test cases."
    ],
    codeSnippet: `def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

print("29 is prime?", is_prime(29))
print("49 is prime?", is_prime(49))`,
    output: `29 is prime? True
49 is prime? False`,
    calloutType: "PLACEMENT TIP",
    calloutText: "Always mention O(√N) complexity to the interviewer. A naive O(N) loop will timeout on online coding platforms (TLE).",
    trainerNote: "Emphasize why we check up to sqrt(n): if n has a factor larger than sqrt(n), the corresponding factor must be smaller."
  },

  // SECTION 5: Strings
  {
    slideNumber: 24,
    section: "Section 5: Strings & Manipulation",
    sectionNumber: 5,
    title: "String Creation, Indexing & Immutability",
    bullets: [
      "Strings can be enclosed in single (`'`), double (`\"`), or triple (`'''` / `\"\"\"`) quotes.",
      "Positive indexing starts at `0` from the left.",
      "Negative indexing starts at `-1` from the right (`-1` is last character).",
      "**Immutability**: Once created, individual characters in a string CANNOT be changed or re-assigned."
    ],
    codeSnippet: `s = "PYTHON"
print(s[0], s[-1])     # P N

# s[0] = "J"          # TypeError: 'str' object does not support item assignment
s = "J" + s[1:]       # Creates a BRAND NEW string
print(s)`,
    output: `P N
JYTHON`,
    calloutType: "COMMON MISTAKE",
    calloutText: "Attempting `s[0] = 'X'` produces a `TypeError`. Modifying a string always allocates a new string in memory.",
    trainerNote: "Explain immutability: strings are thread-safe and can be used safely as dictionary keys because their hash never changes."
  },
  {
    slideNumber: 25,
    section: "Section 5: Strings & Manipulation",
    sectionNumber: 5,
    title: "String Slicing: [start:stop:step]",
    bullets: [
      "Syntax: `string[start:stop:step]`.",
      "`start` is inclusive; `stop` is exclusive.",
      "Default values: `start = 0`, `stop = len(string)`, `step = 1`.",
      "Negative step iterates backwards.",
      "Reverse string idiom: `s[::-1]`."
    ],
    codeSnippet: `text = "Placement2026"
print(text[0:9])       # Placement
print(text[:9])        # Placement (start defaults to 0)
print(text[9:])        # 2026 (stop defaults to end)
print(text[::2])       # Paemn06 (every 2nd char)
print(text[::-1])      # 6202tnemecalP (reversed!)`,
    output: `Placement
Placement
2026
Paemn06
6202tnemecalP`,
    calloutType: "PLACEMENT TIP",
    calloutText: "`s[::-1]` is the fastest, single-line way to reverse a string in Python. It runs in C-speed internally.",
    trainerNote: "Have students predict: `text[5:2]` (empty string because step is positive +1, cannot move backwards)."
  },
  {
    slideNumber: 26,
    section: "Section 5: Strings & Manipulation",
    sectionNumber: 5,
    title: "Essential String Methods (Placement Essentials)",
    bullets: [
      "`lower()`, `upper()`, `title()`: Case conversions.",
      "`strip()`, `lstrip()`, `rstrip()`: Removes leading/trailing whitespace.",
      "`startswith(prefix)`, `endswith(suffix)`: Returns boolean.",
      "`find(sub)`: Returns lowest index of substring, or `-1` if not found (does not throw error).",
      "`count(sub)`: Counts non-overlapping occurrences."
    ],
    codeSnippet: `raw = "   Campus Recruitment   "
clean = raw.strip().upper()
print("Cleaned:", clean)
print("Contains 'REC':", clean.find("REC"))
print("Count of 'C':", clean.count("C"))`,
    output: `Cleaned: CAMPUS RECRUITMENT
Contains 'REC': 7
Count of 'C': 2`,
    calloutType: "INTERVIEW TIP",
    calloutText: "`find()` returns `-1` when a substring is not found, whereas `index()` raises a `ValueError`. Use `find()` to avoid crashes.",
    trainerNote: "Write on board the difference between find() and index(). Very common MCQ trick."
  },
  {
    slideNumber: 27,
    section: "Section 5: Strings & Manipulation",
    sectionNumber: 5,
    title: "split() and join() - The Dynamic Duo",
    bullets: [
      "`str.split(sep=None)`: Splits string by delimiter into a list of words. Default splits by any whitespace.",
      "`str.join(iterable)`: Joins elements of an iterable (must be strings) with `str` as separator.",
      "Essential for input parsing in online placement tests (HackerRank, AMCAT, CoCubes)."
    ],
    codeSnippet: `# Parsing space-separated integers
line = "10 20 30 40 50"
nums = list(map(int, line.split()))
print("Parsed numbers:", nums)

# Joining words into a single sentence
words = ["Python", "is", "awesome"]
sentence = " ".join(words)
print("Joined sentence:", sentence)`,
    output: `Parsed numbers: [10, 20, 30, 40, 50]
Joined sentence: Python is awesome`,
    calloutType: "CODING TIP",
    calloutText: "`list(map(int, input().split()))` is the most common input idiom in Python competitive coding and placement tests.",
    trainerNote: "Ensure every student memorizes `map(int, input().split())`. It is used in 95% of placement coding problems."
  },
  {
    slideNumber: 28,
    section: "Section 5: Strings & Manipulation",
    sectionNumber: 5,
    title: "String Formatting: f-strings (Python 3.6+)",
    bullets: [
      "f-strings (Formatted string literals) prefix strings with `f` or `F`.",
      "Embed expressions directly inside curly braces `{expression}`.",
      "Faster and much more readable than `%` formatting or `.format()`.",
      "Supports format specifiers: `{num:.2f}` (2 decimal places), `{num:05d}` (zero-padded)."
    ],
    codeSnippet: `name = "Arun"
cgpa = 8.654
salary = 1200000

print(f"Candidate: {name} | CGPA: {cgpa:.2f}")
print(f"Package: ₹{salary:,} CTC")
print(f"Next Year: {2026 + 1}")`,
    output: `Candidate: Arun | CGPA: 8.65
Package: ₹1,200,000 CTC
Next Year: 2027`,
    calloutType: "PLACEMENT TIP",
    calloutText: "Always use f-strings in interviews: cleaner, shows modern Python fluency, and avoids messy concatenation errors.",
    trainerNote: "Point out how `cgpa:.2f` rounds floating numbers cleanly for output formatting requirements."
  },
  {
    slideNumber: 29,
    section: "Section 5: Strings & Manipulation",
    sectionNumber: 5,
    title: "Interview Problem: Palindrome & Anagram Check",
    bullets: [
      "Palindrome: String reads the same forwards and backwards (e.g. 'racecar').",
      "Anagram: Two strings contain the exact same characters with the same frequencies (e.g. 'listen' and 'silent').",
      "Both are top-5 frequently asked string questions for freshers."
    ],
    codeSnippet: `def is_palindrome(s):
    cleaned = "".join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]

def is_anagram(s1, s2):
    return sorted(s1.lower()) == sorted(s2.lower())

print("racecar palindrome?", is_palindrome("Race Car!"))
print("listen & silent anagram?", is_anagram("listen", "silent"))`,
    output: `racecar palindrome? True
listen & silent anagram? True`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Sorting anagram check takes O(N log N). Mention to the interviewer that using a Hash Map / Dict counter takes O(N) optimal time!",
    trainerNote: "Walk through character cleaning with isalnum() for punctuation-laden palindrome tests."
  },

  // SECTION 6: Lists
  {
    slideNumber: 30,
    section: "Section 6: Lists & Comprehensions",
    sectionNumber: 6,
    title: "List Fundamentals: Creation, Indexing & Mutability",
    bullets: [
      "Lists are **ordered**, **mutable**, and allow **duplicate elements**.",
      "Can contain heterogeneous data types (`[1, 'hello', 3.14, True]`).",
      "Supports 0-based indexing and negative indexing (`list[-1]`).",
      "Dynamic sizing: grows and shrinks automatically as elements are added or removed."
    ],
    codeSnippet: `nums = [10, 20, 30, 40]
nums[1] = 99      # Mutates element at index 1
print("Updated list:", nums)
print("Length:", len(nums))
print("Last item:", nums[-1])`,
    output: `Updated list: [10, 99, 30, 40]
Length: 4
Last item: 40`,
    calloutType: "REMEMBER",
    calloutText: "Unlike strings and tuples, lists are MUTABLE. You can modify their elements in place without creating a new object.",
    trainerNote: "Contrast Python lists with fixed-size arrays in C/Java. Python lists are dynamic arrays (like ArrayList/vector)."
  },
  {
    slideNumber: 31,
    section: "Section 6: Lists & Comprehensions",
    sectionNumber: 6,
    title: "Adding Elements: append() vs extend() vs insert()",
    bullets: [
      "`append(x)`: Adds `x` as a **single element** to the end of the list. O(1) amortized time.",
      "`extend(iterable)`: Iterates over the argument and appends **each item individually**. O(K) time.",
      "`insert(index, x)`: Inserts `x` at specified `index`, shifting subsequent elements right. O(N) time."
    ],
    codeSnippet: `a = [1, 2]
a.append([3, 4])     # Adds nested list!
print("After append:", a)

b = [1, 2]
b.extend([3, 4])     # Unpacks elements!
print("After extend:", b)

b.insert(0, 99)      # Insert at start
print("After insert:", b)`,
    output: `After append: [1, 2, [3, 4]]
After extend: [1, 2, 3, 4]
After insert: [99, 1, 2, 3, 4]`,
    calloutType: "INTERVIEW TIP",
    calloutText: "`append([3, 4])` creates a nested list with length 3. `extend([3, 4])` creates a flat list with length 4. High-frequency MCQ!",
    trainerNote: "Ask students: 'What will len(a) be after a.append([3, 4])?' Many will say 4. Correct them to 3."
  },
  {
    slideNumber: 32,
    section: "Section 6: Lists & Comprehensions",
    sectionNumber: 6,
    title: "Removing Elements: pop(), remove(), del, and clear()",
    bullets: [
      "`remove(val)`: Removes the **first occurrence** of `val`. Raises `ValueError` if `val` is not found.",
      "`pop([index])`: Removes and **returns** element at `index` (defaults to last item `-1`). Raises `IndexError` if list is empty.",
      "`del list[index]`: Deletes element or slice at index.",
      "`clear()`: Empties the list in-place (`len` becomes 0)."
    ],
    codeSnippet: `items = ["A", "B", "C", "B", "D"]
items.remove("B")      # Removes FIRST 'B' only
print("After remove:", items)

popped = items.pop()   # Removes & returns 'D'
print(f"Popped '{popped}', list: {items}")

del items[0]           # Removes 'A'
print("After del:", items)`,
    output: `After remove: ['A', 'C', 'B', 'D']
Popped 'D', list: ['A', 'C', 'B']
After del: ['C', 'B']`,
    calloutType: "COMMON MISTAKE",
    calloutText: "`remove()` takes a VALUE. `pop()` takes an INDEX. If you call `items.remove(0)`, Python searches for the number 0, not index 0!",
    trainerNote: "Stress that pop() is the only method here that returns the removed item."
  },
  {
    slideNumber: 33,
    section: "Section 6: Lists & Comprehensions",
    sectionNumber: 6,
    title: "List Aliasing Trap vs Shallow Copy",
    bullets: [
      "Assignment `b = a` DOES NOT copy the list. It creates an **alias** (both point to the same memory).",
      "Modifying `b` will unintentionally mutate `a` as well!",
      "To create an independent copy, use `b = a.copy()`, `b = a[:]`, or `b = list(a)`."
    ],
    codeSnippet: `# The Aliasing Bug:
orig = [1, 2, 3]
alias = orig
alias.append(4)
print("orig:", orig)    # [1, 2, 3, 4] -> Mutated!

# Proper Copying:
proper = orig.copy()
proper.append(99)
print("proper:", proper)
print("orig stays:", orig)`,
    output: `orig: [1, 2, 3, 4]
proper: [1, 2, 3, 4, 99]
orig stays: [1, 2, 3, 4]`,
    calloutType: "IMPORTANT",
    calloutText: "This is one of the most common output prediction questions in campus interview technical rounds!",
    trainerNote: "Use the whiteboard: draw two pointer arrows pointing to the same list box in memory."
  },
  {
    slideNumber: 34,
    section: "Section 6: Lists & Comprehensions",
    sectionNumber: 6,
    title: "List Comprehension: Concise & Fast",
    bullets: [
      "Provides an elegant way to create lists in a single line.",
      "Syntax: `[expression for item in iterable if condition]`.",
      "Faster than standard `for` loops because loop bytecode executes at C-level.",
      "Replaces combinations of `map()` and `filter()`."
    ],
    codeSnippet: `# Squares of even numbers 1 to 10
evens = [x**2 for x in range(1, 11) if x % 2 == 0]
print("Squares of evens:", evens)

# Uppercase word filtering
words = ["tcs", "cts", "infy", "wipro"]
filtered = [w.upper() for w in words if len(w) <= 4]
print("Uppercase short:", filtered)`,
    output: `Squares of evens: [4, 16, 36, 64, 100]
Uppercase short: ['TCS', 'CTS', 'INFY', 'WIPRO']`,
    calloutType: "CODING TIP",
    calloutText: "Interviewers look for list comprehensions as a sign of Python maturity. Use them for filtering and mapping.",
    trainerNote: "Break down the structure: [Output_Expression | For_Loop | Optional_If]."
  },
  {
    slideNumber: 35,
    section: "Section 6: Lists & Comprehensions",
    sectionNumber: 6,
    title: "List Sorting: sort() vs sorted()",
    bullets: [
      "`list.sort()`: Modifies the list **in-place** and returns `None`. Only works on lists.",
      "`sorted(iterable)`: Returns a **new sorted list** without modifying original iterable. Works on any iterable.",
      "Both use Timsort algorithm with O(N log N) worst-case time complexity.",
      "Accepts `reverse=True` and custom `key=function`."
    ],
    codeSnippet: `nums = [40, 10, 30, 20]
res = nums.sort()
print("nums.sort():", nums)
print("res is:", res)      # None! (Trap)

names = ["Arun", "Bala", "Catherine", "Dev"]
by_len = sorted(names, key=len, reverse=True)
print("By length desc:", by_len)`,
    output: `nums.sort(): [10, 20, 30, 40]
res is: None
By length desc: ['Catherine', 'Arun', 'Bala', 'Dev']`,
    calloutType: "COMMON MISTAKE",
    calloutText: "Writing `nums = nums.sort()` sets `nums = None`! Never assign the result of `sort()`.",
    trainerNote: "Point out this exact bug: `a = a.sort()`. It has ruined countless candidate submissions."
  },
  {
    slideNumber: 36,
    section: "Section 6: Lists & Comprehensions",
    sectionNumber: 6,
    title: "Interview Problem: Second Largest in Array",
    bullets: [
      "Find the second largest unique element in a list.",
      "Naive approach: `sorted(set(nums))[-2]` takes O(N log N) time.",
      "Optimal approach: Single pass maintaining `first` and `second` in O(N) time and O(1) space.",
      "Standard first-round interview problem tested by service & product companies."
    ],
    codeSnippet: `def second_largest(arr):
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    return second if second != float('-inf') else None

print("Result:", second_largest([12, 35, 1, 10, 34, 1]))
print("All same:", second_largest([10, 10, 10]))`,
    output: `Result: 34
All same: None`,
    calloutType: "PLACEMENT TIP",
    calloutText: "Always ask: 'What if all elements are equal or array has fewer than 2 elements?' Handling edge cases proves senior engineering mindset.",
    trainerNote: "Walk through the float('-inf') initialization to handle negative numbers."
  },

  // SECTION 7: Tuples, Sets and Dictionaries
  {
    slideNumber: 37,
    section: "Section 7: Tuples, Sets & Dictionaries",
    sectionNumber: 7,
    title: "Tuples: Immutable Ordered Collections",
    bullets: [
      "Defined using parentheses `(1, 2, 3)` or comma-separated values `1, 2, 3`.",
      "**Immutable**: Cannot append, extend, remove, or modify items after creation.",
      "Why use tuples? Memory efficient, faster than lists, and can be used as dictionary keys (hashable).",
      "Single-element tuple requires a trailing comma: `(42,)`."
    ],
    codeSnippet: `# Single-element trap
t1 = (42)       # An INTEGER, not a tuple!
t2 = (42,)      # A TUPLE!
print(type(t1), type(t2))

# Tuple unpacking
point = (10, 20)
x, y = point
print(f"x={x}, y={y}")`,
    output: `<class 'int'> <class 'tuple'>
x=10, y=20`,
    calloutType: "COMMON MISTAKE",
    calloutText: "`t = (5)` is an integer! Without a comma `(5,)`, Python treats the parentheses as mathematical grouping.",
    trainerNote: "Show `type((5))` vs `type((5,))`. This is a top-3 trick question in placement MCQs."
  },
  {
    slideNumber: 38,
    section: "Section 7: Tuples, Sets & Dictionaries",
    sectionNumber: 7,
    title: "Sets: Unordered Unique Collections",
    bullets: [
      "Defined with curly braces `{1, 2, 3}` or `set(iterable)`.",
      "Automatically deduplicates elements (stores only unique items).",
      "**Unordered and unindexed**: `my_set[0]` raises `TypeError`.",
      "Empty set MUST be created with `set()`. `{}` creates an empty dictionary!",
      "Internal Hash Table implementation gives O(1) average lookup, insertion, and deletion."
    ],
    codeSnippet: `s = {1, 2, 2, 3, 4, 4, 4}
print("Deduplicated set:", s)

empty = {}
print("Type of {}:", type(empty))   # dict, not set!

real_empty_set = set()
print("Type of set():", type(real_empty_set))`,
    output: `Deduplicated set: {1, 2, 3, 4}
Type of {}: <class 'dict'>
Type of set(): <class 'set'>`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Q: 'How do you create an empty set in Python?' A: `set()`. Writing `{}` creates a dictionary.",
    trainerNote: "Emphasize hash table mechanism: elements must be hashable (immutable)."
  },
  {
    slideNumber: 39,
    section: "Section 7: Tuples, Sets & Dictionaries",
    sectionNumber: 7,
    title: "Set Mathematical Operations",
    bullets: [
      "Union (`|` or `union()`): All unique elements from both sets.",
      "Intersection (`&` or `intersection()`): Common elements present in both sets.",
      "Difference (`-` or `difference()`): Elements in set A but not in set B.",
      "Symmetric Difference (`^`): Elements in either set, but NOT in both."
    ],
    codeSnippet: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print("Union (a | b):", a | b)
print("Intersection (a & b):", a & b)
print("Difference (a - b):", a - b)
print("Sym Difference (a ^ b):", a ^ b)`,
    output: `Union (a | b): {1, 2, 3, 4, 5, 6}
Intersection (a & b): {3, 4}
Difference (a - b): {1, 2}
Sym Difference (a ^ b): {1, 2, 5, 6}`,
    calloutType: "CODING TIP",
    calloutText: "To find common elements between two lists without nested loops, convert to sets and intersect: `list(set(l1) & set(l2))`.",
    trainerNote: "Remind students this turns an O(N²) nested loop into an O(N) linear time operation."
  },
  {
    slideNumber: 40,
    section: "Section 7: Tuples, Sets & Dictionaries",
    sectionNumber: 7,
    title: "Dictionaries: Key-Value Pairs",
    bullets: [
      "Stores data in `key: value` pairs. Keys must be unique and immutable (hashable: int, float, str, tuple).",
      "Values can be of any data type (mutable or immutable, duplicates allowed).",
      "In Python 3.7+, dictionaries preserve **insertion order** by default.",
      "Average lookup, insertion, and deletion time is O(1) via hash map."
    ],
    codeSnippet: `student = {"name": "Priya", "roll": 101, "dept": "CSE"}
student["cgpa"] = 9.2   # Adding new key-value pair
student["roll"] = 105   # Updating existing key
print(student)

# Invalid key:
# student[[1, 2]] = "invalid"  # TypeError: unhashable type: 'list'`,
    output: `{'name': 'Priya', 'roll': 105, 'dept': 'CSE', 'cgpa': 9.2}`,
    calloutType: "IMPORTANT",
    calloutText: "Lists CANNOT be dictionary keys because lists are mutable (unhashable). Tuples CAN be keys if they contain immutable items.",
    trainerNote: "Ask students: 'Can a tuple containing a list be a dict key?' No! Because the inner list is mutable."
  },
  {
    slideNumber: 41,
    section: "Section 7: Tuples, Sets & Dictionaries",
    sectionNumber: 7,
    title: "Safe Dictionary Access: get() and pop()",
    bullets: [
      "`d[key]`: Accesses value, but raises `KeyError` if key is not found.",
      "`d.get(key, default=None)`: Safely returns value, or `default` if key doesn't exist (no crash).",
      "`keys()`, `values()`, `items()`: Returns dynamic view objects of dictionary contents.",
      "`items()` yields `(key, value)` tuples for easy loop unpacking."
    ],
    codeSnippet: `d = {"a": 10, "b": 20}
# print(d["c"])          # KeyError!
print("get('c'):", d.get("c"))          # None
print("get('c', 0):", d.get("c", 0))    # 0 (fallback)

for k, v in d.items():
    print(f"Key {k} -> Val {v}")`,
    output: `get('c'): None
get('c', 0): 0
Key a -> Val 10
Key b -> Val 20`,
    calloutType: "PLACEMENT TIP",
    calloutText: "Always use `d.get(k, 0)` when counting frequencies. It eliminates ugly `if k in d:` checks.",
    trainerNote: "Frequency counting with get(k, 0) + 1 is the single most tested dictionary pattern."
  },
  {
    slideNumber: 42,
    section: "Section 7: Tuples, Sets & Dictionaries",
    sectionNumber: 7,
    title: "Comparison: List vs Tuple vs Set vs Dictionary",
    bullets: [
      "List: `[]`, Ordered, Mutable, Duplicates Allowed, O(N) lookup.",
      "Tuple: `()`, Ordered, **Immutable**, Duplicates Allowed, O(N) lookup.",
      "Set: `{}`, **Unordered**, Mutable, **No Duplicates**, **O(1) lookup**.",
      "Dict: `{k: v}`, Key-Value, Key Unique, Mutable, **O(1) lookup**."
    ],
    interviewPoints: "Q: Which data structure would you use to remove duplicates while preserving lookup speed? A: Set, because it guarantees uniqueness with O(1) hash lookup.",
    calloutType: "REMEMBER",
    calloutText: "Memorize this matrix thoroughly. Technical interviewers frequently ask: 'When would you pick a Tuple over a List?'",
    trainerNote: "Tuple over list: when data is constant (coordinates, DB records) or needs to be a dict key."
  },
  {
    slideNumber: 43,
    section: "Section 7: Tuples, Sets & Dictionaries",
    sectionNumber: 7,
    title: "Interview Problem: Word / Character Frequency Counter",
    bullets: [
      "Count the occurrence of each word or character in a given input.",
      "Fundamental building block for Anagrams, Top-K Frequent Elements, and First Non-Repeating Character.",
      "Solvable using standard `dict` or `collections.Counter`."
    ],
    codeSnippet: `text = "apple banana apple cherry banana apple"
freq = {}
for word in text.split():
    freq[word] = freq.get(word, 0) + 1

print("Frequency Map:", freq)

# Finding most frequent:
most_common = max(freq, key=freq.get)
print(f"Most frequent: {most_common} ({freq[most_common]} times)")`,
    output: `Frequency Map: {'apple': 3, 'banana': 2, 'cherry': 1}
Most frequent: apple (3 times)`,
    calloutType: "CODING TIP",
    calloutText: "`max(freq, key=freq.get)` finds the key corresponding to the maximum value in O(N) time without sorting.",
    trainerNote: "Explain how max with key=freq.get evaluates the values rather than keys."
  },

  // SECTION 8: Functions
  {
    slideNumber: 44,
    section: "Section 8: Functions & Scope",
    sectionNumber: 8,
    title: "Function Definition, Parameters & Return Values",
    bullets: [
      "Defined with `def function_name(parameters):`.",
      "Modularization: Encapsulates reusable logic and prevents duplicate code.",
      "Return statement terminates function and sends result back to caller.",
      "Functions without an explicit `return` return `None` by default."
    ],
    codeSnippet: `def add(a, b):
    return a + b

def greet(name):
    print(f"Hello, {name}!")

res1 = add(10, 25)
res2 = greet("Sneha")
print("res1:", res1)
print("res2:", res2)  # greet has no return -> None`,
    output: `Hello, Sneha!
res1: 35
res2: None`,
    calloutType: "REMEMBER",
    calloutText: "Every Python function returns a value. If you don't write `return`, Python implicitly returns `None`.",
    trainerNote: "Ask students: 'What happens if we write return without an expression?' Returns None."
  },
  {
    slideNumber: 45,
    section: "Section 8: Functions & Scope",
    sectionNumber: 8,
    title: "Default & Keyword Arguments",
    bullets: [
      "Default arguments: Assigned a fallback value in function signature (`def fn(x=10):`).",
      "**Rule**: Positional arguments MUST come before default arguments (`def fn(a, b=5)` is valid; `def fn(a=5, b)` is a SyntaxError).",
      "Keyword arguments: Caller specifies parameter names (`fn(b=20, a=10)`), allowing arguments to be passed in any order."
    ],
    codeSnippet: `def calculate_fee(tuition, hostel=5000, bus=2000):
    return tuition + hostel + bus

print(calculate_fee(50000))                  # Uses defaults
print(calculate_fee(50000, hostel=8000))     # Overrides hostel
print(calculate_fee(tuition=40000, bus=0))   # Keyword args`,
    output: `57000
60000
45000`,
    calloutType: "COMMON MISTAKE",
    calloutText: "SyntaxError: non-default argument follows default argument. Always place required parameters before optional defaults.",
    trainerNote: "Emphasize parameter ordering: positional -> default -> *args -> keyword-only -> **kwargs."
  },
  {
    slideNumber: 46,
    section: "Section 8: Functions & Scope",
    sectionNumber: 8,
    title: "The Dangerous Mutable Default Argument Trap",
    bullets: [
      "Python evaluates default argument expressions **ONCE**, when the function is defined, NOT each time it is called!",
      "If the default argument is mutable (like a list or dict), that same object is reused across every call.",
      "One of the top 3 favorite technical interview trick questions across all software companies."
    ],
    codeSnippet: `def append_item(val, my_list=[]):
    my_list.append(val)
    return my_list

print(append_item(1))   # [1]
print(append_item(2))   # [1, 2]  -> NOT [2]!
print(append_item(3))   # [1, 2, 3]

# The Correct idiom:
def safe_append(val, my_list=None):
    if my_list is None:
        my_list = []
    my_list.append(val)
    return my_list`,
    output: `[1]
[1, 2]
[1, 2, 3]`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Always use `arg=None` as default, then initialize `if arg is None: arg = []` inside the function.",
    trainerNote: "Spend time explaining function object.__defaults__. This single slide has appeared in Amazon, Zoho, and TCS rounds."
  },
  {
    slideNumber: 47,
    section: "Section 8: Functions & Scope",
    sectionNumber: 8,
    title: "Variable-Length Arguments: *args and **kwargs",
    bullets: [
      "`*args`: Collects extra positional arguments into a **tuple**.",
      "`**kwargs`: Collects extra keyword arguments into a **dictionary**.",
      "Enables functions to accept an arbitrary number of inputs.",
      "Can unpack iterables using `*` and dictionaries using `**`."
    ],
    codeSnippet: `def total_sum(*args):
    print("Type of args:", type(args))
    return sum(args)

def print_profile(**kwargs):
    print("Type of kwargs:", type(kwargs))
    for k, v in kwargs.items():
        print(f"  {k} = {v}")

print("Sum:", total_sum(10, 20, 30))
print_profile(name="Kavya", role="SDE", package="12 LPA")`,
    output: `Type of args: <class 'tuple'>
Sum: 60
Type of kwargs: <class 'dict'>
  name = Kavya
  role = SDE
  package = 12 LPA`,
    calloutType: "PLACEMENT TIP",
    calloutText: "Remember the single star `*` produces a TUPLE, and double star `**` produces a DICTIONARY. Frequently tested in MCQs!",
    trainerNote: "Mention that the names args and kwargs are conventional; the asterisks * and ** are what do the work."
  },
  {
    slideNumber: 48,
    section: "Section 8: Functions & Scope",
    sectionNumber: 8,
    title: "Variable Scope (LEGB Rule) & global Keyword",
    bullets: [
      "Scope resolution follows the **LEGB Rule**: Local -> Enclosing -> Global -> Built-in.",
      "Variables created inside a function have local scope and cannot be accessed outside.",
      "To modify a global variable inside a local function, you must declare it with `global`."
    ],
    codeSnippet: `count = 10  # Global

def modify():
    global count
    count = 99  # Modifies global variable

def read_only():
    # Trying to read and modify without global:
    x = count + 1
    return x

modify()
print("Global count after modify:", count)`,
    output: `Global count after modify: 99`,
    calloutType: "COMMON MISTAKE",
    calloutText: "If you assign to a variable anywhere in a function, Python treats it as local throughout that function (UnboundLocalError).",
    trainerNote: "Explain UnboundLocalError: occurs when writing `print(x); x = 5` inside a function where x exists globally."
  },
  {
    slideNumber: 49,
    section: "Section 8: Functions & Scope",
    sectionNumber: 8,
    title: "Lambda Expressions (Anonymous Functions)",
    bullets: [
      "Syntax: `lambda arguments: expression`.",
      "Anonymous, single-line functions with an implicit return statement.",
      "Cannot contain statements (`print`, loops, assignments) or multiple lines.",
      "Commonly passed into higher-order functions: `sorted()`, `map()`, `filter()`."
    ],
    codeSnippet: `square = lambda x: x * x
print("Square of 6:", square(6))

# Sorting list of tuples by second element
pairs = [(1, 'banana'), (2, 'apple'), (3, 'cherry')]
pairs.sort(key=lambda item: item[1])
print("Sorted by fruit name:", pairs)`,
    output: `Square of 6: 36
Sorted by fruit name: [(2, 'apple'), (1, 'banana'), (3, 'cherry')]`,
    calloutType: "INTERVIEW TIP",
    calloutText: "`pairs.sort(key=lambda x: x[1])` is the quintessential placement interview syntax for sorting complex data structures.",
    trainerNote: "Highlight that lambda is best for throwaway operations; for complex logic, use standard def functions."
  },

  // SECTION 9: Exception Handling
  {
    slideNumber: 50,
    section: "Section 9: Exception Handling",
    sectionNumber: 9,
    title: "Errors vs Exceptions in Python",
    bullets: [
      "Syntax Errors: Code cannot be parsed by interpreter (e.g. missing colon, mismatched parens). Stops before execution.",
      "Exceptions: Logical errors detected during execution (e.g. division by zero, missing file, wrong index).",
      "Uncaught exceptions cause immediate program crash and print a traceback."
    ],
    codeSnippet: `# Common exceptions
# 10 / 0             -> ZeroDivisionError
# int("abc")         -> ValueError
# [1, 2][5]          -> IndexError
# {"a": 1}["z"]      -> KeyError
# "hi" + 5           -> TypeError
# print(undefined)   -> NameError`,
    calloutType: "REMEMBER",
    calloutText: "Syntax errors CANNOT be caught with `try-except` because code compilation fails before execution begins!",
    trainerNote: "Have students list the 6 core standard exceptions. They appear constantly in error identification MCQs."
  },
  {
    slideNumber: 51,
    section: "Section 9: Exception Handling",
    sectionNumber: 9,
    title: "The Complete try - except - else - finally Structure",
    bullets: [
      "`try`: Contains risky code that may raise an exception.",
      "`except SpecificError:`: Catches and handles the specified exception.",
      "`else`: Executes **ONLY IF NO** exception occurred in the `try` block.",
      "`finally`: Executes **ALWAYS**, regardless of whether an exception occurred, was caught, or even if `return` was called!"
    ],
    codeSnippet: `def divide(a, b):
    try:
        res = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero!")
    else:
        print(f"Success! Result: {res}")
    finally:
        print("Cleanup: Execution completed.")

divide(10, 2)
print("---")
divide(10, 0)`,
    output: `Success! Result: 5.0
Cleanup: Execution completed.
---
Cannot divide by zero!
Cleanup: Execution completed.`,
    calloutType: "IMPORTANT",
    calloutText: "Order matters: `try -> except -> else -> finally`. The `else` block will NOT execute if an exception was raised.",
    trainerNote: "Point out why `else` exists: to keep the `try` block as small as possible so you don't accidentally catch unintended errors."
  },
  {
    slideNumber: 52,
    section: "Section 9: Exception Handling",
    sectionNumber: 9,
    title: "Catching Multiple Exceptions & Exception Hierarchy",
    bullets: [
      "Can handle multiple specific exceptions using separate `except` blocks or a tuple: `except (ValueError, TypeError):`.",
      "Base class hierarchy: `BaseException` -> `Exception` -> all standard errors.",
      "Catching `Exception` will catch all standard runtime errors.",
      "Avoid bare `except:` as it catches system signals like `KeyboardInterrupt` and `SystemExit`."
    ],
    codeSnippet: `def safe_convert(val):
    try:
        num = int(val)
        return 100 // num
    except ValueError:
        return "Invalid input (not a number)"
    except ZeroDivisionError:
        return "Cannot divide 100 by zero"

print(safe_convert("50"))
print(safe_convert("abc"))
print(safe_convert("0"))`,
    output: `2
Invalid input (not a number)
Cannot divide 100 by zero`,
    calloutType: "COMMON MISTAKE",
    calloutText: "Putting a generic `except Exception:` BEFORE a specific `except ValueError:` makes the specific block unreachable code!",
    trainerNote: "Specific exceptions must always be caught before parent/generic exceptions."
  },
  {
    slideNumber: 53,
    section: "Section 9: Exception Handling",
    sectionNumber: 9,
    title: "The finally Block Return Trap",
    bullets: [
      "If the `finally` block contains a `return` statement, that return value **OVERRIDES** any return value from `try` or `except`!",
      "Even if an exception is raised in `try` and unhandled, a return in `finally` will suppress the exception!",
      "A classic output-prediction trick question in first-round technical tests."
    ],
    codeSnippet: `def tricky_function():
    try:
        return 1
    finally:
        return 2

print("Return value:", tricky_function())`,
    output: `Return value: 2`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Interview Question: 'What does tricky_function return?' Answer is 2. The `finally` block always has the final word.",
    trainerNote: "Demonstrate this live. Many students will instinctively predict 1."
  },
  {
    slideNumber: 54,
    section: "Section 9: Exception Handling",
    sectionNumber: 9,
    title: "Raising Custom Exceptions: raise keyword",
    bullets: [
      "Use `raise ExceptionType('message')` to trigger an exception intentionally.",
      "Essential for input validation and business rule enforcement.",
      "Can create custom exception classes by inheriting from `Exception`."
    ],
    codeSnippet: `def validate_placement_age(age):
    if age < 18:
        raise ValueError("Candidate must be at least 18 years old")
    return "Eligible for drive"

try:
    print(validate_placement_age(16))
except ValueError as e:
    print("Caught Error:", e)`,
    output: `Caught Error: Candidate must be at least 18 years old`,
    calloutType: "PLACEMENT TIP",
    calloutText: "In object-oriented coding rounds, throwing clean `ValueError` or `TypeError` shows production-quality coding practices.",
    trainerNote: "Briefly explain: `class InvalidCgpaError(Exception): pass` for custom company test error handling."
  },

  // SECTION 10: OOP Basics
  {
    slideNumber: 55,
    section: "Section 10: OOP Basics",
    sectionNumber: 10,
    title: "Class, Object & The __init__ Constructor",
    bullets: [
      "Class: Blueprint or template for creating objects (e.g., `Student`).",
      "Object: Instance of a class possessing state (attributes) and behavior (methods).",
      "`__init__(self, ...)`: Special constructor method automatically called when a new object is instantiated.",
      "`self`: Explicit reference to the current object instance (analogous to `this` in Java/C++)."
    ],
    codeSnippet: `class Student:
    def __init__(self, name, branch):
        self.name = name        # Instance variable
        self.branch = branch

s1 = Student("Varun", "CSE")
s2 = Student("Ananya", "ECE")
print(f"{s1.name} studies {s1.branch}")
print(f"{s2.name} studies {s2.branch}")`,
    output: `Varun studies CSE
Ananya studies ECE`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Q: 'Is `self` a keyword in Python?' A: NO! `self` is just a standard naming convention. You could technically name it `this`, but PEP 8 mandates `self`.",
    trainerNote: "Ask students if self is a keyword. Almost 70% think it's a reserved keyword. Prove it's just a parameter!"
  },
  {
    slideNumber: 56,
    section: "Section 10: OOP Basics",
    sectionNumber: 10,
    title: "Instance Variables vs Class Variables",
    bullets: [
      "Instance Variables: Defined inside methods using `self.var`. Unique to each object instance.",
      "Class Variables: Defined inside the class body but outside any method. **Shared across all instances**.",
      "Modifying a class variable via the class modifies it for all instances.",
      "Modifying it via an instance creates a shadowing instance variable for that instance only!"
    ],
    codeSnippet: `class Candidate:
    college = "Anna University"   # Class variable (shared)

    def __init__(self, name):
        self.name = name          # Instance variable

c1 = Candidate("Ravi")
c2 = Candidate("Deepa")
print(c1.college, c2.college)

Candidate.college = "IIT Madras"  # Updates for all
print(c1.college, c2.college)`,
    output: `Anna University Anna University
IIT Madras IIT Madras`,
    calloutType: "COMMON MISTAKE",
    calloutText: "Writing `c1.college = 'NIT'` does NOT change the class variable. It creates an instance variable `college` on `c1`!",
    trainerNote: "Use the whiteboard to diagram the class namespace vs instance namespace."
  },
  {
    slideNumber: 57,
    section: "Section 10: OOP Basics",
    sectionNumber: 10,
    title: "Inheritance & The super() Function",
    bullets: [
      "Inheritance: Mechanism where a child class acquires attributes and methods of a parent class.",
      "Syntax: `class ChildClass(ParentClass):`.",
      "Enables code reusability and extensible software design.",
      "`super()`: Calls methods of the parent class (especially `super().__init__()` to reuse parent initialization)."
    ],
    codeSnippet: `class Employee:
    def __init__(self, name, emp_id):
        self.name = name
        self.emp_id = emp_id

class Developer(Employee):
    def __init__(self, name, emp_id, tech_stack):
        super().__init__(name, emp_id)  # Call parent constructor
        self.tech_stack = tech_stack

dev = Developer("Kiran", 1042, "Python & React")
print(f"{dev.name} (ID: {dev.emp_id}) works on {dev.tech_stack}")`,
    output: `Kiran (ID: 1042) works on Python & React`,
    calloutType: "REMEMBER",
    calloutText: "Forgetting `super().__init__(...)` in child class leaves parent attributes uninitialized, causing `AttributeError`.",
    trainerNote: "Python supports multiple inheritance (class C(A, B)), resolved using Method Resolution Order (MRO)."
  },
  {
    slideNumber: 58,
    section: "Section 10: OOP Basics",
    sectionNumber: 10,
    title: "Polymorphism & Method Overriding",
    bullets: [
      "Polymorphism: 'Many forms' - ability to use the same method name for different underlying classes.",
      "Method Overriding: Child class re-implements a method already defined in its parent class.",
      "Duck Typing: 'If it walks like a duck and quacks like a duck, it is a duck.' Python checks for method existence at runtime, not strict inheritance."
    ],
    codeSnippet: `class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

animals = [Dog(), Cat()]
for animal in animals:
    print(animal.speak())`,
    output: `Woof!
Meow!`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Python DOES NOT support traditional method overloading (same method name with different argument counts). The last defined method overwrites previous ones!",
    trainerNote: "Explain that in Python, simulate overloading using default arguments `def add(a, b, c=0):`."
  },
  {
    slideNumber: 59,
    section: "Section 10: OOP Basics",
    sectionNumber: 10,
    title: "Encapsulation & Private Members in Python",
    bullets: [
      "Encapsulation: Bundling data and methods together and restricting direct outside access.",
      "Public: `self.name` (accessible from anywhere).",
      "Protected: `self._salary` (single underscore convention: internal use intended).",
      "Private: `self.__password` (double underscore invokes **Name Mangling** to `_ClassName__password`)."
    ],
    codeSnippet: `class Account:
    def __init__(self, balance):
        self.__balance = balance  # Private

    def get_balance(self):
        return self.__balance

acc = Account(50000)
print("Balance via getter:", acc.get_balance())
# print(acc.__balance)    # AttributeError!
print("Mangling access:", acc._Account__balance)  # Still accessible!`,
    output: `Balance via getter: 50000
Mangling access: 50000`,
    calloutType: "IMPORTANT",
    calloutText: "In Python, true private variables DO NOT exist. Python relies on developer consensus ('we are all consenting adults here').",
    trainerNote: "Explain name mangling: Python renames __var to _ClassName__var to avoid accidental collisions in subclasses."
  },
  {
    slideNumber: 60,
    section: "Section 10: OOP Basics",
    sectionNumber: 10,
    title: "OOP Coding Problem: Bank Account System",
    bullets: [
      "Classroom implementation of standard placement OOP assessment problem.",
      "Implements deposit, withdraw with balance check, and balance inquiry.",
      "Tests encapsulation, edge condition validation, and clean state mutations."
    ],
    codeSnippet: `class BankAccount:
    def __init__(self, account_no, holder, initial_balance=0):
        self.account_no = account_no
        self.holder = holder
        self._balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            return True
        return False

    def get_balance(self):
        return self._balance

acc = BankAccount("AC101", "Pooja", 1000)
acc.deposit(500)
acc.withdraw(300)
print(f"Holder: {acc.holder} | Balance: ₹{acc.get_balance()}")`,
    output: `Holder: Pooja | Balance: ₹1200`,
    calloutType: "CODING TIP",
    calloutText: "Always return boolean `True`/`False` or raise exceptions in methods like `withdraw()` so the caller knows if the operation succeeded.",
    trainerNote: "Have students trace what happens if someone withdraws 5000 from 1200 balance."
  },

  // SECTION 11: File Handling
  {
    slideNumber: 61,
    section: "Section 11: File Handling",
    sectionNumber: 11,
    title: "File Operations: Modes and The open() Function",
    bullets: [
      "Built-in `open(filename, mode)` function opens a file and returns a file object.",
      "Modes: `'r'` (read - default), `'w'` (write - truncates/overwrites), `'a'` (append - adds to end), `'r+'` (read & write).",
      "Text mode (`'t'`) is default; append `'b'` for binary files (`'rb'`, `'wb'`).",
      "Always close files using `file.close()` to release system file descriptors."
    ],
    codeSnippet: `# Writing to a file
f = open("sample.txt", "w")
f.write("Line 1: Placement Ready\\nLine 2: Python Masterclass")
f.close()

# Reading back
f = open("sample.txt", "r")
content = f.read()
print(content)
f.close()`,
    output: `Line 1: Placement Ready
Line 2: Python Masterclass`,
    calloutType: "COMMON MISTAKE",
    calloutText: "Opening in `'w'` mode wipes existing contents immediately! If you want to retain old data, use `'a'` (append) mode.",
    trainerNote: "Warn students: never test file code using 'w' on important project files!"
  },
  {
    slideNumber: 62,
    section: "Section 11: File Handling",
    sectionNumber: 62,
    title: "The with Statement (Context Manager)",
    bullets: [
      "Best Practice: Always use the `with open(...) as file:` statement.",
      "Automatically closes the file when the block exits, **even if an unhandled exception occurs**.",
      "Eliminates memory leaks and dangling file handles.",
      "Implements `__enter__()` and `__exit__()` context manager protocols."
    ],
    codeSnippet: `# Modern, safe file reading
with open("sample.txt", "r") as f:
    for line_no, line in enumerate(f, start=1):
        print(f"{line_no}: {line.strip()}")

# File is automatically closed here!
print("Is file closed?", f.closed)`,
    output: `1: Line 1: Placement Ready
2: Line 2: Python Masterclass
Is file closed? True`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Q: 'Why should you prefer the `with` statement?' A: Guarantees resource cleanup by invoking `__exit__()`, preventing resource leaks.",
    trainerNote: "Iterating directly over the file object `for line in f:` reads line-by-line lazily without loading the entire file into RAM."
  },
  {
    slideNumber: 63,
    section: "Section 11: File Handling",
    sectionNumber: 63,
    title: "Reading Methods: read() vs readline() vs readlines()",
    bullets: [
      "`read([size])`: Reads entire file as a **single string** (or `size` bytes).",
      "`readline()`: Reads **one single line** as a string including the newline `\\n`.",
      "`readlines()`: Reads all lines and returns them as a **list of strings**.",
      "For large files (gigabytes), iterating directly `for line in f:` uses O(1) memory."
    ],
    codeSnippet: `with open("sample.txt", "r") as f:
    lines = f.readlines()
    print("readlines() list:", lines)

with open("sample.txt", "r") as f:
    f.seek(0)  # Rewind to beginning
    first_line = f.readline()
    print("readline() first line:", repr(first_line))`,
    output: `readlines() list: ['Line 1: Placement Ready\\n', 'Line 2: Python Masterclass']
readline() first line: 'Line 1: Placement Ready\\n'`,
    calloutType: "PLACEMENT TIP",
    calloutText: "Calling `read()` on a 10GB log file will trigger a `MemoryError`. Always stream using `for line in file:` in production.",
    trainerNote: "Explain f.seek(0) to reset the file read pointer back to the start."
  },
  {
    slideNumber: 64,
    section: "Section 11: File Handling",
    sectionNumber: 64,
    title: "Interview Problem: Word & Line Count in File",
    bullets: [
      "Count total lines, words, and characters in a file.",
      "Standard test problem for file I/O scripting.",
      "Demonstrates line-by-line processing and string splitting."
    ],
    codeSnippet: `def analyze_file_content(text_content):
    lines = text_content.strip().split("\\n")
    total_lines = len(lines)
    total_words = sum(len(line.split()) for line in lines)
    total_chars = sum(len(line) for line in lines)
    return total_lines, total_words, total_chars

sample = """Python is powerful
Easy to learn
Great for campus placements"""

l, w, c = analyze_file_content(sample)
print(f"Lines: {l} | Words: {w} | Characters: {c}")`,
    output: `Lines: 3 | Words: 10 | Characters: 58`,
    calloutType: "CODING TIP",
    calloutText: "Using generator expression inside `sum(...)` computes totals without generating intermediate temporary lists in memory.",
    trainerNote: "Mention unix command equivalence: `wc -l`, `wc -w`, `wc -c`."
  },

  // SECTION 12: Placement Coding Patterns
  {
    slideNumber: 65,
    section: "Section 12: Placement Coding Patterns",
    sectionNumber: 12,
    title: "Time & Space Complexity Basics for Freshers",
    bullets: [
      "Big-O Notation: Measures how algorithm runtime or memory grows as input size N increases.",
      "O(1) Constant: Hash map lookup, list append, indexing.",
      "O(log N) Logarithmic: Binary search on sorted array.",
      "O(N) Linear: Single loop through array, linear search.",
      "O(N log N) Linearithmic: Python's Timsort (`sort()`, `sorted()`).",
      "O(N²) Quadratic: Nested loops over array (check if N <= 1000 to avoid TLE)."
    ],
    interviewPoints: "Online platforms typically allow ~10^7 operations per second. If N = 10^5, an O(N²) solution will ALWAYS hit Time Limit Exceeded (TLE).",
    calloutType: "IMPORTANT",
    calloutText: "Look at the constraints: N <= 100 -> O(N²); N <= 10^5 -> O(N) or O(N log N); N <= 10^9 -> O(log N) or O(1).",
    trainerNote: "Teach students how to calculate if their code will pass before even typing a line of code!"
  },
  {
    slideNumber: 66,
    section: "Section 12: Placement Coding Patterns",
    sectionNumber: 12,
    title: "Pattern 1: Two Pointers Technique (Two Sum)",
    bullets: [
      "Uses two pointer indices (often left=0, right=len-1) to scan a sequence in linear time.",
      "Replaces nested O(N²) loops with an optimal O(N) or O(N log N) scan.",
      "Classic application: Two Sum in a sorted array, reversing arrays in-place, container with most water."
    ],
    codeSnippet: `def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return (left, right)
        elif current_sum < target:
            left += 1   # Need larger sum
        else:
            right -= 1  # Need smaller sum
    return None

print("Indices for target 13:", two_sum_sorted([2, 5, 7, 11, 15], 18))`,
    output: `Indices for target 13: (2, 3)`,
    calloutType: "PLACEMENT TIP",
    calloutText: "Two Pointers is the #1 most frequently asked algorithm pattern in campus recruitment technical interviews!",
    trainerNote: "Walk through pointers moving towards each other on the whiteboard."
  },
  {
    slideNumber: 67,
    section: "Section 12: Placement Coding Patterns",
    sectionNumber: 67,
    title: "Pattern 2: Frequency Hash Map (Two Sum Unsorted)",
    bullets: [
      "Trade space for time: Use a dictionary to remember seen values in O(1) time.",
      "For Two Sum on unsorted array: For each number `x`, check if `target - x` is already in dictionary.",
      "Runs in O(N) time and O(N) space, beating naive O(N²) pair checking."
    ],
    codeSnippet: `def two_sum_unsorted(nums, target):
    seen = {}  # val -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i
    return None

print("Pair for 9:", two_sum_unsorted([2, 11, 7, 15], 9))`,
    output: `Pair for 9: (0, 2)`,
    calloutType: "CODING TIP",
    calloutText: "Hash map pattern solves 30% of all interview array problems: First Non-Repeating, Anagrams, Subarray Sum.",
    trainerNote: "Contrast sorted (two pointers) vs unsorted (hash map). Give students clear rules on when to use which."
  },
  {
    slideNumber: 68,
    section: "Section 12: Placement Coding Patterns",
    sectionNumber: 68,
    title: "Pattern 3: Number Manipulation (Digits & Reversal)",
    bullets: [
      "Extracting digits: `digit = n % 10`; shrinking: `n = n // 10`.",
      "Used for: Reverse integer, Palindrome number, Armstrong number, Sum of digits, Count digits.",
      "Always handle negative numbers and 0 as explicit edge cases."
    ],
    codeSnippet: `def reverse_integer(n):
    sign = -1 if n < 0 else 1
    n = abs(n)
    rev = 0
    while n > 0:
        rev = (rev * 10) + (n % 10)
        n //= 10
    return sign * rev

print("Reverse 12345:", reverse_integer(12345))
print("Reverse -987:", reverse_integer(-987))`,
    output: `Reverse 12345: 54321
Reverse -987: -789`,
    calloutType: "INTERVIEW TIP",
    calloutText: "Don't just do `int(str(n)[::-1])` in technical interviews. Interviewers want to see the mathematical `while n > 0:` loop!",
    trainerNote: "Tell students: string conversion works, but interviewers test algorithmic mastery with modulo arithmetic."
  },

  // SECTION 13: Frequently Asked Interview Questions
  {
    slideNumber: 69,
    section: "Section 13: Frequently Asked Interview Questions",
    sectionNumber: 13,
    title: "Top 5 High-Yield Technical Interview Questions",
    bullets: [
      "1. What is the difference between deep copy and shallow copy?",
      "   -> Shallow copy copies outer container; deep copy recursively copies all nested objects.",
      "2. What is PEP 8?",
      "   -> Python Enhancement Proposal 8: Official style guide (4 spaces, snake_case functions, CamelCase classes).",
      "3. What is the Global Interpreter Lock (GIL)?",
      "   -> Mutex that allows only one native thread to execute Python bytecode at a time in CPython.",
      "4. What is the difference between `range()` and `list`?",
      "   -> `range()` computes values lazily on-demand using O(1) memory; a list stores all items in RAM."
    ],
    calloutType: "INTERVIEW TIP",
    calloutText: "For GIL: mention that I/O-bound tasks still benefit from multithreading, but CPU-bound tasks require multiprocessing.",
    trainerNote: "Keep GIL explanation simple for freshers: one thread per CPU core for Python bytecode."
  },
  {
    slideNumber: 70,
    section: "Section 13: Frequently Asked Interview Questions",
    sectionNumber: 13,
    title: "Common Output Prediction Traps Summary",
    bullets: [
      "Trap 1: `a = [[]] * 3` -> Modifying `a[0].append(1)` mutates all 3 inner lists!",
      "Trap 2: `[x for x in (1, 2, 3) if x = 2]` -> SyntaxError (assignment inside comprehension).",
      "Trap 3: `print(bool([]) == False)` -> Evaluates to `False == False` which is `True`.",
      "Trap 4: `x = 10; def fn(): print(x); x = 5` -> `UnboundLocalError`!",
      "Trap 5: `print(round(2.5), round(3.5))` -> Bankers rounding rounds to nearest even integer: `2` and `4`!"
    ],
    calloutType: "REMEMBER",
    calloutText: "Python 3 uses Bankers Rounding: `round(2.5) == 2` and `round(3.5) == 4`. Always rounds towards the nearest EVEN number.",
    trainerNote: "Run round(2.5) on python prompt to shock students who expect 3.0."
  },

  // SECTION 14: Final Revision
  {
    slideNumber: 71,
    section: "Section 14: Final Revision",
    sectionNumber: 14,
    title: "Placement Day Golden Checklist",
    bullets: [
      "✓ Remember `input()` returns `str`. Use `int(input())` or `map(int, input().split())`.",
      "✓ Division `/` produces float `3.0`. Integer floor division is `//`.",
      "✓ String and Tuple are IMMUTABLE. List, Set, and Dict are MUTABLE.",
      "✓ Lists search in O(N). Sets and Dict keys search in O(1).",
      "✓ Single element tuple must have a comma: `(x,)`.",
      "✓ `d.get(k, 0)` avoids KeyErrors during frequency counting.",
      "✓ Check constraints before choosing algorithm (O(N) vs O(N²))."
    ],
    calloutType: "PLACEMENT TIP",
    calloutText: "Read the problem statement twice. Write down input constraints and test with boundary cases (0, 1, empty, negative) before submitting!",
    trainerNote: "Have students recite the Golden Checklist before starting mock assessments."
  },
  {
    slideNumber: 72,
    section: "Section 14: Final Revision",
    sectionNumber: 14,
    title: "Summary & Classroom Roadmap",
    bullets: [
      "We have covered all 12 core placement modules from scratch to technical interview readiness.",
      "Next steps in this suite:",
      "-> Practice the 100 Verified Technical MCQs (Easy, Medium, Difficult)",
      "-> Work through the 50 Curated Placement Coding Problems (Level 1, 2, 3)",
      "-> Solve the 30 Predict the Output challenges and 20 Debugging tasks",
      "-> Take the 60-Minute Full-Length Placement Mock Screening Assessment",
      "Download the complete PowerPoint presentation (.pptx) anytime to take this masterclass into any classroom!"
    ],
    calloutType: "CODING TIP",
    calloutText: "Consistency is key. 5 problems solved with deep understanding beats 50 problems copied without comprehension.",
    trainerNote: "Wish the students best of luck for their campus recruitment drives!"
  }
];
