# MediSync

Healthcare platform that connects patients and doctors: doctors manage schedules and appointments on the web, and patients book visits or call for help with a one-tap panic button from a mobile app.

![Doctor agenda](docs/screenshots/agenda_doctor_appointment.PNG)

## By the numbers

<!-- Fill the TODO cells, then delete this comment:
     endpoints:  grep -rhoE "@(Get|Post|Put|Patch|Delete)\(" <api>/src | wc -l
     tests:      npm test -- --coverage --coverageReporters=text-summary -->

| | |
|---|---|
| **3** clients, **1** API | NestJS API serving a Next.js web panel and a Flutter app for iOS and Android |
| **1 tap** | from the mobile panic button to an emergency request |
| **Overlap-checked** bookings | the API rejects appointments that collide with an existing slot |
| **TODO** REST endpoints | **TODO** unit tests |

## Features

- **Doctor portal:** calendar, availability, accepting appointments, patient history.
- **Patient booking:** search specialists, see free slots in real time, book without calling.
- **Emergency button:** native integration in the Flutter app for immediate assistance.
- **Clinical records:** patient list, history, prescribed treatments and in-app consultation chat.

## Architecture

```
NestJS API (PostgreSQL, TypeORM, JWT)
 ├── Next.js web: doctors and admins
 └── Flutter app: patients (iOS / Android)
```

## Stack

NestJS · TypeScript · PostgreSQL · TypeORM · JWT · Next.js · React · Tailwind CSS · Flutter · Dart

## Screenshots

| | |
|---|---|
| ![Available schedules](docs/screenshots/available_schedules_patients.PNG) | ![Patient history](docs/screenshots/patient_history.PNG) |
| ![Mobile chat](<docs/screenshots/mobile_chat_medical consultation.PNG>) | ![Treatments](docs/screenshots/mobile_prescribed_treatments.PNG) |

## Run it

```bash
# API
cp .env.example .env && npm install && npm run start:dev
# Web
npm install && npm run dev
# Mobile
flutter pub get && flutter run
```

## Author

Jose Miguel Tovar · [Portfolio](https://github.com/joset98/portfolio-nextjs) · [LinkedIn](https://www.linkedin.com/in/jose-miguel-tovar/)
