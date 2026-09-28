export interface MCQItem {
  id: number;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Difficult';
  question: string;
  codeSnippet?: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export const mcqsData: MCQItem[] = [
  // EASY: 1 to 30
  {
    id: 1,
    topic: "Variables & Output",
    difficulty: "Easy",
    question: "What will be the output of the following Python code snippet?",
    codeSnippet: `print("Python", "Placement", sep="*", end="!")`,
    options: {
      A: "Python Placement*!",
      B: "Python*Placement!",
      C: "Python*Placement*!",
      D: "Python Placement!"
    },
    correctAnswer: "B",
    explanation: "The `sep` argument specifies the separator between items ('*'), and `end` specifies what is printed at the end ('!'). So it prints 'Python*Placement!' without any trailing newline."
  },
  {
    id: 2,
    topic: "Data Types",
    difficulty: "Easy",
    question: "What is the data type of the value returned by the built-in `input()` function?",
    options: {
      A: "int",
      B: "float",
      C: "str",
      D: "Depends on user input"
    },
    correctAnswer: "C",
    explanation: "In Python 3, `input()` always returns a string (`str`), regardless of what the user types. Explicit typecasting (e.g. `int()`) is required for numeric calculations."
  },
  {
    id: 3,
    topic: "Operators",
    difficulty: "Easy",
    question: "What is the result of `10 / 2` in Python 3?",
    options: {
      A: "5",
      B: "5.0",
      C: "5.00",
      D: "Error"
    },
    correctAnswer: "B",
    explanation: "In Python 3, the single forward slash `/` operator always performs true float division, returning `5.0`. To get integer division, you must use `//`."
  },
  {
    id: 4,
    topic: "Operators",
    difficulty: "Easy",
    question: "What is the output of the following arithmetic expression?",
    codeSnippet: `print(2 ** 3 ** 2)`,
    options: {
      A: "64",
      B: "512",
      C: "36",
      D: "12"
    },
    correctAnswer: "B",
    explanation: "The exponentiation operator `**` is right-associative in Python. Therefore, `3 ** 2` is evaluated first to 9, followed by `2 ** 9 = 512`."
  },
  {
    id: 5,
    topic: "Strings",
    difficulty: "Easy",
    question: "What is the output of the following string slicing operation?",
    codeSnippet: `s = "Campus"
print(s[1:4])`,
    options: {
      A: "Cam",
      B: "amp",
      C: "ampu",
      D: "mpu"
    },
    correctAnswer: "B",
    explanation: "Slicing `s[1:4]` includes index 1, 2, and 3 ('a', 'm', 'p'), and excludes the stop index 4 ('u')."
  },
  {
    id: 6,
    topic: "Strings",
    difficulty: "Easy",
    question: "What does the expression `s[::-1]` do on a string `s`?",
    options: {
      A: "Returns the first character",
      B: "Returns the last character",
      C: "Reverses the string",
      D: "Deletes the string"
    },
    correctAnswer: "C",
    explanation: "Using a step of `-1` without specifying start and stop traverses the string from right to left, producing the reversed string."
  },
  {
    id: 7,
    topic: "Data Structures",
    difficulty: "Easy",
    question: "Which of the following data structures in Python is immutable?",
    options: {
      A: "List",
      B: "Dictionary",
      C: "Tuple",
      D: "Set"
    },
    correctAnswer: "C",
    explanation: "Tuples are immutable; once instantiated, their elements cannot be modified, added, or deleted."
  },
  {
    id: 8,
    topic: "Data Structures",
    difficulty: "Easy",
    question: "How do you create an empty set in Python?",
    options: {
      A: "{}",
      B: "set()",
      C: "[]",
      D: "set([])"
    },
    correctAnswer: "B",
    explanation: "`{}` creates an empty dictionary, not an empty set. `set()` is the correct way to construct an empty set."
  },
  {
    id: 9,
    topic: "Lists",
    difficulty: "Easy",
    question: "What is the output of the following list code?",
    codeSnippet: `lst = [10, 20, 30]
lst.append(40)
print(len(lst))`,
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "None"
    },
    correctAnswer: "B",
    explanation: "The `append()` method adds `40` as a new element at the end of the list, increasing its length from 3 to 4."
  },
  {
    id: 10,
    topic: "Loops",
    difficulty: "Easy",
    question: "What will `list(range(2, 8, 2))` generate?",
    options: {
      A: "[2, 4, 6, 8]",
      B: "[2, 4, 6]",
      C: "[2, 3, 4, 5, 6, 7]",
      D: "[4, 6, 8]"
    },
    correctAnswer: "B",
    explanation: "`range(start, stop, step)` starts at 2, increments by 2, and stops strictly before 8. So it generates 2, 4, and 6."
  },
  {
    id: 11,
    topic: "Variables & Identifiers",
    difficulty: "Easy",
    question: "Which of the following is an INVALID variable name in Python?",
    options: {
      A: "_var_name",
      B: "var2",
      C: "2var",
      D: "Var"
    },
    correctAnswer: "C",
    explanation: "Variable names in Python cannot start with a digit. `2var` will result in a SyntaxError."
  },
  {
    id: 12,
    topic: "Functions",
    difficulty: "Easy",
    question: "What is the default return value of a Python function that does not contain a `return` statement?",
    options: {
      A: "0",
      B: "False",
      C: "None",
      D: "Empty string"
    },
    correctAnswer: "C",
    explanation: "Functions without an explicit `return` statement return `None` by default upon reaching the end of their block."
  },
  {
    id: 13,
    topic: "Conditions",
    difficulty: "Easy",
    question: "Which of the following evaluates to `False` in Python?",
    options: {
      A: "bool('0')",
      B: "bool([0])",
      C: "bool('')",
      D: "bool(-1)"
    },
    correctAnswer: "C",
    explanation: "An empty string `''` is falsy, so `bool('')` is `False`. `'0'` is a non-empty string, `[0]` is a non-empty list, and `-1` is a non-zero integer, all of which are truthy."
  },
  {
    id: 14,
    topic: "Operators",
    difficulty: "Easy",
    question: "What will be printed by the following code?",
    codeSnippet: `print(True + True + False)`,
    options: {
      A: "2",
      B: "True",
      C: "3",
      D: "TypeError"
    },
    correctAnswer: "A",
    explanation: "In Python, `bool` is a subclass of `int`. `True` evaluates to 1 and `False` evaluates to 0 in arithmetic contexts. `1 + 1 + 0 = 2`."
  },
  {
    id: 15,
    topic: "Strings",
    difficulty: "Easy",
    question: "What will the following code output?",
    codeSnippet: `print("Placement" * 2)`,
    options: {
      A: "Placement2",
      B: "Placement Placement",
      C: "PlacementPlacement",
      D: "TypeError"
    },
    correctAnswer: "C",
    explanation: "Multiplying a string by an integer repeats the string that many times consecutively without spaces."
  },
  {
    id: 16,
    topic: "Dictionaries",
    difficulty: "Easy",
    question: "How do you access the value associated with the key `'age'` in `d = {'name': 'Alex', 'age': 22}`?",
    options: {
      A: "d.age",
      B: "d['age']",
      C: "d(age)",
      D: "d.get_value('age')"
    },
    correctAnswer: "B",
    explanation: "Dictionary values are retrieved using square bracket notation with the key name: `d['age']`, or via `d.get('age')`."
  },
  {
    id: 17,
    topic: "Lists",
    difficulty: "Easy",
    question: "What is the output of the following code?",
    codeSnippet: `nums = [1, 2, 3]
nums.pop()
print(nums)`,
    options: {
      A: "[2, 3]",
      B: "[1, 2]",
      C: "[1, 3]",
      D: "[1]"
    },
    correctAnswer: "B",
    explanation: "`pop()` with no arguments removes and returns the last element from the list. Here, `3` is removed, leaving `[1, 2]`."
  },
  {
    id: 18,
    topic: "OOP",
    difficulty: "Easy",
    question: "What is the name of the special method used as the constructor in Python classes?",
    options: {
      A: "def construct()",
      B: "__new__",
      C: "__init__",
      D: "def constructor()"
    },
    correctAnswer: "C",
    explanation: "`__init__` is the standard initializer/constructor method in Python, automatically invoked when creating a new class instance."
  },
  {
    id: 19,
    topic: "OOP",
    difficulty: "Easy",
    question: "What does the `self` parameter represent in class instance methods?",
    options: {
      A: "A reference to the parent class",
      B: "A reference to the current instance of the class",
      C: "A global configuration object",
      D: "A Python system keyword"
    },
    correctAnswer: "B",
    explanation: "`self` represents the current instance of the class, allowing access to its attributes and other methods."
  },
  {
    id: 20,
    topic: "Exception Handling",
    difficulty: "Easy",
    question: "Which block in a try-except structure is ALWAYS executed whether an exception occurs or not?",
    options: {
      A: "try",
      B: "except",
      C: "else",
      D: "finally"
    },
    correctAnswer: "D",
    explanation: "The `finally` block is guaranteed to execute regardless of whether an exception was raised, handled, or if a return statement was executed."
  },
  {
    id: 21,
    topic: "File Handling",
    difficulty: "Easy",
    question: "Which file mode opens a file for writing and truncates/erases its existing content?",
    options: {
      A: "'r'",
      B: "'a'",
      C: "'w'",
      D: "'x'"
    },
    correctAnswer: "C",
    explanation: "'w' opens a file for writing and truncates (overwrites) existing contents. If the file does not exist, it creates a new one."
  },
  {
    id: 22,
    topic: "Keywords",
    difficulty: "Easy",
    question: "Which of the following is NOT a reserved keyword in Python?",
    options: {
      A: "pass",
      B: "eval",
      C: "yield",
      D: "raise"
    },
    correctAnswer: "B",
    explanation: "`eval` is a built-in function, not a reserved keyword. `pass`, `yield`, and `raise` are reserved keywords."
  },
  {
    id: 23,
    topic: "Comments",
    difficulty: "Easy",
    question: "How are single-line comments denoted in Python?",
    options: {
      A: "//",
      B: "/* */",
      C: "#",
      D: "--"
    },
    correctAnswer: "C",
    explanation: "Python uses the hash character `#` to indicate single-line comments."
  },
  {
    id: 24,
    topic: "Data Types",
    difficulty: "Easy",
    question: "What is the output of `type(3.0)`?",
    options: {
      A: "<class 'int'>",
      B: "<class 'float'>",
      C: "<class 'double'>",
      D: "<class 'decimal'>"
    },
    correctAnswer: "B",
    explanation: "In Python, decimal numbers are represented by the `float` type (Python does not have a separate primitive `double` type)."
  },
  {
    id: 25,
    topic: "Sets",
    difficulty: "Easy",
    question: "What is the output of the following code snippet?",
    codeSnippet: `s = {1, 2, 2, 3, 3, 3}
print(len(s))`,
    options: {
      A: "6",
      B: "3",
      C: "1",
      D: "TypeError"
    },
    correctAnswer: "B",
    explanation: "Sets only store unique elements. The duplicates are discarded automatically, leaving `{1, 2, 3}`, which has length 3."
  },
  {
    id: 26,
    topic: "Operators",
    difficulty: "Easy",
    question: "What will `not(10 > 5)` evaluate to?",
    options: {
      A: "True",
      B: "False",
      C: "None",
      D: "1"
    },
    correctAnswer: "B",
    explanation: "`10 > 5` is `True`. The `not` operator inverts the boolean value, resulting in `False`."
  },
  {
    id: 27,
    topic: "Strings",
    difficulty: "Easy",
    question: "What is the result of `'hello'.upper()`?",
    options: {
      A: "'hello'",
      B: "'Hello'",
      C: "'HELLO'",
      D: "None"
    },
    correctAnswer: "C",
    explanation: "The `upper()` method returns a new string where all characters are converted to uppercase."
  },
  {
    id: 28,
    topic: "Tuples",
    difficulty: "Easy",
    question: "What is the data type of `x = (5)`?",
    options: {
      A: "tuple",
      B: "int",
      C: "list",
      D: "set"
    },
    correctAnswer: "B",
    explanation: "Without a trailing comma, parentheses are treated as mathematical grouping. `(5)` is an `int`. A single-element tuple must be written as `(5,)`."
  },
  {
    id: 29,
    topic: "Lists",
    difficulty: "Easy",
    question: "What index corresponds to the last element in any non-empty Python list?",
    options: {
      A: "0",
      B: "len(lst)",
      C: "-1",
      D: "1"
    },
    correctAnswer: "C",
    explanation: "Negative indexing in Python starts from the right: `-1` refers to the last element, `-2` refers to second-to-last."
  },
  {
    id: 30,
    topic: "Conditions",
    difficulty: "Easy",
    question: "What is the output of the following ternary expression?",
    codeSnippet: `x = 10
res = "Even" if x % 2 == 0 else "Odd"
print(res)`,
    options: {
      A: "Even",
      B: "Odd",
      C: "True",
      D: "SyntaxError"
    },
    correctAnswer: "A",
    explanation: "Since `10 % 2 == 0` evaluates to True, the expression evaluates to the true-branch value: `'Even'`."
  },

  // MEDIUM: 31 to 80
  {
    id: 31,
    topic: "Operators",
    difficulty: "Medium",
    question: "What is the output of `-7 // 2` in Python?",
    options: {
      A: "-3",
      B: "-4",
      C: "-3.5",
      D: "-3.0"
    },
    correctAnswer: "B",
    explanation: "Floor division `//` in Python always rounds down towards negative infinity. `-7 / 2 = -3.5`, and rounding down gives `-4`."
  },
  {
    id: 32,
    topic: "Operators",
    difficulty: "Medium",
    question: "What will be printed by the following code snippet?",
    codeSnippet: `a = [1, 2, 3]
b = [1, 2, 3]
print(a == b, a is b)`,
    options: {
      A: "True True",
      B: "True False",
      C: "False True",
      D: "False False"
    },
    correctAnswer: "B",
    explanation: "`==` tests for value equality, which is True because both lists have the same elements. `is` tests for object identity (memory address), which is False because two separate list objects were instantiated."
  },
  {
    id: 33,
    topic: "Lists",
    difficulty: "Medium",
    question: "What is the output of the following list operations?",
    codeSnippet: `a = [1, 2]
a.append([3, 4])
b = [1, 2]
b.extend([3, 4])
print(len(a), len(b))`,
    options: {
      A: "4 4",
      B: "3 4",
      C: "3 3",
      D: "4 3"
    },
    correctAnswer: "B",
    explanation: "`append([3, 4])` adds the list `[3, 4]` as a single nested element, giving `[1, 2, [3, 4]]` (length 3). `extend([3, 4])` unpacks the items, giving `[1, 2, 3, 4]` (length 4)."
  },
  {
    id: 34,
    topic: "Strings",
    difficulty: "Medium",
    question: "What happens when you execute `s = 'Python'; s[0] = 'J'`?",
    options: {
      A: "s becomes 'Jython'",
      B: "ValueError",
      C: "TypeError",
      D: "IndexError"
    },
    correctAnswer: "C",
    explanation: "Strings are immutable in Python. Attempting item assignment raises a `TypeError: 'str' object does not support item assignment`."
  },
  {
    id: 35,
    topic: "Functions",
    difficulty: "Medium",
    question: "What will be the output of the following code?",
    codeSnippet: `def add_item(val, items=[]):
    items.append(val)
    return items

print(add_item(1))
print(add_item(2))`,
    options: {
      A: "[1] and [2]",
      B: "[1] and [1, 2]",
      C: "[1] and [2, 1]",
      D: "Error"
    },
    correctAnswer: "B",
    explanation: "Default arguments in Python are evaluated once at function definition time. The list `items` is retained across invocations, so calling with 2 appends to the same list."
  },
  {
    id: 36,
    topic: "Loops",
    difficulty: "Medium",
    question: "What will the following code output?",
    codeSnippet: `for i in range(1, 4):
    if i == 2:
        break
else:
    print("Completed")
print("Done")`,
    options: {
      A: "Completed Done",
      B: "Done",
      C: "Completed",
      D: "1 Done"
    },
    correctAnswer: "B",
    explanation: "The `else` clause of a loop executes ONLY when the loop completes without hitting a `break`. Because `break` is triggered when `i == 2`, the `else` block is skipped and only 'Done' is printed."
  },
  {
    id: 37,
    topic: "Lists",
    difficulty: "Medium",
    question: "What is the output of the following code?",
    codeSnippet: `orig = [1, 2, 3]
alias = orig
alias.append(4)
print(orig)`,
    options: {
      A: "[1, 2, 3]",
      B: "[1, 2, 3, 4]",
      C: "[4, 1, 2, 3]",
      D: "None"
    },
    correctAnswer: "B",
    explanation: "`alias = orig` creates an alias (both variables point to the exact same list in memory). Modifying `alias` modifies `orig`."
  },
  {
    id: 38,
    topic: "Lists",
    difficulty: "Medium",
    question: "What will be the value of `res` after this code executes?",
    codeSnippet: `nums = [3, 1, 2]
res = nums.sort()
print(res)`,
    options: {
      A: "[1, 2, 3]",
      B: "[3, 2, 1]",
      C: "None",
      D: "TypeError"
    },
    correctAnswer: "C",
    explanation: "`list.sort()` sorts the list in-place and returns `None`. Assigning its result to a variable sets the variable to `None`."
  },
  {
    id: 39,
    topic: "Dictionaries",
    difficulty: "Medium",
    question: "What will be the output of `d = {'a': 1}; print(d.get('b', 5))`?",
    options: {
      A: "KeyError",
      B: "None",
      C: "5",
      D: "1"
    },
    correctAnswer: "C",
    explanation: "`dict.get(key, default)` returns the default value `5` because the key `'b'` is not found in the dictionary, without raising an error."
  },
  {
    id: 40,
    topic: "Sets",
    difficulty: "Medium",
    question: "What will be the output of this set operation?",
    codeSnippet: `a = {1, 2, 3}
b = {2, 3, 4}
print(a ^ b)`,
    options: {
      A: "{1, 4}",
      B: "{2, 3}",
      C: "{1, 2, 3, 4}",
      D: "{}"
    },
    correctAnswer: "A",
    explanation: "The `^` operator computes the symmetric difference (elements present in either set A or set B, but NOT in both). That is `{1, 4}`."
  },
  {
    id: 41,
    topic: "Strings",
    difficulty: "Medium",
    question: "What does `' '.join(['Py', 'is', 'fun'])` return?",
    options: {
      A: "['Py', 'is', 'fun']",
      B: "'Py is fun'",
      C: "'Pyisfun'",
      D: "'Py, is, fun'"
    },
    correctAnswer: "B",
    explanation: "`join()` concatenates the elements of the list with a single space `' '` as the delimiter, producing `'Py is fun'`."
  },
  {
    id: 42,
    topic: "Strings",
    difficulty: "Medium",
    question: "What is the difference between `find()` and `index()` when a substring is not found?",
    options: {
      A: "Both return -1",
      B: "`find()` returns -1, `index()` raises ValueError",
      C: "`find()` raises ValueError, `index()` returns -1",
      D: "Both raise IndexError"
    },
    correctAnswer: "B",
    explanation: "`str.find()` safely returns `-1` when a substring is absent, while `str.index()` raises a `ValueError`."
  },
  {
    id: 43,
    topic: "Functions",
    difficulty: "Medium",
    question: "What is the type of `args` inside the function `def fn(*args): return args`?",
    options: {
      A: "list",
      B: "tuple",
      C: "set",
      D: "dict"
    },
    correctAnswer: "B",
    explanation: "`*args` packs variable positional arguments into a `tuple`."
  },
  {
    id: 44,
    topic: "Functions",
    difficulty: "Medium",
    question: "What is the type of `kwargs` inside the function `def fn(**kwargs): return kwargs`?",
    options: {
      A: "tuple",
      B: "list",
      C: "dict",
      D: "set"
    },
    correctAnswer: "C",
    explanation: "`**kwargs` packs keyword arguments into a standard Python `dict`."
  },
  {
    id: 45,
    topic: "Exception Handling",
    difficulty: "Medium",
    question: "What is the output of the following function?",
    codeSnippet: `def test():
    try:
        return 1
    finally:
        return 2

print(test())`,
    options: {
      A: "1",
      B: "2",
      C: "None",
      D: "Error"
    },
    correctAnswer: "B",
    explanation: "A `return` statement in the `finally` block always executes during cleanup and overrides any previous return value from the `try` block."
  },
  {
    id: 46,
    topic: "OOP",
    difficulty: "Medium",
    question: "What will be printed by the following OOP code?",
    codeSnippet: `class Demo:
    count = 0
    def __init__(self):
        Demo.count += 1

d1 = Demo()
d2 = Demo()
print(Demo.count)`,
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "AttributeError"
    },
    correctAnswer: "C",
    explanation: "`count` is a class variable shared across all instances. Every time `Demo()` is called, `__init__` increments `Demo.count`, resulting in 2."
  },
  {
    id: 47,
    topic: "OOP",
    difficulty: "Medium",
    question: "How does Python achieve name mangling for private attributes?",
    options: {
      A: "Prefixing with private keyword",
      B: "Prefixing attribute with single underscore `_var`",
      C: "Prefixing attribute with double underscore `__var`",
      D: "Using `@private` decorator"
    },
    correctAnswer: "C",
    explanation: "Attributes prefixed with two leading underscores (e.g. `__balance`) are mangled internally by Python to `_ClassName__balance`."
  },
  {
    id: 48,
    topic: "List Comprehension",
    difficulty: "Medium",
    question: "What is the output of the following list comprehension?",
    codeSnippet: `res = [x * 2 for x in range(5) if x % 2 != 0]
print(res)`,
    options: {
      A: "[0, 4, 8]",
      B: "[2, 6]",
      C: "[1, 3]",
      D: "[2, 4, 6]"
    },
    correctAnswer: "B",
    explanation: "`range(5)` gives 0, 1, 2, 3, 4. The condition `x % 2 != 0` selects 1 and 3. Multiplying each by 2 yields `[2, 6]`."
  },
  {
    id: 49,
    topic: "Dictionaries",
    difficulty: "Medium",
    question: "Which of the following can be used as a valid key in a Python dictionary?",
    options: {
      A: "[1, 2]",
      B: "{1: 2}",
      C: "(1, 2)",
      D: "{1, 2}"
    },
    correctAnswer: "C",
    explanation: "Dictionary keys must be immutable (hashable). Tuples with immutable contents are hashable and valid keys. Lists, sets, and dicts are mutable and unhashable."
  },
  {
    id: 50,
    topic: "Operators",
    difficulty: "Medium",
    question: "What will `print([] or 'Python')` output?",
    options: {
      A: "True",
      B: "False",
      C: "[]",
      D: "Python"
    },
    correctAnswer: "D",
    explanation: "The `or` operator evaluates from left to right and returns the first truthy operand. `[]` is falsy, so it evaluates and returns the string `'Python'`."
  },
  {
    id: 51,
    topic: "Operators",
    difficulty: "Medium",
    question: "What will `print('A' and 'B')` output?",
    options: {
      A: "True",
      B: "'A'",
      C: "'B'",
      D: "False"
    },
    correctAnswer: "C",
    explanation: "The `and` operator returns the first falsy operand, or the last operand if all are truthy. Both are non-empty strings (truthy), so it returns `'B'`."
  },
  {
    id: 52,
    topic: "Scope",
    difficulty: "Medium",
    question: "What will happen when running the following code?",
    codeSnippet: `x = 5
def func():
    print(x)
    x = 10
func()`,
    options: {
      A: "Prints 5",
      B: "Prints 10",
      C: "UnboundLocalError",
      D: "NameError"
    },
    correctAnswer: "C",
    explanation: "Because `x` is assigned inside `func`, Python marks `x` as a local variable for the entire function. Attempting to `print(x)` before the assignment raises an `UnboundLocalError`."
  },
  {
    id: 53,
    topic: "Lambda",
    difficulty: "Medium",
    question: "What is the output of the following lambda expression?",
    codeSnippet: `f = lambda a, b: a if a > b else b
print(f(12, 25))`,
    options: {
      A: "12",
      B: "25",
      C: "True",
      D: "SyntaxError"
    },
    correctAnswer: "B",
    explanation: "The lambda evaluates the ternary condition `a if a > b else b`. Since 12 is not greater than 25, it returns `b`, which is 25."
  },
  {
    id: 54,
    topic: "File Handling",
    difficulty: "Medium",
    question: "What does the `with` statement ensure when working with files?",
    options: {
      A: "The file is opened in binary mode",
      B: "The file is automatically closed after the block, even if exceptions occur",
      C: "The file is deleted after reading",
      D: "File reading is 2x faster"
    },
    correctAnswer: "B",
    explanation: "`with` utilizes context management (`__enter__` and `__exit__`), guaranteeing file closure upon exit regardless of exceptions."
  },
  {
    id: 55,
    topic: "Strings",
    difficulty: "Medium",
    question: "What does `text.strip()` do in Python?",
    options: {
      A: "Removes all spaces from the entire string",
      B: "Removes leading and trailing whitespace only",
      C: "Splits the string into words",
      D: "Deletes vowels"
    },
    correctAnswer: "B",
    explanation: "`strip()` removes whitespace characters (spaces, tabs, newlines) only from the beginning and end of the string, leaving inner spaces intact."
  },
  {
    id: 56,
    topic: "Lists",
    difficulty: "Medium",
    question: "What is the output of the following code snippet?",
    codeSnippet: `nums = [1, 2, 3, 4, 5]
del nums[1:3]
print(nums)`,
    options: {
      A: "[1, 4, 5]",
      B: "[1, 2, 5]",
      C: "[2, 3]",
      D: "[1, 5]"
    },
    correctAnswer: "A",
    explanation: "`del nums[1:3]` deletes elements at index 1 and 2 (values 2 and 3), leaving `[1, 4, 5]`."
  },
  {
    id: 57,
    topic: "Functions",
    difficulty: "Medium",
    question: "Which function parameter order is correct according to Python syntax rules?",
    options: {
      A: "`def f(a=1, b):`",
      B: "`def f(b, a=1):`",
      C: "`def f(*args, a):` without keyword requirement",
      D: "`def f(**kwargs, *args):`"
    },
    correctAnswer: "B",
    explanation: "Positional parameters without defaults MUST precede parameters with default values. `def f(b, a=1):` is valid."
  },
  {
    id: 58,
    topic: "OOP",
    difficulty: "Medium",
    question: "What is the purpose of the `super()` function in Python?",
    options: {
      A: "Creates a superuser session",
      B: "Calls methods of the superclass / parent class",
      C: "Allocates extra memory to an object",
      D: "Overrides all methods in a class"
    },
    correctAnswer: "B",
    explanation: "`super()` returns a proxy object that delegates method calls to the parent or sibling class based on the Method Resolution Order (MRO)."
  },
  {
    id: 59,
    topic: "Data Types",
    difficulty: "Medium",
    question: "What will `print(round(2.5), round(3.5))` output in Python 3?",
    options: {
      A: "2 4",
      B: "3 4",
      C: "3 3",
      D: "2 3"
    },
    correctAnswer: "A",
    explanation: "Python 3 uses 'Bankers Rounding' (round half to even). When equidistant, it rounds towards the nearest even integer. 2.5 rounds to 2, and 3.5 rounds to 4."
  },
  {
    id: 60,
    topic: "Loops",
    difficulty: "Medium",
    question: "What will be printed by this nested loop?",
    codeSnippet: `count = 0
for i in range(3):
    for j in range(2):
        count += 1
print(count)`,
    options: {
      A: "5",
      B: "6",
      C: "9",
      D: "3"
    },
    correctAnswer: "B",
    explanation: "Outer loop runs 3 times; inner loop runs 2 times per outer iteration. Total iterations = 3 * 2 = 6."
  },
  {
    id: 61,
    topic: "Dictionaries",
    difficulty: "Medium",
    question: "What is the output of the following dictionary update?",
    codeSnippet: `d = {"a": 1}
d.update({"b": 2, "a": 3})
print(d["a"], len(d))`,
    options: {
      A: "1 2",
      B: "3 2",
      C: "3 3",
      D: "1 1"
    },
    correctAnswer: "B",
    explanation: "`update()` overrides the existing value of key `'a'` to 3 and adds the new key `'b'` with value 2. The dictionary has 2 keys: `{'a': 3, 'b': 2}`."
  },
  {
    id: 62,
    topic: "Tuples",
    difficulty: "Medium",
    question: "What will be the output of unpacking `a, *b, c = [1, 2, 3, 4, 5]`?",
    options: {
      A: "b is [2, 3, 4]",
      B: "b is (2, 3, 4)",
      C: "b is [2, 3]",
      D: "ValueError"
    },
    correctAnswer: "A",
    explanation: "Extended iterable unpacking assigns `a = 1`, `c = 5`, and packs all intermediate values into a list: `b = [2, 3, 4]`."
  },
  {
    id: 63,
    topic: "Sets",
    difficulty: "Medium",
    question: "What will `s = {True, 1, 1.0}; print(len(s))` output?",
    options: {
      A: "3",
      B: "2",
      C: "1",
      D: "TypeError"
    },
    correctAnswer: "C",
    explanation: "In Python, `True == 1 == 1.0` and all three have the exact same hash code. Since sets only keep unique items, only one element is retained. Length is 1."
  },
  {
    id: 64,
    topic: "Strings",
    difficulty: "Medium",
    question: "What will `print('Python'.startswith(('J', 'P')))` return?",
    options: {
      A: "True",
      B: "False",
      C: "TypeError",
      D: "ValueError"
    },
    correctAnswer: "A",
    explanation: "`startswith()` accepts a tuple of prefixes. It returns `True` if the string starts with any of the prefixes in the tuple."
  },
  {
    id: 65,
    topic: "Exception Handling",
    difficulty: "Medium",
    question: "What is the output of the following code?",
    codeSnippet: `try:
    x = int("python")
except (ValueError, TypeError) as e:
    print("Caught")
else:
    print("Clean")`,
    options: {
      A: "Clean",
      B: "Caught",
      C: "ValueError",
      D: "Caught Clean"
    },
    correctAnswer: "B",
    explanation: "`int('python')` raises a `ValueError`. The tuple except block catches it and prints 'Caught'. The `else` block is skipped."
  },
  {
    id: 66,
    topic: "Operators",
    difficulty: "Medium",
    question: "What is the value of `x` after `x = 5; x &= 3`?",
    options: {
      A: "1",
      B: "7",
      C: "3",
      D: "0"
    },
    correctAnswer: "A",
    explanation: "`5` in binary is `101`; `3` in binary is `011`. Bitwise AND `101 & 011 = 001`, which is integer 1."
  },
  {
    id: 67,
    topic: "Recursion",
    difficulty: "Medium",
    question: "What will the following recursive function return for `f(3)`?",
    codeSnippet: `def f(n):
    if n == 0:
        return 1
    return n * f(n - 1)`,
    options: {
      A: "3",
      B: "6",
      C: "9",
      D: "0"
    },
    correctAnswer: "B",
    explanation: "This is the classic factorial function: `f(3) = 3 * f(2) = 3 * 2 * f(1) = 3 * 2 * 1 * 1 = 6`."
  },
  {
    id: 68,
    topic: "Lists",
    difficulty: "Medium",
    question: "What is the output of the following code?",
    codeSnippet: `a = [1, 2, 3]
b = a[:]
b[0] = 99
print(a[0])`,
    options: {
      A: "99",
      B: "1",
      C: "None",
      D: "IndexError"
    },
    correctAnswer: "B",
    explanation: "`b = a[:]` creates a shallow copy of list `a`. Modifying `b[0]` does not affect `a[0]`, which remains `1`."
  },
  {
    id: 69,
    topic: "Strings",
    difficulty: "Medium",
    question: "What does the expression `'abracadabra'.count('a')` return?",
    options: {
      A: "4",
      B: "5",
      C: "3",
      D: "6"
    },
    correctAnswer: "B",
    explanation: "The character 'a' appears at indices 0, 3, 5, 7, and 10. Total count is 5."
  },
  {
    id: 70,
    topic: "OOP",
    difficulty: "Medium",
    question: "What is the output of the following inheritance snippet?",
    codeSnippet: `class A:
    def show(self):
        return "A"

class B(A):
    def show(self):
        return "B"

obj = B()
print(obj.show())`,
    options: {
      A: "A",
      B: "B",
      C: "AB",
      D: "AttributeError"
    },
    correctAnswer: "B",
    explanation: "Class `B` overrides the `show()` method inherited from class `A`. Calling `obj.show()` executes `B`'s version, returning 'B'."
  },
  {
    id: 71,
    topic: "Data Types",
    difficulty: "Medium",
    question: "What will `print(isinstance(True, int))` output?",
    options: {
      A: "True",
      B: "False",
      C: "TypeError",
      D: "None"
    },
    correctAnswer: "A",
    explanation: "In Python, the `bool` class inherits directly from `int`. Therefore, `True` is an instance of `int`."
  },
  {
    id: 72,
    topic: "Loops",
    difficulty: "Medium",
    question: "What does `pass` do in a loop?",
    options: {
      A: "Terminates the loop",
      B: "Skips to the next iteration",
      C: "Does nothing and continues to the next statement",
      D: "Restarts the loop"
    },
    correctAnswer: "C",
    explanation: "`pass` is a null statement. Unlike `continue`, which jumps to the next cycle, `pass` simply executes nothing and continues with subsequent statements in the current iteration."
  },
  {
    id: 73,
    topic: "Dictionaries",
    difficulty: "Medium",
    question: "What will `d = {'x': 10, 'y': 20}; del d['x']; print(len(d))` output?",
    options: {
      A: "1",
      B: "2",
      C: "0",
      D: "KeyError"
    },
    correctAnswer: "A",
    explanation: "`del d['x']` removes key `'x'` and its value from the dictionary, leaving only `'y'`, so the length is 1."
  },
  {
    id: 74,
    topic: "File Handling",
    difficulty: "Medium",
    question: "What does `file.readlines()` return?",
    options: {
      A: "A single continuous string",
      B: "A list of strings, where each string is a line from the file",
      C: "A generator object",
      D: "The byte count of the file"
    },
    correctAnswer: "B",
    explanation: "`readlines()` reads the entire remaining file and returns all lines as a list of strings, including trailing newline characters."
  },
  {
    id: 75,
    topic: "Lists",
    difficulty: "Medium",
    question: "What does `list.insert(1, 99)` do on `[10, 20, 30]`?",
    options: {
      A: "Replaces index 1 with 99: `[10, 99, 30]`",
      B: "Inserts 99 at index 1, shifting others right: `[10, 99, 20, 30]`",
      C: "Appends 99 at index 1: `[10, 20, 99, 30]`",
      D: "Throws IndexError"
    },
    correctAnswer: "B",
    explanation: "`insert(index, element)` shifts existing elements to the right to make room for the new element at the specified index without overwriting."
  },
  {
    id: 76,
    topic: "Strings",
    difficulty: "Medium",
    question: "What will `print('123'.isdigit(), '-123'.isdigit())` output?",
    options: {
      A: "True True",
      B: "True False",
      C: "False False",
      D: "False True"
    },
    correctAnswer: "B",
    explanation: "`isdigit()` returns True only if ALL characters are digits. The minus sign `-` in `'-123'` is not a digit, so it returns False."
  },
  {
    id: 77,
    topic: "Conditions",
    difficulty: "Medium",
    question: "What will the following code print?",
    codeSnippet: `val = "banana"
if val == "apple" or "orange":
    print("Match")
else:
    print("No Match")`,
    options: {
      A: "Match",
      B: "No Match",
      C: "SyntaxError",
      D: "TypeError"
    },
    correctAnswer: "A",
    explanation: "Because `or` has lower precedence than `==`, this evaluates as `(val == 'apple') or ('orange')`. Since `'orange'` is a non-empty string (truthy), the condition is always True and prints 'Match'."
  },
  {
    id: 78,
    topic: "Operators",
    difficulty: "Medium",
    question: "What will `print(10 > 5 > 2 < 8)` output in Python?",
    options: {
      A: "True",
      B: "False",
      C: "SyntaxError",
      D: "8"
    },
    correctAnswer: "A",
    explanation: "Python chains comparisons: `(10 > 5) and (5 > 2) and (2 < 8)`. All three sub-expressions are True, so the result is True."
  },
  {
    id: 79,
    topic: "Lists",
    difficulty: "Medium",
    question: "What does `min(['apple', 'banana', 'cherry'], key=len)` return?",
    options: {
      A: "'apple'",
      B: "'banana'",
      C: "'cherry'",
      D: "5"
    },
    correctAnswer: "A",
    explanation: "The `key=len` argument specifies that elements should be compared based on their length. `'apple'` has length 5, while the others have length 6. So `'apple'` is returned."
  },
  {
    id: 80,
    topic: "Scope",
    difficulty: "Medium",
    question: "Which keyword allows modifying a global variable from inside a function?",
    options: {
      A: "outer",
      B: "nonlocal",
      C: "global",
      D: "extern"
    },
    correctAnswer: "C",
    explanation: "The `global` keyword declares that a variable inside a function refers to the module-level global namespace, allowing modification."
  },

  // DIFFICULT: 81 to 100
  {
    id: 81,
    topic: "Lists & Multi-Dimensional References",
    difficulty: "Difficult",
    question: "What will be printed by the following code?",
    codeSnippet: `matrix = [[0] * 2] * 2
matrix[0][0] = 1
print(matrix)`,
    options: {
      A: "[[1, 0], [0, 0]]",
      B: "[[1, 0], [1, 0]]",
      C: "[[1, 1], [0, 0]]",
      D: "[[1, 1], [1, 1]]"
    },
    correctAnswer: "B",
    explanation: "The multiplication `[[0] * 2] * 2` creates a list containing two references to the EXACT SAME inner list object. Modifying `matrix[0][0]` reflects in all rows: `[[1, 0], [1, 0]]`."
  },
  {
    id: 82,
    topic: "Functions & Scope (Closures)",
    difficulty: "Difficult",
    question: "What will the following code output?",
    codeSnippet: `funcs = [lambda x: x + i for i in range(3)]
print([f(10) for f in funcs])`,
    options: {
      A: "[10, 11, 12]",
      B: "[12, 12, 12]",
      C: "[10, 10, 10]",
      D: "[11, 12, 13]"
    },
    correctAnswer: "B",
    explanation: "Python closures bind variables by reference (late binding), not by value. When the lambdas are executed, the loop has already finished and `i` is 2. Thus all three lambdas compute `10 + 2 = 12`."
  },
  {
    id: 83,
    topic: "OOP & Class Attributes",
    difficulty: "Difficult",
    question: "What will be the output of the following code snippet?",
    codeSnippet: `class Student:
    college = "XYZ"

s1 = Student()
s2 = Student()
s1.college = "ABC"
Student.college = "PQR"
print(s1.college, s2.college)`,
    options: {
      A: "ABC PQR",
      B: "PQR PQR",
      C: "ABC ABC",
      D: "XYZ PQR"
    },
    correctAnswer: "A",
    explanation: "`s1.college = 'ABC'` creates an instance variable on `s1` that shadows the class variable. `s2` has no instance variable, so it reads the updated class variable `Student.college` ('PQR')."
  },
  {
    id: 84,
    topic: "Dictionaries & Hash Keys",
    difficulty: "Difficult",
    question: "What will be printed by the following dictionary code?",
    codeSnippet: `d = {}
d[1] = "Integer"
d[1.0] = "Float"
d[True] = "Boolean"
print(len(d), d[1])`,
    options: {
      A: "3 Integer",
      B: "3 Boolean",
      C: "1 Boolean",
      D: "2 Float"
    },
    correctAnswer: "C",
    explanation: "In Python, `1 == 1.0 == True` and all three evaluate to the same hash code (`hash(1) == hash(1.0) == hash(True)`). Each assignment overwrites the same dictionary entry. Final value is `'Boolean'` and length is 1."
  },
  {
    id: 85,
    topic: "Exception Handling Control Flow",
    difficulty: "Difficult",
    question: "What is the exact output of this exception handling block?",
    codeSnippet: `def solve():
    try:
        return "Try"
    except:
        return "Except"
    else:
        return "Else"
    finally:
        print("Final", end=" ")

print(solve())`,
    options: {
      A: "Try Final",
      B: "Final Try",
      C: "Final Else",
      D: "Try Else"
    },
    correctAnswer: "B",
    explanation: "`return 'Try'` prepares to return 'Try'. Before leaving the function, the `finally` block executes and prints 'Final '. Then the function returns 'Try' to `print()`, resulting in 'Final Try'."
  },
  {
    id: 86,
    topic: "List Comprehension Scope",
    difficulty: "Difficult",
    question: "In Python 3, what is the output of the following code?",
    codeSnippet: `x = 100
[x for x in range(5)]
print(x)`,
    options: {
      A: "4",
      B: "5",
      C: "100",
      D: "NameError"
    },
    correctAnswer: "C",
    explanation: "In Python 3, list comprehensions have their own local function scope. The iteration variable `x` does not leak into or overwrite the enclosing scope's `x = 100`."
  },
  {
    id: 87,
    topic: "OOP Method Resolution Order (MRO)",
    difficulty: "Difficult",
    question: "What will be the output of calling `D().show()`?",
    codeSnippet: `class A:
    def show(self): return "A"
class B(A):
    def show(self): return "B"
class C(A):
    def show(self): return "C"
class D(B, C):
    pass

print(D().show())`,
    options: {
      A: "A",
      B: "B",
      C: "C",
      D: "TypeError"
    },
    correctAnswer: "B",
    explanation: "According to C3 Linearization (MRO), class `D(B, C)` searches `D` -> `B` -> `C` -> `A`. Since `B` implements `show()`, it is invoked first, returning 'B'."
  },
  {
    id: 88,
    topic: "Tuples & Mutation Trap",
    difficulty: "Difficult",
    question: "What happens when you execute the following code?",
    codeSnippet: `t = (1, 2, [3, 4])
try:
    t[2] += [5]
except TypeError:
    pass
print(t)`,
    options: {
      A: "(1, 2, [3, 4])",
      B: "(1, 2, [3, 4, 5])",
      C: "TypeError uncaught",
      D: "AttributeError"
    },
    correctAnswer: "B",
    explanation: "The in-place addition `+=` invokes `list.__iadd__`, which successfully appends `5` to the mutable list `[3, 4]`. Then Python attempts to reassign the modified list to `t[2]`, which raises a `TypeError` because the tuple is immutable. The exception is caught, and `t` reflects `(1, 2, [3, 4, 5])`."
  },
  {
    id: 89,
    topic: "Strings & Slicing Edge Cases",
    difficulty: "Difficult",
    question: "What will be the output of `s = 'Python'; print(s[5:2])`?",
    options: {
      A: "'noht'",
      B: "'tho'",
      C: "'' (empty string)",
      D: "IndexError"
    },
    correctAnswer: "C",
    explanation: "Because default step is `+1`, moving forward from index 5 to index 2 is impossible without a negative step. Python safely returns an empty string `''`."
  },
  {
    id: 90,
    topic: "Built-in Functions (zip & dict)",
    difficulty: "Difficult",
    question: "What will `dict(zip(['a', 'b', 'c'], [1, 2]))` evaluate to?",
    options: {
      A: "{'a': 1, 'b': 2, 'c': None}",
      B: "{'a': 1, 'b': 2}",
      C: "ValueError",
      D: "{1: 'a', 2: 'b'}"
    },
    correctAnswer: "B",
    explanation: "`zip()` stops when the shortest input iterable is exhausted. Since the second list has only 2 items, `'c'` is ignored, yielding `{'a': 1, 'b': 2}`."
  },
  {
    id: 91,
    topic: "Generators vs Lists",
    difficulty: "Difficult",
    question: "What will `g = (x for x in range(3)); print(type(g))` output?",
    options: {
      A: "<class 'tuple'>",
      B: "<class 'generator'>",
      C: "<class 'list'>",
      D: "<class 'iterator'>"
    },
    correctAnswer: "B",
    explanation: "Parentheses enclosing a comprehension expression create a generator object (generator expression), NOT a tuple."
  },
  {
    id: 92,
    topic: "Shallow vs Deep Copy",
    difficulty: "Difficult",
    question: "What will be printed by the following code?",
    codeSnippet: `import copy
a = [[1, 2], [3, 4]]
b = copy.copy(a)
b[0].append(99)
print(a[0])`,
    options: {
      A: "[1, 2]",
      B: "[1, 2, 99]",
      C: "[99, 1, 2]",
      D: "None"
    },
    correctAnswer: "B",
    explanation: "`copy.copy()` creates a shallow copy. While the outer list is duplicated, the nested lists inside are still shared references. Modifying `b[0]` mutates `a[0]` as well."
  },
  {
    id: 93,
    topic: "Chained Assignment & Mutability",
    difficulty: "Difficult",
    question: "What will be the output of this chained assignment?",
    codeSnippet: `a = b = []
a.append(10)
b = [20]
print(a, b)`,
    options: {
      A: "[10, 20] [10, 20]",
      B: "[10] [20]",
      C: "[20] [20]",
      D: "[10] [10]"
    },
    correctAnswer: "B",
    explanation: "Initially `a` and `b` reference the same empty list. `a.append(10)` modifies that list to `[10]`. Then `b = [20]` rebinds `b` to a brand new list, leaving `a` referencing `[10]`."
  },
  {
    id: 94,
    topic: "Recursion Depth Limit",
    difficulty: "Difficult",
    question: "What exception is raised when recursion exceeds Python's maximum limit?",
    options: {
      A: "StackOverflowError",
      B: "RecursionError",
      C: "MemoryError",
      D: "SystemError"
    },
    correctAnswer: "B",
    explanation: "Python raises a `RecursionError` (a subclass of `RuntimeError`) when maximum recursion depth (default 1000) is exceeded."
  },
  {
    id: 95,
    topic: "Operators & Identity with Tuples",
    difficulty: "Difficult",
    question: "What will be the output of the following comparison?",
    codeSnippet: `t1 = (1, 2)
t2 = (1, 2)
print(t1 is t2)`,
    options: {
      A: "Always False",
      B: "True in CPython due to constant folding/interning",
      C: "TypeError",
      D: "None"
    },
    correctAnswer: "B",
    explanation: "Because tuples are immutable and hold constants, CPython's peephole optimizer folds and reuses identical constant tuples at compilation, so `t1 is t2` evaluates to True."
  },
  {
    id: 96,
    topic: "Functions (Keyword-only Arguments)",
    difficulty: "Difficult",
    question: "What does the `*` do in `def func(a, *, b):`?",
    options: {
      A: "Allows passing multiple positional arguments",
      B: "Enforces that `b` must be passed as a keyword argument only",
      C: "Makes `b` a pointer",
      D: "SyntaxError"
    },
    correctAnswer: "B",
    explanation: "A bare `*` in a parameter list indicates that all subsequent parameters (here `b`) are keyword-only arguments and cannot be passed positionally."
  },
  {
    id: 97,
    topic: "Sets & Unhashable Types",
    difficulty: "Difficult",
    question: "What happens when you execute `s = { (1, [2, 3]) }`?",
    options: {
      A: "Creates set with 1 element",
      B: "TypeError: unhashable type: 'list'",
      C: "ValueError",
      D: "IndexError"
    },
    correctAnswer: "B",
    explanation: "Even though the outer container is a tuple, it contains a mutable list `[2, 3]`. Because the nested list is unhashable, the tuple is unhashable, raising a `TypeError`."
  },
  {
    id: 98,
    topic: "List Removal during Iteration",
    difficulty: "Difficult",
    question: "What will be printed by the following code?",
    codeSnippet: `nums = [1, 2, 3, 4]
for n in nums:
    if n % 2 == 0:
        nums.remove(n)
print(nums)`,
    options: {
      A: "[1, 3]",
      B: "[1, 3, 4]",
      C: "[1, 4]",
      D: "[2, 4]"
    },
    correctAnswer: "B",
    explanation: "Modifying a list while iterating over it alters the internal index counter. When `2` (index 1) is removed, `3` shifts to index 1 and `4` shifts to index 2. The loop moves to index 2, skipping `3` and missing `4`'s condition. Result is `[1, 3, 4]`."
  },
  {
    id: 99,
    topic: "Strings & Unicode",
    difficulty: "Difficult",
    question: "What is the output of `len('Python\\n')`?",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "SyntaxError"
    },
    correctAnswer: "B",
    explanation: "'Python' contains 6 characters, and the escape sequence `\\n` represents a single newline character. 6 + 1 = 7."
  },
  {
    id: 100,
    topic: "Data Structure Lookup Complexity",
    difficulty: "Difficult",
    question: "What is the average time complexity of checking membership `x in collection` for a List, Set, and Dict?",
    options: {
      A: "List: O(1), Set: O(N), Dict: O(N)",
      B: "List: O(N), Set: O(1), Dict: O(1)",
      C: "List: O(N), Set: O(N), Dict: O(1)",
      D: "List: O(log N), Set: O(1), Dict: O(1)"
    },
    correctAnswer: "B",
    explanation: "Lists require sequential traversal taking O(N) linear time. Sets and Dictionaries use hash tables, providing O(1) constant average lookup time."
  }
];
