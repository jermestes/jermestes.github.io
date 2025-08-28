const projectList = [
    {
        id: 0,
        name: 'The BAKEd Sale',
        desc: 'A ReactJS webapp for a fictitious food ordering service. Users can place/edit orders as a customer and make changes to menu items as an admin. Changes in menu data are reflected in realtime via Firebase.', 
        link1: 'https://jermestes.github.io/idm364-jje56',
        link2: 'https://github.com/jermestes/idm364-jje56',
        linkTypes: ['Live Site','Repository']
    } ,
    { 
        id: 1,
        name: 'NBA Zodiac',
        desc: 'A web page that serves users a unique NBA player and message based on the sign chosen or birthdate entered. Coded in React with Tailwind CSS. Images edited in Adobe Photoshop.', 
        link1: 'https://jermestes.github.io/idm231-jje56/',
        link2: 'https://github.com/jermestes/idm231-jje56',
        linkTypes: ['Live Site','Repository']
    } ,
    {
        id: 2,
        name: 'iTunes Redesign',
        desc: `The term project for my UI Design course was to make a prototype which redesigns the UI of an existing desktop site or application. I took a different approach, by reimagining Apple iTunes as a browser player that creates parity with Apple Music's iPhone app. Created and deployed with AdobeXD. PLEASE NOTE that this was done before the Apple Music app existed on desktop`,
        link1: 'https://xd.adobe.com/view/d9e6064d-f5ff-4585-6456-15c6a99b3c27-afd7/?hints=off',
        link2: null,
        linkTypes: ['Live Demo',null]
    } ,
    {
        id: 3,
        name: 'VinylDNS',
        desc: `Drexel CCI Senior project, where our team worked to overhaul the web client for Comcast's VinylDNS, a vendor-agnostic DNS management system. The team worked to recode the portal in ScalaJS (to match with the API) while also making the interface more user-friendly. I worked on UI prototyping and documentation. `,
        link1: 'http://www.cci.drexel.edu/SeniorDesign/2018_2019/VinylDNS/index.html',
        link2: null,
        linkTypes: ['More Info',null]
    }  
];

const bodytextList = {
    about: [
        `Hello and welcome to my site! My name is Jeremy, but most just call me Jerm.`,
        `My profession is web development. I graduated from Drexel University, where I established an all-around IT background through my coursework and help desk internships. 
        Since then, I’ve worked over 5 years as a support developer at a premier digital agency and am currently open to new opportunities.`,
        `In my free time, I root on my Philly sports teams (Go Birds), play basketball, and enjoy the finest food and entertainment with my loved ones. 
        Even off the clock, though, I still experiment with technology to help organize my thoughts, optimize my time, and explore my creativity.`,
    
    ],
    projects: "Along with this portfolio site, I’ve built other web projects that you can check out below.",
    contact: "I’d love to hear from you. Below are some links you can use to connect with me."
}

export {projectList, bodytextList};