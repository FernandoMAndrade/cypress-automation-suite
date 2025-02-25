# Cypress Automation Suite

## 📌 About

This is a **professional Cypress automation suite** designed to showcase **advanced testing skills** and **best practices** in API and UI test automation. The project follows clean architecture principles, ensuring maintainability and scalability through modular design and reusable components.

---

## 📂 Project Structure

```
cypress-automation-suite
├── api
│   ├── features       # API test cases organized by endpoint
│   ├── interfaces     # Type-safe request/response definitions
│   ├── services       # API service classes with encapsulated methods
│   ├── fixtures       # Test data and mock responses
├── config             # Configuration files
├── support
│   ├── cypress        # Custom commands and utilities
├── cypress.config.ts  # Cypress configuration file
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

---

## 🚀 Getting Started

### 📦 Installation

Ensure you have **Node.js (>=16)** installed, then run:

```sh
npm install
```

### ▶ Running Tests

- **Run all tests:**
  ```sh
  npm run cy:run
  ```
- **Run tests in interactive mode:**
  ```sh
  npm run cy:open
  ```

---

## 🔍 API Automation Implementation

### ✅ **Feature: API Testing for Posts**

- Implements **CRUD happy path** test scenarios for `https://jsonplaceholder.typicode.com/posts`
- Utilizes **isolated interfaces** to ensure type safety in request/response handling
- Service layer structured using a **dedicated class (`PostService`)** encapsulating API calls
- Configuration centralized in `api.config.ts` for improved maintainability
- Cypress test suite structured in `api/features/01-posts.spec.ts`

### 🔹 **Key Technical Practices**

- **Interface Isolation:** API request/response models are defined in TypeScript (`api/interfaces/posts`)
- **Service Encapsulation:** API calls are handled through the `PostService` class in `api/services`
- **Modular Test Design:** Tests are independent, maintainable, and reusable across different scenarios
- **Configuration Abstraction:** API base URLs and settings are managed in `config/api.config.ts`

---

## 📌 Features (Planned & Implemented)

- ✅ API Testing with Cypress
- ✅ TypeScript Integration
- ✅ Isolated Interfaces for API Requests/Responses
- ✅ Encapsulated Service Layer
- ✅ Custom Commands
- ⏳ UI Testing (Coming Soon)
- ⏳ Continuous Integration Setup

---

## ⚠️ Disclaimer

This project is in **active development** and is **not complete**. Expect frequent updates and improvements as new features are added.

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).
