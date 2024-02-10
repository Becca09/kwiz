interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
  }
  
  interface SubjectQuestions {
    [x: string]: any;
    easy: Question[];
    medium: Question[];
    difficult: Question[];
  }
  
  const artQuestions: SubjectQuestions = {
    easy: [
      {
        question: "Who painted the 'Starry Night'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Vincent van Gogh"
      },
      {
        question: "Which famous artist is known for painting the 'Mona Lisa'?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Salvador Dali", "Vincent van Gogh"],
        correctAnswer: "Leonardo da Vinci"
      },
      {
        question: "Which art movement is known for its use of small, distinct dots of color to create images?",
        options: ["Impressionism", "Pointillism", "Cubism", "Abstract Expressionism"],
        correctAnswer: "Pointillism"
      }
    ],
    medium: [
      {
        question: "Who created the sculpture 'David'?",
        options: ["Donatello", "Michelangelo", "Leonardo da Vinci", "Raphael"],
        correctAnswer: "Michelangelo"
      },
      {
        question: "Which painting by Salvador Dali features melting clocks?",
        options: ["The Persistence of Memory", "Starry Night", "The Scream", "Girl with a Pearl Earring"],
        correctAnswer: "The Persistence of Memory"
      },
      {
        question: "Which artist is known for his use of geometric shapes and abstract forms in art?",
        options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Georgia O'Keeffe"],
        correctAnswer: "Pablo Picasso"
      }
    ],
    difficult: [
      {
        question: "Who painted the 'Water Lilies' series of paintings?",
        options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Georgia O'Keeffe"],
        correctAnswer: "Claude Monet"
      },
      {
        question: "Which famous painting by Edvard Munch depicts a person screaming?",
        options: ["The Scream", "Starry Night", "Mona Lisa", "The Persistence of Memory"],
        correctAnswer: "The Scream"
      },
      {
        question: "In which Italian city is Michelangelo's famous sculpture 'David' located?",
        options: ["Florence", "Rome", "Venice", "Milan"],
        correctAnswer: "Florence"
      }
    ]
  };
  

  const lawQuestions: SubjectQuestions = {
    easy: [
      {
        question: "What is the highest court in Nigeria?",
        options: ["Supreme Court", "Court of Appeal", "Federal High Court", "Magistrate Court"],
        correctAnswer: "Supreme Court"
      },
      {
        question: "Which law governs contracts in Nigeria?",
        options: ["Contract Law", "Constitution of Nigeria", "Nigerian Civil Code", "Nigerian Contracts Act"],
        correctAnswer: "Nigerian Contracts Act"
      },
      {
        question: "What is the legal age of consent in Nigeria?",
        options: ["16 years", "18 years", "21 years", "14 years"],
        correctAnswer: "18 years"
      }
    ],
    medium: [
      {
        question: "What is the penalty for manslaughter in Nigeria?",
        options: ["Life imprisonment", "10 years imprisonment", "20 years imprisonment", "Death penalty"],
        correctAnswer: "Life imprisonment"
      },
      {
        question: "Which body is responsible for regulating legal practitioners in Nigeria?",
        options: ["Nigerian Bar Association", "Legal Practitioners Disciplinary Committee", "Council of Legal Education", "Legal Practitioners Privileges Committee"],
        correctAnswer: "Council of Legal Education"
      },
      {
        question: "What is the tenure of office for a Nigerian President?",
        options: ["4 years", "5 years", "6 years", "7 years"],
        correctAnswer: "4 years"
      }
    ],
    difficult: [
      {
        question: "What is the legal principle of 'res ipsa loquitur'?",
        options: ["The thing speaks for itself", "Innocent until proven guilty", "Act of God", "Doctrine of estoppel"],
        correctAnswer: "The thing speaks for itself"
      },
      {
        question: "Who has the power to appoint judges to the Supreme Court of Nigeria?",
        options: ["President of Nigeria", "Chief Justice of Nigeria", "National Judicial Council", "Federal Judicial Service Commission"],
        correctAnswer: "National Judicial Council"
      },
      {
        question: "What is the punishment for perjury in Nigeria?",
        options: ["Fine", "Community service", "Imprisonment", "Both fine and imprisonment"],
        correctAnswer: "Both fine and imprisonment"
      }
    ]
  };
  
  
  const scienceQuestions: SubjectQuestions = {
    easy: [
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correctAnswer: "H2O"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: "Mars"
      },
      {
        question: "What force causes objects to fall to the ground?",
        options: ["Gravity", "Friction", "Magnetism", "Tension"],
        correctAnswer: "Gravity"
      }
    ],
    medium: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
      },
      {
        question: "What is the process by which plants make their food?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
        correctAnswer: "Photosynthesis"
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Iron", "Graphite", "Quartz"],
        correctAnswer: "Diamond"
      }
    ],
    difficult: [
      {
        question: "What is the unit of measurement for electric current?",
        options: ["Ampere", "Volt", "Ohm", "Watt"],
        correctAnswer: "Ampere"
      },
      {
        question: "What is the boiling point of water in degrees Celsius?",
        options: ["100°C", "0°C", "50°C", "212°F"],
        correctAnswer: "100°C"
      },
      {
        question: "What is the process by which light is bent as it passes through a medium?",
        options: ["Refraction", "Reflection", "Diffraction", "Interference"],
        correctAnswer: "Refraction"
      }
    ]
  };
  
  const englishQuestions: SubjectQuestions = {
    easy: [
      {
        question: "Which of the following is a type of verb that expresses an action?",
        options: ["Action verb", "Linking verb", "Helping verb", "Modal verb"],
        correctAnswer: "Action verb"
      },
      {
        question: "What is the plural form of 'child'?",
        options: ["Children", "Childs", "Childen", "Childs'"],
        correctAnswer: "Children"
      },
      {
        question: "What is the opposite of 'brave'?",
        options: ["Cowardly", "Fearful", "Timid", "Bold"],
        correctAnswer: "Cowardly"
      }
    ],
    medium: [
      {
        question: "What is the past tense of 'run'?",
        options: ["Ran", "Runned", "Running", "Runs"],
        correctAnswer: "Ran"
      },
      {
        question: "Which of the following is a type of figurative language that makes a comparison without using 'like' or 'as'?",
        options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
        correctAnswer: "Metaphor"
      },
      {
        question: "What is the correct order of the words in a standard English sentence?",
        options: ["Subject-Verb-Object", "Object-Subject-Verb", "Verb-Object-Subject", "Subject-Object-Verb"],
        correctAnswer: "Subject-Verb-Object"
      }
    ],
    difficult: [
      {
        question: "What is the term for a word that imitates the sound it represents, such as 'buzz' or 'hiss'?",
        options: ["Onomatopoeia", "Alliteration", "Assonance", "Consonance"],
        correctAnswer: "Onomatopoeia"
      },
      {
        question: "What is the literary device in which contradictory terms are combined, such as 'jumbo shrimp' or 'bittersweet'?",
        options: ["Oxymoron", "Paradox", "Irony", "Hyperbole"],
        correctAnswer: "Oxymoron"
      },
      {
        question: "What is the term for a group of words that appears to be grammatically complete but lacks a subject or predicate?",
        options: ["Sentence fragment", "Run-on sentence", "Compound sentence", "Complex sentence"],
        correctAnswer: "Sentence fragment"
      }
    ]
  };
  
  
  const historyQuestions: SubjectQuestions = {
    easy: [
      {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        correctAnswer: "George Washington"
      },
      {
        question: "Which ancient civilization built the Great Pyramid of Giza?",
        options: ["Ancient Egyptians", "Ancient Greeks", "Ancient Romans", "Mesopotamians"],
        correctAnswer: "Ancient Egyptians"
      },
      {
        question: "What event marked the end of World War II?",
        options: ["Atomic bombings of Hiroshima and Nagasaki", "D-Day invasion", "Fall of Berlin", "Battle of Stalingrad"],
        correctAnswer: "Atomic bombings of Hiroshima and Nagasaki"
      }
    ],
    medium: [
      {
        question: "Who wrote the Declaration of Independence?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correctAnswer: "Thomas Jefferson"
      },
      {
        question: "Which war is known as the 'War to End All Wars'?",
        options: ["World War I", "World War II", "Vietnam War", "Korean War"],
        correctAnswer: "World War I"
      },
      {
        question: "Which country was the first to circumnavigate the globe?",
        options: ["Portugal", "Spain", "England", "Netherlands"],
        correctAnswer: "Spain"
      }
    ],
    difficult: [
      {
        question: "What was the name of the ship that Christopher Columbus sailed to the Americas in 1492?",
        options: ["Santa Maria", "Nina", "Pinta", "Victoria"],
        correctAnswer: "Santa Maria"
      },
      {
        question: "Who was the longest-reigning monarch in British history?",
        options: ["Queen Victoria", "King George III", "Queen Elizabeth II", "King Henry VIII"],
        correctAnswer: "Queen Victoria"
      },
      {
        question: "What was the main cause of the French Revolution?",
        options: ["Social inequality", "High taxes", "Foreign invasion", "Religious conflicts"],
        correctAnswer: "Social inequality"
      }
    ]
  };
  
  
  const blockchainQuestions: SubjectQuestions = {
    easy: [
      {
        question: "What is blockchain?",
        options: [
          "A decentralized digital ledger",
          "A type of cryptocurrency",
          "A centralized banking system",
          "A form of paper currency"
        ],
        correctAnswer: "A decentralized digital ledger"
      },
      {
        question: "Who is the pseudonymous creator of Bitcoin?",
        options: ["Satoshi Nakamoto", "Vitalik Buterin", "Charlie Lee", "Hal Finney"],
        correctAnswer: "Satoshi Nakamoto"
      },
      {
        question: "What is the process of verifying transactions on a blockchain called?",
        options: ["Mining", "Trading", "Staking", "Lending"],
        correctAnswer: "Mining"
      }
    ],
    medium: [
      {
        question: "Which blockchain platform is known for its smart contract functionality?",
        options: ["Ethereum", "Bitcoin", "Litecoin", "Ripple"],
        correctAnswer: "Ethereum"
      },
      {
        question: "What consensus mechanism does Bitcoin use?",
        options: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of Authority"],
        correctAnswer: "Proof of Work"
      },
      {
        question: "What is the total supply limit of Bitcoin?",
        options: ["21 million", "100 million", "1 billion", "Unlimited"],
        correctAnswer: "21 million"
      }
    ],
    difficult: [
      {
        question: "What is a 51% attack?",
        options: [
          "When a single entity controls more than half of a blockchain's mining power",
          "When a blockchain undergoes a hard fork",
          "When a smart contract fails",
          "When a consensus algorithm is compromised"
        ],
        correctAnswer: "When a single entity controls more than half of a blockchain's mining power"
      },
      {
        question: "What is the role of a blockchain node?",
        options: [
          "To maintain a copy of the blockchain and validate transactions",
          "To execute smart contracts",
          "To facilitate peer-to-peer transactions",
          "To generate new coins through mining"
        ],
        correctAnswer: "To maintain a copy of the blockchain and validate transactions"
      },
      {
        question: "What is the purpose of a private blockchain?",
        options: [
          "To restrict access to authorized participants only",
          "To make transactions publicly accessible",
          "To achieve decentralization",
          "To facilitate anonymous transactions"
        ],
        correctAnswer: "To restrict access to authorized participants only"
      }
    ]
  };
  
  const mathematicsQuestions: SubjectQuestions = {
    easy: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
      },
      {
        question: "What is the value of π (pi) rounded to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctAnswer: "3.14"
      },
      {
        question: "How many sides does a triangle have?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "3"
      }
    ],
    medium: [
      {
        question: "What is the result of 5 × 7?",
        options: ["35", "40", "45", "50"],
        correctAnswer: "35"
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12"
      },
      {
        question: "What is the formula to calculate the area of a rectangle?",
        options: ["length × width", "2 × (length + width)", "length + width", "length ÷ width"],
        correctAnswer: "length × width"
      }
    ],
    difficult: [
      {
        question: "What is the value of 10 factorial (10!)?",
        options: ["90", "120", "200", "360"],
        correctAnswer: "3628800"
      },
      {
        question: "What is the derivative of x^2 with respect to x?",
        options: ["2x", "x", "x^2", "1"],
        correctAnswer: "2x"
      },
      {
        question: "What is the sum of the interior angles of a hexagon?",
        options: ["720 degrees", "540 degrees", "360 degrees", "180 degrees"],
        correctAnswer: "720 degrees"
      }
    ]
  };
  
  
  export { lawQuestions, scienceQuestions, englishQuestions, historyQuestions, blockchainQuestions, mathematicsQuestions, artQuestions };
  
  
  