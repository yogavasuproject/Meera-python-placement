export interface MockSection {
  part: 'A' | 'B' | 'C' | 'D';
  title: string;
  questionCount: number;
  recommendedMinutes: number;
  description: string;
}

export const mockTestStructure: MockSection[] = [
  {
    part: "A",
    title: "Part A: Conceptual & Syntax MCQs",
    questionCount: 20,
    recommendedMinutes: 20,
    description: "Core Python fundamentals, operators, truthiness, collections, and scoping rules."
  },
  {
    part: "B",
    title: "Part B: Output Prediction & Code Tracing",
    questionCount: 15,
    recommendedMinutes: 15,
    description: "Predict the exact stdout output of Python snippets with slicing, aliasing, and loop control."
  },
  {
    part: "C",
    title: "Part C: Placement Coding Questions",
    questionCount: 10,
    recommendedMinutes: 15,
    description: "Implement concise algorithmic solutions for standard first-round recruitment problems."
  },
  {
    part: "D",
    title: "Part D: Code Debugging & Error Identification",
    questionCount: 5,
    recommendedMinutes: 10,
    description: "Identify and fix common syntax, runtime, and logical bugs."
  }
];

export interface MockTestQuestion {
  id: number;
  part: 'A' | 'B' | 'C' | 'D';
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Difficult';
  questionText: string;
  codeSnippet?: string;
  options?: { A: string; B: string; C: string; D: string };
  correctAnswer: string;
  solutionCode?: string;
  explanation: string;
  marks: number;
}

export const mockTestQuestions: MockTestQuestion[] = [
  // PART A: 20 MCQs (Questions 1 to 20)
  {
    id: 1,
    part: "A",
    topic: "Operators",
    difficulty: "Easy",
    questionText: "What is the return type of the true division operator `/` in Python 3?",
    options: { A: "int", B: "float", C: "double", D: "number" },
    correctAnswer: "B",
    explanation: "In Python 3, `/` always returns a `float` (e.g. `6 / 2 -> 3.0`).",
    marks: 1
  },
  {
    id: 2,
    part: "A",
    topic: "Variables & Identity",
    difficulty: "Medium",
    questionText: "Which statement best describes the difference between `a == b` and `a is b`?",
    options: {
      A: "`==` compares memory location, `is` compares values",
      B: "`==` compares values, `is` compares object identity / memory address",
      C: "Both are completely interchangeable in Python",
      D: "`is` only works for boolean values"
    },
    correctAnswer: "B",
    explanation: "`==` checks value equality; `is` checks whether `id(a) == id(b)`.",
    marks: 1
  },
  {
    id: 3,
    part: "A",
    topic: "Data Types",
    difficulty: "Easy",
    questionText: "Which of the following is an IMMUTABLE data type?",
    options: { A: "list", B: "dict", C: "tuple", D: "set" },
    correctAnswer: "C",
    explanation: "Tuples cannot be altered after creation.",
    marks: 1
  },
  {
    id: 4,
    part: "A",
    topic: "Operators",
    difficulty: "Medium",
    questionText: "What is the result of `-9 // 4` in Python?",
    options: { A: "-2", B: "-3", C: "-2.25", D: "-2.0" },
    correctAnswer: "B",
    explanation: "Floor division rounds down towards negative infinity: `-9 / 4 = -2.25`, floored is `-3`.",
    marks: 1
  },
  {
    id: 5,
    part: "A",
    topic: "Strings",
    difficulty: "Easy",
    questionText: "What does `s[1:5]` return for `s = 'Engineering'`?",
    options: { A: "'Engi'", B: "'ngin'", C: "'ngine'", D: "'Eng'" },
    correctAnswer: "B",
    explanation: "Indices 1, 2, 3, 4 corresponding to characters 'n', 'g', 'i', 'n'.",
    marks: 1
  },
  {
    id: 6,
    part: "A",
    topic: "Lists",
    difficulty: "Medium",
    questionText: "What is the result of `len([1, 2].append([3, 4]))`?",
    options: { A: "3", B: "4", C: "TypeError: object of type 'NoneType' has no len()", D: "2" },
    correctAnswer: "C",
    explanation: "`append()` returns `None`. Calling `len(None)` raises a `TypeError`.",
    marks: 1
  },
  {
    id: 7,
    part: "A",
    topic: "Sets",
    difficulty: "Easy",
    questionText: "How do you define an empty set in Python?",
    options: { A: "{}", B: "set()", C: "[]", D: "empty_set" },
    correctAnswer: "B",
    explanation: "`{}` creates an empty dictionary. `set()` creates an empty set.",
    marks: 1
  },
  {
    id: 8,
    part: "A",
    topic: "Dictionaries",
    difficulty: "Medium",
    questionText: "Which of the following can NOT be used as a key in a Python dictionary?",
    options: { A: "42", B: "'user_id'", C: "(1, 2)", D: "[1, 2]" },
    correctAnswer: "D",
    explanation: "Lists are mutable and unhashable, raising `TypeError: unhashable type: 'list'`.",
    marks: 1
  },
  {
    id: 9,
    part: "A",
    topic: "Functions",
    difficulty: "Medium",
    questionText: "What is the danger of using `def func(items=[]):`?",
    options: {
      A: "Items will be converted to a tuple",
      B: "The default list is instantiated once and shared across calls",
      C: "SyntaxError",
      D: "Functions cannot accept lists as parameters"
    },
    correctAnswer: "B",
    explanation: "Default arguments are evaluated once at definition time, mutating across invocations.",
    marks: 1
  },
  {
    id: 10,
    part: "A",
    topic: "Loops",
    difficulty: "Medium",
    questionText: "When does the `else` block of a `while` loop execute?",
    options: {
      A: "When the loop breaks using `break`",
      B: "When the condition becomes False without hitting `break`",
      C: "On every single iteration",
      D: "Only when an exception occurs"
    },
    correctAnswer: "B",
    explanation: "The `else` clause executes only if the loop completes without a `break`.",
    marks: 1
  },
  {
    id: 11,
    part: "A",
    topic: "Truthiness",
    difficulty: "Medium",
    questionText: "Which of the following evaluates to `True` in Python?",
    options: { A: "bool('')", B: "bool('0')", C: "bool([])", D: "bool(None)" },
    correctAnswer: "B",
    explanation: "'0' is a non-empty string, hence truthy.",
    marks: 1
  },
  {
    id: 12,
    part: "A",
    topic: "OOP",
    difficulty: "Easy",
    questionText: "Is `self` a reserved keyword in Python?",
    options: {
      A: "Yes, it is a protected keyword",
      B: "No, it is a standard naming convention for the first parameter",
      C: "Yes, exactly like `this` in Java",
      D: "It is only a keyword inside constructors"
    },
    correctAnswer: "B",
    explanation: "`self` is a PEP 8 convention, not a reserved keyword.",
    marks: 1
  },
  {
    id: 13,
    part: "A",
    topic: "Exception Handling",
    difficulty: "Easy",
    questionText: "Which block executes only when NO exception occurs in a `try` block?",
    options: { A: "except", B: "finally", C: "else", D: "catch" },
    correctAnswer: "C",
    explanation: "The `else` block runs strictly when the `try` block succeeds without error.",
    marks: 1
  },
  {
    id: 14,
    part: "A",
    topic: "File Handling",
    difficulty: "Easy",
    questionText: "Why is `with open(...)` preferred over `open(...)`?",
    options: {
      A: "It makes reading 10x faster",
      B: "It automatically closes the file even if exceptions occur",
      C: "It encrypts file contents",
      D: "It prevents file writing"
    },
    correctAnswer: "B",
    explanation: "Context manager guarantees automatic resource closure via `__exit__()`.",
    marks: 1
  },
  {
    id: 15,
    part: "A",
    topic: "Complexity",
    difficulty: "Medium",
    questionText: "What is the average time complexity of `x in my_set`?",
    options: { A: "O(1)", B: "O(N)", C: "O(log N)", D: "O(N^2)" },
    correctAnswer: "A",
    explanation: "Set lookups use hash tables, running in O(1) average time.",
    marks: 1
  },
  {
    id: 16,
    part: "A",
    topic: "Functions",
    difficulty: "Medium",
    questionText: "What is the return type of `print('Hello')`?",
    options: { A: "str", B: "int", C: "NoneType", D: "bool" },
    correctAnswer: "C",
    explanation: "`print()` outputs to console and returns `None`.",
    marks: 1
  },
  {
    id: 17,
    part: "A",
    topic: "Strings",
    difficulty: "Medium",
    questionText: "What does `'Python'.find('z')` return?",
    options: { A: "-1", B: "ValueError", C: "False", D: "None" },
    correctAnswer: "A",
    explanation: "`find()` returns `-1` if not found; `index()` would raise `ValueError`.",
    marks: 1
  },
  {
    id: 18,
    part: "A",
    topic: "Lists",
    difficulty: "Medium",
    questionText: "What does `nums = [1, 2, 3]; nums.insert(0, 99)` do?",
    options: {
      A: "Replaces index 0 with 99",
      B: "Inserts 99 at the beginning and shifts existing elements right",
      C: "Inserts 99 at the end",
      D: "SyntaxError"
    },
    correctAnswer: "B",
    explanation: "`insert(0, 99)` shifts elements right and places 99 at index 0.",
    marks: 1
  },
  {
    id: 19,
    part: "A",
    topic: "Logical Operators",
    difficulty: "Medium",
    questionText: "What is the output of `'Hello' or 'World'`?",
    options: { A: "True", B: "'Hello'", C: "'World'", D: "'HelloWorld'" },
    correctAnswer: "B",
    explanation: "`or` returns the first truthy operand ('Hello').",
    marks: 1
  },
  {
    id: 20,
    part: "A",
    topic: "OOP",
    difficulty: "Medium",
    questionText: "How are private attributes indicated in Python?",
    options: {
      A: "private keyword",
      B: "Single underscore `_name`",
      C: "Double underscore `__name` (name mangling)",
      D: "Caps lock `NAME`"
    },
    correctAnswer: "C",
    explanation: "Double leading underscore triggers Name Mangling to `_ClassName__name`.",
    marks: 1
  },

  // PART B: 15 Output Predictions (Questions 21 to 35)
  {
    id: 21,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Easy",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `x = [1, 2]
y = x
y.append(3)
print(x)`,
    correctAnswer: "[1, 2, 3]",
    explanation: "`y = x` creates an alias. Modifying `y` mutates `x`.",
    marks: 2
  },
  {
    id: 22,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Easy",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `print("Python"[::-2])`,
    correctAnswer: "nhy",
    explanation: "Reversed string is 'nohtyP'. Taking every 2nd char from the reversed string gives indices 0, 2, 4 -> 'n', 'h', 'y'.",
    marks: 2
  },
  {
    id: 23,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `d = {"a": 1, "b": 2}
print(d.get("c", 0) + d.get("a", 0))`,
    correctAnswer: "1",
    explanation: "`d.get('c', 0)` is 0; `d.get('a', 0)` is 1. `0 + 1 = 1`.",
    marks: 2
  },
  {
    id: 24,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `def calc():
    try:
        return 10
    finally:
        return 20

print(calc())`,
    correctAnswer: "20",
    explanation: "The return statement in `finally` overrides previous return values.",
    marks: 2
  },
  {
    id: 25,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `s = {1, 1.0, "1", True}
print(len(s))`,
    correctAnswer: "2",
    explanation: "In Python, `1 == 1.0 == True` and have identical hashes. They collapse into one element. '1' is a string. Set has 2 elements: `{1, '1'}`.",
    marks: 2
  },
  {
    id: 26,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `print([i * 2 for i in range(5) if i % 2 == 0])`,
    correctAnswer: "[0, 4, 8]",
    explanation: "Even values in range(5) are 0, 2, 4. Multiplied by 2 gives `[0, 4, 8]`.",
    marks: 2
  },
  {
    id: 27,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `nums = [10, 20, 30]
res = nums.sort()
print(res)`,
    correctAnswer: "None",
    explanation: "`sort()` modifies in-place and returns `None`.",
    marks: 2
  },
  {
    id: 28,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `t = (1, 2)
a, b = t
a, b = b, a
print(t, a)`,
    correctAnswer: "(1, 2) 2",
    explanation: "Swapping `a, b` does not modify the immutable tuple `t`. `a` is 2.",
    marks: 2
  },
  {
    id: 29,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `x = 10
def change():
    global x
    x = 25
change()
print(x)`,
    correctAnswer: "25",
    explanation: "`global x` updates the global variable to 25.",
    marks: 2
  },
  {
    id: 30,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `print(" ".join(["Campus", "2026"]).split()[0])`,
    correctAnswer: "Campus",
    explanation: "Joins to 'Campus 2026', splits back into `['Campus', '2026']`, index 0 is 'Campus'.",
    marks: 2
  },
  {
    id: 31,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `print(bool("False"), bool(""))`,
    correctAnswer: "True False",
    explanation: "Non-empty string 'False' is True; empty string '' is False.",
    marks: 2
  },
  {
    id: 32,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Difficult",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `matrix = [[1] * 2] * 2
matrix[0][1] = 9
print(matrix[1][1])`,
    correctAnswer: "9",
    explanation: "Multiplication creates shared inner list references; modifying `matrix[0][1]` also alters `matrix[1][1]`.",
    marks: 2
  },
  {
    id: 33,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Difficult",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `print(round(2.5), round(3.5))`,
    correctAnswer: "2 4",
    explanation: "Python 3 uses bankers rounding (round to nearest even integer).",
    marks: 2
  },
  {
    id: 34,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Difficult",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `fns = [lambda: i for i in range(3)]
print([f() for f in fns])`,
    correctAnswer: "[2, 2, 2]",
    explanation: "Late binding of closures resolves `i` after loop finishes, when `i = 2`.",
    marks: 2
  },
  {
    id: 35,
    part: "B",
    topic: "Output Prediction",
    difficulty: "Medium",
    questionText: "Predict the output of the following code snippet:",
    codeSnippet: `x = 5
print(1 < x < 10 > 2)`,
    correctAnswer: "True",
    explanation: "Chained comparison: `(1 < 5) and (5 < 10) and (10 > 2)`. All are True.",
    marks: 2
  },

  // PART C: 10 Coding Questions (Questions 36 to 45)
  {
    id: 36,
    part: "C",
    topic: "Coding",
    difficulty: "Easy",
    questionText: "Write a function `is_even(n: int) -> bool` to check if a number is even without division `/` or modulo `%`.",
    correctAnswer: "Use bitwise AND: `(n & 1) == 0`",
    solutionCode: `def is_even(n: int) -> bool:
    return (n & 1) == 0`,
    explanation: "The least significant bit of any even number is 0.",
    marks: 3
  },
  {
    id: 37,
    part: "C",
    topic: "Coding",
    difficulty: "Easy",
    questionText: "Write a function `reverse_digits(n: int) -> int` to reverse an integer mathematically.",
    correctAnswer: "Modulo 10 extraction and multiply rev * 10",
    solutionCode: `def reverse_digits(n: int) -> int:
    sign = -1 if n < 0 else 1
    n = abs(n)
    rev = 0
    while n > 0:
        rev = rev * 10 + (n % 10)
        n //= 10
    return sign * rev`,
    explanation: "Extracts digits right-to-left and constructs reversed number.",
    marks: 3
  },
  {
    id: 38,
    part: "C",
    topic: "Coding",
    difficulty: "Easy",
    questionText: "Write a function `is_leap(year: int) -> bool` to verify whether a year is a Leap Year.",
    correctAnswer: "(year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)",
    solutionCode: `def is_leap(year: int) -> bool:
    return (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)`,
    explanation: "Century years must be divisible by 400; regular years by 4.",
    marks: 3
  },
  {
    id: 39,
    part: "C",
    topic: "Coding",
    difficulty: "Medium",
    questionText: "Write a function `second_largest(arr: list) -> int` in O(N) time without sorting.",
    correctAnswer: "Single pass tracking first and second variables",
    solutionCode: `def second_largest(arr: list) -> int:
    first = second = float('-inf')
    for x in arr:
        if x > first:
            second = first
            first = x
        elif x > second and x != first:
            second = x
    return second if second != float('-inf') else -1`,
    explanation: "Single pass updates second whenever first is exceeded or element falls in-between.",
    marks: 3
  },
  {
    id: 40,
    part: "C",
    topic: "Coding",
    difficulty: "Medium",
    questionText: "Write a function `is_anagram(s1: str, s2: str) -> bool` using a dictionary.",
    correctAnswer: "Frequency counter hash map in O(N)",
    solutionCode: `def is_anagram(s1: str, s2: str) -> bool:
    if len(s1) != len(s2):
        return False
    counts = {}
    for c in s1:
        counts[c] = counts.get(c, 0) + 1
    for c in s2:
        if c not in counts or counts[c] == 0:
            return False
        counts[c] -= 1
    return True`,
    explanation: "O(N) time complexity frequency map.",
    marks: 3
  },
  {
    id: 41,
    part: "C",
    topic: "Coding",
    difficulty: "Medium",
    questionText: "Write a function `move_zeros(arr: list) -> list` that moves all 0s to the end in-place.",
    correctAnswer: "Two pointer overwrite method",
    solutionCode: `def move_zeros(arr: list) -> list:
    idx = 0
    for num in arr:
        if num != 0:
            arr[idx] = num
            idx += 1
    while idx < len(arr):
        arr[idx] = 0
        idx += 1
    return arr`,
    explanation: "In-place O(N) time with O(1) extra space.",
    marks: 3
  },
  {
    id: 42,
    part: "C",
    topic: "Coding",
    difficulty: "Medium",
    questionText: "Write a function `two_sum(nums: list, target: int) -> tuple` in O(N) time using a hash map.",
    correctAnswer: "Hash map checking `target - num`",
    solutionCode: `def two_sum(nums: list, target: int) -> tuple:
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return seen[diff], i
        seen[num] = i
    return None`,
    explanation: "Linear scan with O(1) hash map complement lookup.",
    marks: 3
  },
  {
    id: 43,
    part: "C",
    topic: "Coding",
    difficulty: "Medium",
    questionText: "Write a function `first_unique_char(s: str) -> str` that returns the first non-repeating character.",
    correctAnswer: "Two pass frequency dictionary",
    solutionCode: `def first_unique_char(s: str) -> str:
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    for c in s:
        if freq[c] == 1:
            return c
    return '$'`,
    explanation: "Two passes: first counts frequencies, second identifies first character with count 1.",
    marks: 3
  },
  {
    id: 44,
    part: "C",
    topic: "Coding",
    difficulty: "Difficult",
    questionText: "Write a function `max_subarray(nums: list) -> int` implementing Kadane's Algorithm.",
    correctAnswer: "Kadane's running maximum",
    solutionCode: `def max_subarray(nums: list) -> int:
    curr_max = max_so_far = nums[0]
    for x in nums[1:]:
        curr_max = max(x, curr_max + x)
        max_so_far = max(max_so_far, curr_max)
    return max_so_far`,
    explanation: "Computes contiguous maximum sum in single O(N) pass.",
    marks: 3
  },
  {
    id: 45,
    part: "C",
    topic: "Coding",
    difficulty: "Medium",
    questionText: "Write a function `is_palindrome_str(s: str) -> bool` considering alphanumeric characters only.",
    correctAnswer: "Clean characters with `isalnum()` and compare with reversed",
    solutionCode: `def is_palindrome_str(s: str) -> bool:
    cleaned = [c.lower() for c in s if c.isalnum()]
    return cleaned == cleaned[::-1]`,
    explanation: "Filters non-alphanumeric chars and verifies symmetry.",
    marks: 3
  },

  // PART D: 5 Debugging Questions (Questions 46 to 50)
  {
    id: 46,
    part: "D",
    topic: "Debugging",
    difficulty: "Easy",
    questionText: "Identify and fix the bug in this code intended to add two user inputs:",
    codeSnippet: `a = input()
b = input()
print(a + b)`,
    correctAnswer: "Typecast input strings to integers",
    solutionCode: `a = int(input())
b = int(input())
print(a + b)`,
    explanation: "`input()` returns strings; without `int()`, `'5' + '5'` yields `'55'`.",
    marks: 2
  },
  {
    id: 47,
    part: "D",
    topic: "Debugging",
    difficulty: "Easy",
    questionText: "Identify and fix the bug in this list iteration that crashes:",
    codeSnippet: `nums = [10, 20, 30]
for i in range(len(nums) + 1):
    print(nums[i])`,
    correctAnswer: "Remove `+ 1` to prevent IndexError",
    solutionCode: `nums = [10, 20, 30]
for i in range(len(nums)):
    print(nums[i])`,
    explanation: "Valid indices are 0 to `len - 1`. `len(nums) + 1` reaches index 3 (IndexError).",
    marks: 2
  },
  {
    id: 48,
    part: "D",
    topic: "Debugging",
    difficulty: "Medium",
    questionText: "Identify and fix the bug in this method definition:",
    codeSnippet: `class Car:
    def drive():
        print("Driving...")

c = Car()
c.drive()`,
    correctAnswer: "Add `self` parameter to `def drive(self):`",
    solutionCode: `class Car:
    def drive(self):
        print("Driving...")

c = Car()
c.drive()`,
    explanation: "Instance method calls implicitly pass the object instance as the first argument.",
    marks: 2
  },
  {
    id: 49,
    part: "D",
    topic: "Debugging",
    difficulty: "Medium",
    questionText: "Identify and fix the bug in this dictionary lookup that crashes:",
    codeSnippet: `prices = {"apple": 50, "orange": 30}
print(prices["banana"])`,
    correctAnswer: "Use `prices.get('banana', 0)` to prevent KeyError",
    solutionCode: `prices = {"apple": 50, "orange": 30}
print(prices.get("banana", 0))`,
    explanation: "Direct index access on missing key raises `KeyError`. `get()` provides a safe fallback.",
    marks: 2
  },
  {
    id: 50,
    part: "D",
    topic: "Debugging",
    difficulty: "Medium",
    questionText: "Identify and fix the bug in this function that produces unexpected shared state:",
    codeSnippet: `def add_log(msg, log=[]):
    log.append(msg)
    return log`,
    correctAnswer: "Replace mutable default list with `log=None`",
    solutionCode: `def add_log(msg, log=None):
    if log is None:
        log = []
    log.append(msg)
    return log`,
    explanation: "Default mutable arguments persist across function invocations. Using `log=None` creates a new list per call.",
    marks: 2
  }
];
