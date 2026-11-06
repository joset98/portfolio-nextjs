# Workspot

A freelance marketplace SPA where employers publish projects, freelancers send proposals, and both sides talk in a built-in chat. Built to mirror an enterprise front-end: modular, role-aware and heavy on business logic.

![Project panel](docs/screenshots/workspot_project_panel.PNG)

## By the numbers

| | |
|---|---|
| **3** roles | Admin, Employer and Freelancer, each with its own dashboard |
| **10-step** wizard | project publishing with state kept across steps and validated per step |
| **35** screens | from auth and profiles to proposals, chat and project panels |
| **3** real-time surfaces | direct chat, proposal tracking and a notification center |

## Features

- **Role-based UI:** permissions decide which dashboards, actions and panels each user sees.
- **Project publishing wizard:** ten steps with back-and-forth navigation and no lost data.
- **Proposals:** freelancers apply, employers compare and accept.
- **Profiles, chat, notifications,** plus the full auth flow (register, login, forgot and reset password).

## Stack

React · Next.js · TypeScript · Tailwind CSS · shadcn/ui · React Context API

## Screenshots

| | |
|---|---|
| ![Wizard step](docs/screenshots/workspot_project_reg_1.PNG) | ![Proposals](docs/screenshots/workspot_proposal_1.PNG) |
| ![Chat](docs/screenshots/workspot_chat.PNG) | ![Dashboard](docs/screenshots/workspot_user_dashboard.PNG) |

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
```

## Author

Jose Miguel Tovar · [Portfolio](https://github.com/joset98/portfolio-nextjs) · [LinkedIn](https://www.linkedin.com/in/jose-miguel-tovar/)
