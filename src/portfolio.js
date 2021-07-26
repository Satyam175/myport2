/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Satyam Kaushik",
  title: "Hi all, I'm Satyam",
  subTitle: emoji(
    "A Btech. UnderGraduate (2022 Batch) and passionate Full Stack Software Developer and Programmer 🚀 looking for opportunities in Software Development"
  ),
  resumeLink:
    "",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Satyam175",
  linkedin: "https://www.linkedin.com/in/satyam-kaushik-44b170191",
  gmail: "kaushiksatyam54@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/16520618/satyam-kaushik",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop Programmes and Algorithms to solve various DSA problems"
    ),
    emoji("⚡ Use various SQL tools to maintain and Store Large Databases and perform CRUD Operations"),
    emoji(
      "⚡ Use Web Frameworks Such as Spring and Django to develop websites"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jabalpur Engineering College",
      logo: require("./assets/images/jecLogo.png"),
      subHeader: "Bachelor Of Technology in Mechanical Engineering",
      duration: "July 2018 - July 2022",
      desc: "CGPA - 7.86/10",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Peoples Public School",
      logo: require("./assets/images/pps.png"),
      subHeader: "Class 12",
      duration: "2016 - 2017",
      desc: "Percentage - 76.7%",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Peoples Public School",
      logo: require("./assets/images/pps.png"),
      subHeader: "Class 10",
      duration: "2014 - 2015",
      desc: "CGPA - 8.8/10 ",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Front End",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "75%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",
      company: "Technocolabas",
      companylogo: require("./assets/images/technocolabs.jpg"),
      date: "January 21 - Feburary 21",
      desc: "Data Science and Analytics  Intern",
      descBullets: [
        "Lead Contributor in team of 12 to the Complete Model (accuracy 98 %) Design of this Open Source Project.",
        "Create a Web App to identify Social Media Trolls .",
      ],
    },
    {
      role: "Data Science Intern",
      company: "The Sparks Foundation",
      companylogo: require("./assets/images/tsf.png"),
      date: "August 2021 – September 2021",
      desc : "Data Science and Machine Learning Intern",
      descBullets :[
        "Created data visualization graphics, translating complex data sets into comprehensive visual representations."
      ]
    },
    {
      role: "E-Vehicle Trainee",
      company: "Baba Automobile",
      companylogo: require("./assets/images/baba.jpg"),
      date: "June 2021 – July 2021",
      desc : "Learnt the working technology of Electric Vehicle and understood design of 15 different types of automobile engines . Worked with team 0f 5 to repair a old engine ."
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
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
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HackerRank Gold Badge in Java",
      subtitle:
        "Got Gold badge in java from HackerRank and passed HackerRank java test",
      image: require("./assets/images/hackerrank.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/kaushiksatyam573?badge=java&stars=5&level=3&hr_r=1&utm_campaign=social-buttons&utm_medium=linkedin&utm_source=badge_share_profile&social=linkedin://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
       ],
    },
    {
      title: "IBM digital badge in Data Science",
      subtitle : "                                                    ",
      image: require("./assets/images/ibm.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.youracclaim.com/earner/earned/badge/af761daf-2ce8-4960-b571-df3527b222fe",
        },
      ],
    },

    {
      title: "Eleation Certified Ansys Designer",
      subtitle: "Completed Certifcation from Eleation for Ansys",
      image: require("./assets/images/eleation2.png"),
      footerLink: [
        { name: "Certification", 
        url: "" },
      
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6260680915",
  email_address: "kaushiksatyam54@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails,
};
