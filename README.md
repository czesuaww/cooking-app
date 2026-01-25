Project Documentation: Cooking App
Live Demo: https://cooking-react-811f4.web.app/

Project Overview
The Cooking App is a comprehensive platform for culinary management that enables:
- Browsing Recipes: Every user can access a community-shared database of culinary ideas.
- Authentication System: A full registration and login module.
- Personal Database Creation: The ability to add new recipes is restricted to authenticated users only.
- Content Management: Logged-in authors have full control over their entries (edit and delete capabilities).
- Logic Separation: Business logic is decoupled from the presentation layer to enhance code readability and maintainability.

Tech Stack
- Frontend: React 19 (utilizing the latest Hooks).
- Routing: React Router (Nested Routes, Dynamic Parameters).
- State Management: React Context API (Theme, Auth, Properties).
- Backend & Auth: Firebase Realtime Database + Firebase Authentication.
- Communication: Axios (REST interface).
- Styling: CSS Modules (Style Scoping).

Key Techniques and Patterns
Modern Forms with useActionState (React 19)
The project moves away from traditional useState patterns in favor of native Form Actions.
Example: recepieFormAction and editProfileAction. Validation and data processing logic are extracted into clean, asynchronous functions.

Global State Management (Context API)
The application utilizes three main contexts to avoid "prop-drilling" and ensure consistency across the UI:
ThemeContext: Manages Dark/Light mode preferences.
AuthContext: Handles the global authentication state.
PropertiesContext: Manages specific application data properties.

Custom Hooks
I developed reusable hooks to separate logic from components:
useLocalStorage: Synchronizes state with browser storage.
useAuth: Simplifies access to authentication data and methods.

Security (Authenticated Routes)
Protected profile and edit routes are secured using a Route Wrapper (Higher-Order Component approach).
This prevents unauthorized access to sensitive pages by verifying session status before rendering.

Environment Variables
Full project configuration is managed via .env files.
Uses the VITE_ prefix to ensure secure variable injection during the build process.
Includes an .env.dist template file defining required keys (Database endpoints, Auth API, and API Keys) to streamline the onboarding process for other developers.

Data Architecture
Firebase NoSQL Structure: Organized into a recipes collection with relational links to specific userIds.
RESTful Methods: Implements PUT for resource editing and DELETE for resource removal.
Data Normalization: A dedicated lib/objects utility converts Firebase's object-based responses into iterable arrays while preserving unique keys as IDs.
