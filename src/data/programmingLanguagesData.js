// Comprehensive Programming Languages Dataset (Python, Java, HTML, CSS)

export const programmingLanguagesData = {
  python: {
    id: 'python',
    name: 'Python',
    title: 'Python Programming',
    badge: 'Popular & Versatile',
    icon: '🐍',
    color: 'amber',
    gradient: 'from-amber-500/20 via-yellow-500/10 to-slate-900 border-amber-500/30 text-amber-400',
    description: 'Master Python from basic syntax, operators, control flow, and data structures to functions, modules, and Object-Oriented Programming (OOP).',
    totalTopics: 32,
    categories: [
      {
        id: 'python-basics',
        title: 'Python Basics',
        description: 'Core concepts, syntax, variables, data types, and input/output.',
        topics: [
          { id: 'python-intro', title: 'Introduction to Python', description: 'What is Python, history, features, and why it is widely used.' },
          { id: 'python-features', title: 'Features of Python', description: 'Interpreted, dynamically typed, high-level, garbage-collected language features.' },
          { id: 'python-variables', title: 'Variables', description: 'Creating variables, naming rules, dynamic typing, and memory assignment.' },
          { id: 'python-data-types', title: 'Data Types', description: 'Integers, floats, complex, booleans, strings, and built-in type checking.' },
          { id: 'python-type-casting', title: 'Type Casting', description: 'Implicit and explicit type conversion using int(), float(), str(), list(), etc.' },
          { id: 'python-input-output', title: 'Input and Output', description: 'Using print(), f-strings, input(), format specifiers, and sep/end parameters.' },
          { id: 'python-comments', title: 'Comments', description: 'Single-line (#) and multi-line comments ("""...""") and docstrings.' },
          { id: 'python-keywords-identifiers', title: 'Keywords and Identifiers', description: 'Reserved words in Python, keyword module, identifier naming rules.' }
        ]
      },
      {
        id: 'python-operators',
        title: 'Operators',
        description: 'Comprehensive guide to all 7 operator types and operator precedence in Python.',
        topics: [
          { id: 'python-operators-all', title: 'Operators Overview', description: 'What are operators, why they are used, and 7 core operator categories.' },
          { id: 'python-op-arithmetic', title: 'Arithmetic Operators', description: '+, -, *, /, // (floor division), % (modulo), ** (exponentiation).' },
          { id: 'python-op-assignment', title: 'Assignment Operators', description: '=, +=, -=, *=, /=, //=, %=, **=, &=, |=, ^=.' },
          { id: 'python-op-comparison', title: 'Comparison Operators', description: '==, !=, >, <, >=, <= returning boolean results.' },
          { id: 'python-op-logical', title: 'Logical Operators', description: 'and, or, not logic and short-circuit evaluation.' },
          { id: 'python-op-bitwise', title: 'Bitwise Operators', description: '& (AND), | (OR), ^ (XOR), ~ (NOT), << (Left Shift), >> (Right Shift).' },
          { id: 'python-op-membership', title: 'Membership Operators', description: 'in and not in operators with sequences and sets.' },
          { id: 'python-op-identity', title: 'Identity Operators', description: 'is and is not operators for checking object memory identity vs equality.' },
          { id: 'python-op-precedence', title: 'Operator Precedence', description: 'Order of evaluation, PEMDAS rules, and parenthetical grouping.' }
        ]
      },
      {
        id: 'python-control-flow',
        title: 'Control Flow',
        description: 'Conditional execution, loops, and loop control statements.',
        topics: [
          { id: 'python-if-else', title: 'if, if-else, if-elif-else & Nested if', description: 'Decision making with boolean conditions, elif chains, and nested conditionals.' },
          { id: 'python-for-loop', title: 'for Loop & range()', description: 'Iterating over sequences, range(start, stop, step), and list iteration.' },
          { id: 'python-while-loop', title: 'while Loop', description: 'Condition-based repetition, infinite loops, and sentinel values.' },
          { id: 'python-break-continue-pass', title: 'break, continue & pass', description: 'Loop control keywords: breaking loops, skipping iterations, and placeholder pass.' }
        ]
      },
      {
        id: 'python-data-structures',
        title: 'Data Structures',
        description: 'Built-in Python collections: Strings, Lists, Tuples, Sets, and Dictionaries.',
        topics: [
          { id: 'python-ds-strings', title: 'Strings', description: 'String creation, immutability, slicing [::], formatting, and string methods.' },
          { id: 'python-ds-lists', title: 'Lists', description: 'Mutable sequences, indexing, append/extend/pop methods, and list operations.' },
          { id: 'python-ds-tuples', title: 'Tuples', description: 'Immutable ordered collections, tuple unpacking, single-element tuple (val,).' },
          { id: 'python-ds-sets', title: 'Sets', description: 'Unordered unique collections, set union (|), intersection (&), difference (-).' },
          { id: 'python-ds-dicts', title: 'Dictionaries', description: 'Key-value pairs, hash map lookups, dict methods, and key iteration.' }
        ]
      },
      {
        id: 'python-functions',
        title: 'Functions',
        description: 'Defining functions, parameters, return values, args, kwargs, and lambda.',
        topics: [
          { id: 'python-fn-basics', title: 'Functions & Scope', description: 'Defining functions with def, parameters, arguments, return statement, and local vs global scope.' },
          { id: 'python-fn-arguments', title: 'Default & Keyword Arguments', description: 'Default parameter values, keyword argument passing, positional-only and keyword-only.' },
          { id: 'python-fn-args-kwargs', title: '*args and **kwargs', description: 'Variable-length positional arguments (*args) and keyword arguments (**kwargs).' },
          { id: 'python-fn-lambda', title: 'Lambda Functions', description: 'Anonymous single-expression functions: lambda x: x * 2, map(), filter().' },
          { id: 'python-fn-recursion', title: 'Recursion', description: 'Function calling itself, base case, call stack, and recursive factorial/fibonacci.' }
        ]
      },
      {
        id: 'python-advanced-oop',
        title: 'Advanced & OOP',
        description: 'Comprehensions, Exception Handling, File I/O, Modules, and OOP pillars.',
        topics: [
          { id: 'python-list-comprehension', title: 'List Comprehension', description: 'Concise list creation: [x**2 for x in range(10) if x % 2 == 0].' },
          { id: 'python-exception-handling', title: 'Exception Handling', description: 'try, except, else, finally blocks and custom exception raising.' },
          { id: 'python-file-handling', title: 'File Handling', description: 'Opening, reading, writing, appending files using with open() context manager.' },
          { id: 'python-modules-packages', title: 'Modules and Packages', description: 'Creating modules, importing standard libraries (math, os, sys, random), __name__ == "__main__".' },
          { id: 'python-classes-objects', title: 'Classes and Objects', description: 'Defining classes, instantiating objects, self parameter, and attributes.' },
          { id: 'python-constructors', title: 'Constructors (__init__)', description: 'The __init__ initializer method, instance variables vs class variables.' },
          { id: 'python-inheritance', title: 'Inheritance & Polymorphism', description: 'Single/Multiple inheritance, super() call, method overriding, and duck typing.' },
          { id: 'python-encapsulation', title: 'Encapsulation & Private Members', description: 'Encapsulation, public, protected (_var), and private (__var) attribute mangling.' }
        ]
      }
    ]
  },

  java: {
    id: 'java',
    name: 'Java',
    title: 'Java Core & Advanced',
    badge: 'Enterprise & OOP',
    icon: '☕',
    color: 'orange',
    gradient: 'from-orange-500/20 via-amber-500/10 to-slate-900 border-orange-500/30 text-orange-400',
    description: 'Master Java from core syntax, JVM internals, control statements, and arrays to object-oriented programming, exception handling, and collections.',
    totalTopics: 24,
    categories: [
      {
        id: 'java-basics',
        title: 'Java Basics',
        description: 'Fundamental syntax, JVM architecture, data types, operators, and loops.',
        topics: [
          { id: 'java-intro-features', title: 'Introduction & Features of Java', description: 'Platform independence, "Write Once Run Anywhere" (WORA), object-oriented, secure, robust.' },
          { id: 'java-jdk-jre-jvm', title: 'JDK, JRE, and JVM Architecture', description: 'Bytecode execution flow: Java Compiler -> Bytecode (.class) -> JVM JIT compiler -> Machine code.' },
          { id: 'java-variables-datatypes', title: 'Variables & Primitive Data Types', description: 'byte, short, int, long, float, double, char, boolean, variable declaration rules.' },
          { id: 'java-type-casting', title: 'Type Casting', description: 'Implicit widening casting and explicit narrowing casting with (type) syntax.' },
          { id: 'java-input-output', title: 'Input and Output (Scanner & System.out)', description: 'System.out.println(), Scanner class, BufferedReader, and format specifiers.' },
          { id: 'java-operators', title: 'Operators in Java', description: 'Arithmetic, relational, logical, bitwise, assignment, ternary (?:), and instanceOf.' },
          { id: 'java-control-statements', title: 'Control Statements & Loops', description: 'if-else, switch-case, for loop, while, do-while, break, continue, and labeled loops.' },
          { id: 'java-arrays', title: 'Arrays (1D & 2D)', description: 'Fixed-size homogenous arrays, memory allocation, multi-dimensional arrays, and java.util.Arrays.' },
          { id: 'java-strings', title: 'Strings & String Method API', description: 'String immutability, String pool, StringBuilder vs StringBuffer for mutable strings.' }
        ]
      },
      {
        id: 'java-oop',
        title: 'Object-Oriented Programming (OOP)',
        description: 'The 4 pillars of OOP: Encapsulation, Inheritance, Polymorphism, Abstraction, and Interfaces.',
        topics: [
          { id: 'java-classes-objects', title: 'Classes and Objects', description: 'Blueprint vs Object instance, state and behavior, new keyword, and garbage collection.' },
          { id: 'java-constructors', title: 'Constructors', description: 'Default, parameterized constructors, constructor overloading, and this() call.' },
          { id: 'java-inheritance', title: 'Inheritance', description: 'Single, Multilevel, Hierarchical inheritance, extends keyword, and super keyword.' },
          { id: 'java-polymorphism', title: 'Polymorphism', description: 'Compile-time polymorphism (Method Overloading) vs Runtime polymorphism (Method Overriding).' },
          { id: 'java-encapsulation', title: 'Encapsulation & Access Modifiers', description: 'Private fields, getters/setters, access levels: private, default, protected, public.' },
          { id: 'java-abstraction', title: 'Abstraction & Abstract Classes', description: 'Hiding implementation details using abstract keyword, abstract vs concrete methods.' },
          { id: 'java-interfaces', title: 'Interfaces', description: 'Multiple inheritance using interfaces, default & static interface methods, functional interfaces.' }
        ]
      },
      {
        id: 'java-advanced',
        title: 'Advanced Java Topics',
        description: 'Exception Handling, Collections Framework, Packages, Static/Final, and Multithreading.',
        topics: [
          { id: 'java-methods-static-final', title: 'Methods, Static & Final Keywords', description: 'Method creation, static variables/methods, static block, final variables/methods/classes.' },
          { id: 'java-packages', title: 'Packages', description: 'Organizing classes into packages, import statement, built-in java.lang, java.util packages.' },
          { id: 'java-exception-handling', title: 'Exception Handling', description: 'try, catch, finally, throw, throws, Checked vs Unchecked exceptions, custom exceptions.' },
          { id: 'java-collections', title: 'Collections Framework', description: 'List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap), Queue.' },
          { id: 'java-multithreading', title: 'Multithreading Basics', description: 'Thread class, Runnable interface, thread lifecycle, synchronization, and race conditions.' }
        ]
      }
    ]
  },

  html: {
    id: 'html',
    name: 'HTML',
    title: 'HTML5 Web Development',
    badge: 'Web Fundamentals',
    icon: '🌐',
    color: 'pink',
    gradient: 'from-pink-500/20 via-rose-500/10 to-slate-900 border-pink-500/30 text-pink-400',
    description: 'Learn HTML5 from scratch: Document structure, tags, elements, forms, semantic markup, multimedia, and modern HTML5 APIs.',
    totalTopics: 18,
    categories: [
      {
        id: 'html-core',
        title: 'HTML Essentials',
        description: 'Basic document layout, text tags, links, images, and lists.',
        topics: [
          { id: 'html-intro', title: 'Introduction to HTML', description: 'What is HTML, web browser rendering, HTTP request/response, and HTML history.' },
          { id: 'html-structure', title: 'HTML Document Structure', description: '<!DOCTYPE html>, <html>, <head>, <body>, meta tags, and document title.' },
          { id: 'html-elements-attributes', title: 'Elements and Attributes', description: 'Opening/closing tags, self-closing tags, attributes (id, class, src, href, alt, style).' },
          { id: 'html-headings-paragraphs', title: 'Headings and Paragraphs', description: '<h1> to <h6> heading hierarchy, <p>, line breaks <br>, horizontal rules <hr>.' },
          { id: 'html-links-images', title: 'Links and Images', description: 'Anchor tag <a>, href, target="_blank", image tag <img>, alt text, width, height.' },
          { id: 'html-lists', title: 'Lists (Ordered & Unordered)', description: 'Unordered <ul>, ordered <ol>, list items <li>, definition lists <dl>, <dt>, <dd>.' },
          { id: 'html-tables', title: 'Tables', description: '<table>, <tr>, <th>, <td>, <thead>, <tbody>, <tfoot>, colspan, and rowspan attributes.' }
        ]
      },
      {
        id: 'html-forms-semantic',
        title: 'Forms, Media & HTML5 Features',
        description: 'Interactive forms, input validation, semantic elements, and multimedia.',
        topics: [
          { id: 'html-forms-inputs', title: 'Forms and Input Types', description: '<form>, action, method (GET/POST), <input type="text|password|email|number|date">.' },
          { id: 'html-buttons-controls', title: 'Buttons & Selection Controls', description: '<button>, radio buttons, checkboxes, dropdown <select>, <option>, <textarea>.' },
          { id: 'html-semantic-html', title: 'Semantic HTML5', description: '<header>, <nav>, <main>, <section>, <article>, <aside>, <footer> for clean document structure.' },
          { id: 'html-audio-video', title: 'Audio and Video Integration', description: '<audio controls>, <video controls width="...">, <source>, autoplay, loop attributes.' },
          { id: 'html-iframe', title: 'iframe (Inline Frames)', description: 'Embedding external web pages, YouTube videos, maps with <iframe>, src, and sandbox.' },
          { id: 'html5-features', title: 'HTML5 Advanced Features', description: 'Canvas API, LocalStorage/SessionStorage, Geolocation, and Drag & Drop basics.' }
        ]
      }
    ]
  },

  css: {
    id: 'css',
    name: 'CSS',
    title: 'CSS3 & Responsive Design',
    badge: 'Styling & Layouts',
    icon: '🎨',
    color: 'blue',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-slate-900 border-blue-500/30 text-blue-400',
    description: 'Master CSS3: Selectors, colors, box model, Flexbox, CSS Grid, animations, and responsive media queries.',
    totalTopics: 18,
    categories: [
      {
        id: 'css-basics',
        title: 'CSS Fundamentals',
        description: 'Syntax, selectors, colors, typography, and box model.',
        topics: [
          { id: 'css-intro-syntax', title: 'Introduction & CSS Syntax', description: 'Inline, Internal <style>, External .css files, selector { property: value; } syntax.' },
          { id: 'css-selectors', title: 'CSS Selectors', description: 'Element, Class (.class), ID (#id), Grouping, Combinators (descendant, child, sibling).' },
          { id: 'css-colors-backgrounds', title: 'Colors & Backgrounds', description: 'HEX, RGB, RGBA, HSL, background-color, background-image, linear-gradient.' },
          { id: 'css-borders-margins-padding', title: 'Borders, Margins, and Padding', description: 'border styles, margin (outer space), padding (inner space), shorthand properties.' },
          { id: 'css-box-model', title: 'CSS Box Model', description: 'Content + Padding + Border + Margin, box-sizing: border-box vs content-box.' },
          { id: 'css-text-fonts', title: 'Text Formatting & Web Fonts', description: 'font-family, font-size, font-weight, text-align, line-height, Google Fonts integration.' }
        ]
      },
      {
        id: 'css-layouts-responsive',
        title: 'Layouts & Responsive Web Design',
        description: 'Flexbox, CSS Grid, positioning, display, and media queries.',
        topics: [
          { id: 'css-display-position', title: 'Display & Position Properties', description: 'display: block, inline, inline-block, none; position: static, relative, absolute, fixed, sticky.' },
          { id: 'css-flexbox', title: 'Flexbox Layout Masterclass', description: 'display: flex, flex-direction, justify-content, align-items, flex-wrap, gap.' },
          { id: 'css-grid', title: 'CSS Grid Layout', description: 'display: grid, grid-template-columns, grid-template-rows, gap, fr units, minmax().' },
          { id: 'css-responsive-media-queries', title: 'Responsive Design & Media Queries', description: 'Mobile-first design, viewport meta tag, @media (min-width: ...) breakpoint queries.' },
          { id: 'css-pseudo-classes-elements', title: 'Pseudo-Classes & Pseudo-Elements', description: ':hover, :focus, :nth-child(), ::before, ::after content injection.' },
          { id: 'css-transitions-transforms-animations', title: 'Transitions, Transforms & Animations', description: 'transition, transform: scale/rotate/translate, @keyframes keyframe animations.' }
        ]
      }
    ]
  }
};
