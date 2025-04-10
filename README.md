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



![log_in](https://github.com/user-attachments/assets/54cd0a7f-bdc9-4044-bc19-57ac91f0232a)
![home_page](https://github.com/user-attachments/assets/4bf99b59-46cf-417b-969f-1610f9483e25)
![select_chat](https://github.com/user-attachments/assets/a4cf2478-291d-4297-a0b9-4c3ada6fe557)
![chat](https://github.com/user-attachments/assets/2a884c4e-a00a-4673-83d0-81393e1238db)
![edit_profile](https://github.com/user-attachments/assets/9a80eed2-fb74-4790-8595-9710c6966345)
![profile](https://github.com/user-attachments/assets/383c4e29-ff1f-4299-88b4-c0ba7f68a06a)
![sign_up](https://github.com/user-attachments/assets/7dec09e5-0084-4545-8bea-189f24905fe0)








Target Users
This platform is built for licensed real estate agents.
Clients may browse the site, but they are not intended to create accounts.

