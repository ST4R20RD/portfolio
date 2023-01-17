export const PROJECTS: Array<{
  image: string;
  name: string;
  subTitle: string;
  description: string;
  techs: Array<string>;
  github: string;
  live: string;
  warning?: string;
}> = [
  {
    image: "/images/24grind-frontPic.png",
    name: "24Grind",
    subTitle: "Every activity's more fun now with friends",
    description:
      "24Grind is a social self-care app that allows users to create, share, and discover self-care activities such as physical, reading, mental lab, and domestic tasks. Users can create an account, log in, create activities, share them with others, rate, and provide feedback. They can also join or create groups, set reminders, track progress, and connect with others. The app has a simple interface, clean design, easy navigation and includes gamification aspects. Note: The app is still in development so not every functionality is currently available in the app.",
    techs: ["ReactJS", "Typescript", "Tailwind", "Axios", "React-router-dom", "Formik"],
    github: "https://github.com/ST4R20RD/24Grind-frontend",
    live: "https://24grind.netlify.app/",
    warning: "BE not currently working, we are actively working on a fix.",
  },
  {
    image: "/images/tesla-clone-frontPic.png",
    name: "Tesla Website Clone",
    subTitle: "Clone of Tesla Website to test my skills",
    description:
      "As a web developer, I have taken on the challenge of creating a responsive clone of the Tesla website to test and showcase my skills in web development. This project involves replicating the design, layout, and functionality of the official Tesla website, while also ensuring that it is optimized for use on a wide range of devices, including desktop computers, laptops, tablets, and smartphones. The website is built using the latest web development technologies and best practices to ensure fast loading times, user-friendly navigation, and accessibility to all users. Additionally, The website will include all of the same information and resources that are available on the official Tesla website. It was a great opportunity to test my skills in developing a web-responsive website and my ability to replicate a complex website.",
    techs: ["ReactJS", "ReduxJS", "StyledComponents", "MaterialUI"],
    github: "https://github.com/ST4R20RD/tesla-clone",
    live: "https://tesla-clone-gnestrelado.netlify.app/",
  },
  {
    image: "/images/whatsgood-frontPic.png",
    name: "Whatsapp Clone",
    subTitle: "Clone of Whatsapp App Clone to test my skills",
    description:
      "As a web developer, I have taken on the challenge of creating a responsive web app that replicates the functionality of the popular messaging app, WhatsApp. This project aims to test and showcase my skills in web development, specifically in the area of creating responsive web apps. The web app will be designed to work seamlessly on all devices, including desktop computers, laptops, tablets, and smartphones. The user can Log in with Google. The app will include some of the key features of WhatsApp, such as messaging and group chats. It will be built using the latest web development technologies and best practices to ensure fast loading times, user-friendly navigation, and accessibility to all users. This project will also be an opportunity for me to demonstrate my ability to replicate a complex app and my understanding of the features and functionalities of the app, and to learn more about firebase.",
    techs: ["ReactJS", "Firebase", "MaterialUI"],
    github: "https://github.com/ST4R20RD/whatsapp-clone",
    live: "https://whatsgood-gnestrelado.netlify.app/",
  },
  {
    image: "/images/nani-frontPic.png",
    name: "Nani",
    subTitle: "All of animes in one place",
    description:
      "Together with a colleague for the final project of our course, we have taken on the task of creating a responsive web site that allows users to discover and stay up to date on the latest anime releases, as well as access information on specific anime titles and share their thoughts and comments with other fans. The site is fully responsive, meaning it will adjust its layout and functionality to work seamlessly on all devices, including desktop computers, laptops, tablets, and smartphones. The site features a user-friendly interface that allows users to easily browse and search for new anime releases, view trailers and read synopsis of the anime, read reviews and ratings of the anime, and view the cast and staff of the anime. Users will also be able to leave comments, ratings and reviews on the anime, and share their thoughts and recommendations with other fans through built-in social media interaction options. To ensure the best user experience, the website will be built using the latest web development technologies and best practices to ensure fast loading times, user-friendly navigation, and accessibility to all users. Additionally, the site will be optimized for search engines to help bring in more traffic and visibility. This project will be an opportunity for me to demonstrate my skills in building a responsive website that caters to a specific niche and community, as well as my ability to integrate various functionalities and features to create a comprehensive anime information and discovery platform.",
    techs: [
      "ReactJS",
      "SCSS",
      "Axios",
      "React-router-dom",
      "Socket.io",
      "Google-Login",
      "Recaptcha",
    ],
    github: "https://github.com/RaAlMer/Nani-frontend",
    live: "https://nani-app.netlify.app/",
    warning:
      "Not currently working because the service where the BE was allocated turned payed in the last few month, I am working on an alternative",
  },
  {
    image: "/images/penalty-frontPic.png",
    name: "Penalty Shootout",
    subTitle: "Simple game for quick fun with friends",
    description:
      "Put your luck to the test with our simple yet exciting Penalty Shootout game. Players take turns attempting to score against the opposing team's goalkeeper, with the pressure of a one-on-one showdown. With easy-to-use controls and a straightforward gameplay, this game is perfect for players of all ages and skill levels. Test your luck and see if you have what it takes to come out on top!",
    techs: ["HTML", "Canvas"],
    github: "https://github.com/ST4R20RD/Penalty-Shootout",
    live: "https://penalty-shootout.netlify.app/",
  },
];
