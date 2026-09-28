export interface RevisionSection {
  title: string;
  items: {
    label: string;
    detail: string;
    code?: string;
  }[];
}

export const revisionSheetData: RevisionSection[] = [
  {
    title: "1. Core Syntax & Fundamental Rules",
    items: [
      {
        label: "Dynamic Typing",
        detail: "No type declarations. Variables are object references. Reassigning changes binding.",
        code: "x = 10; x = 'Python'"
      },
      {
        label: "Input Typecasting",
        detail: "input() ALWAYS returns a string. Explicitly cast for arithmetic.",
        code: "n = int(input()); a, b = map(int, input().split())"
      },
      {
        label: "Division Rules",
        detail: "/ always returns float (4 / 2 -> 2.0). // floors towards negative infinity (-7 // 2 -> -4).",
        code: "print(7 / 2)   # 3.5\nprint(7 // 2)  # 3\nprint(-7 // 2) # -4"
      },
      {
        label: "Bankers Rounding",
        detail: "round() in Python 3 rounds half to nearest EVEN number.",
        code: "round(2.5) == 2, round(3.5) == 4"
      },
      {
        label: "Chained Comparisons",
        detail: "Native mathematical chaining supported.",
        code: "1 < x < 10  # Equivalent to (1 < x) and (x < 10)"
      }
    ]
  },
  {
    title: "2. Truthiness & Falsy Values",
    items: [
      {
        label: "Falsy in Python",
        detail: "None, False, 0, 0.0, 0j, '' (empty str), [] (empty list), () (empty tuple), {} (empty dict), set().",
        code: "if not my_list: print('List is empty')"
      },
      {
        label: "Truthy Gotchas",
        detail: "Any non-empty string is Truthy, including 'False' and '0'!",
        code: "bool('False') == True\nbool([0]) == True"
      },
      {
        label: "Short-Circuit Operands",
        detail: "or returns first truthy operand; and returns first falsy operand.",
        code: "user = input_name or 'Anonymous'\nx = [] and 10  # Returns []"
      }
    ]
  },
  {
    title: "3. Collection Comparison Matrix",
    items: [
      {
        label: "List []",
        detail: "Ordered, MUTABLE, allows duplicates, O(N) linear search, dynamic array.",
        code: "l = [1, 2, 3]; l.append(4); l.pop()"
      },
      {
        label: "Tuple ()",
        detail: "Ordered, IMMUTABLE, allows duplicates, O(N) search, hashable (valid dict key). Single item needs comma: (1,).",
        code: "t = (1, 2, 3); single = (5,)"
      },
      {
        label: "Set {}",
        detail: "Unordered, MUTABLE, UNIQUE elements only, O(1) hash lookup, empty set is set() not {}.",
        code: "s = {1, 2, 3}; s.add(4); s.remove(2)"
      },
      {
        label: "Dict {k: v}",
        detail: "Key-Value pairs, keys MUST be immutable/hashable, O(1) average lookup/insert, preserves insertion order.",
        code: "d = {'a': 1}; d.get('k', 0)"
      }
    ]
  },
  {
    title: "4. Strings & Slicing Essentials",
    items: [
      {
        label: "Immutability",
        detail: "Individual characters cannot be assigned. s[0] = 'X' raises TypeError.",
        code: "# TypeError: 'str' object does not support item assignment"
      },
      {
        label: "Reverse Slicing",
        detail: "s[::-1] reverses a sequence in C-speed.",
        code: "reversed_str = s[::-1]"
      },
      {
        label: "Split and Join",
        detail: "split() breaks by whitespace into list; join() merges list of strings with separator.",
        code: "words = s.split()\nsentence = ' '.join(words)"
      },
      {
        label: "find() vs index()",
        detail: "find() returns -1 if missing; index() raises ValueError.",
        code: "idx = s.find('sub')  # Safe from crash"
      }
    ]
  },
  {
    title: "5. List Methods & Aliasing Warning",
    items: [
      {
        label: "Aliasing Trap",
        detail: "b = a does NOT copy. Both point to the same memory! Use a.copy() or a[:].",
        code: "b = a.copy()  # Safe shallow copy"
      },
      {
        label: "append() vs extend()",
        detail: "append(x) adds x as 1 item. extend(iterable) unpacks and appends each element.",
        code: "[1].append([2, 3]) -> [1, [2, 3]]\n[1].extend([2, 3]) -> [1, 2, 3]"
      },
      {
        label: "sort() vs sorted()",
        detail: "list.sort() modifies in-place and returns None! sorted(iter) returns a new sorted list.",
        code: "nums.sort()  # Correct\nx = nums.sort() # WRONG! x becomes None"
      },
      {
        label: "List Comprehension",
        detail: "Concise mapping and filtering syntax.",
        code: "evens = [x for x in nums if x % 2 == 0]"
      }
    ]
  },
  {
    title: "6. Functions, Arguments & Scope",
    items: [
      {
        label: "Default Mutable Trap",
        detail: "Never use def fn(l=[]). Use l=None instead.",
        code: "def fn(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)"
      },
      {
        label: "*args & **kwargs",
        detail: "*args collects positional args into a TUPLE. **kwargs collects keyword args into a DICT.",
        code: "def log(*args, **kwargs): pass"
      },
      {
        label: "LEGB Scope Order",
        detail: "Local -> Enclosing -> Global -> Built-in. Use global keyword to modify outer variables.",
        code: "global count; count += 1"
      },
      {
        label: "Lambda",
        detail: "Anonymous single-line function with implicit return.",
        code: "square = lambda x: x * x"
      }
    ]
  },
  {
    title: "7. Exception Handling & OOP",
    items: [
      {
        label: "try-except-else-finally",
        detail: "else runs only if NO error in try. finally ALWAYS runs (even overrides try's return value).",
        code: "try: ... except ZeroDivisionError: ... else: ... finally: ..."
      },
      {
        label: "Constructor & self",
        detail: "__init__ initializes instance variables. self is the instance reference (PEP 8 convention).",
        code: "class Dog:\n    def __init__(self, name):\n        self.name = name"
      },
      {
        label: "Inheritance & super()",
        detail: "Calls parent methods to prevent redundant code.",
        code: "class Child(Parent):\n    def __init__(self):\n        super().__init__()"
      },
      {
        label: "Encapsulation / Private",
        detail: "__var invokes Name Mangling to _ClassName__var.",
        code: "self.__secret = 42"
      }
    ]
  },
  {
    title: "8. Placement Coding Pattern Cheatsheet",
    items: [
      {
        label: "Two Pointers",
        detail: "Use for sorted arrays, palindrome checking, reversing in-place.",
        code: "while left < right: ... left += 1; right -= 1"
      },
      {
        label: "Frequency Hash Map",
        detail: "Count elements in O(N) using d[x] = d.get(x, 0) + 1.",
        code: "freq = {}\nfor x in arr: freq[x] = freq.get(x, 0) + 1"
      },
      {
        label: "Digit Modulo",
        detail: "Extract digits with n % 10; shrink with n // 10.",
        code: "while n > 0:\n    digit = n % 10\n    n //= 10"
      },
      {
        label: "Kadane's Algorithm",
        detail: "Maximum contiguous subarray sum in O(N).",
        code: "curr = max_so_far = nums[0]\nfor x in nums[1:]:\n    curr = max(x, curr + x)\n    max_so_far = max(max_so_far, curr)"
      }
    ]
  }
];
