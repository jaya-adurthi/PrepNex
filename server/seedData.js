const { getDb } = require('./database');

const coursesData = [
  {
    id: 'aptitude-mastery',
    title: 'Aptitude & Reasoning Mastery',
    slug: 'aptitude',
    category: 'APTITUDE',
    description: 'Master quantitative aptitude, logical reasoning, and verbal ability for campus placements.',
    icon: 'Calculator',
    total_topics: 29,
    level: 'Beginner to Advanced'
  },
  {
    id: 'dsa-patterns',
    title: 'Data Structures & Algorithms (Pattern-Based)',
    slug: 'dsa',
    category: 'DSA',
    description: 'Master DSA through proven problem-solving patterns with LeetCode practice integration.',
    icon: 'Code2',
    total_topics: 18,
    level: 'Intermediate to Advanced'
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    slug: 'python',
    category: 'PROGRAMMING',
    description: 'Complete Python learning path from basic syntax to OOP and advanced concepts.',
    icon: 'Terminal',
    total_topics: 22,
    level: 'Beginner to Advanced'
  },
  {
    id: 'java-programming',
    title: 'Java Core & Advanced',
    slug: 'java',
    category: 'PROGRAMMING',
    description: 'Master Java syntax, OOP principles, Collections framework, and Exception handling.',
    icon: 'Coffee',
    total_topics: 18,
    level: 'Beginner to Advanced'
  },
  {
    id: 'c-programming',
    title: 'C Programming',
    slug: 'c-lang',
    category: 'PROGRAMMING',
    description: 'Master low-level programming concepts, memory management, pointers, and structures.',
    icon: 'Cpu',
    total_topics: 13,
    level: 'Beginner to Intermediate'
  },
  {
    id: 'html-css-web',
    title: 'HTML & CSS Web Development',
    slug: 'html-css',
    category: 'PROGRAMMING',
    description: 'Build modern responsive web layouts using HTML5, CSS Flexbox, Grid, and animations.',
    icon: 'Layout',
    total_topics: 13,
    level: 'Beginner'
  }
];

const topicsData = [
  // --- QUANTITATIVE APTITUDE ---
  {
    id: 'quant-number-system',
    course_id: 'aptitude-mastery',
    title: 'Number System',
    category: 'Quantitative Aptitude',
    order_index: 1,
    description: 'Types of numbers, divisibility rules, unit digit calculation, LCM & HCF.',
    estimated_minutes: 20,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Number system forms the bedrock of quantitative aptitude. It deals with natural numbers, integers, primes, HCF/LCM, and unit digit cycles.',
      rules: [
        'Divisibility by 3: Sum of digits must be divisible by 3.',
        'Divisibility by 4: Last 2 digits must be divisible by 4.',
        'Divisibility by 8: Last 3 digits must be divisible by 8.',
        'Divisibility by 11: Difference of sum of digits at odd places and even places is 0 or divisible by 11.',
        'HCF × LCM = Product of two numbers (a × b).'
      ],
      solved_examples: [
        {
          question: 'Find the unit digit of 7^105.',
          solution: 'Cyclicity of 7 is 4 (7, 9, 3, 1). Divide exponent 105 by 4: 105 mod 4 = 1. So unit digit is 7^1 = 7.'
        },
        {
          question: 'The HCF of two numbers is 12 and their LCM is 144. If one number is 36, find the other.',
          solution: 'Using formula: HCF × LCM = A × B => 12 × 144 = 36 × B => B = (12 × 144) / 36 = 48.'
        }
      ],
      question_models: ['Unit digit calculation', 'LCM & HCF application', 'Remainder theorem', 'Divisibility test'],
      quiz: [
        {
          id: 'q1',
          question: 'What is the unit digit of 3^65?',
          options: ['1', '3', '7', '9'],
          correct: 1,
          explanation: 'Cyclicity of 3 is 4. 65 mod 4 = 1. 3^1 = 3.'
        },
        {
          id: 'q2',
          question: 'The sum of two numbers is 45 and their HCF is 5. How many such pairs exist?',
          options: ['2', '3', '4', '5'],
          correct: 1,
          explanation: 'Let numbers be 5a and 5b. 5a + 5b = 45 => a + b = 9. Co-prime pairs (a,b): (1,8), (2,7), (4,5). So 3 pairs.'
        }
      ]
    })
  },
  {
    id: 'quant-percentages',
    course_id: 'aptitude-mastery',
    title: 'Percentages',
    category: 'Quantitative Aptitude',
    order_index: 2,
    description: 'Percentage change, successive percentages, population & depreciation problems.',
    estimated_minutes: 25,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'Percentage means "per hundred". It is used to compare quantities relative to 100.',
      rules: [
        'Percentage Change = (Change / Initial Value) × 100',
        'Successive Percentage Change = a + b + (ab / 100)',
        'If A is x% more than B, B is [x / (100 + x)] × 100% less than A.',
        'If A is x% less than B, B is [x / (100 - x)] × 100% more than A.'
      ],
      solved_examples: [
        {
          question: 'If price of sugar increases by 25%, by how much % must a family reduce consumption to keep expenditure constant?',
          solution: 'Reduction % = [25 / (100 + 25)] × 100 = (25 / 125) × 100 = 20%.'
        }
      ],
      question_models: ['Consumption & Price change', 'Election votes percentage', 'Exam pass/fail marks'],
      quiz: [
        {
          id: 'q1',
          question: 'A candidate needs 40% to pass. He gets 178 marks and fails by 22 marks. What is maximum marks?',
          options: ['400', '500', '600', '450'],
          correct: 1,
          explanation: 'Passing marks = 178 + 22 = 200. 40% of Max = 200 => Max = 200 × 100 / 40 = 500.'
        }
      ]
    })
  },
  {
    id: 'quant-profit-loss',
    course_id: 'aptitude-mastery',
    title: 'Profit and Loss',
    category: 'Quantitative Aptitude',
    order_index: 3,
    description: 'Cost Price, Selling Price, Discount, Dishonest Dealer problems.',
    estimated_minutes: 25,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'P&L concepts evaluate commercial transactions involving Cost Price (CP), Selling Price (SP), and Marked Price (MP).',
      rules: [
        'Profit = SP - CP | Profit % = (Profit / CP) × 100',
        'Loss = CP - SP | Loss % = (Loss / CP) × 100',
        'Discount % = (Discount / MP) × 100',
        'SP = CP × (100 + Profit%) / 100 = MP × (100 - Discount%) / 100'
      ],
      solved_examples: [
        {
          question: 'An article is sold at Rs. 960 with 20% profit. What was its cost price?',
          solution: 'CP = (SP × 100) / (100 + P%) = (960 × 100) / 120 = Rs. 800.'
        }
      ],
      question_models: ['Marked Price & Discount', 'Dishonest Weight Merchant', 'Buy X Get Y Free'],
      quiz: [
        {
          id: 'q1',
          question: 'If CP of 12 articles equals SP of 10 articles, what is the profit percentage?',
          options: ['15%', '20%', '25%', '30%'],
          correct: 1,
          explanation: '12 CP = 10 SP => SP/CP = 12/10 = 6/5. Profit % = (6-5)/5 × 100 = 20%.'
        }
      ]
    })
  },
  {
    id: 'quant-time-work',
    course_id: 'aptitude-mastery',
    title: 'Time and Work',
    category: 'Quantitative Aptitude',
    order_index: 4,
    description: 'Work efficiency, alternate day work, pipes & cisterns.',
    estimated_minutes: 30,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'Time and work problems rely on the inverse relationship between speed/efficiency and time needed to complete 1 unit of work.',
      rules: [
        'If A completes work in n days, A\'s 1 day work = 1/n.',
        'Total Work = Efficiency × Time.',
        'If A is twice as efficient as B, Ratio of Efficiency A:B = 2:1, Time ratio A:B = 1:2.',
        'M1 × D1 × H1 / W1 = M2 × D2 × H2 / W2'
      ],
      solved_examples: [
        {
          question: 'A can do a work in 10 days, B in 15 days. In how many days together can they finish it?',
          solution: 'Total LCM work = 30 units. A speed = 3 u/day, B speed = 2 u/day. Combined = 5 u/day. Time = 30/5 = 6 days.'
        }
      ],
      question_models: ['Combined Work', 'Pipes Filling/Emptying', 'Efficiency Comparison', 'Leave before completion'],
      quiz: [
        {
          id: 'q1',
          question: 'A pipe can fill a tank in 6 hours and a leak empties it in 8 hours. If both are open, how long to fill?',
          options: ['14 hours', '24 hours', '12 hours', '18 hours'],
          correct: 1,
          explanation: 'Net rate = 1/6 - 1/8 = (4-3)/24 = 1/24. So 24 hours.'
        }
      ]
    })
  },

  // --- DSA PATTERN-BASED TOPICS ---
  {
    id: 'dsa-two-pointers',
    course_id: 'dsa-patterns',
    title: 'Two Pointers Pattern',
    category: 'Arrays & Strings',
    order_index: 1,
    description: 'Master 2-pointer techniques for sorted arrays, searching pairs, and string reversal.',
    estimated_minutes: 30,
    difficulty: 'Easy',
    leetcode_url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
    content_json: JSON.stringify({
      pattern_info: {
        what: 'The Two Pointers pattern uses two indices to iterate through a data structure simultaneously, usually from both ends towards the center or at different speeds.',
        when_to_use: 'Use when searching for pairs in a sorted array, reversing arrays/strings, or detecting palindrome conditions with O(1) extra space.',
        how_to_identify: 'Look for sorted array inputs, target sum pair requirements, or palindrome verification.',
        time_complexity: 'O(N)',
        space_complexity: 'O(1)'
      },
      code_example: `function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}`,
      practice_questions: [
        { title: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
        { title: '3Sum', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/3sum/' },
        { title: 'Container With Most Water', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/container-with-most-water/' },
        { title: 'Valid Palindrome', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/valid-palindrome/' }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Why does Two Pointers require the array to be sorted for pair sum problems?',
          options: [
            'To enable deterministic pointer movement based on sum comparison',
            'To reduce space complexity from O(N) to O(log N)',
            'It does not require sorting',
            'To allow binary tree traversal'
          ],
          correct: 0,
          explanation: 'If sorted, sum < target means left++ increases sum, while sum > target means right-- decreases sum.'
        }
      ]
    })
  },
  {
    id: 'dsa-sliding-window',
    course_id: 'dsa-patterns',
    title: 'Sliding Window Pattern',
    category: 'Arrays & Strings',
    order_index: 2,
    description: 'Fixed and dynamic window techniques for contiguous subarray sum, maximum, and substring problems.',
    estimated_minutes: 35,
    difficulty: 'Medium',
    leetcode_url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    content_json: JSON.stringify({
      pattern_info: {
        what: 'Sliding Window maintains a running window (defined by left & right boundaries) over contiguous elements to compute subarray metrics without re-evaluating overlapping elements.',
        when_to_use: 'Use when looking for longest/shortest substring or subarray meeting a condition (sum, distinct characters, maximum value).',
        how_to_identify: 'Problem mentions contiguous subarray, contiguous substring, fixed window size K, or max/min subarray sum.',
        time_complexity: 'O(N)',
        space_complexity: 'O(K) or O(1)'
      },
      code_example: `function lengthOfLongestSubstring(s) {
  let map = new Map(), maxLen = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
      practice_questions: [
        { title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
        { title: 'Minimum Size Subarray Sum', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/minimum-size-subarray-sum/' },
        { title: 'Sliding Window Maximum', difficulty: 'Hard', leetcode: 'https://leetcode.com/problems/sliding-window-maximum/' }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the main advantage of Sliding Window over Brute Force nested loops?',
          options: [
            'Reduces time complexity from O(N^2) to O(N)',
            'Avoids memory allocation',
            'Works on unsorted lists only',
            'Guarantees logarithmic space'
          ],
          correct: 0,
          explanation: 'By adding right element and removing left element, we process each element at most twice.'
        }
      ]
    })
  },
  {
    id: 'dsa-prefix-sum',
    course_id: 'dsa-patterns',
    title: 'Prefix Sum Pattern',
    category: 'Arrays & Math',
    order_index: 3,
    description: 'Precomputing cumulative sums to answer range sum queries in O(1) time.',
    estimated_minutes: 25,
    difficulty: 'Easy',
    leetcode_url: 'https://leetcode.com/problems/range-sum-query-immutable/',
    content_json: JSON.stringify({
      pattern_info: {
        what: 'Prefix Sum constructs an auxiliary array P where P[i] stores the sum of elements from index 0 to i.',
        when_to_use: 'Use when performing multiple range sum queries (sum between indices L and R) or finding subarray sum equal to K.',
        how_to_identify: 'Multiple query requests for range sum, pivot index calculation, or subarray sum equals K.',
        time_complexity: 'O(N) precomputation, O(1) query',
        space_complexity: 'O(N)'
      },
      code_example: `// Range sum formula: sum(L...R) = Prefix[R] - Prefix[L-1]
function SubarraySumEqualsK(nums, k) {
  let map = new Map([[0, 1]]);
  let count = 0, sum = 0;
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}`,
      practice_questions: [
        { title: 'Subarray Sum Equals K', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
        { title: 'Find Pivot Index', difficulty: 'Easy', leetcode: 'https://leetcode.com/problems/find-pivot-index/' },
        { title: 'Product of Array Except Self', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/product-of-array-except-self/' }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the query time complexity for finding range sum sum(L, R) after building Prefix Sum array?',
          options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
          correct: 0,
          explanation: 'It is a simple arithmetic subtraction: P[R] - P[L-1].'
        }
      ]
    })
  },
  {
    id: 'dsa-kadanes-algorithm',
    course_id: 'dsa-patterns',
    title: "Kadane's Algorithm Pattern",
    category: 'Dynamic Programming / Arrays',
    order_index: 4,
    description: 'Finding the maximum contiguous subarray sum in linear O(N) time.',
    estimated_minutes: 25,
    difficulty: 'Medium',
    leetcode_url: 'https://leetcode.com/problems/maximum-subarray/',
    content_json: JSON.stringify({
      pattern_info: {
        what: "Kadane's algorithm keeps track of current local max sum ending at each position and updates the global maximum sum.",
        when_to_use: 'Use when finding the contiguous subarray with maximum (or minimum) sum in an array containing positive and negative numbers.',
        how_to_identify: 'Maximum sum contiguous subarray, maximum product subarray.',
        time_complexity: 'O(N)',
        space_complexity: 'O(1)'
      },
      code_example: `function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
}`,
      practice_questions: [
        { title: 'Maximum Subarray', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/maximum-subarray/' },
        { title: 'Maximum Product Subarray', difficulty: 'Medium', leetcode: 'https://leetcode.com/problems/maximum-product-subarray/' }
      ],
      quiz: [
        {
          id: 'q1',
          question: "What is the core recurrence in Kadane's algorithm for currentMax at index i?",
          options: [
            'currentMax = Math.max(nums[i], currentMax + nums[i])',
            'currentMax = currentMax + nums[i]',
            'currentMax = Math.max(0, currentMax)',
            'currentMax = nums[i] * currentMax'
          ],
          correct: 0,
          explanation: 'At each element, we decide whether to start a new subarray at nums[i] or extend the existing subarray.'
        }
      ]
    })
  },

  // --- PROGRAMMING LANGUAGES ---
  {
    id: 'python-basics',
    course_id: 'python-programming',
    title: 'Python Syntax & Variables',
    category: 'Basics',
    order_index: 1,
    description: 'Introduction to Python, dynamic typing, variables, input/output, and basic operators.',
    estimated_minutes: 20,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Python is a high-level, interpreted programming language known for readability and clean indentation-based syntax.',
      code_snippets: [
        `# Python Variables & Dynamic Typing
name = "PrepNex"
age = 20
is_active = True

print(f"Welcome to {name}! System active: {is_active}")`,
        `# User Input & Type Conversion
score_str = "85"
score_num = int(score_str)
print("Updated score:", score_num + 10)`
      ],
      key_rules: [
        'Indentation (4 spaces) defines code blocks instead of curly braces {}.',
        'Variables do not require explicit type declaration.',
        'Use f-strings for concise string formatting: f"Value: {val}"'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the output of type(5 / 2) in Python 3?',
          options: ['<class "float">', '<class "int">', '<class "double">', '<class "number">'],
          correct: 0,
          explanation: 'In Python 3, single slash division / always returns a float (2.5).'
        }
      ]
    })
  },
  {
    id: 'python-lists-tuples',
    course_id: 'python-programming',
    title: 'Python Data Structures: Lists & Tuples',
    category: 'Data Structures',
    order_index: 2,
    description: 'Mutable lists vs Immutable tuples, list comprehensions, slicing, and operations.',
    estimated_minutes: 25,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Lists are ordered, mutable sequences. Tuples are ordered, immutable sequences defined with parentheses ().',
      code_snippets: [
        `# List Comprehension example
numbers = [1, 2, 3, 4, 5, 6]
evens_squared = [x**2 for x in numbers if x % 2 == 0]
print(evens_squared) # Output: [4, 16]`,
        `# Tuple Unpacking
point = (10, 20)
x, y = point
print(f"X: {x}, Y: {y}")`
      ],
      key_rules: [
        'Lists use brackets []; Tuples use parentheses ().',
        'List elements can be modified; Tuple elements cannot be reassigned.',
        'Slicing list[start:stop:step] allows sub-array extraction.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Which of the following creates a tuple with a single element in Python?',
          options: ['(5,)', '(5)', 'tuple(5)', '[5]'],
          correct: 0,
          explanation: 'A trailing comma (5,) is required to distinguish a single-element tuple from parenthesized integer.'
        }
      ]
    })
  },
  {
    id: 'java-oop-basics',
    course_id: 'java-programming',
    title: 'Java Object-Oriented Programming (OOP)',
    category: 'Core Java',
    order_index: 1,
    description: 'Classes, Objects, Constructors, Encapsulation, and access modifiers.',
    estimated_minutes: 30,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'Java is an object-oriented language where software is organized around classes and objects representing real-world entities.',
      code_snippets: [
        `public class Student {
    private String name;
    private int score;

    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() { return name; }
    public int getScore() { return score; }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Alex", 92);
        System.out.println(s1.getName() + ": " + s1.getScore());
    }
}`
      ],
      key_rules: [
        'Encapsulation hides state by making fields private and exposing getters/setters.',
        'The constructor initializes new object instances.',
        'Access modifiers: private (class only), default (package), protected (subclass), public (global).'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Which OOP pillar restricts direct access to an object state fields?',
          options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Abstraction'],
          correct: 0,
          explanation: 'Encapsulation wraps data and code together while shielding field access.'
        }
      ]
    })
  },
  {
    id: 'c-pointers',
    course_id: 'c-programming',
    title: 'C Pointers & Memory Management',
    category: 'Core C',
    order_index: 1,
    description: 'Memory addresses, pointer arithmetic, dereferencing, malloc, and free.',
    estimated_minutes: 35,
    difficulty: 'Hard',
    content_json: JSON.stringify({
      concept: 'Pointers store the memory address of another variable. They enable efficient dynamic memory allocation and array manipulation in C.',
      code_snippets: [
        `#include <stdio.h>
#include <stdlib.h>

int main() {
    int val = 42;
    int *ptr = &val;
    printf("Value: %d, Address: %p\\n", *ptr, (void*)ptr);

    // Dynamic memory allocation
    int *arr = (int*) malloc(5 * sizeof(int));
    if (arr != NULL) {
        arr[0] = 10;
        free(arr); // Always free allocated memory!
    }
    return 0;
}`
      ],
      key_rules: [
        '& operator gets the memory address of a variable.',
        '* operator dereferences a pointer to access or modify the value at that memory address.',
        'Always pair dynamic allocations (malloc/calloc) with free() to prevent memory leaks.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What happens if you do not call free() on memory allocated with malloc() before program terminates?',
          options: [
            'It results in a memory leak',
            'C automatically frees it immediately',
            'A runtime segmentation fault occurs',
            'The compiler rejects compilation'
          ],
          correct: 0,
          explanation: 'Allocated heap memory stays reserved until explicitly freed or operating system cleans process.'
        }
      ]
    })
  },
  {
    id: 'html-css-flexbox',
    course_id: 'html-css-web',
    title: 'CSS Flexbox Layout Masterclass',
    category: 'CSS Layouts',
    order_index: 1,
    description: 'Flex container, flex items, main axis, cross axis, justify-content, and align-items.',
    estimated_minutes: 25,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Flexbox (Flexible Box Layout) provides an efficient way to layout, align and distribute space among items in a container.',
      code_snippets: [
        `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0f172a;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}`
      ],
      key_rules: [
        'display: flex creates a flex container.',
        'justify-content aligns items along the main axis (row or column).',
        'align-items aligns items along the cross axis.',
        'flex-direction: row (default) or column defines main axis orientation.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Which CSS Flexbox property aligns items horizontally when flex-direction is row?',
          options: ['justify-content', 'align-items', 'align-content', 'flex-wrap'],
          correct: 0,
          explanation: 'When flex-direction is row, the main axis is horizontal, so justify-content controls horizontal alignment.'
        }
      ]
    })
  }
];

const defaultAchievements = [
  { code: 'STREAK_3', name: '🔥 3 Day Streak', desc: 'Maintained a learning streak for 3 consecutive days.' },
  { code: 'STREAK_7', name: '⚡ 7 Day Streak', desc: 'Built a 7-day learning momentum across courses.' },
  { code: 'FIRST_COURSE', name: '🏆 First Enrollment', desc: 'Enrolled in your first placement preparation course.' },
  { code: 'TODO_MASTER', name: '✅ Task Crusher', desc: 'Completed 5 daily learning plan todos.' },
  { code: 'DSA_SOLVER', name: '🧠 Pattern Explorer', desc: 'Practiced your first pattern-based DSA problem.' },
  { code: 'MOCK_STAR', name: '🎯 Interview Ready', desc: 'Completed your first 25-minute Mock Interview.' }
];

async function seed() {
  const db = await getDb();
  console.log('Seeding courses & topics...');

  for (const c of coursesData) {
    await db.run(
      `INSERT OR IGNORE INTO courses (id, title, slug, category, description, icon, total_topics, level)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [c.id, c.title, c.slug, c.category, c.description, c.icon, c.total_topics, c.level]
    );
  }

  for (const t of topicsData) {
    await db.run(
      `INSERT OR IGNORE INTO course_topics (id, course_id, title, category, order_index, description, content_json, estimated_minutes, leetcode_url, difficulty)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [t.id, t.course_id, t.title, t.category, t.order_index, t.description, t.content_json, t.estimated_minutes, t.leetcode_url || null, t.difficulty || 'Medium']
    );
  }

  console.log('Seed completed successfully!');
}

module.exports = { seed, defaultAchievements, coursesData, topicsData };

if (require.main === module) {
  seed().catch(err => {
    console.error('Seed failed:', err);
    process.exit(1);
  });
}
