import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./src/models/Category.js";
import Question from "./src/models/Question.js";

dotenv.config();

const categories = [
  {
    name: "JavaScript",
    description: "JavaScript fundamentals and advanced concepts",
    icon: "🟨",
  },
  { name: "Python", description: "Python programming language", icon: "🐍" },
  {
    name: "React.js",
    description: "React library for building UIs",
    icon: "⚛️",
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript runtime",
    icon: "🟢",
  },
  { name: "MongoDB", description: "NoSQL database", icon: "🍃" },
  { name: "Django", description: "Python web framework", icon: "🎸" },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript",
    icon: "🔷",
  },
  { name: "SQL", description: "Structured Query Language", icon: "🗄️" },
  { name: "HTML/CSS", description: "Web markup and styling", icon: "🎨" },
  { name: "Git", description: "Version control system", icon: "🌿" },
  { name: "Docker", description: "Containerization platform", icon: "🐳" },
  { name: "AWS", description: "Amazon Web Services", icon: "☁️" },
  {
    name: "Data Structures",
    description: "Common data structures",
    icon: "📊",
  },
  { name: "Algorithms", description: "Problem solving algorithms", icon: "🧮" },
  {
    name: "System Design",
    description: "Software architecture concepts",
    icon: "🏗️",
  },
];

const questions = {
  JavaScript: [
    {
      question: "What is a closure in JavaScript?",
      options: [
        {
          text: "A function that has access to variables from its outer scope",
          isCorrect: true,
        },
        { text: "A loop structure", isCorrect: false },
        { text: "A data type", isCorrect: false },
        { text: "An error handler", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which keyword is used to declare a block-scoped variable?",
      options: [
        { text: "var", isCorrect: false },
        { text: "let", isCorrect: true },
        { text: "const", isCorrect: false },
        { text: "function", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does '===' operator do?",
      options: [
        { text: "Compares values only", isCorrect: false },
        { text: "Compares values and types", isCorrect: true },
        { text: "Assigns a value", isCorrect: false },
        { text: "Checks for null", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is the purpose of 'async/await'?",
      options: [
        { text: "To handle asynchronous operations", isCorrect: true },
        { text: "To create loops", isCorrect: false },
        { text: "To declare variables", isCorrect: false },
        { text: "To handle errors", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the output of: typeof null?",
      options: [
        { text: "null", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "object", isCorrect: true },
        { text: "number", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is event bubbling?",
      options: [
        {
          text: "Events propagate from child to parent elements",
          isCorrect: true,
        },
        { text: "Events are cancelled", isCorrect: false },
        { text: "Events are duplicated", isCorrect: false },
        { text: "Events propagate from parent to child", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is the spread operator?",
      options: [
        { text: "...", isCorrect: true },
        { text: "***", isCorrect: false },
        { text: ">>>", isCorrect: false },
        { text: "===", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a Promise in JavaScript?",
      options: [
        {
          text: "An object representing eventual completion of an async operation",
          isCorrect: true,
        },
        { text: "A function declaration", isCorrect: false },
        { text: "A loop structure", isCorrect: false },
        { text: "A data type", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is hoisting?",
      options: [
        { text: "Moving declarations to the top of scope", isCorrect: true },
        { text: "Removing variables", isCorrect: false },
        { text: "Creating loops", isCorrect: false },
        { text: "Handling errors", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the 'this' keyword?",
      options: [
        { text: "Refers to the current object", isCorrect: true },
        { text: "Declares a variable", isCorrect: false },
        { text: "Creates a function", isCorrect: false },
        { text: "Imports a module", isCorrect: false },
      ],
      difficulty: "hard",
    },
  ],
  Python: [
    {
      question: "What is a list comprehension in Python?",
      options: [
        { text: "A concise way to create lists", isCorrect: true },
        { text: "A loop structure", isCorrect: false },
        { text: "A function declaration", isCorrect: false },
        { text: "An error handler", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the difference between a list and a tuple?",
      options: [
        { text: "Lists are mutable, tuples are immutable", isCorrect: true },
        { text: "Lists are immutable, tuples are mutable", isCorrect: false },
        { text: "No difference", isCorrect: false },
        { text: "Lists are faster", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does 'self' represent in Python?",
      options: [
        { text: "The instance of the class", isCorrect: true },
        { text: "A global variable", isCorrect: false },
        { text: "A function parameter", isCorrect: false },
        { text: "A module name", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a decorator in Python?",
      options: [
        { text: "A function that modifies another function", isCorrect: true },
        { text: "A data type", isCorrect: false },
        { text: "A loop structure", isCorrect: false },
        { text: "An error handler", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is the Global Interpreter Lock (GIL)?",
      options: [
        {
          text: "A mutex that allows only one thread to execute at a time",
          isCorrect: true,
        },
        { text: "A security feature", isCorrect: false },
        { text: "A data structure", isCorrect: false },
        { text: "A module", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is the difference between '==' and 'is'?",
      options: [
        {
          text: "'==' compares values, 'is' compares identity",
          isCorrect: true,
        },
        {
          text: "'==' compares identity, 'is' compares values",
          isCorrect: false,
        },
        { text: "No difference", isCorrect: false },
        { text: "Both compare values", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is a generator in Python?",
      options: [
        {
          text: "A function that returns an iterator using yield",
          isCorrect: true,
        },
        { text: "A data type", isCorrect: false },
        { text: "A module", isCorrect: false },
        { text: "A class", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does 'lambda' do?",
      options: [
        { text: "Creates an anonymous function", isCorrect: true },
        { text: "Declares a variable", isCorreest: false },
        { text: "Imports a module", isCorrect: false },
        { text: "Creates a class", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is PEP 8?",
      options: [
        { text: "Python style guide", isCorrect: true },
        { text: "A Python module", isCorrect: false },
        { text: "A data type", isCorrect: false },
        { text: "A framework", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is the purpose of '__init__'?",
      options: [
        { text: "Constructor method for classes", isCorrect: true },
        { text: "Destructor method", isCorrect: false },
        { text: "Import statement", isCorrect: false },
        { text: "Error handler", isCorrect: false },
      ],
      difficulty: "easy",
    },
  ],
  "React.js": [
    {
      question: "What is JSX?",
      options: [
        { text: "JavaScript XML syntax extension", isCorrect: true },
        { text: "A CSS framework", isCorrect: false },
        { text: "A database", isCorrect: false },
        { text: "A testing library", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What are React hooks?",
      options: [
        {
          text: "Functions that let you use state in functional components",
          isCorrect: true,
        },
        { text: "CSS classes", isCorrect: false },
        { text: "Event handlers", isCorrect: false },
        { text: "Database queries", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the Virtual DOM?",
      options: [
        { text: "A lightweight copy of the real DOM", isCorrect: true },
        { text: "A database", isCorrect: false },
        { text: "A CSS framework", isCorrect: false },
        { text: "A testing tool", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the purpose of useEffect?",
      options: [
        {
          text: "Handle side effects in functional components",
          isCorrect: true,
        },
        { text: "Create components", isCorrect: false },
        { text: "Style components", isCorrect: false },
        { text: "Test components", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is props drilling?",
      options: [
        {
          text: "Passing props through multiple component levels",
          isCorrect: true,
        },
        { text: "A rendering technique", isCorrect: false },
        { text: "A testing method", isCorrect: false },
        { text: "A styling approach", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is useState hook used for?",
      options: [
        { text: "Managing component state", isCorrect: true },
        { text: "Handling events", isCorrect: false },
        { text: "Routing", isCorrect: false },
        { text: "Styling", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is the Context API?",
      options: [
        { text: "A way to share data without prop drilling", isCorrect: true },
        { text: "A routing library", isCorrect: false },
        { text: "A testing tool", isCorrect: false },
        { text: "A styling solution", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is reconciliation in React?",
      options: [
        { text: "Process of updating the DOM efficiently", isCorrect: true },
        { text: "Component creation", isCorrect: false },
        { text: "State management", isCorrect: false },
        { text: "Event handling", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What are controlled components?",
      options: [
        { text: "Form elements controlled by React state", isCorrect: true },
        { text: "Components with CSS", isCorrect: false },
        { text: "Parent components", isCorrect: false },
        { text: "Tested components", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is React.memo?",
      options: [
        { text: "HOC that prevents unnecessary re-renders", isCorrect: true },
        { text: "A state hook", isCorrect: false },
        { text: "A routing function", isCorrect: false },
        { text: "A testing utility", isCorrect: false },
      ],
      difficulty: "hard",
    },
  ],
  "Node.js": [
    {
      question: "What is Node.js built on?",
      options: [
        { text: "V8 JavaScript engine", isCorrect: true },
        { text: "SpiderMonkey", isCorrect: false },
        { text: "Java Virtual Machine", isCorrect: false },
        { text: ".NET CLR", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which module handles file system operations?",
      options: [
        { text: "fs", isCorrect: true },
        { text: "path", isCorrect: false },
        { text: "http", isCorrect: false },
        { text: "stream", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is middleware in Express?",
      options: [
        {
          text: "Functions that have access to req, res, next",
          isCorrect: true,
        },
        { text: "Database drivers", isCorrect: false },
        { text: "Template engines", isCorrect: false },
        { text: "CLI tools", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which method creates a simple web server?",
      options: [
        { text: "http.createServer", isCorrect: true },
        { text: "fs.readFile", isCorrect: false },
        { text: "net.createServer", isCorrect: false },
        { text: "cluster.fork", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does package.json store?",
      options: [
        { text: "Project metadata and dependencies", isCorrect: true },
        { text: "Database schema", isCorrect: false },
        { text: "Binary executables", isCorrect: false },
        { text: "System logs", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is npm used for?",
      options: [
        { text: "Package management", isCorrect: true },
        { text: "Testing", isCorrect: false },
        { text: "Linting", isCorrect: false },
        { text: "Deployment", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "How do you run code in parallel across cores?",
      options: [
        { text: "cluster module", isCorrect: true },
        { text: "fs module", isCorrect: false },
        { text: "path module", isCorrect: false },
        { text: "events module", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is event-driven architecture?",
      options: [
        { text: "Execution driven by emitted events", isCorrect: true },
        { text: "Execution driven by threads", isCorrect: false },
        { text: "Execution driven by timers only", isCorrect: false },
        { text: "Execution driven by files", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "How to handle environment variables?",
      options: [
        { text: "Using process.env", isCorrect: true },
        { text: "Using global.env", isCorrect: false },
        { text: "Using window.env", isCorrect: false },
        { text: "Using package.env", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does async I/O mean in Node.js?",
      options: [
        { text: "Non-blocking input/output", isCorrect: true },
        { text: "Synchronous execution", isCorrect: false },
        { text: "Single-threaded blocking", isCorrect: false },
        { text: "Multi-process only", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ],
  MongoDB: [
    {
      question: "What type of database is MongoDB?",
      options: [
        { text: "Document-oriented NoSQL", isCorrect: true },
        { text: "Relational", isCorrect: false },
        { text: "Graph only", isCorrect: false },
        { text: "Time-series only", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a collection?",
      options: [
        { text: "A group of documents", isCorrect: true },
        { text: "A SQL table", isCorrect: false },
        { text: "A single document", isCorrect: false },
        { text: "An index", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "How to create an index?",
      options: [
        { text: "db.collection.createIndex()", isCorrect: true },
        { text: "db.collection.ensure()", isCorrect: false },
        { text: "db.create.index()", isCorrect: false },
        { text: "db.index()", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is ObjectId?",
      options: [
        { text: "Default unique identifier for documents", isCorrect: true },
        { text: "A string field", isCorrect: false },
        { text: "A SQL PK", isCorrect: false },
        { text: "A Boolean", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which operator matches fields in subdocuments?",
      options: [
        { text: "$elemMatch", isCorrect: true },
        { text: "$match", isCorrect: false },
        { text: "$group", isCorrect: false },
        { text: "$project", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is the aggregation pipeline?",
      options: [
        { text: "Framework for data aggregation via stages", isCorrect: true },
        { text: "A backup tool", isCorrect: false },
        { text: "A sharding mechanism", isCorrect: false },
        { text: "A driver", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "How to perform text search?",
      options: [
        { text: "Create text index and use $text", isCorrect: true },
        { text: "Use $regex only", isCorrect: false },
        { text: "Use $match without index", isCorrect: false },
        { text: "Not supported", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is sharding?",
      options: [
        { text: "Horizontal partitioning of data", isCorrect: true },
        { text: "Vertical partitioning", isCorrect: false },
        { text: "Indexing", isCorrect: false },
        { text: "Backup", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "How to update multiple documents?",
      options: [
        { text: "updateMany", isCorrect: true },
        { text: "updateOne", isCorrect: false },
        { text: "findOneAndUpdate", isCorrect: false },
        { text: "replaceOne", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is replication?",
      options: [
        { text: "Maintaining copies of data across nodes", isCorrect: true },
        { text: "Compressing data", isCorrect: false },
        { text: "Caching", isCorrect: false },
        { text: "Indexing", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ],
  Django: [
    {
      question: "What architectural pattern does Django follow?",
      options: [
        { text: "MVT (Model-View-Template)", isCorrect: true },
        { text: "MVC", isCorrect: false },
        { text: "MVVM", isCorrect: false },
        { text: "MVP", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "How to create a new app?",
      options: [
        { text: "python manage.py startapp", isCorrect: true },
        { text: "django newapp", isCorrect: false },
        { text: "django start", isCorrect: false },
        { text: "manage createapp", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What file defines URL patterns?",
      options: [
        { text: "urls.py", isCorrect: true },
        { text: "routes.py", isCorrect: false },
        { text: "views.py", isCorrect: false },
        { text: "models.py", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which ORM does Django use?",
      options: [
        { text: "Its built-in ORM", isCorrect: true },
        { text: "SQLAlchemy", isCorrect: false },
        { text: "Peewee", isCorrect: false },
        { text: "Sequelize", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Where do you define database models?",
      options: [
        { text: "models.py", isCorrect: true },
        { text: "views.py", isCorrect: false },
        { text: "admin.py", isCorrect: false },
        { text: "apps.py", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What command applies migrations?",
      options: [
        { text: "python manage.py migrate", isCorrect: true },
        { text: "python manage.py makemodel", isCorrect: false },
        { text: "django migrate", isCorrect: false },
        { text: "pip migrate", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "How to create a superuser?",
      options: [
        { text: "python manage.py createsuperuser", isCorrect: true },
        { text: "django admin", isCorrect: false },
        { text: "pip admin", isCorrect: false },
        { text: "python manage.py admin", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does Django admin provide?",
      options: [
        { text: "Auto-generated CRUD interface", isCorrect: true },
        { text: "Task scheduler", isCorrect: false },
        { text: "Cache server", isCorrect: false },
        { text: "Message broker", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "How to render a template?",
      options: [
        { text: "Use render(request, 'template.html')", isCorrect: true },
        { text: "Use template.render() only", isCorrect: false },
        { text: "Use admin.render()", isCorrect: false },
        { text: "Use serializer", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a QuerySet?",
      options: [
        { text: "Lazy database query object", isCorrect: true },
        { text: "A template", isCorrect: false },
        { text: "A migration", isCorrect: false },
        { text: "A signal", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ],
  TypeScript: [
    {
      question: "What does TypeScript add to JavaScript?",
      options: [
        { text: "Static typing", isCorrect: true },
        { text: "New DOM APIs", isCorrect: false },
        { text: "New CSS features", isCorrect: false },
        { text: "Database drivers", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is an interface used for?",
      options: [
        { text: "Define object shape", isCorrect: true },
        { text: "Style components", isCorrect: false },
        { text: "Handle HTTP", isCorrect: false },
        { text: "Manage state", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does 'unknown' type represent?",
      options: [
        { text: "A safe alternative to any", isCorrect: true },
        { text: "A number", isCorrect: false },
        { text: "A string", isCorrect: false },
        { text: "A boolean", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "How to make a property optional?",
      options: [
        { text: "Using ? after the property name", isCorrect: true },
        { text: "Using ! after the property name", isCorrect: false },
        { text: "Using #", isCorrect: false },
        { text: "Using $", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is generics used for?",
      options: [
        { text: "Reusable components with type variables", isCorrect: true },
        { text: "Styling", isCorrect: false },
        { text: "Event handling", isCorrect: false },
        { text: "Routing", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does 'never' type represent?",
      options: [
        { text: "Values that never occur", isCorrect: true },
        { text: "Any value", isCorrect: false },
        { text: "Null only", isCorrect: false },
        { text: "Undefined only", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "How to narrow a union type?",
      options: [
        { text: "Using type guards", isCorrect: true },
        { text: "Using CSS", isCorrect: false },
        { text: "Using HTML", isCorrect: false },
        { text: "Using SQL", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is declaration merging?",
      options: [
        { text: "Combining declarations with same name", isCorrect: true },
        { text: "Combining CSS files", isCorrect: false },
        { text: "Combining databases", isCorrect: false },
        { text: "Combining servers", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is tsconfig.json for?",
      options: [
        { text: "Compiler configuration", isCorrect: true },
        { text: "Package management", isCorrect: false },
        { text: "Styling", isCorrect: false },
        { text: "Deployment", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does 'as' keyword do?",
      options: [
        { text: "Type assertion", isCorrect: true },
        { text: "Aliasing imports", isCorrect: false },
        { text: "Exports", isCorrect: false },
        { text: "CSS class", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ],
  SQL: [
    {
      question: "What does SQL stand for?",
      options: [
        { text: "Structured Query Language", isCorrect: true },
        { text: "Simple Query Language", isCorrect: false },
        { text: "Standard Question Language", isCorrect: false },
        { text: "Server Query Logic", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which command retrieves data?",
      options: [
        { text: "SELECT", isCorrect: true },
        { text: "INSERT", isCorrect: false },
        { text: "UPDATE", isCorrect: false },
        { text: "DELETE", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does JOIN do?",
      options: [
        { text: "Combine rows from multiple tables", isCorrect: true },
        { text: "Delete rows", isCorrect: false },
        { text: "Create tables", isCorrect: false },
        { text: "Index columns", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which index improves lookup speed?",
      options: [
        { text: "B-tree", isCorrect: true },
        { text: "Hash only", isCorrect: false },
        { text: "Bitmap only", isCorrect: false },
        { text: "Full table scan", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What enforces uniqueness?",
      options: [
        { text: "UNIQUE constraint", isCorrect: true },
        { text: "CHECK constraint", isCorrect: false },
        { text: "FOREIGN KEY", isCorrect: false },
        { text: "DEFAULT", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is normalization?",
      options: [
        { text: "Organizing data to reduce redundancy", isCorrect: true },
        { text: "Encrypting data", isCorrect: false },
        { text: "Deleting data", isCorrect: false },
        { text: "Indexing data", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which SQL clause filters rows?",
      options: [
        { text: "WHERE", isCorrect: true },
        { text: "GROUP BY", isCorrect: false },
        { text: "ORDER BY", isCorrect: false },
        { text: "LIMIT", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does ACID stand for?",
      options: [
        {
          text: "Atomicity, Consistency, Isolation, Durability",
          isCorrect: true,
        },
        { text: "Access, Control, Integrity, Data", isCorrect: false },
        { text: "Array, Cursor, Index, Data", isCorrect: false },
        { text: "Async, Concurrent, Indexed, Durable", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "Which command adds rows?",
      options: [
        { text: "INSERT", isCorrect: true },
        { text: "CREATE", isCorrect: false },
        { text: "ALTER", isCorrect: false },
        { text: "DROP", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a primary key?",
      options: [
        { text: "Unique identifier for a row", isCorrect: true },
        { text: "Foreign table reference", isCorrect: false },
        { text: "Index type", isCorrect: false },
        { text: "View name", isCorrect: false },
      ],
      difficulty: "easy",
    },
  ],
  "HTML/CSS": [
    {
      question: "What does HTML stand for?",
      options: [
        { text: "HyperText Markup Language", isCorrect: true },
        { text: "Hyperlink Markup Language", isCorrect: false },
        { text: "Hyper Transfer Markup Language", isCorrect: false },
        { text: "Home Tool Markup Language", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which tag defines the largest heading?",
      options: [
        { text: "<h1>", isCorrect: true },
        { text: "<head>", isCorrect: false },
        { text: "<h6>", isCorrect: false },
        { text: "<header>", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does CSS stand for?",
      options: [
        { text: "Cascading Style Sheets", isCorrect: true },
        { text: "Creative Style System", isCorrect: false },
        { text: "Colorful Style Sheet", isCorrect: false },
        { text: "Computer Style Syntax", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which property changes text color?",
      options: [
        { text: "color", isCorrect: true },
        { text: "font-color", isCorrect: false },
        { text: "text-color", isCorrect: false },
        { text: "foreground", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is the box model?",
      options: [
        { text: "Content, padding, border, margin", isCorrect: true },
        { text: "Grid layout", isCorrect: false },
        { text: "Flex alignment", isCorrect: false },
        { text: "SVG layout", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which display makes elements align in a row by default?",
      options: [
        { text: "flex", isCorrect: true },
        { text: "block", isCorrect: false },
        { text: "inline", isCorrect: false },
        { text: "grid", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which unit is relative to root font-size?",
      options: [
        { text: "rem", isCorrect: true },
        { text: "px", isCorrect: false },
        { text: "cm", isCorrect: false },
        { text: "vh", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What tag creates a hyperlink?",
      options: [
        { text: "<a>", isCorrect: true },
        { text: "<link>", isCorrect: false },
        { text: "<nav>", isCorrect: false },
        { text: "<button>", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which property controls element stacking order?",
      options: [
        { text: "z-index", isCorrect: true },
        { text: "stack", isCorrect: false },
        { text: "order", isCorrect: false },
        { text: "layer", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is semantic HTML?",
      options: [
        { text: "Using meaningful tags like <header> <main>", isCorrect: true },
        { text: "Using only divs", isCorrect: false },
        { text: "Inline styles", isCorrect: false },
        { text: "Using tables for layout", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ],
  Git: [
    {
      question: "What does 'git init' do?",
      options: [
        { text: "Creates a new Git repository", isCorrect: true },
        { text: "Clones a repo", isCorrect: false },
        { text: "Stages files", isCorrect: false },
        { text: "Merges branches", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "How to check repository status?",
      options: [
        { text: "git status", isCorrect: true },
        { text: "git log", isCorrect: false },
        { text: "git show", isCorrect: false },
        { text: "git diff", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does 'git add' do?",
      options: [
        { text: "Stages changes", isCorrect: true },
        { text: "Commits changes", isCorrect: false },
        { text: "Creates branches", isCorrect: false },
        { text: "Merges branches", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "How to view commit history?",
      options: [
        { text: "git log", isCorrect: true },
        { text: "git status", isCorrect: false },
        { text: "git stash", isCorrect: false },
        { text: "git branch", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does 'git checkout -b feature' do?",
      options: [
        { text: "Creates and switches to branch feature", isCorrect: true },
        { text: "Deletes branch feature", isCorrect: false },
        { text: "Merges feature", isCorrect: false },
        { text: "Stashes feature", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "How to undo staged changes?",
      options: [
        { text: "git reset", isCorrect: true },
        { text: "git revert", isCorrect: false },
        { text: "git merge --abort", isCorrect: false },
        { text: "git pull", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is git merge?",
      options: [
        { text: "Combines changes from another branch", isCorrect: true },
        { text: "Deletes a branch", isCorrect: false },
        { text: "Creates a tag", isCorrect: false },
        { text: "Pushes changes", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does git pull do?",
      options: [
        { text: "Fetches and merges from remote", isCorrect: true },
        { text: "Only fetches", isCorrect: false },
        { text: "Only merges", isCorrect: false },
        { text: "Deletes remote", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a detached HEAD?",
      options: [
        { text: "HEAD points to a commit, not a branch", isCorrect: true },
        { text: "HEAD is missing", isCorrect: false },
        { text: "Repo is uninitialized", isCorrect: false },
        { text: "Stash is corrupted", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What does .gitignore do?",
      options: [
        { text: "Specifies files to exclude from tracking", isCorrect: true },
        { text: "Stores commit messages", isCorrect: false },
        { text: "Defines branches", isCorrect: false },
        { text: "Encrypts files", isCorrect: false },
      ],
      difficulty: "easy",
    },
  ],
  Docker: [
    {
      question: "What is Docker?",
      options: [
        { text: "A containerization platform", isCorrect: true },
        { text: "A VM hypervisor", isCorrect: false },
        { text: "A database", isCorrect: false },
        { text: "A CI server", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is an image?",
      options: [
        {
          text: "A lightweight, immutable filesystem snapshot",
          isCorrect: true,
        },
        { text: "A running container", isCorrect: false },
        { text: "A VM", isCorrect: false },
        { text: "A network", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What command builds an image?",
      options: [
        { text: "docker build", isCorrect: true },
        { text: "docker run", isCorrect: false },
        { text: "docker exec", isCorrect: false },
        { text: "docker pull", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a container?",
      options: [
        { text: "A runnable instance of an image", isCorrect: true },
        { text: "A VM", isCorrect: false },
        { text: "A network", isCorrect: false },
        { text: "A volume", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which file defines image build steps?",
      options: [
        { text: "Dockerfile", isCorrect: true },
        { text: "docker-compose.yml", isCorrect: false },
        { text: "package.json", isCorrect: false },
        { text: "Makefile", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does docker-compose manage?",
      options: [
        { text: "Multi-container applications", isCorrect: true },
        { text: "Git repositories", isCorrect: false },
        { text: "VM clusters", isCorrect: false },
        { text: "DNS records", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "How to map host port to container port?",
      options: [
        { text: "docker run -p host:container", isCorrect: true },
        { text: "docker map", isCorrect: false },
        { text: "docker link", isCorrect: false },
        { text: "docker expose", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is a volume for?",
      options: [
        { text: "Persisting data", isCorrect: true },
        { text: "Networking", isCorrect: false },
        { text: "Logging only", isCorrect: false },
        { text: "Scaling", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "How to see running containers?",
      options: [
        { text: "docker ps", isCorrect: true },
        { text: "docker ls", isCorrect: false },
        { text: "docker show", isCorrect: false },
        { text: "docker status", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What does docker pull do?",
      options: [
        { text: "Downloads an image", isCorrect: true },
        { text: "Runs a container", isCorrect: false },
        { text: "Builds an image", isCorrect: false },
        { text: "Pushes an image", isCorrect: false },
      ],
      difficulty: "easy",
    },
  ],
  AWS: [
    {
      question: "What is EC2 used for?",
      options: [
        { text: "Virtual servers in the cloud", isCorrect: true },
        { text: "Object storage", isCorrect: false },
        { text: "DNS service", isCorrect: false },
        { text: "Queue service", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is S3?",
      options: [
        { text: "Object storage service", isCorrect: true },
        { text: "Compute service", isCorrect: false },
        { text: "Database service", isCorrect: false },
        { text: "Message queue", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which service provides managed Postgres/MySQL?",
      options: [
        { text: "RDS", isCorrect: true },
        { text: "DynamoDB", isCorrect: false },
        { text: "Lambda", isCorrect: false },
        { text: "ECS", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is Lambda?",
      options: [
        { text: "Serverless compute", isCorrect: true },
        { text: "Storage", isCorrect: false },
        { text: "Database", isCorrect: false },
        { text: "Messaging", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which service is for CDN?",
      options: [
        { text: "CloudFront", isCorrect: true },
        { text: "Route 53", isCorrect: false },
        { text: "VPC", isCorrect: false },
        { text: "IAM", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is IAM for?",
      options: [
        { text: "Identity and access management", isCorrect: true },
        { text: "Image storage", isCorrect: false },
        { text: "Messaging", isCorrect: false },
        { text: "Analytics", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which service offers NoSQL key-value store?",
      options: [
        { text: "DynamoDB", isCorrect: true },
        { text: "Aurora", isCorrect: false },
        { text: "Redshift", isCorrect: false },
        { text: "SQS", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is VPC?",
      options: [
        { text: "Virtual private cloud network", isCorrect: true },
        { text: "Version control", isCorrect: false },
        { text: "Video processing", isCorrect: false },
        { text: "Vault storage", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which service is for message queuing?",
      options: [
        { text: "SQS", isCorrect: true },
        { text: "SNS", isCorrect: false },
        { text: "SES", isCorrect: false },
        { text: "CloudWatch", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is CloudWatch used for?",
      options: [
        { text: "Monitoring and logging", isCorrect: true },
        { text: "DNS management", isCorrect: false },
        { text: "Database backups", isCorrect: false },
        { text: "Email service", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ],
  "Data Structures": [
    {
      question:
        "What is the time complexity of accessing an array element by index?",
      options: [
        { text: "O(1)", isCorrect: true },
        { text: "O(n)", isCorrect: false },
        { text: "O(log n)", isCorrect: false },
        { text: "O(n log n)", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which data structure uses FIFO order?",
      options: [
        { text: "Queue", isCorrect: true },
        { text: "Stack", isCorrect: false },
        { text: "Tree", isCorrect: false },
        { text: "Graph", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a hash table used for?",
      options: [
        { text: "Fast key-based lookup", isCorrect: true },
        { text: "Sorting", isCorrect: false },
        { text: "Traversal", isCorrect: false },
        { text: "Graph cycles", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which traversal is DFS?",
      options: [
        { text: "Preorder/Inorder/Postorder", isCorrect: true },
        { text: "Level-order only", isCorrect: false },
        { text: "Breadth-first only", isCorrect: false },
        { text: "Random", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is a balanced binary search tree?",
      options: [
        { text: "Tree with height O(log n)", isCorrect: true },
        { text: "Tree with height O(n)", isCorrect: false },
        { text: "Tree with no children", isCorrect: false },
        { text: "Tree with duplicates", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What structure supports LIFO?",
      options: [
        { text: "Stack", isCorrect: true },
        { text: "Queue", isCorrect: false },
        { text: "Heap", isCorrect: false },
        { text: "Graph", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is a min-heap property?",
      options: [
        { text: "Parent <= children", isCorrect: true },
        { text: "Parent >= children", isCorrect: false },
        { text: "All leaves equal", isCorrect: false },
        { text: "Binary search property", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "Which structure detects cycles in graphs?",
      options: [
        { text: "Union-Find", isCorrect: true },
        { text: "Stack", isCorrect: false },
        { text: "Queue", isCorrect: false },
        { text: "Array", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is adjacency list used for?",
      options: [
        { text: "Graph representation", isCorrect: true },
        { text: "Sorting", isCorrect: false },
        { text: "String parsing", isCorrect: false },
        { text: "Hashing", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is big-O of searching in balanced BST?",
      options: [
        { text: "O(log n)", isCorrect: true },
        { text: "O(1)", isCorrect: false },
        { text: "O(n^2)", isCorrect: false },
        { text: "O(n)", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ],
  Algorithms: [
    {
      question: "What is time complexity of binary search?",
      options: [
        { text: "O(log n)", isCorrect: true },
        { text: "O(n)", isCorrect: false },
        { text: "O(n log n)", isCorrect: false },
        { text: "O(1)", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which algorithm sorts in-place with O(n log n) average?",
      options: [
        { text: "Quick sort", isCorrect: true },
        { text: "Bubble sort", isCorrect: false },
        { text: "Selection sort", isCorrect: false },
        { text: "Counting sort", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does Dijkstra's algorithm find?",
      options: [
        {
          text: "Shortest path from source to all nodes (non-negative weights)",
          isCorrect: true,
        },
        { text: "Minimum spanning tree", isCorrect: false },
        { text: "Cycle detection", isCorrect: false },
        { text: "Topological order", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is dynamic programming?",
      options: [
        {
          text: "Breaking problems into overlapping subproblems",
          isCorrect: true,
        },
        { text: "Randomized approach", isCorrect: false },
        { text: "Greedy approach", isCorrect: false },
        { text: "Divide only", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does BFS compute in unweighted graphs?",
      options: [
        { text: "Shortest path by edges", isCorrect: true },
        { text: "Minimum spanning tree", isCorrect: false },
        { text: "Topological order", isCorrect: false },
        { text: "All cycles", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "Which algorithm finds MST?",
      options: [
        { text: "Kruskal or Prim", isCorrect: true },
        { text: "Dijkstra", isCorrect: false },
        { text: "Bellman-Ford", isCorrect: false },
        { text: "Floyd-Warshall", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is backtracking used for?",
      options: [
        {
          text: "Searching solution space by exploring and undoing",
          isCorrect: true,
        },
        { text: "Sorting arrays", isCorrect: false },
        { text: "Hashing keys", isCorrect: false },
        { text: "Indexing tables", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What problem does KMP solve efficiently?",
      options: [
        { text: "String pattern matching", isCorrect: true },
        { text: "Graph traversal", isCorrect: false },
        { text: "Matrix multiplication", isCorrect: false },
        { text: "Sorting", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is the Master Theorem used for?",
      options: [
        { text: "Solving divide-and-conquer recurrences", isCorrect: true },
        { text: "Finding primes", isCorrect: false },
        { text: "Graph coloring", isCorrect: false },
        { text: "Heap balancing", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is memoization?",
      options: [
        { text: "Caching results of function calls", isCorrect: true },
        { text: "Encrypting data", isCorrect: false },
        { text: "Sorting data", isCorrect: false },
        { text: "Indexing data", isCorrect: false },
      ],
      difficulty: "easy",
    },
  ],
  "System Design": [
    {
      question: "What is horizontal scaling?",
      options: [
        { text: "Adding more machines", isCorrect: true },
        { text: "Adding more CPU to one machine", isCorrect: false },
        { text: "Adding more RAM to one machine", isCorrect: false },
        { text: "Optimizing code only", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is a load balancer?",
      options: [
        { text: "Distributes traffic across servers", isCorrect: true },
        { text: "Stores static files", isCorrect: false },
        { text: "Caches DNS", isCorrect: false },
        { text: "Encrypts data", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is a CDN used for?",
      options: [
        { text: "Serving content from edge locations", isCorrect: true },
        { text: "Database replication", isCorrect: false },
        { text: "Log aggregation", isCorrect: false },
        { text: "Message queuing", isCorrect: false },
      ],
      difficulty: "easy",
    },
    {
      question: "What is eventual consistency?",
      options: [
        { text: "Data becomes consistent over time", isCorrect: true },
        { text: "Data is always consistent instantly", isCorrect: false },
        { text: "Data is never consistent", isCorrect: false },
        { text: "Data is immutable", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What component stores cached key-value pairs?",
      options: [
        { text: "Cache layer (e.g., Redis)", isCorrect: true },
        { text: "CDN", isCorrect: false },
        { text: "Queue", isCorrect: false },
        { text: "Load balancer", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does database sharding do?",
      options: [
        { text: "Splits data across multiple nodes", isCorrect: true },
        { text: "Replicates data to all nodes", isCorrect: false },
        { text: "Caches data", isCorrect: false },
        { text: "Encrypts data", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is CQRS?",
      options: [
        { text: "Command Query Responsibility Segregation", isCorrect: true },
        { text: "Central Query Routing Service", isCorrect: false },
        { text: "Cached Query Response Store", isCorrect: false },
        { text: "Concurrent Queue Routing System", isCorrect: false },
      ],
      difficulty: "hard",
    },
    {
      question: "What is the purpose of a message queue?",
      options: [
        { text: "Decouple producers and consumers", isCorrect: true },
        { text: "Store files", isCorrect: false },
        { text: "Render UI", isCorrect: false },
        { text: "Serve DNS", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What does 'idempotent' mean in APIs?",
      options: [
        {
          text: "Multiple identical requests have same effect",
          isCorrect: true,
        },
        { text: "Requests are encrypted", isCorrect: false },
        { text: "Requests are asynchronous", isCorrect: false },
        { text: "Requests are cached", isCorrect: false },
      ],
      difficulty: "medium",
    },
    {
      question: "What is rate limiting?",
      options: [
        {
          text: "Restricting number of requests per time window",
          isCorrect: true,
        },
        { text: "Compressing responses", isCorrect: false },
        { text: "Encrypting responses", isCorrect: false },
        { text: "Balancing load", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ],
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Category.deleteMany({});
    await Question.deleteMany({});
    console.log("Cleared existing data");

    const createdCategories = await Category.insertMany(categories);
    console.log(`Created ${createdCategories.length} categories`);

    let totalQuestions = 0;
    for (const category of createdCategories) {
      const categoryQuestions = questions[category.name];
      if (categoryQuestions) {
        const questionsWithCategory = categoryQuestions.map((q) => ({
          ...q,
          category: category._id,
        }));
        await Question.insertMany(questionsWithCategory);
        totalQuestions += questionsWithCategory.length;
      }
    }

    console.log(`Created ${totalQuestions} questions`);
    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
