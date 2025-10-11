# AI Rules for Lunara Cosméticos Application

This document outlines the technical stack and guidelines for developing the Lunara Cosméticos web application. These rules are designed to ensure consistency, maintainability, and optimal performance.

## Tech Stack Overview

*   **React & TypeScript:** The application is built using React for the UI and TypeScript for type safety and improved code quality.
*   **Vite:** Used as the build tool for a fast development experience and optimized production builds.
*   **React Router DOM:** Handles all client-side routing, enabling navigation between different pages of the application.
*   **Tailwind CSS:** The primary CSS framework for styling, providing utility-first classes for rapid and consistent UI development.
*   **shadcn/ui & Radix UI:** A collection of beautifully designed and accessible UI components. shadcn/ui components are built on top of Radix UI primitives.
*   **Lucide React:** Provides a comprehensive set of customizable SVG icons for the application.
*   **React Helmet Async:** Manages document head tags for SEO optimization, including titles, meta descriptions, and canonical URLs.
*   **TanStack Query (React Query):** Used for efficient data fetching, caching, and synchronization with server-side data.
*   **Sonner:** A modern toast library for displaying notifications and user feedback.
*   **React Hook Form & Zod:** Employed for robust form management and schema-based validation.

## Library Usage Rules

To maintain consistency and leverage the strengths of our chosen libraries, please adhere to the following guidelines:

*   **Routing:** All application routes must be defined and managed using **React Router DOM**. Routes should primarily reside in `src/App.tsx`.
*   **Styling:** Always use **Tailwind CSS** for styling. Avoid inline styles or custom CSS files unless absolutely necessary for very specific, complex cases not covered by Tailwind.
*   **UI Components:**
    *   Prioritize using components from **shadcn/ui**.
    *   If a required component is not available in `shadcn/ui`, check **Radix UI** directly, as `shadcn/ui` is built upon it.
    *   **Do NOT modify** the source files of `shadcn/ui` components. If customization beyond props is needed, create a new component that wraps or extends the `shadcn/ui` component.
*   **Icons:** Use **lucide-react** for all icons throughout the application.
*   **SEO & Document Head:** Manage all document head elements (e.g., `<title>`, `<meta>`, `<link rel="canonical">`) using **React Helmet Async** via the `SEOHead` component.
*   **Data Fetching & State Management:** For fetching, caching, and synchronizing server-side data, use **TanStack Query**. For local component state, use React's `useState` and `useReducer` hooks. For global application state (like the cart), use the **React Context API** (e.g., `CartContext`).
*   **Notifications:** For displaying toast notifications, use **Sonner**.
*   **Forms & Validation:** Implement all forms using **React Hook Form** for state management and **Zod** for schema validation.
*   **Images:** Always use the custom **`OptimizedImage`** component for displaying images to ensure proper loading, error handling, and performance.
*   **File Structure:**
    *   Pages should be placed in `src/pages/`.
    *   Reusable UI components should be placed in `src/components/`.
    *   Custom hooks should be placed in `src/hooks/`.
    *   Utility functions should be placed in `src/lib/` or `src/utils/`.
    *   Data files should be placed in `src/data/` or `src/config/`.
*   **Responsiveness:** All designs must be responsive and adapt gracefully to different screen sizes. Utilize Tailwind's responsive utility classes.
*   **Code Quality:** Adhere to TypeScript best practices, write clean, readable, and maintainable code. Keep components small and focused.