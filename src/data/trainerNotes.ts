export interface TrainerSectionNote {
  sectionId: number;
  sectionTitle: string;
  whatToExplain: string[];
  howToExplainSimply: string;
  realWorldAnalogy: string;
  questionsToAskStudents: string[];
  commonStudentDoubts: { question: string; answer: string }[];
  quickClassroomActivity: string;
  typicalInterviewQuestion: { question: string; expectedAnswer: string };
  typicalCodingExercise: { problem: string; hint: string };
}

export const trainerNotesData: TrainerSectionNote[] = [
  {
    sectionId: 1,
    sectionTitle: "Section 1: Python Introduction & Basics",
    whatToExplain: [
      "Why IT recruiters and MNCs (TCS, Infosys, Cognizant, Wipro) favor Python in placement coding assessments.",
      "The role of bytecode (.pyc) and Python Virtual Machine (PVM).",
      "Dynamic typing and how variable names are merely labels/references pointing to objects in memory.",
      "Input/output nuances: input() always returns str; print() sep and end parameters."
    ],
    howToExplainSimply: "Show live in interactive terminal: assign x = 10, then x = 'hello'. Explain that x didn't change its type; x was untagged from the integer 10 and tagged onto the string 'hello'.",
    realWorldAnalogy: "Sticky notes vs Metal Boxes: In C, a variable is an engraved metal box that can only hold one type of item. In Python, a variable is a sticky label that you can peel off one item and stick onto another.",
    questionsToAskStudents: [
      "Can Python run without compiling at all? (Guide them to understand the hidden bytecode compilation step).",
      "If I write a = input() and type 10, what is the type of a?",
      "Can a variable name start with an underscore _ ? Why would we do that?"
    ],
    commonStudentDoubts: [
      {
        question: "Why do we get '1010' instead of 20 when adding two user inputs?",
        answer: "Because input() returns a string. '10' + '10' performs string concatenation. You must explicitly cast using int(input())."
      },
      {
        question: "Is Python slower than C++? Will interviewers reject Python solutions for speed?",
        answer: "While Python is slower in raw execution, placement online judges configure runtime limits specifically for Python (usually 2-5x the C++ limit). Logic and time complexity matter, not the language speed."
      }
    ],
    quickClassroomActivity: "Give students 30 seconds to predict output of: `print('Placement', '2026', sep='***', end='!!!\\n')` on pen and paper.",
    typicalInterviewQuestion: {
      question: "Is Python a compiled or interpreted language?",
      expectedAnswer: "Python is both. It first compiles source code (.py) into platform-independent bytecode (.pyc), which is then interpreted line-by-line by the Python Virtual Machine (PVM)."
    },
    typicalCodingExercise: {
      problem: "Read two space-separated numbers on a single line, calculate their sum, difference, and product, and print them separated by ' | '.",
      hint: "Use `a, b = map(int, input().split())` followed by formatted print."
    }
  },
  {
    sectionId: 2,
    sectionTitle: "Section 2: Variables, Data Types & Operators",
    whatToExplain: [
      "The 5 primary primitive types: int, float, bool, str, NoneType.",
      "Division operators: / (true float division) vs // (floor division towards negative infinity).",
      "Logical operators (and, or, not) and their short-circuiting operand-return behavior.",
      "Value equality (==) vs object identity (is). Small integer caching (-5 to 256)."
    ],
    howToExplainSimply: "Use two identical twin brothers: they look identical (twin1 == twin2 is True), but they have different Aadhaar/SSN IDs and bodies (twin1 is twin2 is False).",
    realWorldAnalogy: "Identity vs Equality: Two brand new iPhone 15s in factory boxes have the exact same specifications and price (==), but have different serial numbers and IMEI addresses (is).",
    questionsToAskStudents: [
      "What is the result of 7 // 2 vs -7 // 2? (Watch for -4 surprise).",
      "What is bool('False')?",
      "Why is [] is [] evaluated to False?"
    ],
    commonStudentDoubts: [
      {
        question: "Why does -7 // 2 equal -4 instead of -3?",
        answer: "Floor division rounds towards negative infinity. 7 / 2 = 3.5 floored is 3. But -7 / 2 = -3.5 floored (downwards) is -4."
      },
      {
        question: "Why is `a = 256; b = 256; a is b` True, but with 300 it might be False?",
        answer: "CPython pre-allocates and caches an array of integer objects from -5 to 256 at startup for memory optimization. Above 256, new objects are instantiated in interactive mode."
      }
    ],
    quickClassroomActivity: "Classroom Poll: Ask students to raise hands: Does `bool([]) == False` evaluate to True or False? (Answer: True, because bool([]) is False, and False == False is True).",
    typicalInterviewQuestion: {
      question: "Explain the difference between `==` and `is` with a code snippet.",
      expectedAnswer: "`==` compares values/content, while `is` compares memory address (id). Example: `a = [1, 2]; b = [1, 2]; print(a == b); print(a is b)` prints True, then False."
    },
    typicalCodingExercise: {
      problem: "Write a program to swap two variables without using a third temporary variable in a single line.",
      hint: "Use Python tuple unpacking: `a, b = b, a`."
    }
  },
  {
    sectionId: 3,
    sectionTitle: "Section 3: Conditional Statements",
    whatToExplain: [
      "Syntax of if, elif, and else with strict 4-space indentation.",
      "Python truthiness: 0, None, empty containers evaluate to False.",
      "Ternary operator syntax: `val_if_true if cond else val_if_false`.",
      "The danger of writing `if x == 'a' or 'b':`."
    ],
    howToExplainSimply: "Show how `or 'b'` is evaluated on its own. Since 'b' is a non-empty string, it is always truthy, so the entire condition always succeeds!",
    realWorldAnalogy: "Traffic lights: You check green -> yellow -> red sequentially. Once you hit green and drive, you don't evaluate the rest of the signals.",
    questionsToAskStudents: [
      "Can we have an if statement without an else? (Yes).",
      "Can we have an else without an if? (No).",
      "What is the output of `if 0: print('yes') else: print('no')`?"
    ],
    commonStudentDoubts: [
      {
        question: "Can I use switch-case in Python?",
        answer: "Historically Python used if-elif-else or dictionaries. Python 3.10 introduced `match-case`, but placement test platforms (often running Python 3.8/3.9) rely heavily on if-elif-else."
      }
    ],
    quickClassroomActivity: "Spot the bug: Show `if fruit == 'apple' or 'banana': print('Healthy')`. Ask why typing 'orange' still prints 'Healthy'.",
    typicalInterviewQuestion: {
      question: "What are the rules for determining whether a year is a Leap Year?",
      expectedAnswer: "A year is leap if: (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0). Century years must be divisible by 400."
    },
    typicalCodingExercise: {
      problem: "Write a program that takes marks (0-100) and prints Grade: 90+ 'A', 80-89 'B', 70-79 'C', below 70 'Fail' using chained comparisons.",
      hint: "Use `90 <= marks <= 100`."
    }
  },
  {
    sectionId: 4,
    sectionTitle: "Section 4: Loops & Control Flow",
    whatToExplain: [
      "The while loop and how to avoid infinite loops (remember: no count++).",
      "The for loop and the three parameters of range(start, stop, step).",
      "break (immediate exit), continue (skip to next iteration), pass (no-op).",
      "The unique `for ... else` construct: else executes ONLY when no break occurred."
    ],
    howToExplainSimply: "Explain `for ... else` as 'Search and Verify': You search a room for your keys. If you find them, you break and leave. If you search the whole room and didn't break, the 'else' triggers to say 'Keys not in room'.",
    realWorldAnalogy: "Search Party: A rescue team searches 10 sectors. If they find the lost hiker in sector 4, they break and celebrate. If they check all 10 sectors without finding the hiker, the 'else' statement issues a missing report.",
    questionsToAskStudents: [
      "What is the output of `list(range(5, 1))`? (Empty list!).",
      "Does `continue` trigger the `else` block of a for loop? (Yes, only `break` suppresses it).",
      "How do you count down from 10 to 1 using range?"
    ],
    commonStudentDoubts: [
      {
        question: "Why doesn't range(1, 5) include 5?",
        answer: "Python uses half-open intervals [start, stop) across ranges and slices. It makes calculating length simple: stop - start = 5 - 1 = 4 elements."
      }
    ],
    quickClassroomActivity: "Ask students: Write a loop to print all even numbers from 2 to 20 with step parameter only (no if statement inside loop).",
    typicalInterviewQuestion: {
      question: "Explain the `else` clause in a Python `for` loop. When does it run?",
      expectedAnswer: "The `else` clause of a `for` loop executes when the loop completes its iterations naturally over the sequence. If the loop is terminated prematurely by a `break` statement, the `else` block is skipped."
    },
    typicalCodingExercise: {
      problem: "Check if a number is prime using a `for ... else` loop in O(√N) time.",
      hint: "Loop from 2 to `int(n**0.5) + 1`. If divisible, `break`. In the `else:` block, declare prime."
    }
  },
  {
    sectionId: 5,
    sectionTitle: "Section 5: Strings & Manipulation",
    whatToExplain: [
      "String immutability and memory allocation on concatenation.",
      "Positive indexing (0 to N-1) and negative indexing (-1 to -N).",
      "String slicing [start:stop:step] and reverse slicing [::-1].",
      "Essential methods: strip, split, join, lower, upper, find vs index.",
      "Modern f-strings for clean formatting."
    ],
    howToExplainSimply: "Show that strings are like carved stone tablets. You cannot erase or overwrite a single letter. To change it, you must carve a brand new tablet.",
    realWorldAnalogy: "Book Printing: Once a book page is printed, you cannot alter the 3rd word in place. You have to reprint the revised page.",
    questionsToAskStudents: [
      "What is `s = 'Python'; print(s[10])` vs `print(s[1:10])`? (IndexError vs safe slicing!).",
      "Why is `find()` preferred over `index()` when checking substrings?",
      "How does `' '.join(['A', 'B'])` work?"
    ],
    commonStudentDoubts: [
      {
        question: "Why does `s[100]` give IndexError, but `s[0:100]` doesn't?",
        answer: "Individual indexing requires the exact element to exist. Slicing in Python is designed to be forgiving: out-of-bound indices are clamped to the boundaries (0 and len(s))."
      }
    ],
    quickClassroomActivity: "Ask the class to reverse words in a sentence without using loops: `'the sky is blue' -> 'blue is sky the'` (Solution: `' '.join(s.split()[::-1])`).",
    typicalInterviewQuestion: {
      question: "Why are strings immutable in Python?",
      expectedAnswer: "1. Security (cannot be altered when passed to DB connections or network sockets). 2. Hashability (safe to use as dictionary keys and set elements because hash value is constant). 3. Memory optimization (string interning allows sharing identical strings)."
    },
    typicalCodingExercise: {
      problem: "Check if two input strings are valid Anagrams ignoring casing and spaces.",
      hint: "Clean both strings, then compare `sorted(s1) == sorted(s2)` or use a frequency dictionary."
    }
  },
  {
    sectionId: 6,
    sectionTitle: "Section 6: Lists & Comprehensions",
    whatToExplain: [
      "Lists as dynamic arrays: append vs extend vs insert.",
      "Deletion methods: pop(index) returns item; remove(val) removes first match; del removes slice/index.",
      "List aliasing trap (`b = a` vs `b = a.copy()`).",
      "List comprehension syntax: `[expr for item in iter if cond]`.",
      "In-place `sort()` vs built-in `sorted()`."
    ],
    howToExplainSimply: "Draw on whiteboard: `a = [1, 2]`. When you write `b = a`, you have not created a new box. You created a second remote control pointing to the same TV.",
    realWorldAnalogy: "Shared Bank Account: A joint account has two debit cards (a and b). When person 'b' spends 500 dollars, person 'a' sees their balance drop too!",
    questionsToAskStudents: [
      "What is `len([1, 2].append([3, 4]))`? (Tricky: append returns None, so len(None) raises TypeError!).",
      "How to avoid mutating the original list when sorting?",
      "What is the time complexity of `list.insert(0, val)`? (O(N) because all elements shift right)."
    ],
    commonStudentDoubts: [
      {
        question: "Why did `res = my_list.sort()` make `res` None?",
        answer: "By Python convention, methods that modify a mutable object in-place return None to prevent developers from assuming a new copy was made."
      }
    ],
    quickClassroomActivity: "Classroom challenge: Write a single-line list comprehension that extracts only the vowels from a given string `s` in lowercase.",
    typicalInterviewQuestion: {
      question: "What is the difference between append() and extend() in Python?",
      expectedAnswer: "`append(x)` adds `x` as a single object at the end of the list (e.g. `[1].append([2, 3])` results in `[1, [2, 3]]`). `extend(iterable)` iterates through the collection and appends each element individually (e.g. `[1].extend([2, 3])` results in `[1, 2, 3]`)."
    },
    typicalCodingExercise: {
      problem: "Find the second largest number in a list in a single pass without using `sort()` or `set()`.",
      hint: "Maintain two variables `first` and `second` initialized to negative infinity."
    }
  },
  {
    sectionId: 7,
    sectionTitle: "Section 7: Tuples, Sets & Dictionaries",
    whatToExplain: [
      "Tuples: Immutability, memory compactness, single-element syntax `(1,)`.",
      "Sets: Unique elements, O(1) hash lookup, set operations (&, |, -, ^).",
      "Dictionaries: Hash map implementation, key immutability requirement, `get(key, default)`.",
      "When to pick which: Comparison matrix across mutability, order, and time complexity."
    ],
    howToExplainSimply: "Set is like a party guest list where duplicate names are rejected. Dictionary is like a phonebook where every unique name maps to a phone number.",
    realWorldAnalogy: "Passport Number: Your passport number is a dictionary key; it must be unique and cannot change. Your address is the value; it can change over time.",
    questionsToAskStudents: [
      "Can a list be used as a key in a dictionary? Why or why not?",
      "How do you declare an empty set? Why isn't it `{}`?",
      "What is the difference in time complexity between `x in my_list` vs `x in my_set`?"
    ],
    commonStudentDoubts: [
      {
        question: "Why must dictionary keys be immutable?",
        answer: "Dictionaries use hash tables. If a key's value could change, its hash value would change, meaning Python would look in the wrong hash bucket and be unable to find the stored value."
      }
    ],
    quickClassroomActivity: "Ask students: How many elements will be in `s = {1, 1.0, '1', True}`? (Answer: 2! Because in Python, `1 == 1.0 == True` and they have identical hashes!).",
    typicalInterviewQuestion: {
      question: "Why is searching an element in a Set faster than in a List?",
      expectedAnswer: "A List uses sequential linear search taking O(N) time. A Set uses a Hash Table where element position is computed directly from its hash code in O(1) constant average time."
    },
    typicalCodingExercise: {
      problem: "Count the frequency of each character in a string and print the first non-repeating character.",
      hint: "Build a frequency dictionary in first pass, then iterate string in second pass to find first char with count == 1."
    }
  },
  {
    sectionId: 8,
    sectionTitle: "Section 8: Functions & Scope",
    whatToExplain: [
      "Function definition, positional vs keyword arguments.",
      "Default arguments and the mutable default argument trap (`def fn(l=[])`).",
      "Variable-length arguments: *args (tuple) and **kwargs (dict).",
      "LEGB scope rule and the `global` keyword.",
      "Lambda expressions for one-liner operations in `sorted()` and `map()`."
    ],
    howToExplainSimply: "Show that Python creates default arguments once when reading the `def` line, not every time the function is called. If that argument is a list, everyone drinks from the same mug!",
    realWorldAnalogy: "Office Coffee Pot: If the default argument is a shared coffee pot, whatever coffee was left by the previous employee is still there when the next employee arrives.",
    questionsToAskStudents: [
      "What does a function return if there is no return statement?",
      "What is the type of *args inside a function?",
      "Can a lambda function contain an if-else statement?"
    ],
    commonStudentDoubts: [
      {
        question: "Can we have a return statement inside a loop in a function?",
        answer: "Yes, executing a return statement immediately terminates both the loop and the entire function, returning control to the caller."
      }
    ],
    quickClassroomActivity: "Have students trace: `def f(a, L=[]): L.append(a); return L; print(f(1)); print(f(2))`. Watch how many predict [2] instead of [1, 2].",
    typicalInterviewQuestion: {
      question: "What is the mutable default argument trap in Python and how do you fix it?",
      expectedAnswer: "Default arguments are evaluated once at function definition time. If a mutable object (like a list) is used, all calls without an explicit argument share that same object. Fix: Use `def fn(item, lst=None): if lst is None: lst = []`."
    },
    typicalCodingExercise: {
      problem: "Write a function using `*args` that calculates the product of all passed numbers, ignoring any non-numeric arguments.",
      hint: "Iterate over `args` checking `isinstance(x, (int, float))`."
    }
  },
  {
    sectionId: 9,
    sectionTitle: "Section 9: Exception Handling",
    whatToExplain: [
      "Compile-time syntax errors vs runtime exceptions.",
      "Full try-except-else-finally pipeline.",
      "Why `finally` always executes (even after `return`).",
      "Catching multiple specific exceptions vs generic `Exception`.",
      "Raising exceptions intentionally using `raise`."
    ],
    howToExplainSimply: "Try is the stunt performer taking a risk. Except is the safety net catching the fall. Else is the celebration if the stunt succeeded safely. Finally is the stadium cleanup crew that cleans up no matter what happened.",
    realWorldAnalogy: "ATM Cash Withdrawal: Try to dispense money. Except handles insufficient funds. Else prints the receipt. Finally always ejects your debit card.",
    questionsToAskStudents: [
      "Does the finally block run if an exception is NOT caught? (Yes, before crashing).",
      "Does the else block run if an exception occurs? (No).",
      "What happens if both try and finally have return statements?"
    ],
    commonStudentDoubts: [
      {
        question: "Why should we avoid writing bare `except:`?",
        answer: "A bare `except:` catches everything, including KeyboardInterrupt (Ctrl+C) and SystemExit, making it impossible to stop or debug the script normally."
      }
    ],
    quickClassroomActivity: "Ask the class: What will this function return? `def fn(): try: return 10 finally: return 20`. (Answer: 20).",
    typicalInterviewQuestion: {
      question: "What is the purpose of the `else` block in Python `try-except`?",
      expectedAnswer: "The `else` block executes only when the code in the `try` block completes successfully without raising any exceptions. It separates normal success logic from exception handling logic."
    },
    typicalCodingExercise: {
      problem: "Write a function `safe_divide(a, b)` that catches ZeroDivisionError and TypeError, returning a meaningful error message instead of crashing.",
      hint: "Use `except ZeroDivisionError:` and `except TypeError:`."
    }
  },
  {
    sectionId: 10,
    sectionTitle: "Section 10: OOP Basics",
    whatToExplain: [
      "Classes as blueprints and objects as instances.",
      "The `__init__` constructor and why `self` must be the first parameter.",
      "Instance variables (self.var) vs Class variables (Class.var).",
      "Single inheritance, `super()`, and method overriding.",
      "Encapsulation: public, protected (_var), and private (__var via name mangling)."
    ],
    howToExplainSimply: "A cookie cutter is a Class. The cookies stamped out of the dough are Objects. The ingredients on each individual cookie (sprinkles, icing) are instance variables.",
    realWorldAnalogy: "Architectural Blueprint: The blueprint of an apartment building is the Class. Each actual flat built from it is an Object. The paint color of Flat 301 is an instance variable. The shared water tank on the roof is a class variable.",
    questionsToAskStudents: [
      "Is `self` a reserved keyword in Python? (No, it's a naming convention).",
      "What happens if you define a method inside a class without `self` and call it on an object?",
      "Does Python have private variables like Java?"
    ],
    commonStudentDoubts: [
      {
        question: "Why does Python force us to write `self` explicitly in method definitions?",
        answer: "Python follows the Zen of Python principle: 'Explicit is better than implicit.' It makes it obvious whether a variable belongs to the instance or the local method scope."
      }
    ],
    quickClassroomActivity: "Ask students: If class `Dog` has `species = 'Canine'`, and we do `d1 = Dog(); d1.species = 'Feline'`, what is `d2.species`? (Still 'Canine'! d1 only created an instance variable).",
    typicalInterviewQuestion: {
      question: "Does Python support method overloading?",
      expectedAnswer: "Python does not support traditional method overloading where multiple methods share the same name with different parameter types/counts. Defining a method with the same name overwrites the previous definition. Instead, Python handles varying arguments using default arguments or *args."
    },
    typicalCodingExercise: {
      problem: "Create a Student class that takes name, roll, and a list of marks. Provide a method `get_average()` and `get_result()` ('Pass' if average >= 50 else 'Fail').",
      hint: "Store marks in `self.marks` and use `sum(self.marks) / len(self.marks)`."
    }
  },
  {
    sectionId: 11,
    sectionTitle: "Section 11: File Handling",
    whatToExplain: [
      "open() modes: 'r', 'w', 'a', 'r+'.",
      "Why `with open(...)` is mandatory for clean resource management.",
      "read() vs readline() vs readlines().",
      "Iterating directly over file object (`for line in f:`) for memory-efficient streaming."
    ],
    howToExplainSimply: "Opening a file without closing it is like borrowing a library book and never returning it. The library (OS) runs out of available books (file descriptors). `with` guarantees the book is returned when you leave the room.",
    realWorldAnalogy: "Hotel Keycard: When you enter a hotel room with your keycard, the lights turn on. When you pull the card out and leave, the power automatically shuts off.",
    questionsToAskStudents: [
      "What happens if you open a non-existent file in 'r' mode vs 'w' mode? (FileNotFoundError vs creates new file).",
      "Why is iterating `for line in f:` better than `f.readlines()` for a 5 GB file?"
    ],
    commonStudentDoubts: [
      {
        question: "Does `with open` automatically close the file if an exception crashes the program?",
        answer: "Yes! The context manager calls `__exit__()` during unwinding, guaranteeing the file descriptor is closed."
      }
    ],
    quickClassroomActivity: "Ask students to identify why `open('data.txt', 'w')` wiped their lab assignment.",
    typicalInterviewQuestion: {
      question: "What is the advantage of using the `with` statement when opening files?",
      expectedAnswer: "The `with` statement utilizes Python's context management protocol (`__enter__` and `__exit__`). It guarantees that the file is automatically closed as soon as the block finishes or if an exception occurs, preventing resource leaks."
    },
    typicalCodingExercise: {
      problem: "Write a script that reads a text file and writes all even-numbered lines to a new file called `even_lines.txt`.",
      hint: "Use `enumerate(f, start=1)` and check `if line_no % 2 == 0:`."
    }
  },
  {
    sectionId: 12,
    sectionTitle: "Section 12: Placement Coding Patterns",
    whatToExplain: [
      "How to read constraints and estimate expected Time Complexity.",
      "Pattern 1: Two Pointers (for sorted arrays, reversing, palindrome).",
      "Pattern 2: Frequency Hash Map (for Two Sum unsorted, anagrams, duplicates).",
      "Pattern 3: Digit extraction loop (`% 10` and `// 10`) for number problems."
    ],
    howToExplainSimply: "Show that interview problems are not random puzzles; they are variations of 5 standard patterns. Once you recognize the pattern, writing the code is mechanical.",
    realWorldAnalogy: "Toolbox: If you need to tighten a bolt, you reach for a wrench. If you need to find complements, you reach for a Hash Map.",
    questionsToAskStudents: [
      "If N = 100,000, will an O(N²) solution pass in 1 second? (No, 10^10 operations will TLE).",
      "What is the space complexity of creating a set of N elements? (O(N))."
    ],
    commonStudentDoubts: [
      {
        question: "How do I know whether to sort first or use a hash map?",
        answer: "If the problem requires original indices, sorting might lose them (unless you store index pairs). A hash map preserves original indices and gives O(N) time with O(N) space."
      }
    ],
    quickClassroomActivity: "Give 2 minutes: Write down on paper the algorithm to reverse an integer mathematically without string conversion.",
    typicalInterviewQuestion: {
      question: "How do you solve the Two Sum problem in O(N) time?",
      expectedAnswer: "Use a hash map to store each number and its index as we iterate. For each element `x`, check if `target - x` exists in the hash map. If yes, return the pair. If not, insert `x`."
    },
    typicalCodingExercise: {
      problem: "Given an array of integers, move all zeros to the end while maintaining the relative order of non-zero elements in-place.",
      hint: "Use two pointers: one tracks position for the next non-zero element."
    }
  }
];
