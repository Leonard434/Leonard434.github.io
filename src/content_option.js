const logotext = "LEONARD";
const meta = {
    title: "Leonard Thuranira",
    description: "I’m a data-driven problem solver with a background in Accounting and Data Science, turning business data into clear, actionable insights.",
};

const introdata = {
    title: "I’m Leonard Thuranira",
    animated: {
        first: "I turn data into insights",
        second: "I build analytical dashboards",
        third: "I solve business problems with data",
    },
    description: "Data-driven problem solver with experience in Accounting and Data Science, focused on building dashboards and models that support decision making.",
    your_img_url: require("./assets/images/mypic.png"),
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a data-driven problem solver with a background in Accounting and Data Science. I specialize in turning business data into clear, actionable insights through data cleaning, exploratory analysis, and visualization using Power BI, SQL, and Python. With a foundation in accounting and auditing, I combine business understanding with analytical rigor to ensure data supports strategic and operational decisions.",
};
const worktimeline = [{
        jobtitle: "Accountant Attaché",
        where: "Tax & Financial Data Analysis",
        date: "May 2024 – Aug 2024",
    },
];

const skills = [{
        name: "Python",
        value: 85,
    },
    {
        name: "SQL",
        value: 85,
    },
    {
        name: "Power BI",
        value: 90,
    },
    {
        name: "PostgreSQL",
        value: 80,
    },
    {
        name: "Tableau",
        value: 75,
    },
    {
        name: "Excel (advanced)",
        value: 90,
    },
    {
        name: "pandas / NumPy",
        value: 85,
    },
    {
        name: "Scikit-Learn",
        value: 80,
    },
    {
        name: "Matplotlib",
        value: 80,
    },
];

const services = [{
        title: "Data Cleaning & Transformation",
        description: "Preparing, cleaning, and structuring raw business data to ensure accuracy and reliability for reporting and analysis.",
    },
    {
        title: "Dashboard Development & Reporting",
        description: "Designing intuitive dashboards in Power BI and Excel that help stakeholders monitor KPIs, track performance, and make informed decisions.",
    },
    {
        title: "Exploratory Data Analysis & Insights",
        description: "Exploring datasets using Python, SQL, and visualization tools to uncover trends, patterns, and opportunities.",
    },
    {
        title: "Machine Learning & Predictive Modeling",
        description: "Building and evaluating predictive models to support use cases such as loan eligibility and business forecasting.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e", // cafe / coffee shop
        title: "Cafe Sales Data Cleaning & Exploratory Data Analysis",
        description:
            "End-to-end cleaning and analysis of real café sales data sourced from Kaggle. I fixed data quality issues (missing values, inconsistent labels, incorrect data types), engineered time-based features, and used Python (pandas, matplotlib, seaborn) to uncover revenue trends, peak hours, high- and low-performing items, and weekday vs weekend behavior, turning raw POS data into clear, decision-ready insights.",
        link: "https://github.com/Leonard434/Cafe-Sales-Data-Cleaning-and-Explatory-Data-Analysis",
    },
    {
        img: "https://raw.githubusercontent.com/Leonard434/netflix_database_movies_project/main/Netflix-swimlane-home.webp",
        title: "Netflix Database Movies (PostgreSQL)",
        description:
            "I used PostgreSQL to load and structure the Netflix Movies & TV Shows dataset, normalizing it into clean relational tables for titles, cast, and genres. From there I wrote analysis queries that answer business questions such as: which genres are most popular by country, how average ratings differ by genre and producer, and which years saw the highest number of releases. This project shows how SQL can turn a streaming catalogue into concrete insights about content distribution, audience tastes, and release trends across markets.",
        link: "https://github.com/Leonard434/netflix_database_movies_project",
    },
    {
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3", // finance / loan
        title: "Loan Approval Prediction with Machine Learning",
        description:
            "Supervised machine learning pipeline that predicts loan approval from applicant features like income, employment, credit history, and property details. I performed EDA, encoded categorical variables, handled missing values, scaled features, and trained several models, then compared them using cross-validation, confusion matrices, and classification reports—selecting Logistic Regression and Naive Bayes as interpretable, high-recall models suitable for real-world credit screening.",
        link: "https://github.com/Leonard434/Loan_prediction",
    },
];

const contactConfig = {
    YOUR_EMAIL: "Leonardthuranira253@gmail.com",
    YOUR_FONE: "+254758445536",
    description: "Let’s connect about data analytics, dashboarding, and decision support. I’m especially interested in roles where I can combine accounting knowledge with data science to drive measurable business impact.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_26y3ve8",
    YOUR_TEMPLATE_ID: "template_isrgko6",
    YOUR_USER_ID: "dMt7hKT-877yh8UEr",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com/profile.php?id=61554986197837",
    linkedin: "https://www.linkedin.com/in/leonard-thuranira-67785024a/",
    twitter: "https://x.com/leonmaster_ke",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};