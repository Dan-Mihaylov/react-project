# React/Vite Project Documentation

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation and Running the Application](#installation)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Error Handling](#error-handling)
- [Authentication](#authentication)
- [Unit Testing](#unit-testing)
- [GitHub Actions Workflow](#github-actions)
- [Resources](#resources)

---

## Project Overview <a name="project-overview"></a>
This is a React/Vite project that implements authentication, dynamic page fetching, form validation, routing, route-guarding, custom react hooks, useContext hook, use of localStorage for data persistence, email functionality, and deployment strategies using modern web development tools and best practices. The project is a dummy property website where agencies can register and list their properties, unauthenticated users can browse all the listed properties and when interested in one, can enter their email address to request a corespondence from the agency.

The project is currently (02/04/2025) deployed and can be accessed on:

[fakepropertywebsite.xyz](https://fakepropertywebsite.xyz)

<p style="color: red;">! Render puts all of its free instances in sleep mode, so the first request might take up to 50 seconds to complete !</p>

## Features <a name="features"></a>
- [x] **React Router** for navigation
- [x] **Auth Guards** for protected routes
- [x] **Dynamic Data Fetching** from a backend server
- [x] **Unit Testing** for components
- [x] **Custom Hooks** for reusable logic
- [x] **Yup Validation** for form fields
- [x] **React 19 Actions** (`useActionState` & Bound Forms)
- [x] **CSS Modules & Bootstrap** for styling
- [x] **Contact Form** that sends emails
- [x] **Environment Variables** for sensitive data
- [x] **LocalStorage Persistence** for authentication state
- [x] **Error Handling** with try-catch mechanisms
- [x] **GitHub Actions Workflow** for automated deployment
- [x] **Deployed on Cloudflare (Frontend) & Render (Backend)**

## Installation and Runnign the Application <a name="installation"></a>

To run the application you will have to have Node installed.
Open Your terminal and run.
```
git clone https://github.com/Dan-Mihaylov/react-project.git
```

Navigate to the client directory and install the dependencies
```
npm install
```

Run the client application in development
```
npm run dev
```

Navigate to the server directory and run the server
```
node server
```

## Environment Variables <a name="environment-variables"></a>
To run the application correctly, you need to set up the following environment variables:

```
VITE_FORM_ACCESS_KEY=<Your Web3Form Access Key>
VITE_FORM_URL=<Your Web3Form URL>

VITE_SERVER_URL=<Your Backend Server URL> (defaults to: http://localhost:3030)
```

You can obtain a Web3forms free access key on their website: 

[web3forms.com](https://web3forms.com/)


## Deployment <a name="deployment"></a>
### Frontend Deployment
- Deployed on **Cloudflare Pages** with a custom domain.
- Automatically updates when new commits are pushed to the repository.

### Backend Deployment
- Hosted on **Render**.
- Automated GitHub Actions workflow redeploys the server on push to the `main` branch.
![Render Deploy](https://res.cloudinary.com/dh7ur0uv3/image/upload/v1743589911/auto-deploy-render_tpqn6b.png)

## Screenshots <a name="screenshots"></a>

### Featured Section
![Featured Section](https://res.cloudinary.com/dh7ur0uv3/image/upload/v1743589910/property-app-home_ly8n9z.png)

### Browse Properties Section
![Browse View](https://res.cloudinary.com/dh7ur0uv3/image/upload/v1743589910/property-app-browse_pjlg7s.png)

### Mobile View
![Mobile View](https://res.cloudinary.com/dh7ur0uv3/image/upload/v1743589910/property-app-home-mobile_xulyhu.png)

## Technologies Used <a name="technologies-used"></a>
- **React 19**
- **Vite**
- **React Router**
- **Bootstrap & CSS Modules**
- **Yup Validation**
- **Web3Form API** for email functionality
- **Render & Cloudflare Pages** for deployment
- **GitHub Actions** for CI/CD

## Error Handling <a name="error-handling"></a>
- Implemented `try-catch` blocks for API requests.
- Util functions to handle request errors.
- User-friendly error messages displayed in UI.

## Authentication <a name="authentication"></a>
- Used `useContext` for state management.
- Custom hook to persist login state in `localStorage`.
- `isAuthenticated` & `access_token` for protected requests.

## Unit Testing <a name="unit-testing"></a>
- Component tests written using Vitest & React Testing Library.
- Validated form submissions and API calls.

## GitHub Actions Workflow <a name="github-actions"></a>
- Automated deployment to **Render** on `main` branch push.
- Ensures the latest changes are always live.

## Resources Used <a name="resources"></a>
- [React 19 Documentation](https://react.dev/)
- [SoftUni Materials](https://softuni.bg/)
- [Free CSS Templates from TemplateMo](https://templatemo.com/)
- [Web3Forms API](https://web3forms.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Render Deployment Guide](https://render.com/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- ChatGPT for brainstorming and documentation assistance


