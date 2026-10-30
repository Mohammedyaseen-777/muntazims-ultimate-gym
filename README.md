# Muntazim's Ultimate Gym

A modern, responsive gym website built to showcase **Muntazim's Ultimate Gym**, located in Vishala, Ahmedabad, Gujarat. The website helps visitors explore the gym, learn about its training options, view membership plans, read reviews, and contact the gym directly.

🌐 **Live Website:** https://muntazim-ultimate-gym.lovable.app/

---

## 📌 About the Project

Muntazim's Ultimate Gym is a fitness-focused website designed to provide visitors with essential information about the gym through a clean and user-friendly interface.

The website is suitable for beginners and experienced fitness enthusiasts who want to learn about available facilities, training options, and membership opportunities.

It also provides direct contact options through WhatsApp, phone calls, and Google Maps.

## ✨ Features

- **Modern Homepage:** Attractive hero section with a clear introduction and call-to-action buttons.
- **About Section:** Information about the gym and its fitness approach.
- **Facilities:** Overview of strength training, weight training, cardio, fitness equipment, and personal training.
- **Training Programs:** Information about weight loss, general fitness, strength training, muscle building, personal training, and beginner fitness.
- **Image Gallery:** Categorized gallery with filters for different gym-related images.
- **Google Reviews:** Displays the gym's Google rating and review count.
- **Membership Plans:** Monthly, quarterly, and annual membership enquiry options.
- **Contact Section:** Gym address, phone number, WhatsApp enquiry, and Google Maps directions.
- **FAQ Section:** Answers to common questions about location, facilities, memberships, opening hours, and training.
- **Responsive Design:** Designed to provide a user-friendly experience across different screen sizes.

## 🛠️ Technologies Used

The project structure includes the following technologies and tools:

- **React** – Component-based user interface.
- **TypeScript** – Type-safe JavaScript development.
- **CSS** – Website styling and responsive layouts.
- **TanStack Router / Start** – Application routing and project structure.
- **Supabase** – Backend service configuration.
- **Drizzle ORM** – Database schema and migration structure.
- **Bun** – Package management and development workflow.
- **Git & GitHub** – Version control and source code management.
- **Lovable** – AI-assisted website development.

## 📂 Project Structure

```text
muntazim-ultimate-gym/
│
├── drizzle/
│   ├── migrations/
│   └── schema.ts
│
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── cardio.jpg
│   │   ├── hero.jpg
│   │   ├── training.jpg
│   │   └── weights.jpg
│   │
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── integrations/
│   ├── lib/
│   ├── routes/
│   ├── test/
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── supabase/
│   └── config.toml
│
├── .env
├── .gitignore
├── .prettierignore
├── package.json
└── README.md
```

*Note: This is an overview of the project structure. Some generated or configuration files may not be listed.*

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Mohammedyaseen-777/muntazims-ultimate-gym.git
```

### 2. Navigate to the Project Directory

```bash
cd muntazims-ultimate-gym
```

### 3. Install Dependencies

Make sure Bun is installed, then run:

```bash
bun install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the required Supabase configuration values if your local setup needs them.

Use the variable names required by the project:

```env
SUPABASE_PROJECT_ID=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_URL=

VITE_SUPABASE_PROJECT_ID=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_URL=
```

Add the appropriate values from your Supabase project. Never upload your actual `.env` file or private credentials to GitHub.

### 5. Start the Development Server

```bash
bun run dev
```

Open the local URL displayed in your terminal to view the website.

*Note: Available scripts and environment requirements can be checked in `package.json`.*

## 📍 Gym Information

**Muntazim's Ultimate Gym**

- **Location:** Shop No. 7, Circle, Unit Hills Society, Rehnuma Society, Vishala, Ahmedabad, Gujarat 380055
- **Phone:** +91 97145 53800
- **Website:** https://muntazim-ultimate-gym.lovable.app/
- **Contact:** Phone and WhatsApp enquiries

## 🖼️ Gallery Note

The current website includes illustrative sample images in certain gallery and facilities sections. These are marked as sample images on the website. Actual gym photographs can be added as they become available.

## 🔒 Security

- Environment variables are excluded from Git using `.gitignore`.
- Sensitive credentials should never be committed to the repository.
- Configure your own environment variables before running any backend-dependent functionality.

## 🔮 Future Improvements

- Add actual gym photographs and member testimonials.
- Add detailed membership pricing and plan information.
- Introduce online membership registration.
- Add a dedicated workout and fitness tips section.
- Improve SEO and website performance.
- Integrate additional backend functionality where required.

## 👨‍💻 Developer

**Mohammed Yaseen**

B.Voc – Information Technology Student | Frontend Web Developer

- **GitHub:** https://github.com/Mohammedyaseen-777
- **Project Repository:** https://github.com/Mohammedyaseen-777/muntazims-ultimate-gym
- **Live Demo:** https://muntazim-ultimate-gym.lovable.app/

---

## 📄 License

This project is available for educational and portfolio purposes. All business names, branding, and gym-related information belong to their respective owners.

---

**Built with dedication to create a better digital presence for Muntazim's Ultimate Gym.**
