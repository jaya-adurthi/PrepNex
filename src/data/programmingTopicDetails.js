// Comprehensive Topic Details Repository for Python, Java, HTML, CSS

export const programmingTopicDetails = {
  // ==========================================
  // PYTHON TOPICS
  // ==========================================
  "python-intro": {
    title: "Introduction to Python",
    language: "Python",
    category: "Python Basics",
    difficulty: "Easy",
    estimatedMinutes: 15,
    whatIsIt: "Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and released in 1991.",
    whyUsed: "Python is famous for its clean, human-readable syntax that emphasizes code readability. It is widely used in Web Development, Data Science, AI/ML, Automation, and Competitive Programming.",
    keyPoints: [
      "Interpreted: Executes line-by-line without explicit separate compilation step.",
      "Dynamically Typed: Variable types are checked during runtime, not compile time.",
      "Cross-Platform: Runs on Windows, macOS, Linux, and Unix without code modification.",
      "Large Standard Library: Built-in modules for math, file I/O, regex, web, and networking."
    ],
    syntax: "# Python Hello World\nprint('Hello, PrepNex!')",
    codeExample: `# Simple Python Program
name = "PrepNex Learner"
language = "Python 3"

print(f"Welcome {name} to {language} Placement Preparation!")
print("Python is simple, readable, and powerful.")`,
    expectedOutput: `Welcome PrepNex Learner to Python 3 Placement Preparation!
Python is simple, readable, and powerful.`,
    commonMistakes: [
      "Mixing tabs and spaces for indentation (use 4 spaces consistently).",
      "Forgetting parentheses in print() functions in Python 3."
    ],
    quiz: [
      {
        question: "Who developed Python programming language?",
        options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
        correct: 0,
        explanation: "Guido van Rossum created Python in 1991."
      }
    ]
  },

  "python-operators-all": {
    title: "Python Operators (Complete Guide)",
    language: "Python",
    category: "Operators",
    difficulty: "Easy",
    estimatedMinutes: 25,
    whatIsIt: "Operators are special symbols in Python used to perform operations on variables and values (operands).",
    whyUsed: "Operators allow performing calculations, modifying data, comparing values, testing logic, and checking memory identity.",
    subtopics: [
      { name: "1. Arithmetic Operators", desc: "Used for mathematical calculations: +, -, *, /, // (floor div), % (modulo), ** (exponentiation)." },
      { name: "2. Assignment Operators", desc: "Used to assign values: =, +=, -=, *=, /=, //=, %=, **=." },
      { name: "3. Comparison Operators", desc: "Used to compare two values: ==, !=, >, <, >=, <=." },
      { name: "4. Logical Operators", desc: "Used to combine conditional statements: and, or, not." },
      { name: "5. Bitwise Operators", desc: "Operate on binary bits: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Left shift), >> (Right shift)." },
      { name: "6. Membership Operators", desc: "Test if a sequence contains a value: in, not in." },
      { name: "7. Identity Operators", desc: "Compare memory locations of two objects: is, is not." }
    ],
    syntax: `# Arithmetic: result = a + b
# Comparison: is_equal = (a == b)
# Logical: is_valid = (x > 0) and (y < 10)`,
    codeExample: `# Demonstrating Python Operators
a = 15
b = 4

print("--- Arithmetic Operators ---")
print(f"Addition (a + b): {a + b}")
print(f"Division (a / b): {a / b}")
print(f"Floor Division (a // b): {a // b}")
print(f"Modulo (a % b): {a % b}")
print(f"Exponentiation (a ** b): {a ** b}")

print("\n--- Membership & Identity ---")
nums = [10, 20, 30]
print(f"Is 20 in nums? {20 in nums}")

x = [1, 2]
y = [1, 2]
z = x
print(f"x == y (Equal values): {x == y}")
print(f"x is y (Same memory object): {x is y}")
print(f"x is z (Same memory object): {x is z}")`,
    expectedOutput: `--- Arithmetic Operators ---
Addition (a + b): 19
Division (a / b): 3.75
Floor Division (a // b): 3
Modulo (a % b): 3
Exponentiation (a ** b): 50625

--- Membership & Identity ---
Is 20 in nums? True
x == y (Equal values): True
x is y (Same memory object): False
x is z (Same memory object): True`,
    keyPoints: [
      "Floor division (//) truncates decimal part and returns integer.",
      "Exponentiation (**) raises a number to the power of another.",
      "Identity operator (is) checks if two variables point to the exact same object in memory, while == checks value equality."
    ],
    commonMistakes: [
      "Confusing assignment (=) with equality comparison (==).",
      "Expecting / to return an integer; / always returns a float in Python 3."
    ],
    quiz: [
      {
        question: "What is the output of 17 // 5 in Python?",
        options: ["3.4", "3", "2", "3.0"],
        correct: 1,
        explanation: "17 // 5 is floor division which returns integer 3."
      },
      {
        question: "Which operator checks if two variables refer to the exact same object in memory?",
        options: ["==", "is", "equals", "in"],
        correct: 1,
        explanation: "'is' compares memory address, whereas '==' compares values."
      }
    ]
  },

  "python-if-else": {
    title: "if, if-else, if-elif-else & Nested if",
    language: "Python",
    category: "Control Flow",
    difficulty: "Easy",
    estimatedMinutes: 20,
    whatIsIt: "Control flow statements execute code blocks conditionally based on whether boolean expressions evaluate to True or False.",
    whyUsed: "Allows programs to make decisions, handle edge cases, and run different code branches dynamically.",
    syntax: `if condition1:
    # Code block 1
elif condition2:
    # Code block 2
else:
    # Default code block`,
    codeExample: `marks = 85

if marks >= 90:
    grade = 'A+'
elif marks >= 80:
    grade = 'A'
elif marks >= 70:
    grade = 'B'
else:
    grade = 'C'

print(f"Student Marks: {marks} | Grade: {grade}")`,
    expectedOutput: `Student Marks: 85 | Grade: A`,
    keyPoints: [
      "Python relies on 4-space indentation to demarcate code blocks.",
      "elif stands for 'else if'.",
      "Conditions evaluate non-zero numbers and non-empty collections as True."
    ],
    commonMistakes: [
      "Forgetting the colon (:) at the end of if/elif/else lines.",
      "Inconsistent indentation causing IndentationError."
    ],
    quiz: [
      {
        question: "What is the keyword used for 'else if' in Python?",
        options: ["else if", "elif", "elseif", "if else"],
        correct: 1,
        explanation: "Python uses 'elif'."
      }
    ]
  },

  "python-ds-lists": {
    title: "Python Lists",
    language: "Python",
    category: "Data Structures",
    difficulty: "Easy",
    estimatedMinutes: 25,
    whatIsIt: "Lists are ordered, mutable (changeable) sequences of elements enclosed in square brackets [].",
    whyUsed: "Lists allow storing multiple items of varying data types, dynamic resizing, searching, and sorting.",
    syntax: `fruits = ["apple", "banana", "cherry"]
fruits.append("orange") # Add element
print(fruits[0]) # Access first item`,
    codeExample: `numbers = [10, 20, 30, 40, 50]

# List methods
numbers.append(60)
numbers.insert(1, 15)
popped_val = numbers.pop()

print("Modified List:", numbers)
print("Popped Value:", popped_val)
print("Sliced List [1:4]:", numbers[1:4])`,
    expectedOutput: `Modified List: [10, 15, 20, 30, 40, 50]
Popped Value: 60
Sliced List [1:4]: [15, 20, 30]`,
    keyPoints: [
      "Lists are zero-indexed.",
      "Negative indexing numbers[-1] accesses elements from the end.",
      "List slicing format: list[start:stop:step]."
    ],
    commonMistakes: [
      "Trying to access an index out of range (IndexError).",
      "Confusing append() (adds item) with extend() (merges sequence)."
    ],
    quiz: [
      {
        question: "Which method is used to add an item to the end of a Python list?",
        options: ["append()", "push()", "insert()", "add()"],
        correct: 0,
        explanation: "append() adds a single element to the end of the list."
      }
    ]
  },

  // ==========================================
  // JAVA TOPICS
  // ==========================================
  "java-intro-features": {
    title: "Introduction & Features of Java",
    language: "Java",
    category: "Java Basics",
    difficulty: "Easy",
    estimatedMinutes: 20,
    whatIsIt: "Java is an object-oriented, class-based, high-level programming language developed by Sun Microsystems (now Oracle) in 1995.",
    whyUsed: "Java is widely used in enterprise web applications, Android app development, big data processing (Hadoop), and banking backends due to high security, robustness, and platform independence.",
    keyPoints: [
      "Platform Independent: Java source code (.java) compiles to bytecode (.class) which runs on any OS via JVM ('Write Once, Run Anywhere').",
      "Object-Oriented: Everything in Java revolves around classes, objects, encapsulation, inheritance, and polymorphism.",
      "Robust & Secure: Automatic memory management via Garbage Collection and elimination of explicit pointer arithmetic.",
      "Multithreaded: Built-in support for concurrent execution of multiple threads."
    ],
    syntax: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java Placement Prep!");
    }
}`,
    codeExample: `public class PrepNexJava {
    public static void main(String[] args) {
        String platform = "PrepNex";
        int studentCount = 5000;
        
        System.out.println("Welcome to " + platform + " Java Track!");
        System.out.println("Active Students: " + studentCount);
    }
}`,
    expectedOutput: `Welcome to PrepNex Java Track!
Active Students: 5000`,
    commonMistakes: [
      "File name must match the public class name (e.g. Main.java for public class Main).",
      "Missing static in public static void main(String[] args)."
    ],
    quiz: [
      {
        question: "What does WORA stand for in Java?",
        options: ["Write Once Run Anywhere", "Work On Real Applications", "Windows OS Architecture", "Web Object Oriented Application"],
        correct: 0,
        explanation: "WORA stands for Write Once Run Anywhere."
      }
    ]
  },

  "java-classes-objects": {
    title: "Classes and Objects in Java",
    language: "Java",
    category: "Object-Oriented Programming (OOP)",
    difficulty: "Medium",
    estimatedMinutes: 25,
    whatIsIt: "A class is a user-defined blueprint or template from which individual object instances are created.",
    whyUsed: "Classes group instance variables (state) and methods (behavior) together into structured OOP entities.",
    syntax: `public class Car {
    String model;
    int year;

    void drive() {
        System.out.println(model + " is driving.");
    }
}`,
    codeExample: `class Student {
    String name;
    int rollNo;

    Student(String n, int r) {
        name = n;
        rollNo = r;
    }

    void displayInfo() {
        System.out.println("Roll No: " + rollNo + " | Name: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Alex Johnson", 101);
        Student s2 = new Student("Sara Smith", 102);

        s1.displayInfo();
        s2.displayInfo();
    }
}`,
    expectedOutput: `Roll No: 101 | Name: Alex Johnson
Roll No: 102 | Name: Sara Smith`,
    keyPoints: [
      "Class is a logical entity; Object is a physical memory entity.",
      "The 'new' keyword allocates heap memory for the object.",
      "Constructors initialize state when new objects are created."
    ],
    commonMistakes: [
      "Trying to invoke instance methods directly without instantiating an object or marking method static.",
      "Forgetting to initialize object variables leading to NullPointerException."
    ],
    quiz: [
      {
        question: "Which keyword is used to allocate memory for a new object in Java?",
        options: ["new", "alloc", "create", "instantiate"],
        correct: 0,
        explanation: "The 'new' keyword allocates heap memory for Java objects."
      }
    ]
  },

  // ==========================================
  // HTML TOPICS
  // ==========================================
  "html-intro": {
    title: "Introduction to HTML",
    language: "HTML",
    category: "HTML Essentials",
    difficulty: "Easy",
    estimatedMinutes: 15,
    whatIsIt: "HTML stands for HyperText Markup Language. It is the standard markup language used to create the structure of web pages.",
    whyUsed: "HTML tells web browsers how to format, structure, and display text, images, forms, links, and multimedia content.",
    syntax: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PrepNex HTML Intro</title>
</head>
<body>
  <header>
    <h1>Welcome to PrepNex Web Track</h1>
  </header>
  <main>
    <p>HTML5 provides clean, semantic building blocks for modern web apps.</p>
    <a href="https://prepnex.com" target="_blank">Visit PrepNex Portal</a>
  </main>
</body>
</html>`,
    expectedOutput: `Displays a webpage header "Welcome to PrepNex Web Track", a description paragraph, and a hyperlink to PrepNex Portal.`,
    keyPoints: [
      "<!DOCTYPE html> tells the browser that the document type is HTML5.",
      "<html> is the root element of an HTML page.",
      "<head> contains meta-information and document title.",
      "<body> contains all visible content shown on the webpage."
    ],
    commonMistakes: [
      "Forgetting to close HTML tags (e.g. <h1> without </h1>).",
      "Omitting alt attribute on <img> tags which hurts accessibility."
    ],
    quiz: [
      {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"],
        correct: 0,
        explanation: "HTML stands for HyperText Markup Language."
      }
    ]
  },

  "html-forms-inputs": {
    title: "HTML Forms & Input Types",
    language: "HTML",
    category: "Forms, Media & Features",
    difficulty: "Medium",
    estimatedMinutes: 25,
    whatIsIt: "HTML Forms (<form>) collect user input (text, passwords, checkboxes, dates, files) and send it to a backend server for processing.",
    whyUsed: "Forms are essential for user logins, signups, search bars, feedback forms, and data submission.",
    syntax: `<form action="/api/login" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Submit</button>
</form>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>
  <h2>PrepNex Student Signup Form</h2>
  
  <form action="/submit" method="POST">
    <div>
      <label>Full Name:</label>
      <input type="text" name="fullName" placeholder="John Doe" required>
    </div>
    
    <div>
      <label>Email Address:</label>
      <input type="email" name="email" placeholder="john@example.com" required>
    </div>
    
    <div>
      <label>Password:</label>
      <input type="password" name="password" required>
    </div>

    <div>
      <button type="submit">Register Now</button>
    </div>
  </form>
</body>
</html>`,
    expectedOutput: `Renders an interactive registration form with input fields for Full Name, Email, Password, and a Submit button.`,
    keyPoints: [
      "<form> method can be GET (appends form values to URL) or POST (sends data securely in HTTP request body).",
      "required attribute enforces client-side validation before submission.",
      "Input types include text, email, password, number, date, checkbox, radio, file."
    ],
    commonMistakes: [
      "Using GET for sensitive forms containing passwords.",
      "Forgetting the name attribute on input elements (unnamed inputs are not submitted with form)."
    ],
    quiz: [
      {
        question: "Which HTTP method should be used when submitting sensitive form data such as passwords?",
        options: ["POST", "GET", "PUT", "FETCH"],
        correct: 0,
        explanation: "POST sends form data inside HTTP request body rather than visible URL parameters."
      }
    ]
  },

  // ==========================================
  // CSS TOPICS
  // ==========================================
  "css-intro-syntax": {
    title: "Introduction & CSS Syntax",
    language: "CSS",
    category: "CSS Fundamentals",
    difficulty: "Easy",
    estimatedMinutes: 15,
    whatIsIt: "CSS (Cascading Style Sheets) is the language used to style and lay out web pages created with HTML.",
    whyUsed: "CSS controls colors, fonts, margins, layouts, responsive layouts, animations, and visual presentation across devices.",
    syntax: `/* CSS Rule Structure */
selector {
  property: value;
}`,
    codeExample: `/* External or Internal Style Block */
body {
  background-color: #0f172a;
  color: #f8fafc;
  font-family: 'Inter', sans-serif;
}

.hero-title {
  color: #06b6d4;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
}`,
    expectedOutput: `Applies a dark background (#0f172a), light text (#f8fafc), and cyan centered hero title to the webpage.`,
    keyPoints: [
      "3 Ways to Apply CSS: Inline (style='...'), Internal (<style>), and External (.css file).",
      "External CSS files linked via <link rel='stylesheet' href='style.css'> are best practice.",
      "Cascading Rules: Specificity and order determine which CSS rule wins when conflicts occur."
    ],
    commonMistakes: [
      "Forgetting semicolons (;) at the end of CSS property declarations.",
      "Overusing inline style attributes which makes maintenance hard."
    ],
    quiz: [
      {
        question: "Which HTML tag is used to link an external CSS stylesheet?",
        options: ["<link>", "<style>", "<script>", "<css>"],
        correct: 0,
        explanation: "<link rel='stylesheet' href='styles.css'> is used to link external stylesheets."
      }
    ]
  },

  "css-flexbox": {
    title: "CSS Flexbox Layout Masterclass",
    language: "CSS",
    category: "Layouts & Responsive Web Design",
    difficulty: "Easy",
    estimatedMinutes: 25,
    whatIsIt: "Flexbox (Flexible Box Layout) is a 1-dimensional layout module that aligns and distributes space among elements along a row or column axis.",
    whyUsed: "Flexbox eliminates table hacks and float issues, providing clean centering, equal heights, and flexible alignment.",
    syntax: `.container {
  display: flex;
  flex-direction: row; /* row | column */
  justify-content: space-between; /* main axis */
  align-items: center; /* cross axis */
  gap: 1rem;
}`,
    codeExample: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e293b;
  padding: 1rem 2rem;
  border-radius: 1rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-item {
  color: #38bdf8;
  font-weight: 600;
}`,
    expectedOutput: `Renders a clean flexbox navigation bar with brand logo on the left and spaced navigation items aligned vertically on the right.`,
    keyPoints: [
      "display: flex activates flex container behavior.",
      "justify-content aligns items along the Main Axis (flex-start, center, flex-end, space-between, space-around).",
      "align-items aligns items along the Cross Axis (flex-start, center, flex-end, stretch).",
      "flex-wrap: wrap allows items to drop to next line if container overflows."
    ],
    commonMistakes: [
      "Confusing justify-content (main axis) with align-items (cross axis).",
      "Applying flex properties to child items instead of parent container."
    ],
    quiz: [
      {
        question: "Which Flexbox property controls alignment along the main axis?",
        options: ["justify-content", "align-items", "align-content", "flex-direction"],
        correct: 0,
        explanation: "justify-content aligns items along the main axis."
      }
    ]
  }
};

// Fallback topic detail builder for any requested topic slug
export function getTopicDetail(topicId) {
  if (programmingTopicDetails[topicId]) {
    return programmingTopicDetails[topicId];
  }

  // Generic fallback format if specific detail is not pre-populated
  const readableTitle = topicId
    .replace(/^(python|java|html|css)-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  const lang = topicId.startsWith("python") ? "Python" :
               topicId.startsWith("java") ? "Java" :
               topicId.startsWith("html") ? "HTML" : "CSS";

  return {
    title: readableTitle,
    language: lang,
    category: `${lang} Fundamentals`,
    difficulty: "Easy",
    estimatedMinutes: 20,
    whatIsIt: `${readableTitle} is a core concept in ${lang} programming and web development.`,
    whyUsed: `Understanding ${readableTitle} is critical for writing robust code, answering placement interview questions, and building practical applications.`,
    syntax: `// Basic ${readableTitle} syntax\n// Example usage in ${lang}`,
    codeExample: `// ${readableTitle} Code Example\n// ${lang} demonstration\n\nconsole.log("Mastering ${readableTitle} on PrepNex!");`,
    expectedOutput: `Mastering ${readableTitle} on PrepNex!`,
    keyPoints: [
      `Mastering ${readableTitle} enhances problem solving in ${lang}.`,
      "Follow clean code conventions and proper syntax.",
      "Test edge cases and handle potential errors gracefully."
    ],
    commonMistakes: [
      "Syntax mismatch or missing required block delimiters.",
      "Not checking edge case inputs."
    ],
    quiz: [
      {
        question: `What is the primary objective of ${readableTitle}?`,
        options: [
          `To structure logic cleanly in ${lang}`,
          "To format terminal output",
          "To disable garbage collection",
          "None of the above"
        ],
        correct: 0,
        explanation: `${readableTitle} helps structure clean logic in ${lang}.`
      }
    ]
  };
}
