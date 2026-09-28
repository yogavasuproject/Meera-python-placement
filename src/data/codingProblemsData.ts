export interface CodingProblem {
  id: number;
  level: 1 | 2 | 3;
  difficultyLabel: 'Level 1: Very Basic' | 'Level 2: Basic' | 'Level 3: Basic/Intermediate';
  title: string;
  category: string;
  problemStatement: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  exampleInput: string;
  exampleOutput: string;
  expectedApproach: string;
  pythonSolution: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
  commonMistake: string;
}

export const codingProblemsData: CodingProblem[] = [
  // LEVEL 1: Very Basic (15 Questions: 1 to 15)
  {
    id: 1,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Check Even or Odd",
    category: "Arithmetic & Conditions",
    problemStatement: "Given an integer N, determine whether the number is Even or Odd.",
    inputFormat: "A single integer N.",
    outputFormat: "Print 'Even' if N is even, otherwise print 'Odd'.",
    constraints: "-10^9 <= N <= 10^9",
    exampleInput: "42",
    exampleOutput: "Even",
    expectedApproach: "Use modulo arithmetic (`N % 2 == 0`) or bitwise AND (`(N & 1) == 0`).",
    pythonSolution: `def check_even_odd(n: int) -> str:
    return "Even" if n % 2 == 0 else "Odd"

# Example run
n = 42
print(check_even_odd(n))`,
    explanation: "Any integer divisible by 2 with remainder 0 is even. Works correctly for negative even integers as well.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    commonMistake: "Assuming negative numbers return negative remainders in Python. In Python `-3 % 2` is `1`, but `-4 % 2` is `0`."
  },
  {
    id: 2,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Maximum of Three Numbers",
    category: "Conditions",
    problemStatement: "Given three integers A, B, and C, find and print the maximum among them without using the built-in max() function.",
    inputFormat: "Three space-separated integers A, B, and C.",
    outputFormat: "Print the maximum integer value.",
    constraints: "-10^6 <= A, B, C <= 10^6",
    exampleInput: "12 45 32",
    exampleOutput: "45",
    expectedApproach: "Compare A with B and C using sequential if-elif-else statements.",
    pythonSolution: `def find_max_of_three(a: int, b: int, c: int) -> int:
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

print(find_max_of_three(12, 45, 32))`,
    explanation: "Tests all combinations using `>=` to handle cases where two or three numbers are equal.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    commonMistake: "Using strict `>` which fails when two numbers are equal."
  },
  {
    id: 3,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Check Positive, Negative, or Zero",
    category: "Conditions",
    problemStatement: "Given an integer N, print 'Positive', 'Negative', or 'Zero' depending on its sign.",
    inputFormat: "A single integer N.",
    outputFormat: "Print 'Positive', 'Negative', or 'Zero'.",
    constraints: "-10^9 <= N <= 10^9",
    exampleInput: "-15",
    exampleOutput: "Negative",
    expectedApproach: "Use standard if-elif-else condition checking `N > 0`, `N < 0`, and `N == 0`.",
    pythonSolution: `def check_sign(n: int) -> str:
    if n > 0:
        return "Positive"
    elif n < 0:
        return "Negative"
    else:
        return "Zero"

print(check_sign(-15))`,
    explanation: "Evaluates the three mutually exclusive states of an integer.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    commonMistake: "Missing the `n == 0` branch, causing 0 to be categorized incorrectly."
  },
  {
    id: 4,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Multiplication Table",
    category: "Loops",
    problemStatement: "Given an integer N, print its multiplication table from 1 to 10 in the format: 'N x i = Result'.",
    inputFormat: "A single integer N.",
    outputFormat: "10 lines formatted as specified.",
    constraints: "1 <= N <= 100",
    exampleInput: "5",
    exampleOutput: "5 x 1 = 5\\n...\\n5 x 10 = 50",
    expectedApproach: "Iterate a for loop with `range(1, 11)` and print formatted strings.",
    pythonSolution: `def print_table(n: int):
    for i in range(1, 11):
        print(f"{n} x {i} = {n * i}")

print_table(5)`,
    explanation: "Uses `range(1, 11)` to include 10 and f-string formatting for clean presentation.",
    timeComplexity: "O(1) (fixed 10 steps)",
    spaceComplexity: "O(1)",
    commonMistake: "Writing `range(1, 10)`, which stops at 9."
  },
  {
    id: 5,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Sum of First N Natural Numbers",
    category: "Math & Loops",
    problemStatement: "Given a positive integer N, compute the sum of all integers from 1 up to N.",
    inputFormat: "A single integer N.",
    outputFormat: "Print the total sum.",
    constraints: "1 <= N <= 10^6",
    exampleInput: "10",
    exampleOutput: "55",
    expectedApproach: "Use the mathematical formula `N * (N + 1) // 2` for O(1) time.",
    pythonSolution: `def sum_natural(n: int) -> int:
    return n * (n + 1) // 2

print(sum_natural(10))`,
    explanation: "Mathematical formula `N*(N+1)//2` computes the result directly in constant time without looping.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    commonMistake: "Using float division `/` instead of integer floor division `//`, yielding a float like `55.0`."
  },
  {
    id: 6,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Factorial of a Number",
    category: "Loops & Math",
    problemStatement: "Given a non-negative integer N, calculate its factorial (N!). Note: 0! = 1.",
    inputFormat: "A single integer N.",
    outputFormat: "Print N!.",
    constraints: "0 <= N <= 20",
    exampleInput: "5",
    exampleOutput: "120",
    expectedApproach: "Iterate from 1 to N multiplying into an accumulator initialized to 1.",
    pythonSolution: `def factorial(n: int) -> int:
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

print(factorial(5))`,
    explanation: "Handles N = 0 gracefully (loop doesn't run, returns 1). Multiplies 1 * 2 * 3 * 4 * 5 = 120.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Initializing `result = 0` which results in 0."
  },
  {
    id: 7,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Count Digits in an Integer",
    category: "Math & While Loop",
    problemStatement: "Given an integer N, count and print the total number of digits.",
    inputFormat: "A single integer N.",
    outputFormat: "Print the count of digits.",
    constraints: "-10^12 <= N <= 10^12",
    exampleInput: "12345",
    exampleOutput: "5",
    expectedApproach: "Handle 0 as special case, take absolute value, and divide by 10 in a while loop (or `len(str(abs(n)))`).",
    pythonSolution: `def count_digits(n: int) -> int:
    n = abs(n)
    if n == 0:
        return 1
    count = 0
    while n > 0:
        count += 1
        n //= 10
    return count

print(count_digits(12345))`,
    explanation: "Each iteration divides `n` by 10 and increments `count` until `n` becomes 0. Handles 0 correctly.",
    timeComplexity: "O(log10 N)",
    spaceComplexity: "O(1)",
    commonMistake: "Forgetting `n = 0` (a while loop `n > 0` returns 0 for input 0)."
  },
  {
    id: 8,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Sum of Digits of a Number",
    category: "Math & While Loop",
    problemStatement: "Given an integer N, calculate the sum of its digits.",
    inputFormat: "A single integer N.",
    outputFormat: "Print the sum of digits.",
    constraints: "-10^9 <= N <= 10^9",
    exampleInput: "456",
    exampleOutput: "15",
    expectedApproach: "Repeatedly extract last digit with `% 10` and add to total, then shrink `n` with `// 10`.",
    pythonSolution: `def sum_of_digits(n: int) -> int:
    n = abs(n)
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total

print(sum_of_digits(456))`,
    explanation: "456 % 10 = 6, 45 % 10 = 5, 4 % 10 = 4. Total = 6 + 5 + 4 = 15.",
    timeComplexity: "O(log10 N)",
    spaceComplexity: "O(1)",
    commonMistake: "Forgetting `abs(n)` when dealing with negative input numbers."
  },
  {
    id: 9,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Reverse a Number (Mathematical)",
    category: "Math & While Loop",
    problemStatement: "Given an integer N, reverse its digits mathematically without using string reversal.",
    inputFormat: "A single integer N.",
    outputFormat: "Print the reversed integer.",
    constraints: "-10^9 <= N <= 10^9",
    exampleInput: "1234",
    exampleOutput: "4321",
    expectedApproach: "Maintain `rev = 0`, multiply `rev * 10` and add `n % 10` on each step.",
    pythonSolution: `def reverse_number(n: int) -> int:
    sign = -1 if n < 0 else 1
    n = abs(n)
    rev = 0
    while n > 0:
        rev = rev * 10 + (n % 10)
        n //= 10
    return sign * rev

print(reverse_number(1234))`,
    explanation: "Pushes digits from right to left mathematically preserving sign.",
    timeComplexity: "O(log10 N)",
    spaceComplexity: "O(1)",
    commonMistake: "Losing negative signs for inputs like -543."
  },
  {
    id: 10,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Check Palindrome Number",
    category: "Math & While Loop",
    problemStatement: "Determine whether an integer N is a palindrome (reads same forwards and backwards).",
    inputFormat: "A single integer N.",
    outputFormat: "Print 'True' if palindrome, else 'False'.",
    constraints: "-10^9 <= N <= 10^9",
    exampleInput: "1221",
    exampleOutput: "True",
    expectedApproach: "Negative numbers cannot be palindromes (due to minus sign). Reverse positive number and compare with original.",
    pythonSolution: `def is_palindrome_number(n: int) -> bool:
    if n < 0:
        return False
    orig, rev = n, 0
    while n > 0:
        rev = rev * 10 + (n % 10)
        n //= 10
    return orig == rev

print(is_palindrome_number(1221))`,
    explanation: "Reverses `n` mathematically and compares with stored `orig`. -121 reversed is 121-, so negative is False.",
    timeComplexity: "O(log10 N)",
    spaceComplexity: "O(1)",
    commonMistake: "Modifying `n` in place and forgetting to keep a copy of the original value."
  },
  {
    id: 11,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Fibonacci Sequence up to N terms",
    category: "Loops & Series",
    problemStatement: "Given an integer N, generate and print the first N numbers in the Fibonacci sequence starting with 0, 1.",
    inputFormat: "A single integer N.",
    outputFormat: "N space-separated integers.",
    constraints: "1 <= N <= 30",
    exampleInput: "6",
    exampleOutput: "0 1 1 2 3 5",
    expectedApproach: "Use two variables `a, b = 0, 1` and update with `a, b = b, a + b` in a loop.",
    pythonSolution: `def generate_fibonacci(n: int) -> list:
    fib = []
    a, b = 0, 1
    for _ in range(n):
        fib.append(a)
        a, b = b, a + b
    return fib

print(*(generate_fibonacci(6)))`,
    explanation: "Generates each term sequentially by summing the previous two terms.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N) to store output list",
    commonMistake: "Hardcoding starting terms and crashing when N = 1."
  },
  {
    id: 12,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Count Vowels and Consonants in a String",
    category: "Strings",
    problemStatement: "Given a string S, count the number of vowels and consonants (alphabetic characters only).",
    inputFormat: "A single string S.",
    outputFormat: "Print 'Vowels: V, Consonants: C'.",
    constraints: "1 <= len(S) <= 1000",
    exampleInput: "Placement 2026",
    exampleOutput: "Vowels: 3, Consonants: 6",
    expectedApproach: "Convert to lowercase, check `c.isalpha()`, then check `c in 'aeiou'`.",
    pythonSolution: `def count_vowels_consonants(s: str):
    vowels = set("aeiou")
    v_count = c_count = 0
    for char in s.lower():
        if char.isalpha():
            if char in vowels:
                v_count += 1
            else:
                c_count += 1
    return v_count, c_count

v, c = count_vowels_consonants("Placement 2026")
print(f"Vowels: {v}, Consonants: {c}")`,
    explanation: "Filters out digits and spaces using `isalpha()`. Character 'a', 'e', 'e' in 'Placement' = 3 vowels, 6 consonants.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Counting spaces and digits as consonants."
  },
  {
    id: 13,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Reverse a String",
    category: "Strings",
    problemStatement: "Given a string S, return the reversed string.",
    inputFormat: "A single string S.",
    outputFormat: "Print the reversed string.",
    constraints: "1 <= len(S) <= 10^5",
    exampleInput: "hello",
    exampleOutput: "olleh",
    expectedApproach: "Use Python string slicing `S[::-1]` or two-pointer character swapping.",
    pythonSolution: `def reverse_string(s: str) -> str:
    return s[::-1]

print(reverse_string("hello"))`,
    explanation: "`s[::-1]` iterates backwards across the string at C-level speed.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Attempting to reverse in-place via `s[i] = s[j]`, which fails due to string immutability."
  },
  {
    id: 14,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Find Minimum and Maximum in a List",
    category: "Lists",
    problemStatement: "Given a list of integers, find the minimum and maximum element without using built-in min() and max().",
    inputFormat: "Space-separated integers.",
    outputFormat: "Print 'Min: X, Max: Y'.",
    constraints: "1 <= len(arr) <= 10^5",
    exampleInput: "34 12 78 5 99 23",
    exampleOutput: "Min: 5, Max: 99",
    expectedApproach: "Initialize `min_val` and `max_val` to `arr[0]` and update in a single pass.",
    pythonSolution: `def find_min_max(arr: list):
    min_val = max_val = arr[0]
    for num in arr[1:]:
        if num < min_val:
            min_val = num
        elif num > max_val:
            max_val = num
    return min_val, max_val

mn, mx = find_min_max([34, 12, 78, 5, 99, 23])
print(f"Min: {mn}, Max: {mx}")`,
    explanation: "Iterates once through array comparing each number, requiring at most 2(N-1) comparisons.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Initializing min to 0, which fails if all numbers are positive or all negative."
  },
  {
    id: 15,
    level: 1,
    difficultyLabel: "Level 1: Very Basic",
    title: "Square Star Pattern",
    category: "Patterns",
    problemStatement: "Given an integer N, print an N x N square pattern of asterisks.",
    inputFormat: "A single integer N.",
    outputFormat: "N lines of N space-separated asterisks.",
    constraints: "1 <= N <= 20",
    exampleInput: "3",
    exampleOutput: "* * *\\n* * *\\n* * *",
    expectedApproach: "Outer loop runs N times; print `'* ' * N` on each line.",
    pythonSolution: `def print_square(n: int):
    for _ in range(n):
        print("* " * n)

print_square(3)`,
    explanation: "Demonstrates Python's string multiplication idiom for concise pattern generation.",
    timeComplexity: "O(N^2)",
    spaceComplexity: "O(1)",
    commonMistake: "Missing the space in `'* '`, resulting in `***` instead of `* * *`."
  },

  // LEVEL 2: Basic (20 Questions: 16 to 35)
  {
    id: 16,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Check Prime Number",
    category: "Math & Optimization",
    problemStatement: "Given an integer N, check whether it is a prime number. Optimize for O(√N) runtime.",
    inputFormat: "A single integer N.",
    outputFormat: "Print 'Prime' or 'Not Prime'.",
    constraints: "1 <= N <= 10^9",
    exampleInput: "29",
    exampleOutput: "Prime",
    expectedApproach: "Check edge cases (<=1 is False, 2 and 3 are True). Check divisibility up to `int(N**0.5) + 1`.",
    pythonSolution: `def is_prime(n: int) -> bool:
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

print("Prime" if is_prime(29) else "Not Prime")`,
    explanation: "Divisors come in pairs. If N has no divisor <= √N, N must be prime. The 6k ± 1 step optimizes checking.",
    timeComplexity: "O(√N)",
    spaceComplexity: "O(1)",
    commonMistake: "Checking up to N (takes O(N) and causes Time Limit Exceeded on large test cases)."
  },
  {
    id: 17,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Check Armstrong (Narcissistic) Number",
    category: "Math",
    problemStatement: "An Armstrong number of D digits is an integer such that the sum of each digit raised to the power D equals the number itself (e.g. 153 = 1^3 + 5^3 + 3^3). Check if N is Armstrong.",
    inputFormat: "A single integer N.",
    outputFormat: "Print 'True' or 'False'.",
    constraints: "0 <= N <= 10^8",
    exampleInput: "153",
    exampleOutput: "True",
    expectedApproach: "Determine number of digits D. Extract each digit, raise to power D, and sum.",
    pythonSolution: `def is_armstrong(n: int) -> bool:
    s = str(n)
    power = len(s)
    total = sum(int(d) ** power for d in s)
    return total == n

print(is_armstrong(153))`,
    explanation: "153 has 3 digits: 1^3 (1) + 5^3 (125) + 3^3 (27) = 153. Equal to original number.",
    timeComplexity: "O(log10 N)",
    spaceComplexity: "O(log10 N)",
    commonMistake: "Hardcoding power 3 for all inputs (e.g. 1634 is an Armstrong number of power 4!)."
  },
  {
    id: 18,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Second Largest Element in a List",
    category: "Arrays/Lists",
    problemStatement: "Given a list of integers, find the second largest unique element in a single pass without sorting.",
    inputFormat: "Space-separated integers.",
    outputFormat: "Print the second largest element, or -1 if it does not exist.",
    constraints: "2 <= len(arr) <= 10^5",
    exampleInput: "12 35 1 10 34 1",
    exampleOutput: "34",
    expectedApproach: "Maintain `first` and `second` initialized to `-inf`. Update as you scan array.",
    pythonSolution: `def find_second_largest(arr: list) -> int:
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    return second if second != float('-inf') else -1

print(find_second_largest([12, 35, 1, 10, 34, 1]))`,
    explanation: "Single pass updates `second` whenever a new `first` is found, or if an element falls between `first` and `second`.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Sorting the list (O(N log N)) and taking `arr[-2]`, which fails if duplicate largest elements exist."
  },
  {
    id: 19,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Remove Duplicates from List Preserving Order",
    category: "Lists & Sets",
    problemStatement: "Given a list of integers, remove duplicate elements while keeping the first occurrence of each element in original order.",
    inputFormat: "Space-separated integers.",
    outputFormat: "Space-separated integers with duplicates removed.",
    constraints: "1 <= len(arr) <= 10^5",
    exampleInput: "1 2 2 3 4 3 5 1",
    exampleOutput: "1 2 3 4 5",
    expectedApproach: "Use a `seen` set to track seen elements in O(1) and build a result list.",
    pythonSolution: `def remove_duplicates_ordered(arr: list) -> list:
    seen = set()
    result = []
    for item in arr:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

print(*(remove_duplicates_ordered([1, 2, 2, 3, 4, 3, 5, 1])))`,
    explanation: "Combining `set` for O(1) membership lookup with a list preserves relative insertion order.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Using `list(set(arr))`, which scrambles the original ordering."
  },
  {
    id: 20,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Check Anagram Strings",
    category: "Strings & Dictionaries",
    problemStatement: "Given two strings s1 and s2, determine if s2 is an anagram of s1 (contains same characters with same frequencies).",
    inputFormat: "Two strings on separate lines.",
    outputFormat: "Print 'True' or 'False'.",
    constraints: "1 <= len(s1), len(s2) <= 10^5",
    exampleInput: "listen\\nsilent",
    exampleOutput: "True",
    expectedApproach: "If lengths differ, return False. Build frequency count dictionary or sort.",
    pythonSolution: `def is_anagram(s1: str, s2: str) -> bool:
    if len(s1) != len(s2):
        return False
    counts = {}
    for c in s1:
        counts[c] = counts.get(c, 0) + 1
    for c in s2:
        if c not in counts or counts[c] == 0:
            return False
        counts[c] -= 1
    return True

print(is_anagram("listen", "silent"))`,
    explanation: "Counts occurrences in s1 and decrements for s2 in O(N) time without sorting.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(K) where K is distinct character count",
    commonMistake: "Sorting both strings (O(N log N)), which is acceptable but slower than hash map O(N)."
  },
  {
    id: 21,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "First Non-Repeating Character in String",
    category: "Strings & Hash Map",
    problemStatement: "Given a string S, find and print the first non-repeating character. If none exists, print '$'.",
    inputFormat: "A single string S.",
    outputFormat: "The first non-repeating character or '$'.",
    constraints: "1 <= len(S) <= 10^5",
    exampleInput: "swiss",
    exampleOutput: "w",
    expectedApproach: "First pass counts frequency of each character in a dictionary; second pass scans string to find first with count 1.",
    pythonSolution: `def first_non_repeating(s: str) -> str:
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    for c in s:
        if freq[c] == 1:
            return c
    return '$'

print(first_non_repeating("swiss"))`,
    explanation: "'s' appears 3 times, 'w' appears 1 time, 'i' appears 1 time. First character with count 1 is 'w'.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1) (at most 26 lowercase English letters)",
    commonMistake: "Calling `s.count(c)` inside a loop, turning the algorithm into an O(N²) solution."
  },
  {
    id: 22,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Reverse Words in a Given Sentence",
    category: "Strings",
    problemStatement: "Given a sentence string S, reverse the order of the words without reversing characters inside words.",
    inputFormat: "A string containing space-separated words.",
    outputFormat: "Reversed words joined by a single space.",
    constraints: "1 <= len(S) <= 10^4",
    exampleInput: "the sky is blue",
    exampleOutput: "blue is sky the",
    expectedApproach: "Split into list of words with `s.split()`, reverse the list with `[::-1]`, and join with `' '`.",
    pythonSolution: `def reverse_words(s: str) -> str:
    words = s.split()
    return " ".join(words[::-1])

print(reverse_words("the sky is blue"))`,
    explanation: "`split()` automatically trims multiple spaces; `words[::-1]` reverses the word order.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Splitting with `s.split(' ')` which leaves empty strings if multiple spaces exist."
  },
  {
    id: 23,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Right Triangle Number Pattern",
    category: "Patterns",
    problemStatement: "Given N, print a right-angled triangle pattern where each row i contains numbers from 1 to i.",
    inputFormat: "A single integer N.",
    outputFormat: "N lines of numbers.",
    constraints: "1 <= N <= 20",
    exampleInput: "4",
    exampleOutput: "1\\n1 2\\n1 2 3\\n1 2 3 4",
    expectedApproach: "Use nested loops or `' '.join(str(j) for j in range(1, i + 1))`.",
    pythonSolution: `def print_triangle(n: int):
    for i in range(1, n + 1):
        row = " ".join(str(j) for j in range(1, i + 1))
        print(row)

print_triangle(4)`,
    explanation: "Row 1 prints 1; row 2 prints 1 2; row 3 prints 1 2 3; row 4 prints 1 2 3 4.",
    timeComplexity: "O(N^2)",
    spaceComplexity: "O(N)",
    commonMistake: "Forgetting to convert integers to `str` before joining."
  },
  {
    id: 24,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "GCD / HCF of Two Numbers",
    category: "Math & Euclidean Algorithm",
    problemStatement: "Given two positive integers A and B, find their Greatest Common Divisor (GCD) using the Euclidean algorithm.",
    inputFormat: "Two space-separated integers A and B.",
    outputFormat: "Print the GCD value.",
    constraints: "1 <= A, B <= 10^9",
    exampleInput: "36 60",
    exampleOutput: "12",
    expectedApproach: "Apply Euclidean algorithm: while `b != 0`, `a, b = b, a % b`. Return `a`.",
    pythonSolution: `def gcd(a: int, b: int) -> int:
    while b != 0:
        a, b = b, a % b
    return a

print(gcd(36, 60))`,
    explanation: "Euclidean algorithm reduces the problem by taking remainders until remainder is 0.",
    timeComplexity: "O(log(min(A, B)))",
    spaceComplexity: "O(1)",
    commonMistake: "Using a naive loop from 1 to min(A, B) taking O(N) time."
  },
  {
    id: 25,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "LCM of Two Numbers",
    category: "Math",
    problemStatement: "Given two positive integers A and B, calculate their Least Common Multiple (LCM).",
    inputFormat: "Two space-separated integers A and B.",
    outputFormat: "Print the LCM.",
    constraints: "1 <= A, B <= 10^6",
    exampleInput: "12 18",
    exampleOutput: "36",
    expectedApproach: "Use the relationship: `LCM(A, B) = (A * B) // GCD(A, B)`.",
    pythonSolution: `def lcm(a: int, b: int) -> int:
    def gcd(x, y):
        while y:
            x, y = y, x % y
        return x
    return (a * b) // gcd(a, b)

print(lcm(12, 18))`,
    explanation: "GCD(12, 18) = 6. (12 * 18) // 6 = 216 // 6 = 36.",
    timeComplexity: "O(log(min(A, B)))",
    spaceComplexity: "O(1)",
    commonMistake: "Multiplying large numbers first in languages with 32-bit overflow (Python handles arbitrary ints automatically)."
  },
  {
    id: 26,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Check Perfect Number",
    category: "Math",
    problemStatement: "A perfect number is a positive integer equal to the sum of its proper positive divisors (excluding itself). E.g. 6 = 1 + 2 + 3. Check if N is perfect.",
    inputFormat: "A single integer N.",
    outputFormat: "Print 'True' or 'False'.",
    constraints: "1 <= N <= 10^8",
    exampleInput: "28",
    exampleOutput: "True",
    expectedApproach: "Find divisors up to `int(sqrt(N))`. Add both `i` and `N // i` when `i * i != N`.",
    pythonSolution: `def is_perfect(n: int) -> bool:
    if n <= 1:
        return False
    divisor_sum = 1
    i = 2
    while i * i <= n:
        if n % i == 0:
            divisor_sum += i
            if i * i != n:
                divisor_sum += n // i
        i += 1
    return divisor_sum == n

print(is_perfect(28))`,
    explanation: "Divisors of 28 are 1, 2, 4, 7, 14. Sum is 1 + 2 + 4 + 7 + 14 = 28.",
    timeComplexity: "O(√N)",
    spaceComplexity: "O(1)",
    commonMistake: "Looping up to N-1 (O(N)), which causes timeout on 33550336."
  },
  {
    id: 27,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Rotate Array by K positions",
    category: "Arrays & Slicing",
    problemStatement: "Given an array and an integer K, rotate the array to the right by K positions.",
    inputFormat: "First line: array elements. Second line: K.",
    outputFormat: "Rotated array elements.",
    constraints: "1 <= len(arr) <= 10^5, 0 <= K <= 10^6",
    exampleInput: "1 2 3 4 5\\n2",
    exampleOutput: "4 5 1 2 3",
    expectedApproach: "Normalize `k = k % len(arr)`. Use slicing `arr[-k:] + arr[:-k]`.",
    pythonSolution: `def rotate_array(arr: list, k: int) -> list:
    n = len(arr)
    if n == 0:
        return arr
    k %= n
    return arr[-k:] + arr[:-k]

print(rotate_array([1, 2, 3, 4, 5], 2))`,
    explanation: "Rotating right by 2 moves the last 2 elements `[4, 5]` to the front and `[1, 2, 3]` to the back.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Forgetting `k = k % n` when K > len(arr)."
  },
  {
    id: 28,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Check String Palindrome with Alphanumeric only",
    category: "Strings & Two Pointers",
    problemStatement: "Given a string S, verify if it is a palindrome considering only alphanumeric characters and ignoring cases.",
    inputFormat: "A single string S.",
    outputFormat: "Print 'True' or 'False'.",
    constraints: "1 <= len(S) <= 10^5",
    exampleInput: "A man, a plan, a canal: Panama",
    exampleOutput: "True",
    expectedApproach: "Use two pointers skipping non-alphanumeric chars or build a cleaned lowercase string.",
    pythonSolution: `def is_valid_palindrome(s: str) -> bool:
    cleaned = [c.lower() for c in s if c.isalnum()]
    return cleaned == cleaned[::-1]

print(is_valid_palindrome("A man, a plan, a canal: Panama"))`,
    explanation: "Filters down to 'amanaplanacanalpanama', which reads identical forwards and backwards.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Comparing the raw string without stripping punctuation and spaces."
  },
  {
    id: 29,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Count Frequency of Elements",
    category: "Dictionaries",
    problemStatement: "Given a list of items, count the frequency of each item and print each item and its count in insertion order.",
    inputFormat: "Space-separated items.",
    outputFormat: "Item: Count on separate lines.",
    constraints: "1 <= len(arr) <= 10^5",
    exampleInput: "apple banana apple cherry banana apple",
    exampleOutput: "apple: 3\\nbanana: 2\\ncherry: 1",
    expectedApproach: "Iterate through items maintaining count with `freq[item] = freq.get(item, 0) + 1`.",
    pythonSolution: `def frequency_counter(items: list):
    freq = {}
    for item in items:
        freq[item] = freq.get(item, 0) + 1
    for k, v in freq.items():
        print(f"{k}: {v}")

frequency_counter(["apple", "banana", "apple", "cherry", "banana", "apple"])`,
    explanation: "Builds frequency map in O(N) using dictionary `get(item, 0)`.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(U) where U is unique elements",
    commonMistake: "Using `list.count()` inside loop creating an O(N²) quadratic bottleneck."
  },
  {
    id: 30,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Binary Search in a Sorted Array",
    category: "Algorithms & Searching",
    problemStatement: "Given a sorted array of integers and a target value, return the index of target using Binary Search, or -1 if not found.",
    inputFormat: "First line: sorted array. Second line: target.",
    outputFormat: "Index of target or -1.",
    constraints: "1 <= len(arr) <= 10^5",
    exampleInput: "1 3 5 7 9 11\\n7",
    exampleOutput: "3",
    expectedApproach: "Maintain `low` and `high` pointers, examine `mid`, and halve search space on each step.",
    pythonSolution: `def binary_search(arr: list, target: int) -> int:
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

print(binary_search([1, 3, 5, 7, 9, 11], 7))`,
    explanation: "Binary search cuts search space by 50% each iteration, achieving O(log N) logarithmic speed.",
    timeComplexity: "O(log N)",
    spaceComplexity: "O(1)",
    commonMistake: "Using `low < high` instead of `low <= high`, which misses single-element arrays."
  },
  {
    id: 31,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Linear Search First and Last Index",
    category: "Searching & Lists",
    problemStatement: "Given an array of integers with duplicates and a target value, find its first and last occurrence index. Print -1 -1 if not found.",
    inputFormat: "First line: array. Second line: target.",
    outputFormat: "First index and last index separated by space.",
    constraints: "1 <= len(arr) <= 10^5",
    exampleInput: "1 2 3 2 4 2 5\\n2",
    exampleOutput: "1 5",
    expectedApproach: "Scan array: store first index when first found, continuously update last index on subsequent matches.",
    pythonSolution: `def first_last_occurrence(arr: list, target: int):
    first = last = -1
    for i, val in enumerate(arr):
        if val == target:
            if first == -1:
                first = i
            last = i
    return first, last

print(*first_last_occurrence([1, 2, 3, 2, 4, 2, 5], 2))`,
    explanation: "Single pass records first encounter index and updates last encounter index.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Calling `arr.index(target)` which only finds the first occurrence and crashes if target is absent."
  },
  {
    id: 32,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Find Missing Number in Array 1 to N",
    category: "Arrays & Math",
    problemStatement: "Given an array containing N-1 distinct numbers taken from 1 to N, find the missing number.",
    inputFormat: "Space-separated integers.",
    outputFormat: "Print the missing integer.",
    constraints: "1 <= N <= 10^5",
    exampleInput: "1 2 4 5 6",
    exampleOutput: "3",
    expectedApproach: "Expected sum is `N * (N + 1) // 2`. The missing number is `expected_sum - actual_sum`.",
    pythonSolution: `def find_missing_number(arr: list) -> int:
    n = len(arr) + 1
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum

print(find_missing_number([1, 2, 4, 5, 6]))`,
    explanation: "Array has 5 elements, so N = 6. Expected sum = 6 * 7 // 2 = 21. Actual sum = 18. Missing = 21 - 18 = 3.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Setting `N = len(arr)` instead of `len(arr) + 1`."
  },
  {
    id: 33,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Move All Zeros to End of Array",
    category: "Arrays & Two Pointers",
    problemStatement: "Given an integer array, move all 0s to the end of it while maintaining the relative order of non-zero elements in-place.",
    inputFormat: "Space-separated integers.",
    outputFormat: "Array with zeros shifted to end.",
    constraints: "1 <= len(arr) <= 10^5",
    exampleInput: "0 1 0 3 12",
    exampleOutput: "1 3 12 0 0",
    expectedApproach: "Maintain pointer `insert_pos`. Overwrite non-zero numbers forward, then fill remaining slots with 0.",
    pythonSolution: `def move_zeros(arr: list) -> list:
    insert_pos = 0
    for num in arr:
        if num != 0:
            arr[insert_pos] = num
            insert_pos += 1
    while insert_pos < len(arr):
        arr[insert_pos] = 0
        insert_pos += 1
    return arr

print(move_zeros([0, 1, 0, 3, 12]))`,
    explanation: "In-place modification with O(1) auxiliary space without creating extra lists.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Removing zeros via `arr.remove(0)` inside a loop, which takes O(N²) quadratic time."
  },
  {
    id: 34,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Check Subset Array",
    category: "Sets & Arrays",
    problemStatement: "Given two arrays arr1 and arr2, check whether arr2 is a subset of arr1.",
    inputFormat: "Two lines of space-separated integers.",
    outputFormat: "Print 'True' or 'False'.",
    constraints: "1 <= len(arr1), len(arr2) <= 10^5",
    exampleInput: "11 1 13 21 3 7\\n11 3 7 1",
    exampleOutput: "True",
    expectedApproach: "Convert `arr1` to a set, then check `set(arr2).issubset(set(arr1))` or loop through arr2.",
    pythonSolution: `def is_subset(arr1: list, arr2: list) -> bool:
    set1 = set(arr1)
    return all(x in set1 for x in arr2)

print(is_subset([11, 1, 13, 21, 3, 7], [11, 3, 7, 1]))`,
    explanation: "Converting arr1 to set takes O(N). Checking each element in set takes O(1) average time.",
    timeComplexity: "O(N + M)",
    spaceComplexity: "O(N)",
    commonMistake: "Checking `x in arr1` directly in a list taking O(N * M) time."
  },
  {
    id: 35,
    level: 2,
    difficultyLabel: "Level 2: Basic",
    title: "Check Power of Two",
    category: "Bit Manipulation & Math",
    problemStatement: "Given an integer N, determine if it is a power of two.",
    inputFormat: "A single integer N.",
    outputFormat: "Print 'True' or 'False'.",
    constraints: "-2^31 <= N <= 2^31 - 1",
    exampleInput: "16",
    exampleOutput: "True",
    expectedApproach: "A positive power of 2 in binary has exactly one set bit: `n > 0 and (n & (n - 1)) == 0`.",
    pythonSolution: `def is_power_of_two(n: int) -> bool:
    return n > 0 and (n & (n - 1)) == 0

print(is_power_of_two(16))
print(is_power_of_two(18))`,
    explanation: "16 is 10000 in binary; 15 is 01111. `16 & 15 = 0`. Extremely fast bitwise operation.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    commonMistake: "Forgetting `n > 0` check (e.g. `n = 0` or negative numbers)."
  },

  // LEVEL 3: Basic/Intermediate (15 Questions: 36 to 50)
  {
    id: 36,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Two Sum Problem",
    category: "Hash Map & Arrays",
    problemStatement: "Given an array of integers and an integer target, return indices of the two numbers such that they add up to target.",
    inputFormat: "First line: array elements. Second line: target.",
    outputFormat: "Two space-separated indices.",
    constraints: "2 <= len(arr) <= 10^5, exactly one solution exists.",
    exampleInput: "2 7 11 15\\n9",
    exampleOutput: "0 1",
    expectedApproach: "Store seen numbers in hash map `{number: index}`. For each number, check if `target - num` exists.",
    pythonSolution: `def two_sum(nums: list, target: int):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return seen[complement], i
        seen[num] = i
    return None

print(*two_sum([2, 7, 11, 15], 9))`,
    explanation: "At index 0 (2), stores `{2: 0}`. At index 1 (7), `complement = 9 - 7 = 2` is in `seen`. Returns (0, 1).",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Using nested loops taking O(N²) time."
  },
  {
    id: 37,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Longest Substring Without Repeating Characters",
    category: "Sliding Window & Strings",
    problemStatement: "Given a string S, find the length of the longest substring without duplicate characters.",
    inputFormat: "A single string S.",
    outputFormat: "Print length of the longest substring.",
    constraints: "0 <= len(S) <= 10^5",
    exampleInput: "abcabcbb",
    exampleOutput: "3",
    expectedApproach: "Use sliding window with two pointers `left` and `right`, storing last seen index of each character.",
    pythonSolution: `def length_of_longest_substring(s: str) -> int:
    last_seen = {}
    max_len = left = 0
    for right, char in enumerate(s):
        if char in last_seen and last_seen[char] >= left:
            left = last_seen[char] + 1
        last_seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len

print(length_of_longest_substring("abcabcbb"))`,
    explanation: "For 'abcabcbb', the longest unique substring is 'abc' with length 3. Window slides dynamically.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(min(N, M)) where M is character set size",
    commonMistake: "Failing to check `last_seen[char] >= left`, causing `left` pointer to jump backwards."
  },
  {
    id: 38,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Majority Element (Boyer-Moore Voting)",
    category: "Arrays & Algorithms",
    problemStatement: "Given an array of size N, find the majority element that appears more than ⌊N / 2⌋ times.",
    inputFormat: "Space-separated integers.",
    outputFormat: "Print the majority element.",
    constraints: "1 <= N <= 10^5, majority element always exists.",
    exampleInput: "2 2 1 1 1 2 2",
    exampleOutput: "2",
    expectedApproach: "Use Boyer-Moore Voting Algorithm: maintain `candidate` and `count`.",
    pythonSolution: `def majority_element(nums: list) -> int:
    candidate = None
    count = 0
    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1
    return candidate

print(majority_element([2, 2, 1, 1, 1, 2, 2]))`,
    explanation: "Boyer-Moore cancels out different elements against each other. The element with > N/2 occurrences survives.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Using hash map taking O(N) auxiliary space when O(1) space is achievable."
  },
  {
    id: 39,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Merge Two Sorted Arrays",
    category: "Arrays & Two Pointers",
    problemStatement: "Given two sorted arrays arr1 and arr2, merge them into a single sorted array without using sort().",
    inputFormat: "Two lines of sorted integers.",
    outputFormat: "Merged sorted integers.",
    constraints: "1 <= len(arr1), len(arr2) <= 10^5",
    exampleInput: "1 3 5 7\\n2 4 6 8",
    exampleOutput: "1 2 3 4 5 6 7 8",
    expectedApproach: "Two pointers `i` and `j` compare elements from both arrays and append smaller one to result.",
    pythonSolution: `def merge_sorted(arr1: list, arr2: list) -> list:
    i = j = 0
    merged = []
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            merged.append(arr1[i])
            i += 1
        else:
            merged.append(arr2[j])
            j += 1
    merged.extend(arr1[i:])
    merged.extend(arr2[j:])
    return merged

print(*(merge_sorted([1, 3, 5, 7], [2, 4, 6, 8])))`,
    explanation: "Linear merge step from Merge Sort runs in O(N + M) time.",
    timeComplexity: "O(N + M)",
    spaceComplexity: "O(N + M)",
    commonMistake: "Concatenating and using `.sort()` which takes O((N+M) log(N+M))."
  },
  {
    id: 40,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Intersection of Two Arrays",
    category: "Sets & Arrays",
    problemStatement: "Given two integer arrays, return an array of their unique intersection (elements present in both).",
    inputFormat: "Two lines of space-separated integers.",
    outputFormat: "Unique common elements.",
    constraints: "1 <= len(arr1), len(arr2) <= 10^5",
    exampleInput: "1 2 2 1\\n2 2",
    exampleOutput: "2",
    expectedApproach: "Convert both to sets and use set intersection `set(arr1) & set(arr2)`.",
    pythonSolution: `def array_intersection(arr1: list, arr2: list) -> list:
    return list(set(arr1) & set(arr2))

print(*(array_intersection([1, 2, 2, 1], [2, 2])))`,
    explanation: "Set intersection `&` calculates common unique elements in linear time.",
    timeComplexity: "O(N + M)",
    spaceComplexity: "O(N + M)",
    commonMistake: "Using nested loops taking O(N * M) time."
  },
  {
    id: 41,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Maximum Subarray Sum (Kadane's Algorithm)",
    category: "Dynamic Programming & Arrays",
    problemStatement: "Given an integer array, find the contiguous subarray with the largest sum and return its sum.",
    inputFormat: "Space-separated integers.",
    outputFormat: "Print the maximum subarray sum.",
    constraints: "1 <= len(arr) <= 10^5",
    exampleInput: "-2 1 -3 4 -1 2 1 -5 4",
    exampleOutput: "6",
    expectedApproach: "Kadane's Algorithm: `current_max = max(x, current_max + x)`.",
    pythonSolution: `def max_subarray_sum(nums: list) -> int:
    max_so_far = current_max = nums[0]
    for x in nums[1:]:
        current_max = max(x, current_max + x)
        max_so_far = max(max_so_far, current_max)
    return max_so_far

print(max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))`,
    explanation: "Subarray `[4, -1, 2, 1]` has the largest sum = 6. Kadane decides whether to extend previous subarray or start fresh.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Initializing `max_so_far = 0`, which fails when all numbers in array are negative."
  },
  {
    id: 42,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Container With Most Water",
    category: "Two Pointers",
    problemStatement: "Given N non-negative integers representing vertical lines, find two lines that together with the x-axis forms a container that holds the most water.",
    inputFormat: "Space-separated integers representing heights.",
    outputFormat: "Print the maximum water area.",
    constraints: "2 <= len(heights) <= 10^5",
    exampleInput: "1 8 6 2 5 4 8 3 7",
    exampleOutput: "49",
    expectedApproach: "Two pointers at both ends. Compute area `min(h[l], h[r]) * (r - l)`. Shift the pointer with the smaller height.",
    pythonSolution: `def max_area(height: list) -> int:
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        max_water = max(max_water, width * h)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water

print(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))`,
    explanation: "Optimal two pointer greedily advances the shorter line to seek a taller barrier.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Testing all O(N²) pairs with nested loops causing TLE."
  },
  {
    id: 43,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Group Anagrams",
    category: "Strings & Hash Map",
    problemStatement: "Given an array of strings, group the anagrams together in any order.",
    inputFormat: "Space-separated words.",
    outputFormat: "Groups of anagrams.",
    constraints: "1 <= len(words) <= 10^4",
    exampleInput: "eat tea tan ate nat bat",
    exampleOutput: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
    expectedApproach: "Use a dictionary where the key is the sorted tuple of characters: `tuple(sorted(word))`.",
    pythonSolution: `def group_anagrams(strs: list) -> list:
    groups = {}
    for word in strs:
        key = "".join(sorted(word))
        if key not in groups:
            groups[key] = []
        groups[key].append(word)
    return list(groups.values())

print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))`,
    explanation: "'eat', 'tea', and 'ate' all sort to 'aet', mapping to the same dictionary key.",
    timeComplexity: "O(N * K log K) where K is max word length",
    spaceComplexity: "O(N * K)",
    commonMistake: "Using a list as a dictionary key (`TypeError: unhashable type`)."
  },
  {
    id: 44,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Valid Parentheses Checker",
    category: "Stacks & Strings",
    problemStatement: "Given a string containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid (brackets close in correct order).",
    inputFormat: "A single string S.",
    outputFormat: "Print 'True' or 'False'.",
    constraints: "1 <= len(S) <= 10^5",
    exampleInput: "()[]{}",
    exampleOutput: "True",
    expectedApproach: "Use a list as a Stack. Push opening brackets; for closing brackets, pop and check if matching.",
    pythonSolution: `def is_valid_parentheses(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return len(stack) == 0

print(is_valid_parentheses("()[]{}"))
print(is_valid_parentheses("(]"))`,
    explanation: "Stack enforces Last-In-First-Out matching of corresponding bracket types.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Popping from an empty stack without checking `if stack:` causing `IndexError`."
  },
  {
    id: 45,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "String Compression (Run-Length Encoding)",
    category: "Strings",
    problemStatement: "Compress a string such that consecutive repeated characters are replaced by the character followed by count (e.g. 'aabcccccaaa' -> 'a2b1c5a3').",
    inputFormat: "A single string S.",
    outputFormat: "Compressed string.",
    constraints: "1 <= len(S) <= 10^5",
    exampleInput: "aabcccccaaa",
    exampleOutput: "a2b1c5a3",
    expectedApproach: "Iterate through string tracking current character count. Append to list when character changes.",
    pythonSolution: `def compress_string(s: str) -> str:
    if not s:
        return ""
    compressed = []
    count = 1
    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            count += 1
        else:
            compressed.append(f"{s[i - 1]}{count}")
            count = 1
    compressed.append(f"{s[-1]}{count}")
    return "".join(compressed)

print(compress_string("aabcccccaaa"))`,
    explanation: "Processes runs of characters and builds compressed result using list join.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Using repeated string concatenation `+=` in loop (O(N²)) instead of appending to a list and joining."
  },
  {
    id: 46,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Climbing Stairs (Fibonacci DP)",
    category: "Dynamic Programming",
    problemStatement: "You are climbing a staircase. It takes N steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    inputFormat: "A single integer N.",
    outputFormat: "Total distinct ways.",
    constraints: "1 <= N <= 45",
    exampleInput: "4",
    exampleOutput: "5",
    expectedApproach: "Ways to step N is `ways(N-1) + ways(N-2)` (Fibonacci sequence). Maintain two variables for O(1) space.",
    pythonSolution: `def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    first, second = 1, 2
    for _ in range(3, n + 1):
        first, second = second, first + second
    return second

print(climb_stairs(4))`,
    explanation: "For N = 4: 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 = 5 ways.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    commonMistake: "Using naive recursion `return climb_stairs(n-1) + climb_stairs(n-2)` which takes O(2^N) and times out."
  },
  {
    id: 47,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Implement Stack using List (OOP)",
    category: "Data Structures & OOP",
    problemStatement: "Implement a Stack class with `push(x)`, `pop()`, `peek()`, `is_empty()`, and `size()` methods.",
    inputFormat: "Method invocations.",
    outputFormat: "Method return values.",
    constraints: "Standard stack operations.",
    exampleInput: "push(10), push(20), pop(), peek()",
    exampleOutput: "20, 10",
    expectedApproach: "Wrap Python `list` inside a class using `append()` for push and `pop()` for pop.",
    pythonSolution: `class Stack:
    def __init__(self):
        self._items = []

    def push(self, val):
        self._items.append(val)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("peek from empty stack")
        return self._items[-1]

    def is_empty(self):
        return len(self._items) == 0

    def size(self):
        return len(self._items)

s = Stack()
s.push(10)
s.push(20)
print("Popped:", s.pop())
print("Top:", s.peek())`,
    explanation: "Encapsulates stack operations with bounds checking.",
    timeComplexity: "O(1) for all operations",
    spaceComplexity: "O(N)",
    commonMistake: "Popping from empty stack without handling IndexError."
  },
  {
    id: 48,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Find All Pairs with Given Sum",
    category: "Arrays & Hash Set",
    problemStatement: "Given an array of integers and a target sum, find all unique pairs (a, b) such that a + b = sum.",
    inputFormat: "First line: array. Second line: target sum.",
    outputFormat: "List of sorted tuples representing unique pairs.",
    constraints: "1 <= len(arr) <= 10^5",
    exampleInput: "1 5 7 -1 5\\n6",
    exampleOutput: "[(1, 5), (-1, 7)]",
    expectedApproach: "Use a set to track seen numbers and another set to store unique sorted pairs.",
    pythonSolution: `def find_pairs_with_sum(arr: list, target: int) -> list:
    seen = set()
    pairs = set()
    for num in arr:
        complement = target - num
        if complement in seen:
            pairs.add(tuple(sorted((num, complement))))
        seen.add(num)
    return sorted(list(pairs))

print(find_pairs_with_sum([1, 5, 7, -1, 5], 6))`,
    explanation: "For target 6: 1 + 5 = 6 and -1 + 7 = 6. Sorting pairs `(1, 5)` prevents duplicate reversal `(5, 1)`.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    commonMistake: "Returning duplicate pairs when multiple identical numbers exist in the array."
  },
  {
    id: 49,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Longest Common Prefix",
    category: "Strings",
    problemStatement: "Given an array of strings, find the longest common prefix string amongst them. If no common prefix, return empty string.",
    inputFormat: "Space-separated strings.",
    outputFormat: "Longest common prefix string.",
    constraints: "1 <= len(strs) <= 1000",
    exampleInput: "flower flow flight",
    exampleOutput: "fl",
    expectedApproach: "Compare characters index by index across all strings, or sort and compare first and last strings.",
    pythonSolution: `def longest_common_prefix(strs: list) -> str:
    if not strs:
        return ""
    strs.sort()
    first, last = strs[0], strs[-1]
    i = 0
    while i < len(first) and i < len(last) and first[i] == last[i]:
        i += 1
    return first[:i]

print(longest_common_prefix(["flower", "flow", "flight"]))`,
    explanation: "After sorting, strings are in alphabetical order. The common prefix of the entire list must match between first and last string.",
    timeComplexity: "O(N * M log N) where M is string length",
    spaceComplexity: "O(1)",
    commonMistake: "Crashing on empty list input `[]`."
  },
  {
    id: 50,
    level: 3,
    difficultyLabel: "Level 3: Basic/Intermediate",
    title: "Merge Overlapping Intervals",
    category: "Arrays & Sorting",
    problemStatement: "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals.",
    inputFormat: "List of intervals.",
    outputFormat: "Merged intervals.",
    constraints: "1 <= len(intervals) <= 10^4",
    exampleInput: "[[1, 3], [2, 6], [8, 10], [15, 18]]",
    exampleOutput: "[[1, 6], [8, 10], [15, 18]]",
    expectedApproach: "Sort intervals by start time. Iterate: if current interval overlaps with previous, merge by extending end time.",
    pythonSolution: `def merge_intervals(intervals: list) -> list:
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for current in intervals[1:]:
        prev = merged[-1]
        if current[0] <= prev[1]:
            prev[1] = max(prev[1], current[1])
        else:
            merged.append(current)
    return merged

print(merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]]))`,
    explanation: "[1, 3] and [2, 6] overlap since 2 <= 3. Merged into [1, max(3, 6)] = [1, 6].",
    timeComplexity: "O(N log N) due to initial sort",
    spaceComplexity: "O(N) for output list",
    commonMistake: "Failing to sort first, which breaks adjacent overlap assumption."
  }
];
