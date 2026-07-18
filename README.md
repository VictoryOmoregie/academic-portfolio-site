# academic-portfolio-site
A premium, responsive multi-page academic portfolio and student management platform showcasing Java software engineering skills, custom automotive design interests, and an interactive JavaScript academic planner. Built for the MIVA Open University curriculum.
Personal Academic Portfolio & Student Management Platform

Project Overview This repository contains a fully functional, multi-page web application designed as a personal academic portfolio and dynamic activity planner. The platform showcases professional software engineering competencies alongside personal creative interests, featuring a sleek, responsive user interface utilizing a modern dark-mode palette accented with professional pink highlights.

Tech Stack & Features The application is built completely from scratch using standard frontend technologies to satisfy rigorous academic guidelines:

Semantic HTML5 Architecture: Implements standard structural elements (<header>, <nav>, <main>, <section>, <footer>), fully configured forms, academic history tables, detailed navigation lists, hyperlinked resources, and embedded project multimedia. Modern Custom CSS Grid & Flexbox: Powered by an external stylesheet (css/style.css) featuring a fully responsive layout, smooth state transitions, mobile-first design adaptability, and a highly polished corporate theme. Interactive JavaScript Engine: Dynamic Academic Planner: Implements a state-managed, array-based task manager capable of dynamically appending, crossing off (completing), and purging (deleting) real-time milestones via DOM manipulation. Robust Form Validation: Executes client-side validation on the contact infrastructure to enforce strict email structures (regex verification), prevent missing data fields, and strictly restrict phone input parameters to digital text.

Project Directory Structure

academic-portfolio/
│
├── index.html          # Professional Homepage & Executive Summary
├── about.html          # Career Aspirations & Educational Timeline (Tables/Lists)
├── projects.html       # Engineering Portfolios & Custom Restoration Multimedia
├── planner.html        # Interactive Academic Task Dashboard
├── contact.html        # Input Form Interface
│
├── css/
│   └── style.css       # Global Responsive Layouts & Design Variables
│
├── js/
│   ├── planner.js      # Task Engine Logic (Arrays & DOM Operations)
│   └── validation.js   # Client-Side Form Constraint Checkers
│
└── assets/             # Structured High-Resolution Graphical Media
