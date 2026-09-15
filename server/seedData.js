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
    description: 'Complete Python learning path from basic syntax to OOP, Data Structures, and File I/O.',
    icon: 'Terminal',
    total_topics: 7,
    level: 'Beginner to Advanced'
  },
  {
    id: 'java-programming',
    title: 'Java Core & Advanced',
    slug: 'java',
    category: 'PROGRAMMING',
    description: 'Master Java syntax, OOP principles, Collections framework, and Exception handling.',
    icon: 'Terminal',
    total_topics: 6,
    level: 'Beginner to Advanced'
  },
  {
    id: 'c-programming',
    title: 'C Programming',
    slug: 'c-lang',
    category: 'PROGRAMMING',
    description: 'Master low-level programming concepts, memory management, pointers, and structures.',
    icon: 'Terminal',
    total_topics: 6,
    level: 'Beginner to Intermediate'
  },
  {
    id: 'html-css-web',
    title: 'HTML & CSS Web Development',
    slug: 'html-css',
    category: 'PROGRAMMING',
    description: 'Build modern responsive web layouts using HTML5, CSS Flexbox, Grid, and animations.',
    icon: 'Terminal',
    total_topics: 5,
    level: 'Beginner'
  },
  {
    id: 'javascript-programming',
    title: 'JavaScript Modern ES6+',
    slug: 'javascript',
    category: 'PROGRAMMING',
    description: 'Master modern JS syntax, DOM manipulation, Promises, Async/Await, and Web APIs.',
    icon: 'Terminal',
    total_topics: 4,
    level: 'Beginner to Intermediate'
  },
  {
    id: 'sql-database',
    title: 'SQL & Database Management',
    slug: 'sql',
    category: 'PROGRAMMING',
    description: 'Master relational database queries, JOINs, aggregations, DDL, DML, and table design.',
    icon: 'Terminal',
    total_topics: 3,
    level: 'Beginner to Intermediate'
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

  // --- PYTHON TOPICS ---
  {
    id: 'python-basics',
    course_id: 'python-programming',
    title: '1. Python Syntax & Variables',
    category: 'Python Basics',
    order_index: 1,
    description: 'Introduction to Python, dynamic typing, variables, input/output, and basic operators.',
    estimated_minutes: 20,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Python is a high-level, interpreted programming language known for readability and clean indentation-based syntax.',
      code_snippets: [
        `# Python Variables & Dynamic Typing\nname = "PrepNex"\nage = 20\nis_active = True\n\nprint(f"Welcome to {name}! System active: {is_active}")`,
        `# User Input & Type Conversion\nscore_str = "85"\nscore_num = int(score_str)\nprint("Updated score:", score_num + 10)`
      ],
      key_rules: [
        'Indentation (4 spaces) defines code blocks instead of curly braces {}.',
        'Variables do not require explicit type declaration.',
        'Use f-strings for concise string formatting: f"Value: {val}"'
      ],
      solved_examples: [
        { question: 'Write a Python snippet to swap two variables without a third variable.', solution: 'a, b = b, a' }
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
    id: 'python-control-flow',
    course_id: 'python-programming',
    title: '2. Control Flow: Conditionals & Loops',
    category: 'Python Control Flow',
    order_index: 2,
    description: 'If-elif-else statements, for loops, while loops, range(), break, and continue.',
    estimated_minutes: 25,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Control flow structures direct program execution based on conditions and repeat logic over sequences using loops.',
      code_snippets: [
        `# For Loop with range()\nfor i in range(1, 6):\n    if i % 2 == 0:\n        print(f"{i} is Even")\n    else:\n        print(f"{i} is Odd")`
      ],
      key_rules: [
        'range(start, stop, step) generates sequence excluding stop value.',
        'break exits loop immediately; continue skips to next iteration.',
        'Python supports optional else clause on for and while loops.'
      ],
      solved_examples: [
        { question: 'Sum of numbers from 1 to N using range.', solution: 'n = 10; total = sum(range(1, n+1))' }
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What does list(range(2, 8, 2)) return?',
          options: ['[2, 4, 6]', '[2, 4, 6, 8]', '[2, 3, 4, 5, 6, 7]', '[4, 6, 8]'],
          correct: 0,
          explanation: 'range(2, 8, 2) starts at 2, steps by 2, and stops before 8 -> [2, 4, 6].'
        }
      ]
    })
  },
  {
    id: 'python-lists-tuples',
    course_id: 'python-programming',
    title: '3. Data Structures: Lists & Tuples',
    category: 'Python Data Structures',
    order_index: 3,
    description: 'Mutable lists vs Immutable tuples, list comprehensions, slicing, and operations.',
    estimated_minutes: 25,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Lists are ordered, mutable sequences. Tuples are ordered, immutable sequences defined with parentheses ().',
      code_snippets: [
        `# List Comprehension example\nnumbers = [1, 2, 3, 4, 5, 6]\nevens_squared = [x**2 for x in numbers if x % 2 == 0]\nprint(evens_squared) # Output: [4, 16]`
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
    id: 'python-dicts-sets',
    course_id: 'python-programming',
    title: '4. Dictionaries & Sets',
    category: 'Python Data Structures',
    order_index: 4,
    description: 'Key-value mapping dictionaries, set operations, uniqueness, and hash map applications.',
    estimated_minutes: 25,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'Dictionaries store key-value pairs with O(1) average lookup time. Sets store unique, unordered elements.',
      code_snippets: [
        `# Dictionary Operations\nstudent = {"name": "Alex", "roll": 101, "marks": 95}\nprint(student.get("name"))\n\n# Set Uniqueness\nnums = [1, 2, 2, 3, 4, 4, 5]\nunique_nums = set(nums)\nprint(unique_nums) # {1, 2, 3, 4, 5}`
      ],
      key_rules: [
        'Dictionary keys must be immutable types (strings, numbers, tuples).',
        'set.add() inserts elements; set operations include union (|) and intersection (&).'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the average time complexity to look up a key in a Python dictionary?',
          options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
          correct: 0,
          explanation: 'Python dictionaries are implemented using hash tables with O(1) average lookup.'
        }
      ]
    })
  },
  {
    id: 'python-functions-modules',
    course_id: 'python-programming',
    title: '5. Functions, Lambda & Modules',
    category: 'Functions & Modules',
    order_index: 5,
    description: 'Def, return values, default parameters, *args, **kwargs, lambda expressions, and import.',
    estimated_minutes: 30,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'Functions organize reusable blocks of code. Lambda expressions provide anonymous single-expression functions.',
      code_snippets: [
        `# Function with *args and **kwargs\ndef calculate_total(*args, discount=0):\n    subtotal = sum(args)\n    return subtotal * (1 - discount)\n\nprint(calculate_total(100, 200, 300, discount=0.10)) # Output: 540.0`
      ],
      key_rules: [
        '*args collects extra positional arguments into a tuple.',
        '**kwargs collects keyword arguments into a dictionary.',
        'Lambda syntax: lambda x, y: x + y'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the result of (lambda x: x * 2)(5)?',
          options: ['10', '25', '52', 'Error'],
          correct: 0,
          explanation: 'Lambda evaluates 5 * 2 = 10.'
        }
      ]
    })
  },
  {
    id: 'python-oop',
    course_id: 'python-programming',
    title: '6. Object-Oriented Programming (OOP)',
    category: 'Object Oriented Python',
    order_index: 6,
    description: 'Classes, __init__ constructor, self parameter, inheritance, encapsulation, and polymorphism.',
    estimated_minutes: 35,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'OOP bundles data attributes and method behaviors into reusable class objects.',
      code_snippets: [
        `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def greet(self):\n        return f"Hello, my name is {self.name}"\n\np1 = Person("Alice", 22)\nprint(p1.greet())`
      ],
      key_rules: [
        '__init__() is automatically invoked when creating a class instance.',
        'self represents the instance of the object itself.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the purpose of __init__ in Python classes?',
          options: ['Constructor method to initialize object attributes', 'Destructor method', 'Static method initializer', 'Private module declaration'],
          correct: 0,
          explanation: '__init__ acts as the constructor method in Python.'
        }
      ]
    })
  },
  {
    id: 'python-exception-files',
    course_id: 'python-programming',
    title: '7. Exception Handling & File I/O',
    category: 'Advanced Python',
    order_index: 7,
    description: 'Try-except-finally blocks, custom exceptions, reading/writing files using with open().',
    estimated_minutes: 30,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'Exception handling prevents program crashes on runtime errors. File I/O allows reading and writing persistent files.',
      code_snippets: [
        `# Safe File Writing using "with" context manager\nwith open("data.txt", "w") as f:\n    f.write("PrepNex Placement Data\n")\n\n# Exception Handling\ntry:\n    num = int("abc")\nexcept ValueError as e:\n    print("Caught invalid number format:", e)`
      ],
      key_rules: [
        'The with statement ensures files are closed automatically after block execution.',
        'try block contains risky code; except catches runtime errors.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Why is using "with open(...) as f" preferred for file operations in Python?',
          options: ['It automatically closes the file even if exceptions occur', 'It encrypts file content', 'It makes file reading 10x faster', 'It enables multi-threading'],
          correct: 0,
          explanation: 'Context manager automatically calls f.close() upon exit.'
        }
      ]
    })
  },

  // --- JAVA TOPICS ---
  {
    id: 'java-syntax-variables',
    course_id: 'java-programming',
    title: '1. Java Syntax & Primitive Types',
    category: 'Java Basics',
    order_index: 1,
    description: 'Java JDK setup, main method, strongly-typed variables, primitive types, and operators.',
    estimated_minutes: 20,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Java is a statically-typed, object-oriented, compiled language executed on the Java Virtual Machine (JVM).',
      code_snippets: [
        `public class Hello {\n    public static void main(String[] args) {\n        int score = 95;\n        double price = 19.99;\n        boolean isPass = true;\n        System.out.println("Score: " + score + ", Status: " + isPass);\n    }\n}`
      ],
      key_rules: [
        'Every Java application must have a main class and public static void main method.',
        'Java requires explicit data type declaration (int, double, char, boolean).'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the default size of an int data type in Java?',
          options: ['32 bits (4 bytes)', '16 bits (2 bytes)', '64 bits (8 bytes)', '8 bits (1 byte)'],
          correct: 0,
          explanation: 'Java int is a signed 32-bit integer.'
        }
      ]
    })
  },
  {
    id: 'java-control-loops',
    course_id: 'java-programming',
    title: '2. Control Flow, Loops & Arrays',
    category: 'Java Fundamentals',
    order_index: 2,
    description: 'If-else statements, switch-case, for, while, enhanced for-each loop, and 1D/2D arrays.',
    estimated_minutes: 25,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Arrays store fixed-size sequential elements of same type. Control flow manages conditional execution.',
      code_snippets: [
        `int[] numbers = {10, 20, 30, 40};\nfor (int num : numbers) {\n    System.out.println("Element: " + num);\n}`
      ],
      key_rules: [
        'Arrays have fixed length (numbers.length).',
        'Enhanced for-each loop simplifies sequential array iteration.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What happens if you access index arr[5] on an array of length 5 in Java?',
          options: ['ArrayIndexOutOfBoundsException', 'Returns 0', 'Returns null', 'Compiler error'],
          correct: 0,
          explanation: 'Indices are 0 to 4. Index 5 throws ArrayIndexOutOfBoundsException at runtime.'
        }
      ]
    })
  },
  {
    id: 'java-oop-basics',
    course_id: 'java-programming',
    title: '3. Java Object-Oriented Programming (OOP)',
    category: 'Core Java',
    order_index: 3,
    description: 'Classes, Objects, Constructors, Encapsulation, and access modifiers.',
    estimated_minutes: 30,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'Java is an object-oriented language where software is organized around classes and objects representing real-world entities.',
      code_snippets: [
        `public class Student {\n    private String name;\n    private int score;\n\n    public Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n\n    public String getName() { return name; }\n    public int getScore() { return score; }\n}`
      ],
      key_rules: [
        'Encapsulation hides state by making fields private and exposing getters/setters.',
        'The constructor initializes new object instances.'
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

  // --- C PROGRAMMING TOPICS ---
  {
    id: 'c-syntax-variables',
    course_id: 'c-programming',
    title: '1. C Fundamentals & Data Types',
    category: 'C Basics',
    order_index: 1,
    description: 'C compilation model, main(), printf, scanf, data types (int, float, char, double).',
    estimated_minutes: 20,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'C is a general-purpose procedural programming language that provides low-level memory access and efficient compilation.',
      code_snippets: [
        `#include <stdio.h>\n\nint main() {\n    int age = 21;\n    float gpa = 3.8;\n    printf("Age: %d, GPA: %.2f\n", age, gpa);\n    return 0;\n}`
      ],
      key_rules: [
        '#include <stdio.h> provides standard I/O functions printf and scanf.',
        'Format specifiers: %d for int, %f for float, %c for char, %s for string.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Which format specifier is used to read an integer with scanf in C?',
          options: ['%d', '%f', '%s', '%c'],
          correct: 0,
          explanation: '%d formats decimal signed integers.'
        }
      ]
    })
  },
  {
    id: 'c-pointers',
    course_id: 'c-programming',
    title: '2. C Pointers & Memory Management',
    category: 'Core C',
    order_index: 2,
    description: 'Memory addresses, pointer arithmetic, dereferencing, malloc, and free.',
    estimated_minutes: 35,
    difficulty: 'Hard',
    content_json: JSON.stringify({
      concept: 'Pointers store the memory address of another variable. They enable efficient dynamic memory allocation and array manipulation in C.',
      code_snippets: [
        `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int val = 42;\n    int *ptr = &val;\n    printf("Value: %d, Address: %p\n", *ptr, (void*)ptr);\n\n    int *arr = (int*) malloc(5 * sizeof(int));\n    if (arr != NULL) {\n        arr[0] = 10;\n        free(arr);\n    }\n    return 0;\n}`
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
          options: ['It results in a memory leak', 'C automatically frees it immediately', 'A runtime segmentation fault occurs', 'The compiler rejects compilation'],
          correct: 0,
          explanation: 'Allocated heap memory stays reserved until explicitly freed or operating system cleans process.'
        }
      ]
    })
  },

  // --- HTML & CSS TOPICS ---
  {
    id: 'html-syntax-tags',
    course_id: 'html-css-web',
    title: '1. HTML5 Fundamentals & Semantic Tags',
    category: 'HTML Core',
    order_index: 1,
    description: 'HTML document structure, headings, paragraphs, lists, links, images, and semantic tags (header, nav, section, footer).',
    estimated_minutes: 20,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'HTML (HyperText Markup Language) defines the content structure of web pages using markup tags.',
      code_snippets: [
        `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>PrepNex Web</title>\n</head>\n<body>\n  <header>\n    <h1>Welcome to PrepNex</h1>\n  </header>\n  <main>\n    <p>Placement preparation portal.</p>\n  </main>\n</body>\n</html>`
      ],
      key_rules: [
        '<!DOCTYPE html> specifies HTML5 document type.',
        'Semantic tags (<header>, <nav>, <article>, <section>, <footer>) improve accessibility and SEO.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Which HTML5 semantic tag should contain main navigation links?',
          options: ['<nav>', '<header>', '<menu>', '<links>'],
          correct: 0,
          explanation: '<nav> represents a section of a page that links to other pages or to parts within the page.'
        }
      ]
    })
  },
  {
    id: 'html-css-flexbox',
    course_id: 'html-css-web',
    title: '2. CSS Flexbox Layout Masterclass',
    category: 'CSS Layouts',
    order_index: 2,
    description: 'Flex container, flex items, main axis, cross axis, justify-content, and align-items.',
    estimated_minutes: 25,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'Flexbox (Flexible Box Layout) provides an efficient way to layout, align and distribute space among items in a container.',
      code_snippets: [
        `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: #0f172a;\n}\n\n.nav-links {\n  display: flex;\n  gap: 1.5rem;\n  list-style: none;\n}`
      ],
      key_rules: [
        'display: flex creates a flex container.',
        'justify-content aligns items along the main axis.',
        'align-items aligns items along the cross axis.'
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
  },

  // --- JAVASCRIPT TOPICS ---
  {
    id: 'js-basics-variables',
    course_id: 'javascript-programming',
    title: '1. JavaScript Variables & ES6+ Syntax',
    category: 'JS Basics',
    order_index: 1,
    description: 'var vs let vs const, scope, template literals, destructuring, and arrow functions.',
    estimated_minutes: 20,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'JavaScript is a lightweight, compiled/interpreted scripting language for modern web development.',
      code_snippets: [
        `const name = "PrepNex";\nlet score = 95;\n\n// Template literal & Arrow Function\nconst greet = (user) => \`Hello \${user}, your score is \${score}\`;\nconsole.log(greet(name));`
      ],
      key_rules: [
        'const creates immutable variable bindings.',
        'let creates block-scoped mutable variables.',
        'Template literals use backticks \`...\${var}...\`'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the main difference between let and const in JavaScript?',
          options: [
            'const bindings cannot be reassigned; let bindings can be reassigned',
            'let is function scoped; const is global',
            'const can only store numbers',
            'There is no difference'
          ],
          correct: 0,
          explanation: 'const prevents re-assignment of the variable identifier.'
        }
      ]
    })
  },
  {
    id: 'js-async-promises',
    course_id: 'javascript-programming',
    title: '2. Asynchronous JS: Promises & Async/Await',
    category: 'Advanced JS',
    order_index: 2,
    description: 'Event loop, callback queue, Promises, async/await syntax, and fetch API requests.',
    estimated_minutes: 25,
    difficulty: 'Medium',
    content_json: JSON.stringify({
      concept: 'Asynchronous JavaScript executes non-blocking operations like HTTP requests without freezing the main thread.',
      code_snippets: [
        `async function fetchUserData(userId) {\n  try {\n    const res = await fetch(\`/api/user/\${userId}\`);\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error("Fetch error:", err);\n  }\n}`
      ],
      key_rules: [
        'async functions always return a Promise.',
        'await pauses execution until Promise resolves or rejects.',
        'Wrap await calls inside try...catch for error handling.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What does an async function in JavaScript return by default?',
          options: ['A Promise', 'An Object', 'Undefined', 'A Callback'],
          correct: 0,
          explanation: 'Functions declared with async keyword implicitly return a Promise.'
        }
      ]
    })
  },

  // --- SQL TOPICS ---
  {
    id: 'sql-basics-queries',
    course_id: 'sql-database',
    title: '1. SQL SELECT Queries & Data Filtering',
    category: 'SQL Basics',
    order_index: 1,
    description: 'SELECT, FROM, WHERE, ORDER BY, GROUP BY, HAVING, and aggregate functions (COUNT, SUM, AVG).',
    estimated_minutes: 20,
    difficulty: 'Easy',
    content_json: JSON.stringify({
      concept: 'SQL (Structured Query Language) is used to query and manipulate data in relational databases.',
      code_snippets: [
        `SELECT department, COUNT(*) as total_employees, AVG(salary) as avg_salary\nFROM employees\nWHERE status = 'Active'\nGROUP BY department\nHAVING AVG(salary) > 50000\nORDER BY avg_salary DESC;`
      ],
      key_rules: [
        'WHERE filters individual rows before grouping.',
        'GROUP BY groups rows sharing common attribute values.',
        'HAVING filters grouped aggregates after GROUP BY.'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Which SQL clause is used to filter aggregated group results?',
          options: ['HAVING', 'WHERE', 'ORDER BY', 'GROUP BY'],
          correct: 0,
          explanation: 'HAVING filters aggregated groups (e.g. HAVING COUNT(*) > 5).'
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
      `INSERT OR REPLACE INTO courses (id, title, slug, category, description, icon, total_topics, level)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [c.id, c.title, c.slug, c.category, c.description, c.icon, c.total_topics, c.level]
    );
  }

  for (const t of topicsData) {
    await db.run(
      `INSERT OR REPLACE INTO course_topics (id, course_id, title, category, order_index, description, content_json, estimated_minutes, leetcode_url, difficulty)
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
