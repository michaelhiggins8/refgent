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



![home_page](https://github.com/user-attachments/assets/55f660ab-b03e-4244-b594-257f26abb49f)
![log_in](https://github.com/user-attachments/assets/ade11667-000c-41d3-b577-2b7b96af0920)
![sign_up](https://github.com/user-attachments/assets/50fa1143-6534-49ae-a57a-46ba0e09f3b0)
![profile](https://github.com/user-attachments/assets/88dcae27-6bfc-4847-ac26-f55e7bfc909c)
![select_chat](https://github.com/user-attachments/assets/8377901a-1145-404c-a553-36d3e21e28a0)
![chat](https://github.com/user-attachments/assets/5e23ef07-4e3f-46c1-ac74-ffc72168ab67)
![edit_profile](https://github.com/user-attachments/assets/113b7d37-bf5f-4470-bb25-afab237fc324)








Target Users
This platform is built for licensed real estate agents.
Clients may browse the site, but they are not intended to create accounts.

