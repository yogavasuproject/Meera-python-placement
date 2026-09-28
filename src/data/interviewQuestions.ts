export interface InterviewQuestion {
  id: number;
  category: string;
  categoryCode: string;
  question: string;
  expectedAnswer: string;
  shortExplanation: string;
  interviewTip: string;
}

export const interviewQuestionsData: InterviewQuestion[] = [
  // Category A: Basic Python (Q1 - Q5)
  {
    id: 1,
    category: "Basic Python",
    categoryCode: "A",
    question: "Is Python an interpreted language or a compiled language?",
    expectedAnswer: "Python is both compiled and interpreted. The source code (.py) is first compiled into intermediate bytecode (.pyc), which is then interpreted line-by-line by the Python Virtual Machine (PVM).",
    shortExplanation: "This two-step process allows Python to be platform independent while optimizing execution via pre-compiled bytecode caches (__pycache__).",
    interviewTip: "Never say 'purely interpreted'. Mentioning bytecode and PVM shows solid technical depth to interviewers."
  },
  {
    id: 2,
    category: "Basic Python",
    categoryCode: "A",
    question: "What are the key advantages of Python over C++ or Java for coding interviews?",
    expectedAnswer: "Concise syntax, dynamic typing, automated memory management, and powerful built-in high-level data structures (dictionaries, sets, lists) that allow faster implementation of algorithms during timed tests.",
    shortExplanation: "Candidates spend less time dealing with boilerplate type declarations and pointer syntax and more time on core algorithm logic.",
    interviewTip: "Acknowledge that while C++ executes faster, Python excels in rapid prototyping and development speed."
  },
  {
    id: 3,
    category: "Basic Python",
    categoryCode: "A",
    question: "What is PEP 8 and why is it important?",
    expectedAnswer: "PEP 8 is Python's official style guide. It defines standard conventions such as 4 spaces per indentation level, snake_case for functions and variables, and CamelCase for classes.",
    shortExplanation: "Adhering to PEP 8 ensures code readability, consistency across teams, and clean presentation in coding rounds.",
    interviewTip: "Always follow 4-space indentation and clean variable naming in live coding rounds to leave a great impression."
  },
  {
    id: 4,
    category: "Basic Python",
    categoryCode: "A",
    question: "How does memory management work in Python?",
    expectedAnswer: "Memory is managed automatically via a private heap space. Python uses two primary mechanisms: Reference Counting (deallocating objects when reference count drops to 0) and a Cyclic Garbage Collector (for circular references).",
    shortExplanation: "Developers do not need to manually allocate (malloc) or free memory as in C/C++.",
    interviewTip: "Mentioning the combination of reference counting + generational cyclic garbage collector will stand out."
  },
  {
    id: 5,
    category: "Basic Python",
    categoryCode: "A",
    question: "What is the Global Interpreter Lock (GIL)?",
    expectedAnswer: "The GIL is a mutex used by CPython (the standard implementation) that ensures only one native thread executes Python bytecode at any given time.",
    shortExplanation: "It simplifies CPython's memory management and single-threaded execution, but prevents pure CPU-bound tasks from utilizing multi-core parallelism via threads (multiprocessing must be used instead).",
    interviewTip: "Clarify that GIL affects CPU-bound threads, but I/O-bound multithreading (like web scraping or file I/O) still runs concurrently."
  },

  // Category B: Variables and Data Types (Q6 - Q10)
  {
    id: 6,
    category: "Variables and Data Types",
    categoryCode: "B",
    question: "What does dynamic typing mean in Python?",
    expectedAnswer: "Dynamic typing means variable types are bound at runtime rather than compile-time. Variables in Python do not have fixed types; instead, the values/objects they reference have types.",
    shortExplanation: "A variable `x` can point to an integer, and later be reassigned to point to a string without declaring a new variable.",
    interviewTip: "Use the analogy that a variable is a label or tag pointing to an object, not a memory container of a fixed type."
  },
  {
    id: 7,
    category: "Variables and Data Types",
    categoryCode: "B",
    question: "What is the difference between mutable and immutable data types in Python?",
    expectedAnswer: "Mutable objects can be modified in-place after creation (List, Set, Dictionary). Immutable objects cannot be changed once created (int, float, bool, str, tuple, frozenset); modifying them creates a new object.",
    shortExplanation: "Immutability guarantees that hash codes do not change, making immutable types safe for dictionary keys and set elements.",
    interviewTip: "State clearly: 'Lists and Dicts are mutable; Strings and Tuples are immutable.' This is asked in virtually every interview."
  },
  {
    id: 8,
    category: "Variables and Data Types",
    categoryCode: "B",
    question: "What is integer interning and small integer caching in Python?",
    expectedAnswer: "CPython pre-allocates and caches small integer objects in the range -5 to 256. Any variable assigned an integer in this range will point to the exact same shared object in memory.",
    shortExplanation: "This optimizes memory usage and speed for commonly used numbers. Outside this range, separate objects may be created depending on the execution context.",
    interviewTip: "Explains why `a = 256; b = 256; a is b` is True, while in interactive shell `a = 500; b = 500; a is b` may be False."
  },
  {
    id: 9,
    category: "Variables and Data Types",
    categoryCode: "B",
    question: "What is the difference between `type()` and `isinstance()`?",
    expectedAnswer: "`type(obj)` returns the exact class of the object without considering inheritance. `isinstance(obj, ClassName)` checks if the object is an instance of the class OR any subclass of that class.",
    shortExplanation: "For example, `isinstance(True, int)` is True (since `bool` inherits from `int`), but `type(True) == int` is False.",
    interviewTip: "PEP 8 strongly recommends using `isinstance()` for type checking because it supports polymorphism."
  },
  {
    id: 10,
    category: "Variables and Data Types",
    categoryCode: "B",
    question: "What is `None` in Python and what is its data type?",
    expectedAnswer: "`None` is a singleton constant used to signify the absence of a value or an empty return. Its data type is `NoneType` (`<class 'NoneType'>`).",
    shortExplanation: "There is only one `None` object in memory throughout the entire execution. Always check for it using identity: `if x is None:`.",
    interviewTip: "Never use `if x == None:`. Always use `if x is None:` as specified in PEP 8."
  },

  // Category C: Operators (Q11 - Q15)
  {
    id: 11,
    category: "Operators",
    categoryCode: "C",
    question: "Explain the difference between `==` and `is` in Python.",
    expectedAnswer: "`==` evaluates value equality (checks whether two objects hold identical data). `is` evaluates reference identity (checks whether both variables point to the exact same memory address: `id(a) == id(b)`).",
    shortExplanation: "Two distinct lists `[1, 2]` and `[1, 2]` have `==` as True, but `is` as False.",
    interviewTip: "Give the twin analogy: same face (== True), different bodies (is False)."
  },
  {
    id: 12,
    category: "Operators",
    categoryCode: "C",
    question: "What is the difference between `/` and `//` division operators?",
    expectedAnswer: "`/` performs true floating-point division and always returns a `float` (e.g. `4 / 2 -> 2.0`). `//` performs floor division and rounds quotient down towards negative infinity (e.g. `7 // 2 -> 3`, `-7 // 2 -> -4`).",
    shortExplanation: "In C/Java, integer division truncates towards zero. In Python, floor division rounds down towards negative infinity.",
    interviewTip: "Highlight `-7 // 2 = -4`! This is one of the most tested operator questions in placement MCQs."
  },
  {
    id: 13,
    category: "Operators",
    categoryCode: "C",
    question: "How does short-circuit evaluation work with `and` and `or`?",
    expectedAnswer: "Evaluation stops as soon as the result is determined. `and` returns the first falsy operand (or the last operand if all truthy). `or` returns the first truthy operand (or the last operand if all falsy).",
    shortExplanation: "Python logical operators return the operand object itself, not strictly a boolean `True`/`False`.",
    interviewTip: "Example: `[] or 'default'` returns `'default'`, which is commonly used to assign fallback values."
  },
  {
    id: 14,
    category: "Operators",
    categoryCode: "C",
    question: "What are membership operators in Python?",
    expectedAnswer: "`in` and `not in`. They test whether a value or sequence is present inside an iterable (string, list, tuple, set, dictionary).",
    shortExplanation: "For dictionaries, `in` checks keys by default. Searching in lists is O(N); searching in sets and dicts is O(1).",
    interviewTip: "Mention the O(1) set lookup vs O(N) list lookup when discussing `in` operator efficiency."
  },
  {
    id: 15,
    category: "Operators",
    categoryCode: "C",
    question: "What does the expression `1 < x < 10` mean in Python?",
    expectedAnswer: "It is a chained comparison equivalent to `(1 < x) and (x < 10)`, but `x` is evaluated only once.",
    shortExplanation: "Python supports mathematical chained comparisons natively, unlike C/Java where `1 < x < 10` fails logically.",
    interviewTip: "Demonstrates Python's expressive syntax. Can chain multiple operators like `a < b <= c == d`."
  },

  // Category D: Conditions and Loops (Q16 - Q20)
  {
    id: 16,
    category: "Conditions and Loops",
    categoryCode: "D",
    question: "What values evaluate to False (Falsy values) in a Python `if` statement?",
    expectedAnswer: "Constants: `None`, `False`. Zero values: `0`, `0.0`, `0j`. Empty collections: `''` (empty string), `[]` (empty list), `()` (empty tuple), `{}` (empty dict), `set()`, `range(0)`.",
    shortExplanation: "Any other number, non-empty string (including `'0'` or `'False'`), or non-empty container evaluates to True.",
    interviewTip: "Emphasize that `bool('False')` is True because the string is not empty."
  },
  {
    id: 17,
    category: "Conditions and Loops",
    categoryCode: "D",
    question: "When does the `else` block of a `for` or `while` loop execute in Python?",
    expectedAnswer: "The `else` block of a loop executes ONLY when the loop completes all its iterations naturally. If the loop is exited early via a `break` statement, the `else` block is skipped.",
    shortExplanation: "It effectively means 'if loop finished without break'. Very useful for search algorithms.",
    interviewTip: "Use it to explain prime checking without requiring an extra boolean flag variable."
  },
  {
    id: 18,
    category: "Conditions and Loops",
    categoryCode: "D",
    question: "What is the difference between `break`, `continue`, and `pass`?",
    expectedAnswer: "`break` terminates the loop completely. `continue` skips the rest of the current iteration and jumps to the next cycle. `pass` is a null statement (no-op) used as a syntactical placeholder.",
    shortExplanation: "`pass` does not alter loop execution flow; it simply does nothing and moves to the very next line.",
    interviewTip: "A common question is: 'Can pass be used inside an empty class or function definition?' Yes, to avoid IndentationError."
  },
  {
    id: 19,
    category: "Conditions and Loops",
    categoryCode: "D",
    question: "Explain the Python ternary operator syntax.",
    expectedAnswer: "Syntax: `value_if_true if condition else value_if_false`.",
    shortExplanation: "It is evaluated lazily; only the branch whose condition matches is evaluated. Example: `status = 'Pass' if marks >= 50 else 'Fail'`.",
    interviewTip: "Note that unlike C's `cond ? x : y`, Python places the True value first: `x if cond else y`."
  },
  {
    id: 20,
    category: "Conditions and Loops",
    categoryCode: "D",
    question: "How does the `range()` function work in Python 3?",
    expectedAnswer: "`range(start, stop[, step])` generates an immutable sequence of integers from `start` up to `stop - 1`. In Python 3, `range` is an immutable sequence type that computes values on demand using O(1) memory, regardless of size.",
    shortExplanation: "In Python 2, `range()` created a full list in RAM; Python 3's `range()` acts like an efficient generator.",
    interviewTip: "Mention that `len(range(10**9))` executes in O(1) time without allocating any memory."
  },

  // Category E: Strings (Q21 - Q25)
  {
    id: 21,
    category: "Strings",
    categoryCode: "E",
    question: "Can you modify a character in a Python string directly? Why or why not?",
    expectedAnswer: "No, strings are immutable. Attempting `s[0] = 'X'` raises a `TypeError: 'str' object does not support item assignment`. To modify a string, you must construct a new string object.",
    shortExplanation: "Immutability allows strings to be cached (interned), shared safely across threads, and used as dictionary keys.",
    interviewTip: "Explain that string concatenation in a loop using `+` is O(N²) because it creates new string objects; use `''.join(list)` for O(N)."
  },
  {
    id: 22,
    category: "Strings",
    categoryCode: "E",
    question: "How does string slicing work? What does `s[::-1]` do?",
    expectedAnswer: "Slicing syntax is `sequence[start:stop:step]`. `start` is included, `stop` is excluded. When `step` is `-1` and start/stop are omitted, `s[::-1]` traverses the string backwards from the last element to the first, reversing it.",
    shortExplanation: "Slicing never raises an IndexError even if indices are out of range; it automatically clamps to boundaries.",
    interviewTip: "`s[::-1]` is implemented at the C-level in CPython, making it the fastest way to reverse a string."
  },
  {
    id: 23,
    category: "Strings",
    categoryCode: "E",
    question: "What is the difference between `str.find()` and `str.index()`?",
    expectedAnswer: "Both search for a substring. If found, both return the lowest index. If NOT found, `find()` returns `-1`, while `index()` raises a `ValueError` exception.",
    shortExplanation: "Use `find()` when you expect that a substring might not be present and want to avoid try-except blocks.",
    interviewTip: "Note that `find()` only works on strings, whereas `index()` works on strings, lists, and tuples."
  },
  {
    id: 24,
    category: "Strings",
    categoryCode: "E",
    question: "What are f-strings in Python and why are they preferred?",
    expectedAnswer: "f-strings (Formatted String Literals, introduced in Python 3.6) allow expressions to be embedded directly inside string literals using `{}` syntax prefixed with `f` or `F`.",
    shortExplanation: "They are evaluated at runtime, more readable, and faster than `%` formatting or `str.format()` because they compile directly to specialized bytecode.",
    interviewTip: "Show modern formatting tricks: `f'{price:.2f}'` or `f'{name=}'` (debugging in 3.8+)."
  },
  {
    id: 25,
    category: "Strings",
    categoryCode: "E",
    question: "What do `split()` and `join()` methods do?",
    expectedAnswer: "`split(delimiter)` divides a string into a list of substrings based on the delimiter. Default splits by any whitespace. `join(iterable)` concatenates elements of an iterable into a single string using the calling string as a separator.",
    shortExplanation: "They are inverse operations: `' '.join('hello world'.split())` reconstructs the normalized string.",
    interviewTip: "`' '.join(words)` requires all items in `words` to be strings. If integers exist, use `' '.join(map(str, nums))`."
  },

  // Category F: Lists, Tuples, Sets, Dictionaries (Q26 - Q33)
  {
    id: 26,
    category: "Lists/Tuples/Sets/Dictionaries",
    categoryCode: "F",
    question: "What is the difference between `append()` and `extend()` in lists?",
    expectedAnswer: "`append(obj)` adds `obj` as a single element at the end of the list. `extend(iterable)` iterates through the passed collection and appends each element individually to the list.",
    shortExplanation: "If `l = [1, 2]`, `l.append([3, 4])` yields `[1, 2, [3, 4]]` (len=3), while `l.extend([3, 4])` yields `[1, 2, 3, 4]` (len=4).",
    interviewTip: "A staple campus recruitment question. Draw the difference in list lengths on paper."
  },
  {
    id: 27,
    category: "Lists/Tuples/Sets/Dictionaries",
    categoryCode: "F",
    question: "What is the difference between `sort()` and `sorted()` in Python?",
    expectedAnswer: "`list.sort()` is a method that modifies the list in-place and returns `None`. `sorted(iterable)` is a built-in function that accepts any iterable, leaves it unmodified, and returns a new sorted list.",
    shortExplanation: "Both use Timsort (hybrid of Merge Sort and Insertion Sort) with O(N log N) time complexity.",
    interviewTip: "Warn the interviewer about the bug: `my_list = my_list.sort()` sets `my_list = None`!"
  },
  {
    id: 28,
    category: "Lists/Tuples/Sets/Dictionaries",
    categoryCode: "F",
    question: "What is list aliasing and how do you create a true copy of a list?",
    expectedAnswer: "Writing `b = a` does not copy the list; it creates a reference alias. Modifying `b` modifies `a`. To create a shallow copy, use `b = a.copy()`, `b = a[:]`, or `b = list(a)`. For nested lists, use `copy.deepcopy()`.",
    shortExplanation: "Shallow copy copies the outer list container; deep copy recursively duplicates all nested objects.",
    interviewTip: "Illustrate with a code example showing that mutating `b` mutates `a` under aliasing."
  },
  {
    id: 29,
    category: "Lists/Tuples/Sets/Dictionaries",
    categoryCode: "F",
    question: "Why does a single-element tuple require a trailing comma?",
    expectedAnswer: "Without a comma, parentheses `(5)` are treated as mathematical grouping syntax, resulting in the integer `5`. The trailing comma `(5,)` instructs the Python parser to construct a tuple.",
    shortExplanation: "The comma is what actually constructs the tuple in Python; parentheses are only required for syntactic disambiguation.",
    interviewTip: "Mention that `x = 1,` is also a valid tuple of length 1 in Python."
  },
  {
    id: 30,
    category: "Lists/Tuples/Sets/Dictionaries",
    categoryCode: "F",
    question: "How do you create an empty set in Python? Why not `{}`?",
    expectedAnswer: "An empty set is created using `set()`. The curly braces `{}` are reserved for creating an empty dictionary.",
    shortExplanation: "Dictionaries were introduced in Python before sets; thus `{}` defaulted to dictionaries for backwards compatibility.",
    interviewTip: "Check `type({})` vs `type(set())` live if asked in a machine round."
  },
  {
    id: 31,
    category: "Lists/Tuples/Sets/Dictionaries",
    categoryCode: "F",
    question: "Why can't a list be used as a key in a Python dictionary?",
    expectedAnswer: "Dictionary keys must be hashable (their hash value must remain constant throughout their lifetime). Lists are mutable, meaning their contents can change, which would invalidate their hash and bucket location in the hash table.",
    shortExplanation: "Tuples can be used as keys only if all elements inside the tuple are also immutable/hashable.",
    interviewTip: "Mention `TypeError: unhashable type: 'list'` as the exact exception raised."
  },
  {
    id: 32,
    category: "Lists/Tuples/Sets/Dictionaries",
    categoryCode: "F",
    question: "What is the difference between `dict[key]` and `dict.get(key)`?",
    expectedAnswer: "`dict[key]` retrieves the value for `key`, but raises a `KeyError` if the key is not present. `dict.get(key, default)` returns the value, or returns `default` (None if unspecified) without raising an error.",
    shortExplanation: "`dict.get(k, 0)` is the standard Python pattern for counting frequencies safely.",
    interviewTip: "Always recommend `get()` for defensive programming when keys might be missing."
  },
  {
    id: 33,
    category: "Lists/Tuples/Sets/Dictionaries",
    categoryCode: "F",
    question: "What is the time complexity of searching an element in a List vs a Set?",
    expectedAnswer: "Searching in a List (`x in my_list`) takes O(N) linear time because it performs sequential comparison. Searching in a Set (`x in my_set`) takes O(1) constant average time using a hash table.",
    shortExplanation: "Converting a list to a set takes O(N) upfront, but makes subsequent lookups O(1).",
    interviewTip: "Mention that if you have multiple lookups, converting the list to a set beforehand is a major performance win."
  },

  // Category G: Functions (Q34 - Q38)
  {
    id: 34,
    category: "Functions",
    categoryCode: "G",
    question: "What happens if a Python function does not have a `return` statement?",
    expectedAnswer: "The function implicitly returns `None` upon reaching the end of its body.",
    shortExplanation: "Every function in Python returns something; absence of a return statement is equivalent to `return None`.",
    interviewTip: "Example: `print()` prints to stdout and returns `None`. So `x = print('hi')` sets `x = None`."
  },
  {
    id: 35,
    category: "Functions",
    categoryCode: "G",
    question: "Explain the mutable default argument trap in Python.",
    expectedAnswer: "Default arguments are evaluated once when the function is defined, not each time the function is called. If a mutable object (like a list) is used as default, that same list object is shared across all subsequent invocations.",
    shortExplanation: "Fix: Always use `def fn(arg=None):` and inside the function check `if arg is None: arg = []`.",
    interviewTip: "Interviewers consider this a litmus test for genuine Python understanding."
  },
  {
    id: 36,
    category: "Functions",
    categoryCode: "G",
    question: "What are `*args` and `**kwargs` in Python functions?",
    expectedAnswer: "`*args` allows a function to accept any number of positional arguments, packing them into a `tuple`. `**kwargs` allows accepting any number of keyword arguments, packing them into a `dict`.",
    shortExplanation: "The names `args` and `kwargs` are conventions; the single asterisk `*` and double asterisk `**` are the actual operators.",
    interviewTip: "Can also be used for unpacking: `func(*my_list)` unpacks list elements into positional arguments."
  },
  {
    id: 37,
    category: "Functions",
    categoryCode: "G",
    question: "Explain the LEGB rule for variable scope in Python.",
    expectedAnswer: "LEGB defines the lookup order for variable names: Local (inside current function) -> Enclosing (outer enclosing functions in nested scopes) -> Global (module-level) -> Built-in (Python built-in namespace like len, range).",
    shortExplanation: "Python searches scopes outwards in this order. If the variable is not found in any of the four, a `NameError` is raised.",
    interviewTip: "Mention the `global` keyword to modify global scope and `nonlocal` for enclosing closures."
  },
  {
    id: 38,
    category: "Functions",
    categoryCode: "G",
    question: "What is a lambda function and what are its limitations?",
    expectedAnswer: "A lambda function is an anonymous, single-line function defined using `lambda args: expression`. It implicitly returns the result of the expression.",
    shortExplanation: "Limitations: It can only contain a single expression (no statements like `for`, `while`, `pass`, assignments) and cannot have docstrings or type hints.",
    interviewTip: "Commonly used for custom sorting: `students.sort(key=lambda s: s['marks'])`."
  },

  // Category H: Exception Handling (Q39 - Q42)
  {
    id: 39,
    category: "Exception Handling",
    categoryCode: "H",
    question: "Explain the complete `try-except-else-finally` block workflow.",
    expectedAnswer: "`try` runs the risky code. `except` handles specific errors if raised. `else` executes only if NO exceptions occurred in `try`. `finally` executes unconditionally in all cases (for resource cleanup).",
    shortExplanation: "Even if `try` has a `return` or unhandled error, `finally` will execute before control leaves the block.",
    interviewTip: "Highlight that `else` is useful for code that should only run if the `try` block succeeded, preventing accidental error masking."
  },
  {
    id: 40,
    category: "Exception Handling",
    categoryCode: "H",
    question: "What happens if both `try` and `finally` blocks have a `return` statement?",
    expectedAnswer: "The return statement in the `finally` block takes precedence and overrides the return statement from the `try` or `except` blocks.",
    shortExplanation: "Because `finally` executes during stack unwinding before exiting the function, its return value replaces previous return values.",
    interviewTip: "This is a popular output-prediction question in placement screenings. Output will always be the finally return."
  },
  {
    id: 41,
    category: "Exception Handling",
    categoryCode: "H",
    question: "Why should you avoid using a bare `except:` clause?",
    expectedAnswer: "A bare `except:` catches `BaseException`, which includes `KeyboardInterrupt` (Ctrl+C) and `SystemExit`. This prevents users from terminating the program and masks programming bugs like typos (`NameError`).",
    shortExplanation: "Always catch specific exceptions (e.g. `except ValueError:`) or at minimum `except Exception:`.",
    interviewTip: "Mentioning `BaseException` vs `Exception` demonstrates good understanding of Python's exception hierarchy."
  },
  {
    id: 42,
    category: "Exception Handling",
    categoryCode: "H",
    question: "How do you raise an exception manually in Python?",
    expectedAnswer: "Using the `raise` keyword followed by an exception instance or class: `raise ValueError('Invalid age value')`.",
    shortExplanation: "You can re-raise the active exception inside an except block by simply calling `raise` with no arguments.",
    interviewTip: "Re-raising via bare `raise` preserves the original traceback for debugging."
  },

  // Category I: Object-Oriented Programming (OOP) (Q43 - Q47)
  {
    id: 43,
    category: "OOP",
    categoryCode: "I",
    question: "What is `self` in Python class methods? Is it a reserved keyword?",
    expectedAnswer: "`self` represents the instance of the class through which the method is called. It is NOT a reserved keyword; it is a strong PEP 8 naming convention. You could technically name it anything, but `self` is standard.",
    shortExplanation: "When calling `obj.method(arg)`, Python translates it internally to `Class.method(obj, arg)`.",
    interviewTip: "Many freshers mistakenly believe `self` is a keyword. Clarify that it is just the first positional parameter."
  },
  {
    id: 44,
    category: "OOP",
    categoryCode: "I",
    question: "What is the `__init__` method and how does it differ from a constructor in C++/Java?",
    expectedAnswer: "`__init__` is an initializer method that sets up initial attributes on an already created instance. The actual object allocation happens in `__new__` before `__init__` is called.",
    shortExplanation: "In C++/Java, the constructor allocates memory and initializes. In Python, `__new__` creates the object, and `__init__` initializes its state.",
    interviewTip: "For entry-level interviews, referring to `__init__` as the constructor is generally acceptable, but mentioning `__new__` shows advanced knowledge."
  },
  {
    id: 45,
    category: "OOP",
    categoryCode: "I",
    question: "What is the difference between class variables and instance variables?",
    expectedAnswer: "Class variables are declared within the class body outside methods and are shared across all instances of the class. Instance variables are bound to `self` inside methods and are unique to each object instance.",
    shortExplanation: "Modifying a class variable through the class (`Class.var = x`) updates it for all instances. Modifying it via an instance (`obj.var = x`) shadows it with a local instance variable.",
    interviewTip: "Be prepared to trace code where an instance assigns to a class variable name."
  },
  {
    id: 46,
    category: "OOP",
    categoryCode: "I",
    question: "How does Python handle private variables and encapsulation?",
    expectedAnswer: "Python uses naming conventions rather than strict access modifiers. A single underscore `_var` indicates protected/internal use. A double underscore `__var` triggers Name Mangling, renaming it to `_ClassName__var` to prevent accidental subclass overriding.",
    shortExplanation: "Python adheres to the philosophy 'We are all consenting adults here' — true private visibility does not exist.",
    interviewTip: "Demonstrate access via mangled name `obj._Class__privateVar` to prove private variables can still be reached."
  },
  {
    id: 47,
    category: "OOP",
    categoryCode: "I",
    question: "Does Python support multiple inheritance? How does it resolve method name conflicts?",
    expectedAnswer: "Yes, Python supports multiple inheritance (`class C(A, B):`). Method conflicts are resolved using the C3 Linearization algorithm to determine the Method Resolution Order (MRO).",
    shortExplanation: "You can view the resolution order by inspecting `Class.mro()` or `Class.__mro__`.",
    interviewTip: "Mention `super()` uses MRO dynamically to determine the next class in the inheritance chain."
  },

  // Category J: File Handling (Q48 - Q49)
  {
    id: 48,
    category: "File Handling",
    categoryCode: "J",
    question: "Why is the `with` statement preferred when opening files in Python?",
    expectedAnswer: "The `with` statement creates a context manager that guarantees the file will be closed automatically when the block finishes, even if an exception occurs inside the block.",
    shortExplanation: "It invokes `__enter__()` on entry and `__exit__()` on exit, preventing dangling file descriptors and resource leaks.",
    interviewTip: "State: 'It replaces the traditional `try-finally` pattern for resource management.'"
  },
  {
    id: 49,
    category: "File Handling",
    categoryCode: "J",
    question: "What is the difference between `read()`, `readline()`, and `readlines()`?",
    expectedAnswer: "`read()` reads the entire file content into a single string. `readline()` reads a single line up to the newline character. `readlines()` reads all lines and returns them as a list of strings.",
    shortExplanation: "For processing large files, iterating directly with `for line in f:` is best because it streams lines with O(1) memory.",
    interviewTip: "Interviewers love asking how to process a 10 GB file in Python without running out of RAM (streaming line-by-line)."
  },

  // Category K: Python Coding Concepts (Q50)
  {
    id: 50,
    category: "Python Coding Concepts",
    categoryCode: "K",
    question: "What is the difference between a generator and a normal function in Python?",
    expectedAnswer: "A normal function computes its result and returns it at once using `return`, terminating execution. A generator uses `yield` to produce a sequence of values lazily on-demand, suspending its execution state between iterations.",
    shortExplanation: "Generators have O(1) memory overhead because they compute values one-by-one instead of storing the entire sequence in memory.",
    interviewTip: "Mention `(x**2 for x in range(1000))` as a generator expression compared to list comprehension `[x**2 ...]`."
  }
];
