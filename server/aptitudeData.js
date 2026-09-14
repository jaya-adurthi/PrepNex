// Centralized 21-Topic Relational Aptitude Dataset with zero placeholders

const aptitudeTopics = [
  {
    "id": "number-system",
    "name": "Number System",
    "description": "Master natural numbers, divisibility rules, HCF/LCM, remainders, unit digits, trailing zeroes, and factorization tricks.",
    "icon": "Hash",
    "difficulty": "Easy \u2192 Medium",
    "total_concepts": 4,
    "total_formulas": 5,
    "total_questions": 10,
    "concepts": [
      {
        "id": "c-ns-types",
        "name": "Classification of Numbers",
        "explanation": "Numbers are divided into Real & Imaginary. Real numbers comprise Rational (terminating/repeating decimals) and Irrational (non-terminating non-repeating decimals like \u221a2, \u03c0).\nIntegers include positive, negative numbers and zero.\nPrime numbers have exactly two distinct factors (1 and itself). 2 is the smallest and only even prime number.",
        "key_rules": [
          "1 is neither prime nor composite.",
          "Co-prime numbers have HCF = 1.",
          "Composite numbers have more than 2 factors."
        ],
        "examples": [
          {
            "problem": "Is 143 a prime number?",
            "solution": "Check prime numbers up to \u221a143 \u2248 11.9. Primes: 2, 3, 5, 7, 11. 143 = 11 \u00d7 13. So 143 is composite."
          },
          {
            "problem": "Find the sum of all prime numbers between 10 and 20.",
            "solution": "Primes between 10 and 20 are 11, 13, 17, 19. Sum = 11 + 13 + 17 + 19 = 60."
          }
        ]
      },
      {
        "id": "c-ns-divisibility",
        "name": "Divisibility Rules & Tests",
        "explanation": "Divisibility rules streamline large number division tests:\n\u2022 2: Last digit is even.\n\u2022 3: Sum of digits is divisible by 3.\n\u2022 4: Last 2 digits formed number is divisible by 4.\n\u2022 5: Last digit is 0 or 5.\n\u2022 8: Last 3 digits formed number is divisible by 8.\n\u2022 9: Sum of digits is divisible by 9.\n\u2022 11: Difference between sum of digits at odd places and even places is 0 or multiple of 11.",
        "key_rules": [
          "Divisibility by 12: Must be divisible by both 3 and 4.",
          "Divisibility by 72: Must be divisible by both 8 and 9."
        ],
        "examples": [
          {
            "problem": "Is 54324 divisible by 9?",
            "solution": "Sum of digits = 5 + 4 + 3 + 2 + 4 = 18. 18 is divisible by 9, so 54324 is divisible by 9."
          },
          {
            "problem": "Find value of x if 738x6 is divisible by 11.",
            "solution": "Odd places: 6 + 8 + 7 = 21. Even places: x + 3 = 3 + x. Diff = 21 - (3 + x) = 18 - x. For 11 divisibility, 18 - x = 11 => x = 7."
          }
        ]
      },
      {
        "id": "c-ns-hcf-lcm",
        "name": "HCF & LCM Properties",
        "explanation": "Highest Common Factor (HCF) is the greatest divisor of given numbers. Lowest Common Multiple (LCM) is the smallest number divisible by all given numbers.",
        "key_rules": [
          "Product of two numbers = HCF \u00d7 LCM",
          "HCF of fractions = HCF(numerators) / LCM(denominators)",
          "LCM of fractions = LCM(numerators) / HCF(denominators)"
        ],
        "examples": [
          {
            "problem": "Find HCF and LCM of 24 and 36.",
            "solution": "Factors of 24 = 2\u00b3 \u00d7 3, 36 = 2\u00b2 \u00d7 3\u00b2. HCF = 2\u00b2 \u00d7 3 = 12. LCM = 2\u00b3 \u00d7 3\u00b2 = 72."
          },
          {
            "problem": "Find HCF of 2/3 and 4/5.",
            "solution": "HCF = HCF(2, 4) / LCM(3, 5) = 2 / 15."
          }
        ]
      },
      {
        "id": "c-ns-unit-digit",
        "name": "Unit Digit & Cyclicity",
        "explanation": "Unit digits repeat in cycles of 4 powers. Power mod 4 determines final unit digit.",
        "key_rules": [
          "0,1,5,6 have cyclicity 1",
          "4,9 have cyclicity 2",
          "2,3,7,8 have cyclicity 4"
        ],
        "examples": [
          {
            "problem": "Find unit digit of 7^45.",
            "solution": "45 % 4 = 1. So unit digit = 7^1 = 7."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-ns-product",
        "title": "HCF & LCM Product Rule",
        "formula": "A \u00d7 B = HCF(A, B) \u00d7 LCM(A, B)",
        "description": "Product of two numbers equals product of their HCF and LCM.",
        "example": "12 \u00d7 18 = 6 \u00d7 36 = 216"
      },
      {
        "id": "f-ns-frac-hcf",
        "title": "HCF of Fractions",
        "formula": "HCF = HCF(Numerators) / LCM(Denominators)",
        "description": "Calculates HCF of fractional quantities.",
        "example": "HCF(2/3, 8/9) = 2 / 9"
      },
      {
        "id": "f-ns-frac-lcm",
        "title": "LCM of Fractions",
        "formula": "LCM = LCM(Numerators) / HCF(Denominators)",
        "description": "Calculates LCM of fractional quantities.",
        "example": "LCM(2/3, 8/9) = 8 / 3"
      },
      {
        "id": "f-ns-unit",
        "title": "Unit Digit Cyclicity",
        "formula": "Unit Digit = a^(b % 4)",
        "description": "Determines unit digit using power mod 4 rule.",
        "example": "7^45 => 45%4=1 => 7^1 = 7"
      },
      {
        "id": "f-ns-num-factors",
        "title": "Number of Factors",
        "formula": "N = p^a \u00d7 q^b \u00d7 r^c => Total Factors = (a+1)(b+1)(c+1)",
        "description": "Finds total number of divisors of N.",
        "example": "12 = 2\u00b2 \u00d7 3\u00b9 => (2+1)(1+1) = 6 factors"
      }
    ],
    "questions": [
      {
        "id": "q-ns-1",
        "formulaId": "f-ns-product",
        "conceptId": "c-ns-hcf-lcm",
        "title": "HCF & LCM Product Relation",
        "difficulty": "Easy",
        "question": "The product of two numbers is 1280 and their HCF is 8. Find their LCM.",
        "options": [
          "120",
          "140",
          "160",
          "180"
        ],
        "correctAnswer": "160",
        "explanation": "Using formula A \u00d7 B = HCF \u00d7 LCM:\n1280 = 8 \u00d7 LCM => LCM = 1280 / 8 = 160.",
        "shortcut": "LCM = Product / HCF = 1280 / 8 = 160.",
        "formula": "A \u00d7 B = HCF \u00d7 LCM"
      },
      {
        "id": "q-ns-2",
        "formulaId": "f-ns-product",
        "conceptId": "c-ns-hcf-lcm",
        "title": "Finding Missing Number via HCF & LCM",
        "difficulty": "Medium",
        "question": "The HCF and LCM of two numbers are 13 and 455 respectively. If one of the numbers lies between 75 and 125, find that number.",
        "options": [
          "78",
          "91",
          "104",
          "117"
        ],
        "correctAnswer": "91",
        "explanation": "Let numbers be 13a and 13b where HCF(a,b)=1.\nProduct of numbers = 13a \u00d7 13b = 13 \u00d7 455 => 169ab = 5915 => ab = 35.\nCo-prime pairs for ab=35 are (1,35) and (5,7).\nNumbers for (5,7) are 13\u00d75=65 and 13\u00d77=91.\n91 lies between 75 and 125.",
        "shortcut": "ab = 455/13 = 35 => (5,7) => 13 \u00d7 7 = 91.",
        "formula": "A \u00d7 B = HCF \u00d7 LCM"
      },
      {
        "id": "q-ns-3",
        "formulaId": "f-ns-frac-hcf",
        "conceptId": "c-ns-hcf-lcm",
        "title": "HCF of Fractional Quantities",
        "difficulty": "Easy",
        "question": "Find the HCF of 2/3, 8/9, and 16/81.",
        "options": [
          "2/81",
          "8/81",
          "2/3",
          "16/3"
        ],
        "correctAnswer": "2/81",
        "explanation": "HCF of fractions = HCF(Numerators) / LCM(Denominators)\nNumerators: 2, 8, 16 => HCF(2, 8, 16) = 2.\nDenominators: 3, 9, 81 => LCM(3, 9, 81) = 81.\nSo HCF = 2/81.",
        "shortcut": "HCF(2,8,16)/LCM(3,9,81) = 2/81.",
        "formula": "HCF = HCF(num) / LCM(den)"
      },
      {
        "id": "q-ns-4",
        "formulaId": "f-ns-frac-lcm",
        "conceptId": "c-ns-hcf-lcm",
        "title": "LCM of Fractional Quantities",
        "difficulty": "Easy",
        "question": "Find the LCM of 2/3, 4/9, and 5/6.",
        "options": [
          "20/3",
          "10/3",
          "20/9",
          "40/9"
        ],
        "correctAnswer": "20/3",
        "explanation": "LCM of fractions = LCM(Numerators) / HCF(Denominators)\nNumerators: 2, 4, 5 => LCM(2, 4, 5) = 20.\nDenominators: 3, 9, 6 => HCF(3, 9, 6) = 3.\nSo LCM = 20/3.",
        "shortcut": "LCM(2,4,5)/HCF(3,9,6) = 20/3.",
        "formula": "LCM = LCM(num) / HCF(den)"
      },
      {
        "id": "q-ns-5",
        "formulaId": "f-ns-unit",
        "conceptId": "c-ns-unit-digit",
        "title": "Unit Digit Calculation",
        "difficulty": "Medium",
        "question": "What is the unit digit of 7^95 - 3^58?",
        "options": [
          "0",
          "4",
          "6",
          "7"
        ],
        "correctAnswer": "4",
        "explanation": "7 power cyclicity is 4. 95 % 4 = 3 => 7^3 unit digit = 3.\n3 power cyclicity is 4. 58 % 4 = 2 => 3^2 unit digit = 9.\nUnit digit = (13 - 9) = 4.",
        "shortcut": "7^3 -> 3, 3^2 -> 9. (13-9) = 4.",
        "formula": "Unit Digit = a^(b % 4)"
      },
      {
        "id": "q-ns-6",
        "formulaId": "f-ns-num-factors",
        "conceptId": "c-ns-types",
        "title": "Total Divisors of an Integer",
        "difficulty": "Medium",
        "question": "How many total factors does the number 360 have?",
        "options": [
          "18",
          "20",
          "24",
          "30"
        ],
        "correctAnswer": "24",
        "explanation": "Prime factorization of 360 = 2\u00b3 \u00d7 3\u00b2 \u00d7 5\u00b9.\nNumber of factors = (3 + 1)(2 + 1)(1 + 1) = 4 \u00d7 3 \u00d7 2 = 24.",
        "shortcut": "360 = 2\u00b3 \u00d7 3\u00b2 \u00d7 5\u00b9 => (3+1)(2+1)(1+1) = 24.",
        "formula": "Total Factors = (a+1)(b+1)(c+1)"
      },
      {
        "id": "q-ns-7",
        "formulaId": "f-ns-num-factors",
        "conceptId": "c-ns-types",
        "title": "Even Factors Count",
        "difficulty": "Hard",
        "question": "Find the number of EVEN factors of 360.",
        "options": [
          "12",
          "16",
          "18",
          "20"
        ],
        "correctAnswer": "18",
        "explanation": "360 = 2\u00b3 \u00d7 3\u00b2 \u00d7 5\u00b9.\nFor even factors, take at least one power of 2: choices for 2's power = {1,2,3} (3 choices).\nChoices for 3 = (2+1) = 3. Choices for 5 = (1+1) = 2.\nEven factors = 3 \u00d7 3 \u00d7 2 = 18.",
        "shortcut": "Even factors = 3 \u00d7 3 \u00d7 2 = 18.",
        "formula": "Total Factors = (a+1)(b+1)(c+1)"
      },
      {
        "id": "q-ns-8",
        "formulaId": "f-ns-product",
        "conceptId": "c-ns-hcf-lcm",
        "title": "HCF & LCM Given Ratio",
        "difficulty": "Easy",
        "question": "Two numbers are in the ratio 3 : 4. If their HCF is 4, find their LCM.",
        "options": [
          "36",
          "48",
          "60",
          "72"
        ],
        "correctAnswer": "48",
        "explanation": "Let numbers be 3x and 4x. Since HCF is x, x = 4.\nNumbers are 3\u00d74 = 12 and 4\u00d74 = 16.\nLCM(12, 16) = 48.",
        "shortcut": "LCM = Ratio Product \u00d7 HCF = (3 \u00d7 4) \u00d7 4 = 48.",
        "formula": "LCM = a \u00d7 b \u00d7 HCF"
      },
      {
        "id": "q-ns-9",
        "formulaId": "f-ns-unit",
        "conceptId": "c-ns-unit-digit",
        "title": "Unit Digit of Product",
        "difficulty": "Easy",
        "question": "What is the unit digit of the product (2467)^153 \u00d7 (341)^72?",
        "options": [
          "1",
          "3",
          "7",
          "9"
        ],
        "correctAnswer": "7",
        "explanation": "Unit digit of 2467^153 is determined by 7^153. 153 % 4 = 1 => 7^1 = 7.\nUnit digit of 341^72 is 1.\nProduct unit digit = 7 \u00d7 1 = 7.",
        "shortcut": "7^1 \u00d7 1 = 7.",
        "formula": "Unit Digit = a^(b % 4)"
      },
      {
        "id": "q-ns-10",
        "formulaId": "f-ns-num-factors",
        "conceptId": "c-ns-types",
        "title": "Sum of Divisors",
        "difficulty": "Medium",
        "question": "Find the sum of all factors of 24.",
        "options": [
          "48",
          "54",
          "60",
          "72"
        ],
        "correctAnswer": "60",
        "explanation": "24 = 2\u00b3 \u00d7 3\u00b9.\nSum of factors = (2\u2070 + 2\u00b9 + 2\u00b2 + 2\u00b3) \u00d7 (3\u2070 + 3\u00b9) = (1 + 2 + 4 + 8) \u00d7 (1 + 3) = 15 \u00d7 4 = 60.",
        "shortcut": "(1+2+4+8) \u00d7 (1+3) = 60.",
        "formula": "Sum = (2^(a+1)-1)/(2-1) \u00d7 (3^(b+1)-1)/(3-1)"
      }
    ]
  },
  {
    "id": "percentages",
    "name": "Percentages",
    "description": "Master percentage conversions, growth/decay, successive changes, income/expenditure, and election problems.",
    "icon": "Percent",
    "difficulty": "Easy \u2192 Medium",
    "total_concepts": 2,
    "total_formulas": 3,
    "total_questions": 6,
    "concepts": [
      {
        "id": "c-perc-basics",
        "name": "Percentage & Fraction Conversions",
        "explanation": "Percentage is a fraction with denominator 100. Converting key fractions to percentages speeds up aptitude calculations:\n1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%.",
        "key_rules": [
          "Percentage = (Value / Base) \u00d7 100",
          "3/8 = 37.5%, 5/8 = 62.5%"
        ],
        "examples": [
          {
            "problem": "Calculate 37.5% of 640.",
            "solution": "37.5% = 3/8. So (3/8) \u00d7 640 = 240."
          },
          {
            "problem": "If salary increases from \u20b940,000 to \u20b950,000, find % increase.",
            "solution": "(10,000 / 40,000) \u00d7 100 = 25%."
          }
        ]
      },
      {
        "id": "c-perc-successive",
        "name": "Successive Percentage Changes",
        "explanation": "When a value undergoes consecutive percentage changes of a% and b%, the effective percentage change is:\nNet % = a + b + (a \u00d7 b)/100.",
        "key_rules": [
          "Discount/Decrease uses negative values for b.",
          "Price increase vs consumption decrease: (x - y - xy/100)%"
        ],
        "examples": [
          {
            "problem": "Salary rises 20% then drops 10%.",
            "solution": "Net % = 20 - 10 - (20\u00d710)/100 = +8% increase."
          },
          {
            "problem": "Price rises 25%. By how much must consumption decrease to keep expenditure unchanged?",
            "solution": "[25 / (100 + 25)] \u00d7 100 = (25 / 125) \u00d7 100 = 20%."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-perc-change",
        "title": "Percentage Change Formula",
        "formula": "% Change = [(New - Original) / Original] \u00d7 100",
        "description": "Calculates relative percentage increase or decrease.",
        "example": "% Change = (Diff / Orig) \u00d7 100"
      },
      {
        "id": "f-perc-succ",
        "title": "Successive Percentage Change",
        "formula": "Net % = a + b + (ab / 100)",
        "description": "Calculates net percentage change after two sequential changes.",
        "example": "20% then -10% => 20 - 10 - 2 = 8%"
      },
      {
        "id": "f-perc-exp",
        "title": "Consumption Adjustment Formula",
        "formula": "Reduction % = [x / (100 + x)] \u00d7 100",
        "description": "Finds required % reduction in consumption when price rises by x%.",
        "example": "If price rises 25%, consumption drops 25/125 \u00d7 100 = 20%"
      }
    ],
    "questions": [
      {
        "id": "q-perc-1",
        "formulaId": "f-perc-exp",
        "conceptId": "c-perc-successive",
        "title": "Price Increase & Consumption Adjustment",
        "difficulty": "Easy",
        "question": "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that expenditure remains unchanged?",
        "options": [
          "15%",
          "20%",
          "25%",
          "30%"
        ],
        "correctAnswer": "20%",
        "explanation": "Using consumption reduction formula: [x / (100 + x)] \u00d7 100\nReduction = [25 / (100 + 25)] \u00d7 100 = [25 / 125] \u00d7 100 = 20%.",
        "shortcut": "25/125 \u00d7 100 = 20%.",
        "formula": "Reduction % = [x / (100 + x)] \u00d7 100"
      },
      {
        "id": "q-perc-2",
        "formulaId": "f-perc-succ",
        "conceptId": "c-perc-successive",
        "title": "Successive Population Change",
        "difficulty": "Medium",
        "question": "The population of a town increases by 10% in the first year and decreases by 10% in the second year. If the current population is 99,000, what was the initial population?",
        "options": [
          "95,000",
          "1,00,000",
          "1,05,000",
          "1,10,000"
        ],
        "correctAnswer": "1,00,000",
        "explanation": "Net % change = 10 - 10 - (10\u00d710)/100 = -1%.\nCurrent population = 99% of initial population P.\n0.99 \u00d7 P = 99,000 => P = 1,00,000.",
        "shortcut": "Net change -1% => 99% P = 99,000 => P = 1,00,000.",
        "formula": "Net % = a + b + (ab / 100)"
      },
      {
        "id": "q-perc-3",
        "formulaId": "f-perc-change",
        "conceptId": "c-perc-basics",
        "title": "Passing Marks Requirement",
        "difficulty": "Easy",
        "question": "A candidate must get 40% marks to pass an exam. If he receives 178 marks and fails by 22 marks, find the maximum marks.",
        "options": [
          "450",
          "500",
          "550",
          "600"
        ],
        "correctAnswer": "500",
        "explanation": "Passing marks = 178 + 22 = 200.\n40% of Max Marks = 200 => Max Marks = 200 / 0.40 = 500.",
        "shortcut": "40% = 200 => 100% = 500.",
        "formula": "% Change = (Part / Whole) \u00d7 100"
      },
      {
        "id": "q-perc-4",
        "formulaId": "f-perc-succ",
        "conceptId": "c-perc-successive",
        "title": "Income and Expenditure Distribution",
        "difficulty": "Medium",
        "question": "A man spends 20% of his income on food, 30% of the remaining on clothing, and saves the rest. If his savings are \u20b95,600, find his total income.",
        "options": [
          "\u20b98,000",
          "\u20b910,000",
          "\u20b912,000",
          "\u20b915,000"
        ],
        "correctAnswer": "\u20b910,000",
        "explanation": "Let income = I.\nAfter food (20%), remaining = 0.80 I.\nAfter clothing (30% of remaining), remaining = 0.70 \u00d7 0.80 I = 0.56 I.\nSavings = 0.56 I = 5,600 => I = 5,600 / 0.56 = \u20b910,000.",
        "shortcut": "0.80 \u00d7 0.70 \u00d7 I = 5600 => I = 10,000.",
        "formula": "Successive Remaining %"
      },
      {
        "id": "q-perc-5",
        "formulaId": "f-perc-exp",
        "conceptId": "c-perc-successive",
        "title": "Price Reduction & Consumption Increase",
        "difficulty": "Easy",
        "question": "If the price of tea decreases by 20%, by what percentage can a family increase consumption without increasing expenditure?",
        "options": [
          "20%",
          "25%",
          "30%",
          "33.33%"
        ],
        "correctAnswer": "25%",
        "explanation": "Increase % = [x / (100 - x)] \u00d7 100 = [20 / (100 - 20)] \u00d7 100 = (20 / 80) \u00d7 100 = 25%.",
        "shortcut": "20/80 \u00d7 100 = 25%.",
        "formula": "Increase % = [x / (100 - x)] \u00d7 100"
      },
      {
        "id": "q-perc-6",
        "formulaId": "f-perc-change",
        "conceptId": "c-perc-basics",
        "title": "Election Voting Problem",
        "difficulty": "Medium",
        "question": "In an election between two candidates, the winner gets 65% of the total votes and wins by a margin of 2,700 votes. Find the total number of votes polled.",
        "options": [
          "7,000",
          "8,500",
          "9,000",
          "10,000"
        ],
        "correctAnswer": "9,000",
        "explanation": "Winner % = 65%, Loser % = 35%.\nMargin = (65% - 35%) = 30% of total votes.\n30% of Total = 2,700 => Total = 2,700 / 0.30 = 9,000.",
        "shortcut": "Margin = 30% = 2700 => Total = 9000.",
        "formula": "Margin % = Winner % - Loser %"
      }
    ]
  },
  {
    "id": "profit-loss",
    "name": "Profit & Loss",
    "description": "Master Cost Price (CP), Selling Price (SP), Marked Price (MP), Discount %, Profit %, and Dishonest Dealer problems.",
    "icon": "TrendingUp",
    "difficulty": "Medium",
    "total_concepts": 2,
    "total_formulas": 3,
    "total_questions": 6,
    "concepts": [
      {
        "id": "c-pl-basics",
        "name": "Cost Price, Selling Price & Profit Margin",
        "explanation": "Cost Price (CP) is the purchase/manufacturing cost. Selling Price (SP) is the sale price.\nProfit = SP - CP (when SP > CP). Profit% = (Profit / CP) \u00d7 100.\nLoss = CP - SP (when CP > SP). Loss% = (Loss / CP) \u00d7 100.",
        "key_rules": [
          "Profit % and Loss % are ALWAYS calculated on CP unless stated otherwise.",
          "SP = CP \u00d7 (100 + Profit%) / 100",
          "CP = SP \u00d7 100 / (100 + Profit%)"
        ],
        "examples": [
          {
            "problem": "CP = \u20b9400, SP = \u20b9500.",
            "solution": "Profit = \u20b9100. Profit% = (100/400) \u00d7 100 = 25%."
          },
          {
            "problem": "If SP = \u20b91,440 at 20% profit, find CP.",
            "solution": "CP = 1440 \u00d7 100 / 120 = \u20b91,200."
          }
        ]
      },
      {
        "id": "c-pl-discount",
        "name": "Marked Price & Discount Calculations",
        "explanation": "Marked Price (MP) is the printed tag price. Discount is calculated on MP.\nSP = MP - Discount = MP \u00d7 (100 - Discount%) / 100.\nRelation between CP and MP: CP / MP = (100 - Discount%) / (100 + Profit%).",
        "key_rules": [
          "Discount % = (Discount / MP) \u00d7 100",
          "Dishonest dealer gain % = [ Error / (True Weight - Error) ] \u00d7 100"
        ],
        "examples": [
          {
            "problem": "MP = \u20b91000, Discount = 15%.",
            "solution": "SP = 1000 \u00d7 (85/100) = \u20b9850."
          },
          {
            "problem": "A dealer uses 900g instead of 1kg.",
            "solution": "Gain% = [100 / (1000 - 100)] \u00d7 100 = (100 / 900) \u00d7 100 = 11.11%."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-pl-profit",
        "title": "Profit & Loss % Formula",
        "formula": "Profit % = (SP - CP)/CP \u00d7 100 | Loss % = (CP - SP)/CP \u00d7 100",
        "description": "Calculates percentage profit or loss on CP.",
        "example": "CP=100, SP=125 => Profit = 25%"
      },
      {
        "id": "f-pl-cp-mp",
        "title": "CP to MP Relation",
        "formula": "CP / MP = (100 - Discount%) / (100 + Profit%)",
        "description": "Direct ratio connecting Cost Price, Marked Price, Discount %, and Profit %.",
        "example": "Discount=10%, Profit=20% => CP/MP = 90/120 = 3/4"
      },
      {
        "id": "f-pl-false-weight",
        "title": "Dishonest Dealer Weight Gain",
        "formula": "Gain % = [ Error / (True Weight - Error) ] \u00d7 100",
        "description": "Calculates profit % when using faulty weight.",
        "example": "Uses 900g for 1kg => (100/900) \u00d7 100 = 11.11%"
      }
    ],
    "questions": [
      {
        "id": "q-pl-1",
        "formulaId": "f-pl-profit",
        "conceptId": "c-pl-basics",
        "title": "Cost Price Calculation",
        "difficulty": "Easy",
        "question": "An article is sold for \u20b91,440 at a profit of 20%. What is its Cost Price?",
        "options": [
          "\u20b91,150",
          "\u20b91,200",
          "\u20b91,250",
          "\u20b91,300"
        ],
        "correctAnswer": "\u20b91,200",
        "explanation": "CP = SP \u00d7 100 / (100 + Profit%)\nCP = 1440 \u00d7 100 / (100 + 20) = 1440 \u00d7 100 / 120 = \u20b91,200.",
        "shortcut": "1440 / 1.2 = 1200.",
        "formula": "Profit % = (SP - CP)/CP \u00d7 100"
      },
      {
        "id": "q-pl-2",
        "formulaId": "f-pl-cp-mp",
        "conceptId": "c-pl-discount",
        "title": "Markup and Discount Net Profit",
        "difficulty": "Medium",
        "question": "A trader marks his goods 30% above cost price and allows a discount of 15%. What is his profit percentage?",
        "options": [
          "10.5%",
          "11.5%",
          "12.5%",
          "14%"
        ],
        "correctAnswer": "10.5%",
        "explanation": "Let CP = 100. Then MP = 130.\nDiscount = 15% of 130 = 19.5.\nSP = 130 - 19.5 = 110.5.\nProfit = 110.5 - 100 = 10.5%.",
        "shortcut": "Net % = +30 - 15 - (30\u00d715)/100 = 10.5%.",
        "formula": "CP / MP = (100 - Discount%) / (100 + Profit%)"
      },
      {
        "id": "q-pl-3",
        "formulaId": "f-pl-false-weight",
        "conceptId": "c-pl-discount",
        "title": "Dishonest Trader False Weight",
        "difficulty": "Hard",
        "question": "A dishonest dealer professes to sell goods at cost price but uses a weight of 900g for a 1 kg weight. Find his gain percentage.",
        "options": [
          "10%",
          "11.11%",
          "12.5%",
          "15%"
        ],
        "correctAnswer": "11.11%",
        "explanation": "Error = 1000g - 900g = 100g.\nGain % = [ Error / (True Weight - Error) ] \u00d7 100\nGain % = [ 100 / (1000 - 100) ] \u00d7 100 = (100 / 900) \u00d7 100 = 11.11%.",
        "shortcut": "(100 / 900) \u00d7 100 = 11.11%.",
        "formula": "Gain % = [ Error / (True Weight - Error) ] \u00d7 100"
      },
      {
        "id": "q-pl-4",
        "formulaId": "f-pl-profit",
        "conceptId": "c-pl-basics",
        "title": "Equal SP Profit and Loss Model",
        "difficulty": "Medium",
        "question": "Two items are sold for \u20b9990 each. On one item the seller gains 10% and on the other he loses 10%. Find overall profit or loss percentage.",
        "options": [
          "No profit no loss",
          "1% loss",
          "1% gain",
          "2% loss"
        ],
        "correctAnswer": "1% loss",
        "explanation": "When two items are sold at same SP with x% profit and x% loss, overall outcome is ALWAYS a loss given by:\nLoss % = (x / 10)\u00b2 = (10 / 10)\u00b2 = 1% loss.",
        "shortcut": "Loss % = (10/10)\u00b2 = 1% loss.",
        "formula": "Loss % = (x / 10)\u00b2"
      },
      {
        "id": "q-pl-5",
        "formulaId": "f-pl-cp-mp",
        "conceptId": "c-pl-discount",
        "title": "Discount After Markup",
        "difficulty": "Medium",
        "question": "A merchant marks his goods 40% above cost price and allows a discount of 20%. What is his profit percentage?",
        "options": [
          "10%",
          "12%",
          "15%",
          "20%"
        ],
        "correctAnswer": "12%",
        "explanation": "Let CP = 100. MP = 140. Discount = 20% of 140 = 28. SP = 140 - 28 = 112. Profit = 12%.",
        "shortcut": "Net % = 40 - 20 - (40\u00d720)/100 = 20 - 8 = 12%.",
        "formula": "Net % = a + b + (ab / 100)"
      },
      {
        "id": "q-pl-6",
        "formulaId": "f-pl-profit",
        "conceptId": "c-pl-basics",
        "title": "Equal Profit and Loss Ratio",
        "difficulty": "Easy",
        "question": "By selling an article for \u20b9840, a person incurs a loss of 20%. At what price should he sell it to make a profit of 20%?",
        "options": [
          "\u20b91,000",
          "\u20b91,160",
          "\u20b91,260",
          "\u20b91,350"
        ],
        "correctAnswer": "\u20b91,260",
        "explanation": "CP = 840 \u00d7 (100 / 80) = \u20b91,050.\nFor 20% profit, SP = 1050 \u00d7 (120 / 100) = \u20b91,260.",
        "shortcut": "SP = 840 \u00d7 (120 / 80) = 840 \u00d7 1.5 = \u20b91,260.",
        "formula": "SP2 = SP1 \u00d7 (100 + P2)/(100 - L1)"
      }
    ]
  },
  {
    "id": "ratio-proportion",
    "name": "Ratio & Proportion",
    "description": "Master ratios, proportions, mean proportional, component-dividendo, partnership, and distribution.",
    "icon": "Scale",
    "difficulty": "Easy \u2192 Medium",
    "total_concepts": 1,
    "total_formulas": 2,
    "total_questions": 2,
    "concepts": [
      {
        "id": "c-rp-1",
        "name": "Ratios & Proportion Rules",
        "explanation": "a:b = c:d => a \u00d7 d = b \u00d7 c. Mean proportional of a & b = \u221a(a \u00d7 b). Third proportional = b\u00b2/a.",
        "key_rules": [
          "Product of extremes = Product of means"
        ],
        "examples": [
          {
            "problem": "Find mean proportional of 4 and 16.",
            "solution": "\u221a(4 \u00d7 16) = 8."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-rp-mean",
        "title": "Mean Proportional",
        "formula": "Mean Prop = \u221a(a \u00d7 b)",
        "description": "Geometric mean of two quantities.",
        "example": "Mean prop of 9 & 16 = 12"
      },
      {
        "id": "f-rp-third",
        "title": "Third Proportional",
        "formula": "Third Prop = b\u00b2 / a",
        "description": "Finds third proportional in a:b = b:c.",
        "example": "Third prop of 4 & 6 = 9"
      }
    ],
    "questions": [
      {
        "id": "q-rp-1",
        "formulaId": "f-rp-mean",
        "conceptId": "c-rp-1",
        "title": "Mean Proportional Calculation",
        "difficulty": "Easy",
        "question": "Find the mean proportional between 9 and 25.",
        "options": [
          "12",
          "15",
          "16",
          "18"
        ],
        "correctAnswer": "15",
        "explanation": "Mean proportional = \u221a(9 \u00d7 25) = \u221a225 = 15.",
        "shortcut": "\u221a(9 \u00d7 25) = 15",
        "formula": "Mean Prop = \u221a(a \u00d7 b)"
      },
      {
        "id": "q-rp-2",
        "formulaId": "f-rp-third",
        "conceptId": "c-rp-1",
        "title": "Third Proportional Calculation",
        "difficulty": "Easy",
        "question": "Find the third proportional to 12 and 18.",
        "options": [
          "24",
          "27",
          "30",
          "36"
        ],
        "correctAnswer": "27",
        "explanation": "Third proportional = b\u00b2 / a = 18\u00b2 / 12 = 324 / 12 = 27.",
        "shortcut": "18\u00b2/12 = 27",
        "formula": "Third Prop = b\u00b2 / a"
      }
    ]
  },
  {
    "id": "averages",
    "name": "Averages",
    "description": "Master basic average, weighted average, inclusion/exclusion, replacement, and consecutive number averages.",
    "icon": "BarChart2",
    "difficulty": "Easy",
    "total_concepts": 1,
    "total_formulas": 2,
    "total_questions": 2,
    "concepts": [
      {
        "id": "c-avg-1",
        "name": "Average Principles",
        "explanation": "Average = Sum / N. Average of consecutive numbers in AP = (First + Last) / 2.",
        "key_rules": [
          "Sum = Average \u00d7 N"
        ],
        "examples": [
          {
            "problem": "Average of 10, 20, 30.",
            "solution": "60 / 3 = 20."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-avg-main",
        "title": "Average Formula",
        "formula": "Average = Sum / N",
        "description": "Calculates mean of N numbers.",
        "example": "Sum=150, N=5 => Avg = 30"
      },
      {
        "id": "f-avg-repl",
        "title": "Replacement Average Rule",
        "formula": "New Value = Old Value \u00b1 (N \u00d7 Change in Avg)",
        "description": "Finds new entity weight/age after replacement.",
        "example": "Old=56, N=8, Change=+2.5 => New = 56 + 20 = 76"
      }
    ],
    "questions": [
      {
        "id": "q-avg-1",
        "formulaId": "f-avg-repl",
        "conceptId": "c-avg-1",
        "title": "Replacement Weight Calculation",
        "difficulty": "Medium",
        "question": "The average weight of 8 persons increases by 2.5 kg when a person weighing 56 kg is replaced by a new person. Find the weight of the new person.",
        "options": [
          "66 kg",
          "72 kg",
          "76 kg",
          "80 kg"
        ],
        "correctAnswer": "76 kg",
        "explanation": "Weight increase = 8 \u00d7 2.5 = 20 kg. New weight = 56 + 20 = 76 kg.",
        "shortcut": "56 + 8\u00d72.5 = 76kg",
        "formula": "New = Old + (N \u00d7 Change)"
      },
      {
        "id": "q-avg-2",
        "formulaId": "f-avg-main",
        "conceptId": "c-avg-1",
        "title": "First N Natural Numbers Average",
        "difficulty": "Easy",
        "question": "What is the average of the first 50 natural numbers?",
        "options": [
          "25.0",
          "25.5",
          "26.0",
          "50.0"
        ],
        "correctAnswer": "25.5",
        "explanation": "Average = (N + 1) / 2 = (50 + 1) / 2 = 25.5.",
        "shortcut": "(50+1)/2 = 25.5",
        "formula": "Average = Sum / N"
      }
    ]
  },
  {
    "id": "time-work",
    "name": "Time & Work",
    "description": "Master work efficiency, individual vs combined work rates, alternate day work, and man-days equivalence.",
    "icon": "Clock",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 2,
    "total_questions": 2,
    "concepts": [
      {
        "id": "c-tw-1",
        "name": "Work Efficiency & Rate",
        "explanation": "If A completes work in D days, rate = 1/D. Efficiency ratio A:B = 2:1 => Days ratio A:B = 1:2.",
        "key_rules": [
          "Work = Rate \u00d7 Time"
        ],
        "examples": [
          {
            "problem": "A in 10d, B in 15d.",
            "solution": "1-day work = 1/10 + 1/15 = 1/6 => 6 days."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-tw-comb",
        "title": "Combined Work Formula",
        "formula": "Time = (A \u00d7 B) / (A + B)",
        "description": "Time when two people work together.",
        "example": "10d & 15d => (10\u00d715)/25 = 6 days"
      },
      {
        "id": "f-tw-chain",
        "title": "Chain Rule Man-Days",
        "formula": "(M1 \u00d7 D1 \u00d7 H1) / W1 = (M2 \u00d7 D2 \u00d7 H2) / W2",
        "description": "Relates workers, days, hours, and output.",
        "example": "12 men 20 days 8h => 16 men X days 6h"
      }
    ],
    "questions": [
      {
        "id": "q-tw-1",
        "formulaId": "f-tw-comb",
        "conceptId": "c-tw-1",
        "title": "Combined Work Time",
        "difficulty": "Easy",
        "question": "A can do a work in 12 days and B in 24 days. In how many days will they finish together?",
        "options": [
          "6 days",
          "8 days",
          "10 days",
          "12 days"
        ],
        "correctAnswer": "8 days",
        "explanation": "Time = (12 \u00d7 24) / (12 + 24) = 288 / 36 = 8 days.",
        "shortcut": "(12\u00d724)/36 = 8 days",
        "formula": "Time = (A \u00d7 B) / (A + B)"
      },
      {
        "id": "q-tw-2",
        "formulaId": "f-tw-chain",
        "conceptId": "c-tw-1",
        "title": "Man-Days Chain Rule Application",
        "difficulty": "Medium",
        "question": "If 12 men can complete a project in 20 days working 8 hours a day, how many days will 16 men take working 6 hours a day?",
        "options": [
          "15 days",
          "20 days",
          "22 days",
          "25 days"
        ],
        "correctAnswer": "20 days",
        "explanation": "M1 \u00d7 D1 \u00d7 H1 = M2 \u00d7 D2 \u00d7 H2 => 12 \u00d7 20 \u00d7 8 = 16 \u00d7 D2 \u00d7 6 => 1920 = 96 \u00d7 D2 => D2 = 20 days.",
        "shortcut": "1920 / 96 = 20 days",
        "formula": "(M1 \u00d7 D1 \u00d7 H1) / W1 = (M2 \u00d7 D2 \u00d7 H2) / W2"
      }
    ]
  },
  {
    "id": "pipes-cisterns",
    "name": "Pipes & Cisterns",
    "description": "Master inlet and outlet pipes, leak problems, and tank filling calculations.",
    "icon": "Layers",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-pc-1",
        "name": "Inlet & Outlet Pipe Rates",
        "explanation": "Inlet pipe adds water (+ rate), outlet pipe drains (- rate). Net rate = 1/A - 1/B.",
        "key_rules": [
          "Net Rate = 1/Inlet - 1/Outlet"
        ],
        "examples": [
          {
            "problem": "Fill in 10h, drain in 15h.",
            "solution": "1/10 - 1/15 = 1/30 => 30h."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-pc-net",
        "title": "Net Fill Rate",
        "formula": "Net Rate = 1/A - 1/B",
        "description": "Net fill rate of combined pipes.",
        "example": "1/10 - 1/15 = 1/30"
      }
    ],
    "questions": [
      {
        "id": "q-pc-1",
        "formulaId": "f-pc-net",
        "conceptId": "c-pc-1",
        "title": "Combined Pipe Filling Time",
        "difficulty": "Easy",
        "question": "Pipe A fills a tank in 6 hours and Pipe B fills it in 8 hours. How long do they take together?",
        "options": [
          "3.43 hours",
          "4.0 hours",
          "4.8 hours",
          "5.2 hours"
        ],
        "correctAnswer": "3.43 hours",
        "explanation": "Time = (6 \u00d7 8) / (6 + 8) = 48 / 14 = 3.43 hours.",
        "shortcut": "(6\u00d78)/14 = 3.43h",
        "formula": "Net Rate = 1/A + 1/B"
      }
    ]
  },
  {
    "id": "time-speed-distance",
    "name": "Time, Speed & Distance",
    "description": "Master relative speed, trains crossing platforms, boats & streams, and average speed.",
    "icon": "Zap",
    "difficulty": "Medium \u2192 Hard",
    "total_concepts": 1,
    "total_formulas": 2,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-tsd-1",
        "name": "Speed & Distance Principles",
        "explanation": "Distance = Speed \u00d7 Time. Speed conversion: 1 km/h = 5/18 m/s.",
        "key_rules": [
          "1 km/h = 5/18 m/s"
        ],
        "examples": [
          {
            "problem": "Convert 72 km/h to m/s.",
            "solution": "72 \u00d7 5/18 = 20 m/s."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-tsd-conv",
        "title": "Speed Unit Conversion",
        "formula": "1 km/h = 5/18 m/s",
        "description": "Converts km/h to m/s.",
        "example": "72 km/h = 20 m/s"
      },
      {
        "id": "f-tsd-rel",
        "title": "Relative Speed Formula",
        "formula": "Same dir: S1 - S2 | Opp dir: S1 + S2",
        "description": "Relative speed between moving bodies.",
        "example": "Opposite directions: 60 + 40 = 100 km/h"
      }
    ],
    "questions": [
      {
        "id": "q-tsd-1",
        "formulaId": "f-tsd-conv",
        "conceptId": "c-tsd-1",
        "title": "Train Passing Telegraph Pole",
        "difficulty": "Easy",
        "question": "A train 150m long travels at 54 km/h. How long does it take to pass a telegraph post?",
        "options": [
          "8 sec",
          "10 sec",
          "12 sec",
          "15 sec"
        ],
        "correctAnswer": "10 sec",
        "explanation": "Speed in m/s = 54 \u00d7 (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds.",
        "shortcut": "54 \u00d7 5/18 = 15 m/s. 150/15 = 10s",
        "formula": "1 km/h = 5/18 m/s"
      }
    ]
  },
  {
    "id": "simple-interest",
    "name": "Simple Interest",
    "description": "Master principal, interest rate, time period, and simple interest calculations.",
    "icon": "Percent",
    "difficulty": "Easy",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-si-1",
        "name": "Simple Interest Mechanics",
        "explanation": "Interest calculated only on original principal P.",
        "key_rules": [
          "SI = (P \u00d7 R \u00d7 T) / 100"
        ],
        "examples": [
          {
            "problem": "P=1000, R=10%, T=2 yrs.",
            "solution": "SI = \u20b9200."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-si-main",
        "title": "Simple Interest Formula",
        "formula": "SI = (P \u00d7 R \u00d7 T) / 100",
        "description": "Calculates simple interest.",
        "example": "P=5000, R=8, T=3 => SI = 1200"
      }
    ],
    "questions": [
      {
        "id": "q-si-1",
        "formulaId": "f-si-main",
        "conceptId": "c-si-1",
        "title": "Simple Interest Calculation",
        "difficulty": "Easy",
        "question": "Find simple interest on \u20b95,000 at 8% per annum for 3 years.",
        "options": [
          "\u20b91,000",
          "\u20b91,200",
          "\u20b91,400",
          "\u20b91,500"
        ],
        "correctAnswer": "\u20b91,200",
        "explanation": "SI = (5000 \u00d7 8 \u00d7 3) / 100 = 120000 / 100 = \u20b91,200.",
        "shortcut": "(5000 \u00d7 8 \u00d7 3)/100 = 1200",
        "formula": "SI = (P \u00d7 R \u00d7 T) / 100"
      }
    ]
  },
  {
    "id": "compound-interest",
    "name": "Compound Interest",
    "description": "Master annual, half-yearly compounding, and SI vs CI difference.",
    "icon": "TrendingUp",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-ci-1",
        "name": "Compounding Principles",
        "explanation": "Interest on principal + accumulated interest. A = P(1 + R/100)^T.",
        "key_rules": [
          "CI = A - P"
        ],
        "examples": [
          {
            "problem": "P=1000, R=10%, T=2.",
            "solution": "A = 1210 => CI = 210."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-ci-diff",
        "title": "2-Year CI vs SI Difference",
        "formula": "Diff = P \u00d7 (R / 100)\u00b2",
        "description": "Difference between 2-year CI and SI.",
        "example": "P=10000, R=10% => Diff = \u20b9100"
      }
    ],
    "questions": [
      {
        "id": "q-ci-1",
        "formulaId": "f-ci-diff",
        "conceptId": "c-ci-1",
        "title": "Difference Between CI and SI",
        "difficulty": "Medium",
        "question": "What is the difference between CI and SI on \u20b910,000 for 2 years at 10% per annum?",
        "options": [
          "\u20b950",
          "\u20b9100",
          "\u20b9150",
          "\u20b9200"
        ],
        "correctAnswer": "\u20b9100",
        "explanation": "Diff = P \u00d7 (R/100)\u00b2 = 10000 \u00d7 (10/100)\u00b2 = 10000 \u00d7 0.01 = \u20b9100.",
        "shortcut": "10000 \u00d7 0.01 = 100",
        "formula": "Diff = P \u00d7 (R / 100)\u00b2"
      }
    ]
  },
  {
    "id": "permutations-combinations",
    "name": "Permutations & Combinations",
    "description": "Master factorials, arrangements (nPr), selections (nCr), and circular permutations.",
    "icon": "Layers",
    "difficulty": "Medium \u2192 Hard",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-pc-1",
        "name": "Selections & Arrangements",
        "explanation": "Permutations (nPr) for order arrangements. Combinations (nCr) for selection sets.",
        "key_rules": [
          "nCr = n! / [r!(n-r)!]"
        ],
        "examples": [
          {
            "problem": "Select 2 from 4.",
            "solution": "4C2 = 6."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-pc-ncr",
        "title": "Combination Formula",
        "formula": "nCr = n! / [r! \u00d7 (n - r)!]",
        "description": "Number of ways to choose r items from n.",
        "example": "10C2 = 45"
      }
    ],
    "questions": [
      {
        "id": "q-pc-1",
        "formulaId": "f-pc-ncr",
        "conceptId": "c-pc-1",
        "title": "Handshake Combination Problem",
        "difficulty": "Easy",
        "question": "In a party of 10 people, if everyone shakes hands with everyone else once, how many handshakes occur?",
        "options": [
          "35",
          "45",
          "90",
          "100"
        ],
        "correctAnswer": "45",
        "explanation": "Handshakes = 10C2 = (10 \u00d7 9) / 2 = 45.",
        "shortcut": "10C2 = 45",
        "formula": "nCr = n! / [r! \u00d7 (n - r)!]"
      }
    ]
  },
  {
    "id": "probability",
    "name": "Probability",
    "description": "Master sample spaces, favorable outcomes, independent events, dice, coins, and cards.",
    "icon": "HelpCircle",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-prob-1",
        "name": "Probability Basics",
        "explanation": "P(E) = Favorable / Total. 0 <= P(E) <= 1.",
        "key_rules": [
          "P(E') = 1 - P(E)"
        ],
        "examples": [
          {
            "problem": "Coin head prob.",
            "solution": "1/2."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-prob-main",
        "title": "Basic Probability Formula",
        "formula": "P(E) = Favorable / Total",
        "description": "Probability of event E.",
        "example": "Roll 6 on die = 1/6"
      }
    ],
    "questions": [
      {
        "id": "q-prob-1",
        "formulaId": "f-prob-main",
        "conceptId": "c-prob-1",
        "title": "Two Dice Sum Probability",
        "difficulty": "Easy",
        "question": "Two unbiased dice are rolled. What is the probability of getting a sum of 8?",
        "options": [
          "5/36",
          "1/6",
          "7/36",
          "1/4"
        ],
        "correctAnswer": "5/36",
        "explanation": "Total outcomes = 36. Favorable: (2,6), (3,5), (4,4), (5,3), (6,2) => 5 outcomes. P = 5/36.",
        "shortcut": "5 / 36",
        "formula": "P(E) = Favorable / Total"
      }
    ]
  },
  {
    "id": "algebra",
    "name": "Algebra",
    "description": "Master linear equations, quadratic equations, algebraic identities, and inequalities.",
    "icon": "Code",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-alg-1",
        "name": "Quadratic Roots Properties",
        "explanation": "ax\u00b2 + bx + c = 0. Sum of roots = -b/a. Product of roots = c/a.",
        "key_rules": [
          "Discriminant D = b\u00b2 - 4ac"
        ],
        "examples": [
          {
            "problem": "Roots of x\u00b2 - 5x + 6 = 0.",
            "solution": "2 and 3."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-alg-prod",
        "title": "Product of Quadratic Roots",
        "formula": "Product = c / a",
        "description": "Product of roots of ax\u00b2 + bx + c = 0.",
        "example": "2x\u00b2 - 8x + 6 = 0 => Prod = 6/2 = 3"
      }
    ],
    "questions": [
      {
        "id": "q-alg-1",
        "formulaId": "f-alg-prod",
        "conceptId": "c-alg-1",
        "title": "Product of Quadratic Roots",
        "difficulty": "Easy",
        "question": "Find the product of the roots of the equation 2x\u00b2 - 8x + 6 = 0.",
        "options": [
          "3",
          "4",
          "6",
          "8"
        ],
        "correctAnswer": "3",
        "explanation": "Product of roots = c / a = 6 / 2 = 3.",
        "shortcut": "c/a = 6/2 = 3",
        "formula": "Product = c / a"
      }
    ]
  },
  {
    "id": "geometry",
    "name": "Geometry",
    "description": "Master lines, angles, triangles, circles, polygons, and Pythagoras theorem.",
    "icon": "Compass",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-geom-1",
        "name": "Pythagorean Theorem",
        "explanation": "Right-angled triangle: a\u00b2 + b\u00b2 = c\u00b2.",
        "key_rules": [
          "Sum of angles = 180\u00b0"
        ],
        "examples": [
          {
            "problem": "Legs 3 & 4.",
            "solution": "Hypotenuse = 5."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-geom-pyth",
        "title": "Pythagoras Theorem",
        "formula": "a\u00b2 + b\u00b2 = c\u00b2",
        "description": "Calculates hypotenuse c.",
        "example": "3\u00b2 + 4\u00b2 = 5\u00b2"
      }
    ],
    "questions": [
      {
        "id": "q-geom-1",
        "formulaId": "f-geom-pyth",
        "conceptId": "c-geom-1",
        "title": "Right Triangle Hypotenuse",
        "difficulty": "Easy",
        "question": "A right triangle has legs of length 6 cm and 8 cm. What is the hypotenuse?",
        "options": [
          "9 cm",
          "10 cm",
          "12 cm",
          "14 cm"
        ],
        "correctAnswer": "10 cm",
        "explanation": "c = \u221a(6\u00b2 + 8\u00b2) = \u221a(36 + 64) = \u221a100 = 10 cm.",
        "shortcut": "\u221a(36 + 64) = 10",
        "formula": "a\u00b2 + b\u00b2 = c\u00b2"
      }
    ]
  },
  {
    "id": "mensuration",
    "name": "Mensuration",
    "description": "Master 2D areas (rectangle, circle) and 3D volumes (cylinder, cone, sphere).",
    "icon": "Box",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-mens-1",
        "name": "Circle Area & Perimeter",
        "explanation": "Area = \u03c0r\u00b2, Circumference = 2\u03c0r.",
        "key_rules": [
          "\u03c0 \u2248 22/7"
        ],
        "examples": [
          {
            "problem": "Radius 7cm area.",
            "solution": "154 cm\u00b2."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-mens-circle",
        "title": "Circle Area Formula",
        "formula": "Area = \u03c0 \u00d7 r\u00b2",
        "description": "2D area of a circle.",
        "example": "r=7 => Area = 154 cm\u00b2"
      }
    ],
    "questions": [
      {
        "id": "q-mens-1",
        "formulaId": "f-mens-circle",
        "conceptId": "c-mens-1",
        "title": "Circle Area Calculation",
        "difficulty": "Easy",
        "question": "Find the area of a circle with radius 7 cm. (Use \u03c0 = 22/7)",
        "options": [
          "144 cm\u00b2",
          "154 cm\u00b2",
          "176 cm\u00b2",
          "308 cm\u00b2"
        ],
        "correctAnswer": "154 cm\u00b2",
        "explanation": "Area = \u03c0 \u00d7 r\u00b2 = (22/7) \u00d7 7 \u00d7 7 = 154 cm\u00b2.",
        "shortcut": "(22/7) \u00d7 49 = 154",
        "formula": "Area = \u03c0 \u00d7 r\u00b2"
      }
    ]
  },
  {
    "id": "data-interpretation",
    "name": "Data Interpretation",
    "description": "Master Bar Graphs, Line Charts, Pie Charts, Tables, and Caselets.",
    "icon": "PieChart",
    "difficulty": "Medium \u2192 Hard",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-di-1",
        "name": "Pie Chart Angles",
        "explanation": "Total angle = 360\u00b0 = 100%. Angle for x% = (x/100) \u00d7 360\u00b0.",
        "key_rules": [
          "1% = 3.6\u00b0"
        ],
        "examples": [
          {
            "problem": "20% angle.",
            "solution": "72\u00b0."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-di-angle",
        "title": "Pie Chart Degree Angle",
        "formula": "Angle = (% Value / 100) \u00d7 360\u00b0",
        "description": "Converts % into central angle degrees.",
        "example": "15% = 54\u00b0"
      }
    ],
    "questions": [
      {
        "id": "q-di-1",
        "formulaId": "f-di-angle",
        "conceptId": "c-di-1",
        "title": "Pie Chart Sector Angle",
        "difficulty": "Easy",
        "question": "In a pie chart, what central angle represents 15% of the total budget?",
        "options": [
          "45\u00b0",
          "54\u00b0",
          "60\u00b0",
          "72\u00b0"
        ],
        "correctAnswer": "54\u00b0",
        "explanation": "Angle = (15 / 100) \u00d7 360\u00b0 = 0.15 \u00d7 360\u00b0 = 54\u00b0.",
        "shortcut": "15 \u00d7 3.6 = 54\u00b0",
        "formula": "Angle = (% Value / 100) \u00d7 360\u00b0"
      }
    ]
  },
  {
    "id": "mixtures-alligation",
    "name": "Mixtures & Alligation",
    "description": "Master rule of alligation, weighted mixtures, and liquid replacement.",
    "icon": "Filter",
    "difficulty": "Hard",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-ma-1",
        "name": "Alligation Rule",
        "explanation": "Ratio = (Cheaper Diff) / (Dearer Diff).",
        "key_rules": [
          "Mixing ratio calculation"
        ],
        "examples": [
          {
            "problem": "Mix \u20b910 & \u20b915 to get \u20b912.",
            "solution": "3 : 2."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-ma-rule",
        "title": "Alligation Ratio Formula",
        "formula": "q1 / q2 = (d - m) / (m - c)",
        "description": "Ratio of cheap to dear item.",
        "example": "(75-65)/(65-60) = 2/1"
      }
    ],
    "questions": [
      {
        "id": "q-ma-1",
        "formulaId": "f-ma-rule",
        "conceptId": "c-ma-1",
        "title": "Alligation Mixing Ratio",
        "difficulty": "Medium",
        "question": "In what ratio must tea at \u20b960/kg be mixed with tea at \u20b975/kg so the mixture costs \u20b965/kg?",
        "options": [
          "2 : 1",
          "3 : 1",
          "1 : 2",
          "2 : 3"
        ],
        "correctAnswer": "2 : 1",
        "explanation": "By Alligation: (75 - 65) : (65 - 60) = 10 : 5 = 2 : 1.",
        "shortcut": "(75-65):(65-60) = 2:1",
        "formula": "q1 / q2 = (d - m) / (m - c)"
      }
    ]
  },
  {
    "id": "ages",
    "name": "Ages",
    "description": "Master linear equations based on present, past, and future ages of individuals.",
    "icon": "UserCheck",
    "difficulty": "Easy",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-ages-1",
        "name": "Age Shift Equations",
        "explanation": "Age t years ago = x - t, age in t years = x + t.",
        "key_rules": [
          "Age diff is constant"
        ],
        "examples": [
          {
            "problem": "Sum = 50, F-5 = 7(S-5).",
            "solution": "F=40, S=10."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-ages-shift",
        "title": "Age Transition Rule",
        "formula": "Age(t yrs ago) = x - t",
        "description": "Expresses past and future ages.",
        "example": "Present 20 => 5 yrs ago = 15"
      }
    ],
    "questions": [
      {
        "id": "q-ages-1",
        "formulaId": "f-ages-shift",
        "conceptId": "c-ages-1",
        "title": "Father and Son Age Equation",
        "difficulty": "Easy",
        "question": "The sum of ages of father and son is 50 years. Five years ago, father's age was 7 times son's age. Find father's current age.",
        "options": [
          "35 years",
          "40 years",
          "42 years",
          "45 years"
        ],
        "correctAnswer": "40 years",
        "explanation": "F + S = 50, (F-5) = 7(S-5) => F = 40 years.",
        "shortcut": "8S = 80 => S=10, F=40",
        "formula": "Age Transition Rule"
      }
    ]
  },
  {
    "id": "clocks-calendars",
    "name": "Clocks & Calendars",
    "description": "Master clock hands angle, overlap, right angles, odd days, leap years, and day of week.",
    "icon": "Clock",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-cc-1",
        "name": "Clock Hands Angle Formula",
        "explanation": "Angle = | 30H - 5.5M | degrees.",
        "key_rules": [
          "Minute hand = 6\u00b0/min, Hour hand = 0.5\u00b0/min"
        ],
        "examples": [
          {
            "problem": "Angle at 3:30.",
            "solution": "75\u00b0."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-cc-angle",
        "title": "Clock Angle Formula",
        "formula": "Angle = | 30 \u00d7 H - 5.5 \u00d7 M |",
        "description": "Calculates absolute angle between hour and minute hands.",
        "example": "At 4:20 => |120 - 110| = 10\u00b0"
      }
    ],
    "questions": [
      {
        "id": "q-cc-1",
        "formulaId": "f-cc-angle",
        "conceptId": "c-cc-1",
        "title": "Clock Angle at 4:20",
        "difficulty": "Medium",
        "question": "What is the angle between the hour hand and minute hand of a clock at 4:20?",
        "options": [
          "0\u00b0",
          "10\u00b0",
          "15\u00b0",
          "20\u00b0"
        ],
        "correctAnswer": "10\u00b0",
        "explanation": "Angle = | 30(4) - 5.5(20) | = | 120 - 110 | = 10\u00b0.",
        "shortcut": "|120 - 110| = 10\u00b0",
        "formula": "Angle = | 30 \u00d7 H - 5.5 \u00d7 M |"
      }
    ]
  },
  {
    "id": "logical-reasoning",
    "name": "Logical Reasoning",
    "description": "Master number series, alphabet series, coding-decoding, blood relations, and seating arrangement.",
    "icon": "Brain",
    "difficulty": "Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-lr-1",
        "name": "Series Pattern Recognition",
        "explanation": "Analyze difference, ratio, square, or cube series.",
        "key_rules": [
          "Differences: +4, +6, +8..."
        ],
        "examples": [
          {
            "problem": "2, 6, 12, 20...",
            "solution": "30 + 12 = 42."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-lr-series",
        "title": "Series Difference Rule",
        "formula": "T(n) = T(n-1) + diff",
        "description": "Identifies next term in series.",
        "example": "2, 6, 12, 20, 30 => +12 = 42"
      }
    ],
    "questions": [
      {
        "id": "q-lr-1",
        "formulaId": "f-lr-series",
        "conceptId": "c-lr-1",
        "title": "Number Series Logic",
        "difficulty": "Easy",
        "question": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
        "options": [
          "36",
          "40",
          "42",
          "48"
        ],
        "correctAnswer": "42",
        "explanation": "Differences: 4, 6, 8, 10... Next diff = 12. 30 + 12 = 42.",
        "shortcut": "+4, +6, +8, +10 => +12 => 42",
        "formula": "Series Difference Rule"
      }
    ]
  },
  {
    "id": "verbal-ability",
    "name": "Verbal Ability",
    "description": "Master Reading Comprehension, Synonyms/Antonyms, Para Jumbles, and Sentence Correction.",
    "icon": "BookOpen",
    "difficulty": "Easy \u2192 Medium",
    "total_concepts": 1,
    "total_formulas": 1,
    "total_questions": 1,
    "concepts": [
      {
        "id": "c-va-1",
        "name": "Grammar & Vocabulary",
        "explanation": "Subject-verb agreement and word opposites.",
        "key_rules": [
          "Neither/Nor verb agreement"
        ],
        "examples": [
          {
            "problem": "Opposite of Optimistic.",
            "solution": "Pessimistic."
          }
        ]
      }
    ],
    "formulas": [
      {
        "id": "f-va-antonym",
        "title": "Vocabulary Antonyms",
        "formula": "Antonym = Opposite Meaning",
        "description": "Identifies word opposites.",
        "example": "Optimistic vs Pessimistic"
      }
    ],
    "questions": [
      {
        "id": "q-va-1",
        "formulaId": "f-va-antonym",
        "conceptId": "c-va-1",
        "title": "Antonym Identification",
        "difficulty": "Easy",
        "question": "Select the word which is most OPPOSITE in meaning to 'OPTIMISTIC'.",
        "options": [
          "Hopeful",
          "Pessimistic",
          "Cheerful",
          "Confident"
        ],
        "correctAnswer": "Pessimistic",
        "explanation": "Optimistic means expecting good outcomes. Its antonym is Pessimistic.",
        "shortcut": "Optimistic vs Pessimistic",
        "formula": "Antonym = Opposite Meaning"
      }
    ]
  }
];

module.exports = { aptitudeTopics };
