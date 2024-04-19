/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CRLannister",
  title: "Hi all, I'm Ashish",
  subTitle: emoji(
    "I'm your go-to guru for all things data! 🚀 Specializing in Data Engineering, BI Development, Analysis, and Research. But that's not all! My heart beats faster for AI, Machine Learning, Data Science, Cloud Computing, and open-source development."
  ),
  resumeLink:
    "https://crlannister.github.io/files/AshishAgarwal_CV.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CRLannister",
  kaggle: "https://www.kaggle.com/singhalashish",
  linkedin: "https://www.linkedin.com/in/agarwalashishsinghal/",
  gmail: "agarwal.ashish.singhal@gmail.com",
  gitlab: "https://gitlab.com/crlannister",
  medium: "https://crlannister.medium.com/",
  stackoverflow: "https://stackoverflow.com/users/23720542/crlannister",
  twitter: "https://twitter.com/CRLannister",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOP ETL PIPELINES, DESIGN CLOUD ARCHITECTURE, DATA CLEANING, WRANGLING, STORING, SECURING, ANALYSIS AND VISUALISATIONS.",
  skills: [
    emoji("⚡ Develop highly efficient and optimised data pipelines."),
    emoji("⚡ Develop reports, notebooks and interactive dashboards."),
    emoji("⚡ Develop and deploy in AWS, Azure and GCP Cloud stack.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-superpowers"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of New Haven",
      logo: require("./assets/images/UNHLOGO.png"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2023 - May 2025",
      desc: "Graduate Research Assistant at Sail-Labs. Assistant Data Engineer and ML Engineer for Capstone Projects.",
      descBullets: [
        "Working on Brain-Computer Interface (BCI) technology using Electroencephalography (EEG)"
      ]
    },
    {
      schoolName: "Pulchowk Campus, IOE, Tribhuwan University",
      logo: require("./assets/images/TULOGO.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "November 2016 - September 2021",
      desc: "Ranked top 5% in the program. Took courses about Data Mining, Operating Systems, Big Data and Technologies, Distributed Systems and Project Management",
      descBullets: ["Participated in many workshops, seminars and webinars."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Engineering", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Upwork",
      companylogo: require("./assets/images/UpworkLogo.png"),
      date: "June 2022 – July 2023",
      desc: "Worked with many clients all over the globe and contributed in over 60 projects. Most of the projects were related to Data Engineering and Data Analysis.",
      descBullets: [
        "Used AWS and Azure Cloud Platforms to build data pipelines and architecture.",
        "Developed dashboards and reports in tools such as PowerBI, Tableau, Microstrategy and Looker.",
        "Developed ML and data science codebase for different projects in R, SQL and Python."
      ]
    },
    {
      role: "BI Developer",
      company: "LIS Nepal",
      companylogo: require("./assets/images/LISYomariLogo.png"),
      date: "April 2021 – May 2022",
      desc: "Worked for a global leader in premium lifestyle products in the United States to develop data pipelines and build reports.",
      descBullets: [
        "Served as a Data Engineer to create various ETL/ELT pipelines. Transfer legacy system to Cloud in AWS.",
        "Served as a BI Developer to create Microstrategy Reports. Created Metrics and Attributes for Dashboards."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Tootle",
      companylogo: require("./assets/images/TootleLogo.png"),
      date: "Jan 2021 – March 2021",
      desc: "Researched in ride sharing platforms in Nepal. Developed LRFM and Customer Segmentation algorithms.",
      descBullets: [
        "Worked in creating Dashboards, collecting real-time Nosql data using MongoDB, Django and Python."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Courses, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
        // ,
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I try to write and sometime publish some blogs !",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/analytics-vidhya/population-and-sample-parameters-86598dea03ce",
      title: "Population and Sample Parameters",
      description:
        "Demystifying statistical concepts: Understand the significance of population vs. sample and the nuanced denominator terms in variance calculations for unbiased estimations"
    },
    {
      url: "https://crlannister.medium.com/distribution-33630fe42dcc",
      title: "Distribution",
      description:
        "Exploring statistical distribution: Uncover its purpose, distinction from histograms, and shared attributes, delving into the core of this vital statistical concept."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   ""
  // ],
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "agarwal.ashish.singhal@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "CRLannister", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable
};
