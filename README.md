# Aman Bhardwaj - Portfolio

Welcome to the portfolio of Aman Bhardwaj, a MERN Stack Developer. This project showcases my skills, projects, and work experience through an interactive and visually appealing web application.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Contact](#contact)
- [License](#license)

## About Me

I am a MERN Stack Developer specializing in creating SEO-friendly, optimized, and modern animation-enabled websites that are responsive across all devices. This portfolio serves as a hub for my work and skills.

## Features

- **Interactive Hero Section**: A visually engaging introduction with animations and a video background.
- **Skills Showcase**: Displays various skills with icons and descriptions.
- **Projects Section**: Highlights selected projects with video previews and links to live demos.
- **My Workings**: Fetches and displays recent GitHub projects dynamically.
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes.

## Technologies Used

- **Frontend**: 
  - React
  - Next.js
  - Tailwind CSS
  - Framer Motion (for animations)

- **Backend**: 
  - Node.js
  - Express.js

- **Others**:
  - GitHub API (for fetching project data)
  - JSON-LD (for structured data)

## Project Structure
/app
  ├── layout.tsx          # Main layout file that defines the overall structure of the application, including metadata and structured data for SEO.
  └── page.tsx            # Home page component that serves as the entry point for the application, containing the main sections like Hero, Skills, Projects, and My Workings.

/components
  ├── main
  │   ├── Hero.tsx        # Hero section component that displays an engaging introduction with a video background.
  │   ├── MyWorkings.tsx  # Component that fetches and displays recent GitHub projects dynamically.
  │   ├── Projects.tsx    # Projects showcase component that highlights selected projects with video previews.
  │   ├── Skills.tsx      # Skills showcase component that displays various skills with icons and descriptions.
  │   └── StarBackground.tsx # 3D star background component that adds a visual effect to the layout.
  ├── sub
  │   ├── HeroContent.tsx  # Content for the hero section, including text and animations.
  │   ├── ProjectCard.tsx   # Individual project card component that displays project details and links.
  │   └── SkillDataProvider.tsx # Component that handles the display of skill data.
  └── main/Navbar.tsx      # Navigation bar component that provides links to different sections of the portfolio.

/constants
  └── index.ts             # Constants file that contains arrays for skills and social media links, used throughout the application.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AmanBhardwaj-Git/porfolio-animated.git
   cd porfolio-animated
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to run the portfolio locally.

## Contact

Feel free to reach out to me via:

- **Email**: [Gmail](mailto:dayalbhardwaj10@gmail.com)
- **Instagram**: [Instagram Profile](https://www.instagram.com/amanbhardwaj0tw/)
- **X-Twitter**: [ X-Twitter Profile](https://x.com/i/flow/login?redirect_after_login=%2FbhardWAman")
- **GitHub**: [ GitHub Profile](https://github.com/AmanBhardwaj-Git)

Thank you for visiting my portfolio!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
