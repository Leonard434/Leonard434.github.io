const logotext = "LEONARD";
const meta = {
    title: "Leonard Thuranira",
    description: "I’m a data-driven problem solver with a background in Accounting and Data Science, turning business data into clear, actionable insights.",
};

const introdata = {
    title: "I’m Leonard Thuranira",
    animated: {
        first: "I turn data into predictive intelligence",
        second: "I build machine learning pipelines",
        third: "I solve business problems with advanced analytics",
    },
    description: "Data scientist bridging Accounting and Data Science, focused on predictive modeling, feature engineering, and decision support through scalable data solutions.",
    your_img_url: require("./assets/images/mypic.png"),
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a data scientist with a background in Accounting and Data Science. I specialize in predictive modeling, machine learning, and data engineering, turning complex business data into strategic, objective-driven insights. With a strong foundation in accounting and auditing, I deliver end-to-end data science solutions that support risk management, customer retention, and revenue growth.",
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
    {
        title: "Data Science Strategy & Model Deployment",
        description: "Delivering production-ready ML models with CI/CD, model monitoring, and stakeholder-focused analytics storytelling to drive measurable business value.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1559526324-593bc073d938", // customer churn
        title: "Bank Customer Churn Prediction (Random Forest)",
        description:
            "End-to-end customer churn prediction pipeline for a bank with Random Forest model deployment. Includes exploratory analysis, feature engineering (tenure, balance ratio, interaction features), class imbalance handling, and hyperparameter tuning with GridSearchCV. Model validated on holdout set with 88% accuracy, 82% recall on churn class, and 0.91 ROC AUC; high-risk cohort segmentation and recommended retention interventions for priority customer groups.",
        link: "https://github.com/Leonard434/customer-churn-prediction.git",
        deployLink: "https://customer-churn-prediction-cg3h.onrender.com/",
    },
    {
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3", // finance / loan
        title: "Loan Approval Prediction with Machine Learning",
        description:
            "Machine learning model for loan decision support built from financial applicant profiles. I executed full ETL, engineered credit score proxies, addressed skew via SMOTE, and compared candidate algorithms with cross-validation. Selected interpretable high-performance model and documented precision/recall tradeoffs for low-risk lending and reduced default exposure.",
        link: "https://github.com/Leonard434/Loan_prediction",
    },
    {
        img: "https://raw.githubusercontent.com/Leonard434/netflix_database_movies_project/main/Netflix-swimlane-home.webp",
        title: "Netflix Database Movies (PostgreSQL)",
        description:
            "Data engineering & analytics project structuring streaming catalog data into normalized PostgreSQL schema. Built complex SQL queries and dashboards to uncover user engagement signals, top genre performance, and content release velocity across regions. Created executive-ready insights that support content acquisition strategy and investment prioritization for audience growth.",
        link: "https://github.com/Leonard434/netflix_database_movies_project",
    },
    {
        img: "https://github.com/Praveendinesha/Sales-Insights-Analysis/assets/142248403/f5a42c27-1638-49cb-9ee0-3521b29bc9c1", // finance / loan
        title: "Sales Analytics Power BI Dashboard",
        description:
            "Interactive Power BI dashboard combining sales data pipelines with KPI forecasting and trend detection. I built model measures for revenue growth, customer LTV, inventory turnover, and region performance, supporting data-driven product mix and pricing decisions. The solution blends BI visualization with actionable insights to improve revenue by identifying high-impact customer segments and seasonal demand patterns.",
        link: "https://github.com/Leonard434/PowerBI-Sales-Analyses-dashboard.git",
    },
    {
        img: "https://www.journeypalette.co.ke/uploads/blogs/c311cb96-bd25-48f0-baf8-7b77959d427b.jpg", // cafe / coffee shop
        title: "Cafe Sales Data Cleaning & EDA",
        description:
            "Data science workflow for retail sales performance: data QA, feature engineering, time-series trends, and pricing elasticity investigation. Implemented anomaly detection, seasonality decomposition, and cohort analysis to quantify menu item lift and optimize promotion windows. Delivered insights that inform staffing, menu strategy, and revenue optimization for cafe operations.",
        link: "https://github.com/Leonard434/Cafe-Sales-Data-Cleaning-and-Explatory-Data-Analysis",
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