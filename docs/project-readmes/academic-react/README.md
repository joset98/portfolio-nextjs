# Academic Management App

Back-office for a school: students, staff, programs, courses, schedules, pre-enrollments and payments in one place, with each user seeing only what their role allows. Runs entirely in the browser, with no backend to deploy.

![Dashboard](docs/screenshots/academic_dashboard.PNG)

## By the numbers

| | |
|---|---|
| **10** managed entities | students, staff, programs, subjects, classrooms, courses, schedules, payment concepts, pre-enrollments, payments |
| **4** roles | administrator, director, teacher, student (RBAC on views and actions) |
| **2** generic components | `GenericTable` and `FormModal` power every CRUD screen |
| **0** servers | persistence layer built on `localStorage` behind custom hooks |

## How it works

Each entity has a hook in `hooks/useDataStorage.ts` (`useStudents`, `useCourses`, `usePrograms`…). Every hook loads its data on mount, exposes state plus `add` / `update` / `delete`, and writes every change back to `localStorage`. Swapping that layer for a real API means changing the hooks, not the screens.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · React Context API

## Screenshots

| | |
|---|---|
| ![Courses](docs/screenshots/academic_courses.PNG) | ![New student](docs/screenshots/academic_add_new_student.PNG) |
| ![Pre-enrollment](docs/screenshots/academic_preinscripcion.PNG) | ![Manager](docs/screenshots/academic_manager.PNG) |

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
```

## Author

Jose Miguel Tovar · [Portfolio](https://github.com/joset98/portfolio-nextjs) · [LinkedIn](https://www.linkedin.com/in/jose-miguel-tovar/)
