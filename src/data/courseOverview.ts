export interface CourseOverview {
  title: string;
  subtitle: string;
  targetAudience: string[];
  prerequisites: string[];
  teachingMethodology: string;
  duration: string;
  courseObjectives: string[];
  placementRelevance: {
    focusArea: string;
    whyItMatters: string;
    interviewWeight: string;
  }[];
}

export const courseOverviewData: CourseOverview = {
  title: "Python Placement Training Masterclass",
  subtitle: "Engineering Campus Recruitment & First-Round Technical Screening Package",
  targetAudience: [
    "Final-year and pre-final year Engineering students (B.E. / B.Tech / MCA / M.Sc CS/IT)",
    "Campus & off-campus placement aspirants targeting TCS, Infosys, Wipro, Cognizant, Accenture, Capgemini, Zoho, Mindtree, LTI, Hexaware, and product startups",
    "Students transitioning to Python from C, C++, or Java",
    "Freshers with basic or zero prior programming experience who need placement-ready clarity"
  ],
  prerequisites: [
    "Basic computer literacy",
    "Logical thinking and basic high school mathematics (even/odd, prime, factors, series)",
    "No prior knowledge of Python required; starts from fundamental building blocks"
  ],
  teachingMethodology: "CONCEPT → SYNTAX → SIMPLE EXAMPLE → OUTPUT → INTERVIEW QUESTION → COMMON MISTAKE",
  duration: "30–40 Hours (Classroom / Bootcamp modular format)",
  courseObjectives: [
    "Understand Python fundamentals, dynamic typing, memory model, and execution cycle.",
    "Read, trace, and accurately predict the output of Python programs under time pressure.",
    "Identify, diagnose, and fix common syntax, runtime, and logical errors quickly.",
    "Master core data structures: Strings, Lists, Tuples, Sets, and Dictionaries with internal operations.",
    "Write structured, modular code using functions, parameters (*args, **kwargs), and lambda expressions.",
    "Apply Object-Oriented Programming (Class, Object, Constructor, Inheritance, Polymorphism) in interview problems.",
    "Confidently solve 50+ fresher placement coding problems with optimal Time & Space complexity.",
    "Score 80%+ in first-round assessment MCQs, output prediction rounds, and debugging tests."
  ],
  placementRelevance: [
    {
      focusArea: "Data Types & Operators",
      whyItMatters: "Direct MCQs on division (/ vs //), modulus, string multiplication, precedence, and identity vs equality (== vs is).",
      interviewWeight: "15% of Assessment MCQs"
    },
    {
      focusArea: "Strings & Slicing",
      whyItMatters: "Negative step slicing (s[::-1]), palindrome checks, immutability, anagrams, substring checks.",
      interviewWeight: "20% of Technical Screening"
    },
    {
      focusArea: "Lists, Sets & Dictionaries",
      whyItMatters: "List mutation, aliasing/shallow copy traps, dictionary frequency maps, set union/intersection for duplicate removal.",
      interviewWeight: "25% of Coding & MCQs"
    },
    {
      focusArea: "Loops, Conditions & Functions",
      whyItMatters: "range() edge cases, break/continue with else clause, default mutable arguments trap, recursion fundamentals.",
      interviewWeight: "25% of Coding Problems"
    },
    {
      focusArea: "OOP & Exception Handling",
      whyItMatters: "Self keyword, __init__ constructor, instance vs class variables, try-except-else-finally control flow.",
      interviewWeight: "15% of Technical F2F Round"
    }
  ]
};

export interface TopicMatrixItem {
  id: number;
  module: string;
  topicsCovered: string;
  mustKnowForFreshers: string;
  whatInterviewersTest: string;
  commonStudentMistakes: string;
  typicalInterviewQuestion: string;
  typicalCodingProblem: string;
}

export const topicMatrixData: TopicMatrixItem[] = [
  {
    id: 1,
    module: "1. Python Introduction & Basics",
    topicsCovered: "Interpreted nature, dynamic typing, memory references, print(sep, end), input() type casting",
    mustKnowForFreshers: "input() returns str; variables are references not memory boxes; indentation replaces braces",
    whatInterviewersTest: "Dynamic typing mechanism, memory reuse (-5 to 256 integer caching), interpreted vs compiled",
    commonStudentMistakes: "Forgetting int(input()), mixing tabs and spaces causing IndentationError",
    typicalInterviewQuestion: "Is Python an interpreted language? How does memory allocation work in Python?",
    typicalCodingProblem: "Take two comma-separated inputs from user, add them, and print formatted result"
  },
  {
    id: 2,
    module: "2. Data Types & Operators",
    topicsCovered: "int, float, bool, str, None; Arithmetic (//, %, **), Logical (short-circuit), is vs ==, in",
    mustKnowForFreshers: "/ always returns float; // floors result; is checks memory id(), == checks value equality",
    whatInterviewersTest: "Difference between `is` and `==`, short-circuiting in `and`/`or`, operator precedence",
    commonStudentMistakes: "Thinking a is b is True for two separately created identical lists; integer floor division with negative numbers",
    typicalInterviewQuestion: "What is the difference between `==` and `is` operator in Python? Give an example.",
    typicalCodingProblem: "Check if a given year is a Leap Year using logical operators without built-in libraries"
  },
  {
    id: 3,
    module: "3. Conditional Statements",
    topicsCovered: "if, elif, else, nested conditions, ternary conditional expression (x if cond else y)",
    mustKnowForFreshers: "Truthiness in Python: 0, '', [], {}, (), None, False are Falsy; all others are Truthy",
    whatInterviewersTest: "Ternary operator syntax, chaining comparisons (1 < x < 10), truthy/falsy evaluation",
    commonStudentMistakes: "Writing if x = 5 (assignment) instead of ==; missing colon : after condition",
    typicalInterviewQuestion: "What values evaluate to False in a Python if condition?",
    typicalCodingProblem: "Find maximum among three numbers using single-line nested ternary operator"
  },
  {
    id: 4,
    module: "4. Loops & Flow Control",
    topicsCovered: "for, while, range(start, stop, step), break, continue, pass, for-else loop",
    mustKnowForFreshers: "range(stop) excludes stop; else block executes only if loop finishes WITHOUT break",
    whatInterviewersTest: "How the `else` clause works with `for`/`while`, infinite while loop conditions, off-by-one errors",
    commonStudentMistakes: "Expecting else block to execute when loop terminated via break; modifying loop counter manually in for loop",
    typicalInterviewQuestion: "When does the `else` block of a `for` loop execute in Python?",
    typicalCodingProblem: "Check whether a number is Prime using loop with else break pattern"
  },
  {
    id: 5,
    module: "5. Strings & Manipulation",
    topicsCovered: "Indexing, negative index, slicing [start:stop:step], immutability, strip, split, join, format/f-strings",
    mustKnowForFreshers: "Strings are immutable; s[::-1] reverses a string; split() splits by whitespace by default",
    whatInterviewersTest: "String immutability, string reversal tricks, character counting, anagram detection",
    commonStudentMistakes: "Trying s[0] = 'X' (TypeError); forgetting split() returns a list; forgetting strip() for whitespace",
    typicalInterviewQuestion: "Can you modify a character in a Python string directly? Explain why strings are immutable.",
    typicalCodingProblem: "Check if two strings are Anagrams and Count Vowels/Consonants"
  },
  {
    id: 6,
    module: "6. Lists & Comprehensions",
    topicsCovered: "Creation, append vs extend vs insert, pop vs remove vs del, slicing, list aliasing (b = a), list comprehension",
    mustKnowForFreshers: "Lists are mutable; b = a creates an alias (both point to same memory); use a.copy() or a[:] for shallow copy",
    whatInterviewersTest: "List mutation via alias, append([1, 2]) vs extend([1, 2]), list comprehension syntax",
    commonStudentMistakes: "Writing a = a.append(x) (returns None!); mutating list while iterating over it",
    typicalInterviewQuestion: "What is the difference between append() and extend() in Python list?",
    typicalCodingProblem: "Find the Second Largest element in a list without sorting"
  },
  {
    id: 7,
    module: "7. Tuples, Sets & Dictionaries",
    topicsCovered: "Tuple immutability, single-element tuple (1,), Set uniqueness, set ops (&, |, -), Dict key-value pairs, get(), keys(), items()",
    mustKnowForFreshers: "Tuples cannot be modified; sets contain unique unindexed elements; dict keys must be immutable (hashable)",
    whatInterviewersTest: "Dictionary frequency counting, single element tuple syntax (x,), list vs set lookup time complexity (O(N) vs O(1))",
    commonStudentMistakes: "Writing x = (5) thinking it's a tuple (it's an int!); using a list as a dictionary key (Unhashable)",
    typicalInterviewQuestion: "Why can't a list be used as a dictionary key in Python?",
    typicalCodingProblem: "Count the frequency of each character or word using a dictionary"
  },
  {
    id: 8,
    module: "8. Functions & Scope",
    topicsCovered: "def, return, default arguments, *args (tuple), **kwargs (dict), local vs global scope, lambda expressions",
    mustKnowForFreshers: "Functions without return give None; default mutable argument trap (def fn(l=[])); lambda is anonymous one-liner",
    whatInterviewersTest: "Mutable default argument trap (evaluated once at definition), positional vs keyword arguments, lambda syntax",
    commonStudentMistakes: "Using def fn(items=[]); thinking local variable modifies global variable without `global` keyword",
    typicalInterviewQuestion: "Explain the mutable default argument trap in Python with an example.",
    typicalCodingProblem: "Write a function to calculate Fibonacci series using recursion and iteration"
  },
  {
    id: 9,
    module: "9. Exception Handling",
    topicsCovered: "try, except, else, finally, raise; ValueError, TypeError, ZeroDivisionError, IndexError, KeyError",
    mustKnowForFreshers: "finally ALWAYS executes (even after return statement); else executes only if NO exception occurred in try",
    whatInterviewersTest: "Order of execution: try -> except -> else -> finally; difference between syntax error and exception",
    commonStudentMistakes: "Catching bare `except:` without understanding; thinking finally won't run if return occurs inside try",
    typicalInterviewQuestion: "What is the role of `else` and `finally` blocks in Python exception handling?",
    typicalCodingProblem: "Safely divide two user inputs handling ZeroDivisionError and ValueError"
  },
  {
    id: 10,
    module: "10. Object-Oriented Programming (OOP)",
    topicsCovered: "Class, Object, __init__ (constructor), self parameter, Instance vs Class variables, Single Inheritance, super(), Polymorphism",
    mustKnowForFreshers: "self refers to the current instance; __init__ initializes attributes; class variables are shared across all instances",
    whatInterviewersTest: "Why self is required in methods, difference between instance variable and class variable, method overriding",
    commonStudentMistakes: "Forgetting `self` as the first parameter in method definition; modifying class variable via instance",
    typicalInterviewQuestion: "What is the purpose of `self` in Python? What does `__init__` do?",
    typicalCodingProblem: "Create a BankAccount class with deposit, withdraw, and check_balance methods"
  },
  {
    id: 11,
    module: "11. File Handling",
    topicsCovered: "open(filename, mode), modes ('r', 'w', 'a', 'r+'), read(), readline(), readlines(), write(), with open() context manager",
    mustKnowForFreshers: "with statement automatically closes file even if exception occurs; 'w' overwrites, 'a' appends",
    whatInterviewersTest: "Why `with open(...)` is preferred over manual close(); differences between read() and readlines()",
    commonStudentMistakes: "Forgetting to close() manual files; using 'w' and accidentally wiping file content",
    typicalInterviewQuestion: "Why should we use the `with` statement when handling files in Python?",
    typicalCodingProblem: "Count the number of lines, words, and characters in a text file"
  },
  {
    id: 12,
    module: "12. Placement Coding & Problem Solving",
    topicsCovered: "Two-pointer technique, frequency maps, prefix sums, palindrome/armstrong logic, pattern printing, time complexity O(1), O(N), O(N^2)",
    mustKnowForFreshers: "How to trace step-by-step; time complexity of in operator on list O(N) vs set O(1); edge case checks (empty, 0, 1)",
    whatInterviewersTest: "Can student solve problem without library shortcuts? Can student explain time & space complexity clearly?",
    commonStudentMistakes: "Using O(N^2) nested loops when O(N) single pass or hash map works; missing boundary conditions",
    typicalInterviewQuestion: "What is the time complexity of searching an element in a Python List vs Python Set?",
    typicalCodingProblem: "Find all pairs in an integer array whose sum equals a target value"
  }
];
