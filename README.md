#  TypeScript Project – Students & Teachers

This project demonstrates **basic and intermediate TypeScript concepts**, including interfaces, classes, DOM manipulation, and configuration setup with Webpack.  
It is divided into **two main tasks**: `task_0` (Students) and `task_1` (Teachers).

---

## 🚀 Learning Objectives

By the end of this project, you should be able to explain the following without using Google:

- ✅ Basic types in TypeScript  
- ✅ Interfaces, Classes, and Functions  
- ✅ How to work with the DOM and TypeScript  
- ✅ Generic Types  
- ✅ How to use **Namespaces**  
- ✅ How to merge declarations  
- ✅ How to use an **ambient Namespace** to import an external library  
- ✅ Basic nominal typing with TypeScript  

---

## 📂 Project Structure
project-root/
│── task_0/
│ ├── package.json
│ ├── tsconfig.json
│ ├── webpack.config.js
│ ├── .eslintrc.js
│ └── main.ts
│
│── task_1/
│ ├── package.json
│ ├── tsconfig.json
│ ├── webpack.config.js
│ └── main.ts


---

## 📝 Task 0 – Students

In `task_0/main.ts`:

1. Create an **interface `Student`** with:
   - `firstName: string`
   - `lastName: string`
   - `age: number`
   - `location: string`

2. Create **two students** and store them inside an array `studentsList`.

3. Using **Vanilla JavaScript + TypeScript**, render a table that displays:
   - Student **first name**
   - Student **location**

---

## 📝 Task 1 – Teachers

In `task_1/main.ts`:

1. Create a **Teacher interface** with:
   - `firstName: string` (readonly after initialization)  
   - `lastName: string` (readonly after initialization)  
   - `fullTimeEmployee: boolean` (always defined)  
   - `yearsOfExperience?: number` (optional)  
   - `location: string` (always defined)  
   - Support for **any additional attributes** (e.g., `contract: boolean`)

2. Create a **class `StudentClass`**:
   - Constructor accepts `firstName` and `lastName`.  
   - Method `workOnHomework()` → returns `"Currently working"`.  
   - Method `displayName()` → returns the student’s **first name**.  
   - Both constructor and class should be described through interfaces.

---

## ⚙️ Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Peter-Adjao/frontend-javascript.git
   cd project-root

cd task_0
npm install

npm run build



