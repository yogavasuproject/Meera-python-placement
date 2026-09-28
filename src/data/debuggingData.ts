export interface DebuggingItem {
  id: number;
  title: string;
  errorType: 'SyntaxError' | 'IndentationError' | 'NameError' | 'TypeError' | 'ValueError' | 'IndexError' | 'KeyError' | 'Logic Error';
  description: string;
  buggyCode: string;
  correctedCode: string;
  explanation: string;
}

export const debuggingData: DebuggingItem[] = [
  {
    id: 1,
    title: "Missing Typecast on input()",
    errorType: "TypeError",
    description: "The program intends to add two numbers entered by the user, but instead concatenates them as strings.",
    buggyCode: `num1 = input("Enter first number: ")
num2 = input("Enter second number: ")
total = num1 + num2
print("Sum is:", total)`,
    correctedCode: `num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
total = num1 + num2
print("Sum is:", total)`,
    explanation: "`input()` returns a string `str`. If user enters '5' and '10', `'5' + '10'` results in `'510'`. Typecasting to `int()` ensures arithmetic addition."
  },
  {
    id: 2,
    title: "Off-by-one in range() for 1 to N",
    errorType: "Logic Error",
    description: "The program should print numbers from 1 to N inclusive, but stops at N - 1.",
    buggyCode: `n = 5
for i in range(1, n):
    print(i, end=" ")`,
    correctedCode: `n = 5
for i in range(1, n + 1):
    print(i, end=" ")`,
    explanation: "`range(start, stop)` stops at `stop - 1`. To include `n`, the upper bound must be `n + 1`."
  },
  {
    id: 3,
    title: "String Mutation Attempt",
    errorType: "TypeError",
    description: "The program attempts to capitalize the first letter of a string in-place.",
    buggyCode: `s = "python"
s[0] = "P"
print(s)`,
    correctedCode: `s = "python"
s = "P" + s[1:]
print(s)`,
    explanation: "Strings are immutable in Python; item assignment `s[0] = ...` raises `TypeError`. Slicing and concatenation must be used to create a new string."
  },
  {
    id: 4,
    title: "Assigning Result of list.sort()",
    errorType: "Logic Error",
    description: "The developer wants to sort a list, but the list ends up becoming `None`.",
    buggyCode: `scores = [88, 92, 79, 95]
scores = scores.sort()
print("Top score:", scores[-1])`,
    correctedCode: `scores = [88, 92, 79, 95]
scores.sort()  # In-place, or use sorted(scores)
print("Top score:", scores[-1])`,
    explanation: "`list.sort()` sorts the list in-place and returns `None`. Reassigning `scores = scores.sort()` overwrites `scores` with `None`, causing `TypeError: 'NoneType' object is not subscriptable`."
  },
  {
    id: 5,
    title: "Missing colon after control statement",
    errorType: "SyntaxError",
    description: "The program fails to execute due to invalid syntax in an if statement.",
    buggyCode: `age = 19
if age >= 18
    print("Eligible to vote")`,
    correctedCode: `age = 19
if age >= 18:
    print("Eligible to vote")`,
    explanation: "In Python, `if`, `elif`, `else`, `for`, `while`, `def`, and `class` statements must end with a colon `:`."
  },
  {
    id: 6,
    title: "Mixed Tabs and Spaces",
    errorType: "IndentationError",
    description: "The code looks visually aligned but crashes with an indentation error.",
    buggyCode: `def greet():
\tprint("Hello")
    print("World")`,
    correctedCode: `def greet():
    print("Hello")
    print("World")`,
    explanation: "Mixing physical tab characters `\\t` and spaces within the same block raises `IndentationError: unindent does not match any outer indentation level`. Standardize on 4 spaces."
  },
  {
    id: 7,
    title: "Accessing Non-Existent Dictionary Key",
    errorType: "KeyError",
    description: "The program crashes when checking employee bonus.",
    buggyCode: `emp = {"name": "Suresh", "dept": "QA"}
print("Bonus:", emp["bonus"])`,
    correctedCode: `emp = {"name": "Suresh", "dept": "QA"}
print("Bonus:", emp.get("bonus", 0))`,
    explanation: "Direct subscript access `emp['bonus']` raises a `KeyError` if the key is not present. Using `emp.get('bonus', 0)` safely returns the default value `0`."
  },
  {
    id: 8,
    title: "List Index Out of Range",
    errorType: "IndexError",
    description: "The loop tries to access `items[len(items)]`.",
    buggyCode: `items = [10, 20, 30]
for i in range(len(items) + 1):
    print(items[i])`,
    correctedCode: `items = [10, 20, 30]
for i in range(len(items)):
    print(items[i])`,
    explanation: "For a list of length 3, valid indices are 0, 1, and 2. `range(len(items) + 1)` reaches index 3, raising `IndexError: list index out of range`. Alternatively, iterate directly: `for item in items:`."
  },
  {
    id: 9,
    title: "UnboundLocalError in Variable Scope",
    errorType: "NameError",
    description: "The function reads a global counter before incrementing it, but triggers an error.",
    buggyCode: `counter = 0

def increment():
    counter += 1
    return counter

print(increment())`,
    correctedCode: `counter = 0

def increment():
    global counter
    counter += 1
    return counter

print(increment())`,
    explanation: "Assigning to `counter` inside `increment()` marks it as local. Trying to read it before assignment causes `UnboundLocalError: local variable 'counter' referenced before assignment`. Declare `global counter`."
  },
  {
    id: 10,
    title: "Missing self in Class Method Definition",
    errorType: "TypeError",
    description: "Calling an instance method fails with argument count mismatch.",
    buggyCode: `class Student:
    def display():
        print("Student record")

s = Student()
s.display()`,
    correctedCode: `class Student:
    def display(self):
        print("Student record")

s = Student()
s.display()`,
    explanation: "When an instance method is called as `s.display()`, Python passes the instance `s` as the first argument automatically. The method definition must accept `self`."
  },
  {
    id: 11,
    title: "Single Element Tuple Missing Comma",
    errorType: "TypeError",
    description: "The program expects a tuple of coordinates, but crashes when unpacking.",
    buggyCode: `point = (42)
print("Type is:", type(point))
x, = point`,
    correctedCode: `point = (42,)
print("Type is:", type(point))
x, = point`,
    explanation: "`point = (42)` is an `int`. Attempting to unpack an `int` raises `TypeError: cannot unpack non-iterable int object`. Adding a comma `(42,)` creates a tuple."
  },
  {
    id: 12,
    title: "Equality Check in if Condition using Assignment",
    errorType: "SyntaxError",
    description: "The programmer tries to test if a status is 'ACTIVE'.",
    buggyCode: `status = "PENDING"
if status = "ACTIVE":
    print("Proceed")`,
    correctedCode: `status = "PENDING"
if status == "ACTIVE":
    print("Proceed")`,
    explanation: "Single `=` is an assignment statement, which is invalid syntax inside an `if` condition in Python. Use `==` for comparison."
  },
  {
    id: 13,
    title: "Division by Zero in Average Calculation",
    errorType: "Logic Error",
    description: "The program crashes when given an empty list of scores.",
    buggyCode: `def get_average(scores):
    return sum(scores) / len(scores)

print(get_average([]))`,
    correctedCode: `def get_average(scores):
    if not scores:
        return 0.0
    return sum(scores) / len(scores)

print(get_average([]))`,
    explanation: "If `scores` is empty, `len(scores)` is 0, raising `ZeroDivisionError: division by zero`. A guard clause checking `if not scores:` protects against the crash."
  },
  {
    id: 14,
    title: "Dangerous Mutable Default Parameter",
    errorType: "Logic Error",
    description: "Function appends items across separate user sessions unintentionally.",
    buggyCode: `def create_cart(item, cart=[]):
    cart.append(item)
    return cart

user1 = create_cart("Book")
user2 = create_cart("Pen")
print("User 2 cart:", user2)`,
    correctedCode: `def create_cart(item, cart=None):
    if cart is None:
        cart = []
    cart.append(item)
    return cart

user1 = create_cart("Book")
user2 = create_cart("Pen")
print("User 2 cart:", user2)`,
    explanation: "Default arguments are instantiated once at function definition. Reusing the list mixes user carts: User 2 gets `['Book', 'Pen']`. Use `cart=None` to ensure a fresh list each call."
  },
  {
    id: 15,
    title: "List as Dictionary Key",
    errorType: "TypeError",
    description: "The program tries to cache coordinates in a dictionary using a list.",
    buggyCode: `cache = {}
coord = [12, 77]
cache[coord] = "Bangalore"`,
    correctedCode: `cache = {}
coord = (12, 77)  # Use immutable tuple
cache[coord] = "Bangalore"`,
    explanation: "Dictionary keys must be hashable. Lists are mutable and unhashable, raising `TypeError: unhashable type: 'list'`. Tuples are immutable and hashable."
  },
  {
    id: 16,
    title: "Modifying List While Iterating",
    errorType: "Logic Error",
    description: "Attempting to remove all odd numbers from a list skips elements.",
    buggyCode: `nums = [1, 3, 4, 6, 7]
for n in nums:
    if n % 2 != 0:
        nums.remove(n)
print(nums)`,
    correctedCode: `nums = [1, 3, 4, 6, 7]
nums = [n for n in nums if n % 2 == 0]
print(nums)`,
    explanation: "Removing elements from a list while iterating over it changes indices dynamically, causing the loop to skip the next item (e.g. 3 is skipped). Use a list comprehension or iterate over a copy `nums[:]`."
  },
  {
    id: 17,
    title: "Missing File Close / Not Using with",
    errorType: "Logic Error",
    description: "File contents written to disk are empty because buffer was not flushed or closed.",
    buggyCode: `f = open("log.txt", "w")
f.write("System OK")
# Program terminates abruptly or forgets f.close()`,
    correctedCode: `with open("log.txt", "w") as f:
    f.write("System OK")`,
    explanation: "Without `close()`, data may remain unwritten in OS memory buffers. The `with` statement ensures the file buffer is flushed and closed properly."
  },
  {
    id: 18,
    title: "Wrong Logical Grouping in Multiple Comparisons",
    errorType: "Logic Error",
    description: "Condition always evaluates to True regardless of the variable value.",
    buggyCode: `role = "guest"
if role == "admin" or "manager":
    print("Access Granted")`,
    correctedCode: `role = "guest"
if role in ("admin", "manager"):
    print("Access Granted")`,
    explanation: "`role == 'admin' or 'manager'` is grouped as `(role == 'admin') or ('manager')`. Because `'manager'` is a non-empty string, it is always truthy, granting access to everyone."
  },
  {
    id: 19,
    title: "Unconverted Elements in str.join()",
    errorType: "TypeError",
    description: "Trying to join a list of integers with commas crashes.",
    buggyCode: `nums = [1, 2, 3, 4]
csv = ",".join(nums)
print(csv)`,
    correctedCode: `nums = [1, 2, 3, 4]
csv = ",".join(map(str, nums))
print(csv)`,
    explanation: "`str.join()` requires all items in the iterable to be strings. Passing integers raises `TypeError: sequence item 0: expected str instance, int found`. Use `map(str, nums)` to convert."
  },
  {
    id: 20,
    title: "Indentation After Exception Handler",
    errorType: "SyntaxError",
    description: "Empty `except` block left without statements causes parse failure.",
    buggyCode: `try:
    val = int("abc")
except ValueError:
    # Intentionally doing nothing
print("Finished")`,
    correctedCode: `try:
    val = int("abc")
except ValueError:
    pass  # Placeholder to satisfy syntax
print("Finished")`,
    explanation: "Python requires at least one indented statement inside an `except` block. Leaving it empty or with only comments raises `IndentationError: expected an indented block`. Use `pass`."
  }
];
