export interface OutputPredictionItem {
  id: number;
  difficulty: 'Easy' | 'Medium' | 'Difficult';
  topic: string;
  code: string;
  correctOutput: string;
  explanation: string;
}

export const outputPredictionData: OutputPredictionItem[] = [
  // EASY: 1 to 10
  {
    id: 1,
    difficulty: "Easy",
    topic: "Variables & Output",
    code: `a = 10
b = 20
a, b = b, a + b
print(a, b)`,
    correctOutput: "20 30",
    explanation: "Right-hand side expressions are evaluated first using the current values of `a` (10) and `b` (20), giving `(20, 30)`. Then tuple unpacking assigns `a = 20` and `b = 30`."
  },
  {
    id: 2,
    difficulty: "Easy",
    topic: "Operators & Strings",
    code: `x = "5"
y = 2
print(x * y + str(y))`,
    correctOutput: "552",
    explanation: "`'5' * 2` repeats the string twice resulting in `'55'`. `str(y)` is `'2'`. String concatenation `'55' + '2'` produces `'552'`."
  },
  {
    id: 3,
    difficulty: "Easy",
    topic: "Conditions & Truthiness",
    code: `items = []
if items:
    print("Full")
else:
    print("Empty")`,
    correctOutput: "Empty",
    explanation: "In Python, an empty list `[]` evaluates to `False` in a boolean context. Therefore, the `else` branch executes."
  },
  {
    id: 4,
    difficulty: "Easy",
    topic: "Loops & range()",
    code: `for i in range(1, 10, 3):
    print(i, end=" ")`,
    correctOutput: "1 4 7 ",
    explanation: "`range(1, 10, 3)` starts at 1 and steps by 3: 1, 4, 7. The next value 10 equals the stop value and is excluded."
  },
  {
    id: 5,
    difficulty: "Easy",
    topic: "String Slicing",
    code: `s = "PLACEMENT"
print(s[2:7:2])`,
    correctOutput: "AEM",
    explanation: "Indices from 2 up to 6 with step 2: index 2 is 'A', index 4 is 'E', index 6 is 'M'. Result is 'AEM'."
  },
  {
    id: 6,
    difficulty: "Easy",
    topic: "Lists & append()",
    code: `nums = [1, 2]
nums.append([3, 4])
print(len(nums))`,
    correctOutput: "3",
    explanation: "`append()` adds its argument as a single element. The list becomes `[1, 2, [3, 4]]`, which has 3 elements."
  },
  {
    id: 7,
    difficulty: "Easy",
    topic: "Dictionaries",
    code: `d = {"a": 10, "b": 20}
print(d.get("c", 99))`,
    correctOutput: "99",
    explanation: "`d.get('c', 99)` looks for key `'c'`. Since it is not found, the default value `99` is returned."
  },
  {
    id: 8,
    difficulty: "Easy",
    topic: "Tuples",
    code: `t = (1, 2, 3)
a, b, c = t
print(b)`,
    correctOutput: "2",
    explanation: "Tuple unpacking assigns `a = 1`, `b = 2`, `c = 3`. Printing `b` outputs 2."
  },
  {
    id: 9,
    difficulty: "Easy",
    topic: "Sets",
    code: `s = {10, 20, 10, 30, 20}
print(sorted(s))`,
    correctOutput: "[10, 20, 30]",
    explanation: "Sets automatically deduplicate elements, leaving `{10, 20, 30}`. `sorted()` returns a sorted list: `[10, 20, 30]`."
  },
  {
    id: 10,
    difficulty: "Easy",
    topic: "Operators & Floor Division",
    code: `print(11 // 4, 11 % 4)`,
    correctOutput: "2 3",
    explanation: "`11 // 4` performs integer floor division giving 2. `11 % 4` calculates remainder `11 - (4 * 2) = 3`."
  },

  // MEDIUM: 11 to 25
  {
    id: 11,
    difficulty: "Medium",
    topic: "Negative Floor Division",
    code: `print(-15 // 4)`,
    correctOutput: "-4",
    explanation: "`-15 / 4 = -3.75`. Python rounds down towards negative infinity, so floor of -3.75 is -4."
  },
  {
    id: 12,
    difficulty: "Medium",
    topic: "List Aliasing",
    code: `a = [10, 20]
b = a
b += [30]
print(a)`,
    correctOutput: "[10, 20, 30]",
    explanation: "For lists, `+=` calls `extend()` in-place. Because `b` and `a` refer to the same list object, modifying `b` mutates `a`."
  },
  {
    id: 13,
    difficulty: "Medium",
    topic: "for-else Construct",
    code: `for x in [1, 3, 5]:
    if x % 2 == 0:
        print("Even found")
        break
else:
    print("All odd")`,
    correctOutput: "All odd",
    explanation: "The loop checks 1, 3, 5. None are even, so `break` is never hit. The `else` clause executes and prints 'All odd'."
  },
  {
    id: 14,
    difficulty: "Medium",
    topic: "Short-Circuit Logic",
    code: `x = 0
y = "Campus"
print(x or y, x and y)`,
    correctOutput: "Campus 0",
    explanation: "`x or y`: 0 is falsy, so it evaluates and returns `y` ('Campus'). `x and y`: 0 is falsy, so short-circuit returns `x` (0)."
  },
  {
    id: 15,
    difficulty: "Medium",
    topic: "List Comprehension with Filtering",
    code: `nums = [1, 2, 3, 4, 5]
res = [x * x for x in nums if x % 2 != 0]
print(res)`,
    correctOutput: "[1, 9, 25]",
    explanation: "Selects odd numbers: 1, 3, 5. Squares them: 1*1=1, 3*3=9, 5*5=25."
  },
  {
    id: 16,
    difficulty: "Medium",
    topic: "Mutable Default Argument Trap",
    code: `def f(val, lst=[]):
    lst.append(val)
    return len(lst)

print(f(1), f(2), f(3))`,
    correctOutput: "1 2 3",
    explanation: "The default list `lst` is created once at definition and shared across calls. Consecutive calls append to the same list, so lengths are 1, 2, and 3."
  },
  {
    id: 17,
    difficulty: "Medium",
    topic: "String split and join",
    code: `line = "py  is   fast"
words = line.split()
print("-".join(words))`,
    correctOutput: "py-is-fast",
    explanation: "`split()` without arguments splits by consecutive whitespace, discarding extra spaces. `'-'.join(['py', 'is', 'fast'])` gives 'py-is-fast'."
  },
  {
    id: 18,
    difficulty: "Medium",
    topic: "finally Return Override",
    code: `def func():
    try:
        return 10
    finally:
        return 20

print(func())`,
    correctOutput: "20",
    explanation: "The `finally` block executes before the function exits and its return statement overrides the return value from `try`."
  },
  {
    id: 19,
    difficulty: "Medium",
    topic: "OOP Class vs Instance Variable",
    code: `class Counter:
    val = 0

c1 = Counter()
c2 = Counter()
c1.val = 5
Counter.val = 10
print(c1.val, c2.val)`,
    correctOutput: "5 10",
    explanation: "`c1.val = 5` sets an instance attribute on `c1`. `c2` doesn't have an instance attribute, so it looks up the class variable `Counter.val`, which is 10."
  },
  {
    id: 20,
    difficulty: "Medium",
    topic: "Chained Comparisons",
    code: `print(5 > 3 == 3)`,
    correctOutput: "True",
    explanation: "Chained comparison evaluates `(5 > 3) and (3 == 3)`. Both conditions are True, so the entire expression evaluates to True."
  },
  {
    id: 21,
    difficulty: "Medium",
    topic: "Dictionary Keys Hash Equality",
    code: `d = {}
d[1] = "Apple"
d[1.0] = "Orange"
print(d[1], len(d))`,
    correctOutput: "Orange 1",
    explanation: "In Python, `1 == 1.0` and `hash(1) == hash(1.0)`. Python treats `1` and `1.0` as the exact same dictionary key, overwriting 'Apple' with 'Orange'."
  },
  {
    id: 22,
    difficulty: "Medium",
    topic: "Recursion Base Case",
    code: `def count_down(n):
    if n <= 0:
        return 0
    return n + count_down(n - 2)

print(count_down(5))`,
    correctOutput: "9",
    explanation: "`count_down(5) = 5 + count_down(3) = 5 + 3 + count_down(1) = 5 + 3 + 1 + count_down(-1) = 5 + 3 + 1 + 0 = 9`."
  },
  {
    id: 23,
    difficulty: "Medium",
    topic: "List remove() First Match",
    code: `lst = [1, 2, 3, 2, 1]
lst.remove(2)
print(lst)`,
    correctOutput: "[1, 3, 2, 1]",
    explanation: "`remove(x)` removes ONLY the first occurrence of `x` from left to right. The first `2` at index 1 is removed; the second `2` remains."
  },
  {
    id: 24,
    difficulty: "Medium",
    topic: "String find vs index",
    code: `s = "Placement"
print(s.find("z"))`,
    correctOutput: "-1",
    explanation: "`str.find()` returns `-1` when the substring is not found (unlike `index()`, which would raise a `ValueError`)."
  },
  {
    id: 25,
    difficulty: "Medium",
    topic: "Scope & LEGB",
    code: `x = 50
def test():
    global x
    x = 100

test()
print(x)`,
    correctOutput: "100",
    explanation: "The `global x` statement binds the assignment inside `test()` to the module-level variable `x`, updating it from 50 to 100."
  },

  // DIFFICULT: 26 to 30
  {
    id: 26,
    difficulty: "Difficult",
    topic: "Multiplication of Nested Lists",
    code: `grid = [[0] * 3] * 3
grid[0][0] = 7
print(grid[1][0], grid[2][0])`,
    correctOutput: "7 7",
    explanation: "`[[0] * 3] * 3` creates a list of 3 references to the EXACT SAME list object in memory. Mutating `grid[0][0]` changes index 0 for all rows, so row 1 and row 2 also show 7."
  },
  {
    id: 27,
    difficulty: "Difficult",
    topic: "Tuple containing Mutable List with +=",
    code: `t = (10, [20, 30])
try:
    t[1] += [40]
except TypeError:
    print("Error Caught")
print(t)`,
    correctOutput: "Error Caught\\n(10, [20, 30, 40])",
    explanation: "The `+=` operator executes `t[1].extend([40])` in-place, which succeeds. Then it attempts to assign the modified list back to `t[1]`, which raises a `TypeError` because tuples are immutable. After catching the exception, `t` contains the mutated list `(10, [20, 30, 40])`."
  },
  {
    id: 28,
    difficulty: "Difficult",
    topic: "Late Binding in Lambdas",
    code: `multipliers = [lambda x: x * i for i in range(3)]
print([m(2) for m in multipliers])`,
    correctOutput: "[4, 4, 4]",
    explanation: "Due to Python's late binding of closures, the variable `i` is looked up when the lambda is called, not when defined. When the loop ends, `i` is 2. Every lambda calculates `x * 2 = 2 * 2 = 4`."
  },
  {
    id: 29,
    difficulty: "Difficult",
    topic: "Boolean Inheritance & Arithmetic",
    code: `values = [True, 1, 1.0, 2]
print(sum(isinstance(v, int) for v in values))`,
    correctOutput: "3",
    explanation: "`bool` inherits from `int`, so `isinstance(True, int)` is True. `1` and `2` are ints (True). In Python, `isinstance(1.0, int)` is False, so `values` has `[True, 1, 1.0, 2]`. `isinstance(True, int)` is True (1), `isinstance(1, int)` is True (1), `isinstance(1.0, int)` is False (0), `isinstance(2, int)` is True (1). Sum is 1 + 1 + 0 + 1 = 3."
  },
  {
    id: 30,
    difficulty: "Difficult",
    topic: "Dictionary Comprehension & Case Collisions",
    code: `words = ["cat", "CAT", "dog"]
d = {w.lower(): len(w) for w in words}
print(d)`,
    correctOutput: "{'cat': 3, 'dog': 3}",
    explanation: "'cat'.lower() and 'CAT'.lower() both equal 'cat'. The dictionary comprehension overwrites the key 'cat' with the second occurrence. Result is `{'cat': 3, 'dog': 3}`."
  }
];
