# Notification Prioritization Engine — Frontend (Next.js)

## Overview

This frontend provides a mobile-first administrative interface for the Notification Prioritization Engine. It allows operators and admins to submit events, monitor system activity, manage rules, and analyze metrics in real time.

---

## Live URLs 
Frontend: http://localhost:3000 
Backend API: http://localhost:5000 
Health Endpoint: http://localhost:5000/health

---

## Demo Credentials

Admin:

```
admin@example.com
admin123
```

Operator:

```
operator@example.com
operator123
```

Credentials are displayed directly on login screen for reviewer convenience.

---

## Tech Stack

* Next.js — React framework
* React.js — UI library
* Tailwind CSS — Styling
* Recharts — Data visualization
* Axios — API communication

---

## Features

* Login authentication (mock)
* Event Simulator
* Live Dashboard with metrics
* Audit Logs viewer
* Later Queue monitor
* Rules Manager (runtime configuration)
* Real-time updates
* Mobile responsive UI

---

## Project Structure

```
app/
 ├── login/
 ├── dashboard/
 ├── event/
 ├── audit/
 ├── later/
 ├── rules/
 └── layout.js

lib/
 └── api.js
```

---

## Installation & Running Locally

### Prerequisites

* Node.js >= 18
* npm

### Steps

```
git clone <repo-url>
cd notification-frontend
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Environment Configuration

Update backend URL inside:

```
lib/api.js
```

Example:

```
baseURL: "https://your-backend-url.onrender.com"
```

---

## Pages

| Page            | Description               |
| --------------- | ------------------------- |
| Login           | User authentication       |
| Dashboard       | Metrics and charts        |
| Event Simulator | Submit test notifications |
| Audit Logs      | Decision history          |
| Later Queue     | Deferred events           |
| Rules Manager   | Admin rule configuration  |

---

## Architecture Flow

User → Frontend → Backend API → Database → Response → UI Update

Real-time updates implemented via polling.

---

## Deployment

Frontend deployed on Vercel connected to live backend API.

---

## Known Limitations

* Authentication is mock implementation
* Real-time updates use polling instead of WebSockets
* UI editing of rules is basic

---

## Author

Your Name
