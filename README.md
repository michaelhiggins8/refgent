# Refgent.com

Refgent.com is a platform for licensed real estate agents to connect and refer clients to other agents in different cities. For example, when a client sells their home and moves to a new location, the original agent can use Refgent.com to find a trusted agent in the destination city — potentially earning a referral fee in the process.

Live Site: [https://refgent.com](https://refgent.com)  
Hosted on AWS

---

## Features

- 🔍 Search agents by city
- 👤 View agent profiles with name, description, and location
- 📝 Create and edit your own agent profile
- 💬 Message and chat with other agents
- 📍 Uses location (via browser) to help auto-tag agent profiles

---

## Tech Stack

**Frontend**
- React
- Vite
- React Router DOM

**Backend**
- Node.js
- Express
- PostgreSQL + PostGIS
- JWT (for authentication)
- Bcrypt (for password hashing)

---

## Project Structure

/frontend --> React client /backend --> Node.js + Express server

yaml
Copy
Edit

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/refgent.git
cd refgent
2. Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
3. Setup Backend
bash
Copy
Edit
cd backend
npm install
nodemon index.js
Environment Variables
Backend .env (example)
env
Copy
Edit
ORIGIN_ADDRESS=
POOL_HOST=
POOL_PORT=
POOL_USER=
POOL_PASSWORD=
POOL_DATA_BASE=

CREATION_ADDRESS=/catchNewAccountData
SIGN_IN_ADDRESS=/ReciveLogInValues
TOKEN_KEY=secret-
COOKIE_NAME=
Frontend .env (example)
env
Copy
Edit
VITE_IMAGE_URL_BASE=
VITE_URL_BASE=
Screenshots
Homepage

Log In

Sign Up

Agent Profile

Edit Profile

Chat

Conversations

Target Users
This platform is built for licensed real estate agents.
Clients may browse the site, but they are not intended to create accounts.
![home_page](https://github.com/user-attachments/assets/7a415dd5-6859-4e70-ac1f-8228c53e9c41)
![select_chat](https://github.com/user-attachments/assets/a56f65db-46a4-49e0-8752-79cb2b766f05)
![chat](https://github.com/user-attachments/assets/25eb1f58-d0ca-47d6-b6bc-e54e8ee39d91)
![edit_profile](https://github.com/user-attachments/assets/24d65021-d372-4b06-acda-4148f50d5947)
![profile](https://github.com/user-attachments/assets/60b9744c-d802-42c7-b9df-5de9e11228e1)
![sign_up](https://github.com/user-attachments/assets/a0d6122d-7ca7-45f5-a2e1-521229416795)
![log_in](https://github.com/user-attachments/assets/1ebb852c-e00e-4b01-bcc1-718179358470)
