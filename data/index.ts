export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building an AI powered Image generating and editing SaaS App",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "shortUrl",
        des: "A URL shortener built with Next.js and MongoDB, featuring custom SEO titles, descriptions, and images.",
        img: "/shortUrl.jpg",
        // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        iconLists: ["/next-1.svg", "/tail.svg", "/ts.svg",],
        link: "https://tiny-url-supermarpig.vercel.app/",
    },
    {
        id: 2,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next-1.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://iphone15-weld.vercel.app",
    },
    {
        "id": 3,
        "title": "Big File Upload",
        "des": "An advanced file upload service designed to handle large file sizes efficiently, supporting seamless integration with modern frameworks and technologies.",
        "img": "/fileUpload.png",
        "iconLists": ["/next-1.svg", "/tail.svg", "/ts.svg"],
        "link": "https://tiny-url-supermarpig.vercel.app/fileUpload"
    },
    {
        id: 4,
        title: "JavaScript Event Loop",
        des: "這個練習是幫助了解事件循環的運作方式，包括調用堆疊（Call Stack）、Web APIs、任務隊列（Task Queue）和微任務隊列（MicroTask Queue）。",
        img: "/eventloop-Heap.png",
        iconLists: ["/next-1.svg", "/tail.svg", "/ts.svg",],
        link: "https://js-eventloop.vercel.app/",
    },
    {
        id: 5,
        title: "Speech To Text",
        des: "A speech-to-text application utilizing the GPT API for accurate and efficient transcription.",
        img: "/speech2text.jpg",
        iconLists: [],
        link: "https://project-supermarpig.vercel.app/GPT-speech2text/index.html",
    },
    {
        id: 6,
        title: "LineBot",
        des: "透過line Notify傳PTT訊息通知、 串接gpt API ，變成AI知識機器人",
        img: "/lineBotDD.jpg",
        iconLists: [],
        link: "https://liff.line.me/1645278921-kWRPP32q/?accountId=919haefs",
    },
    {
        id: 7,
        title: "月曆組件",
        des: "使用react + vite + ts 開發的月曆組件專案，支持單日期選擇和範圍日期選擇功能",
        img: "/calendarTest.png",
        iconLists: [],
        link: "https://calendar-beta-one.vercel.app/",
    },
    {
        id: 8,
        title: "Some Protice",
        des: "一些小練習",
        img: "/someTest.jpg",
        iconLists: [],
        link: "https://project-supermarpigs-projects.vercel.app/",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Cody was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cody's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cody is the ideal partner.",
        name: "John Doe",
        title: "Director of XYZ Technologies",
        img: "/profile.svg",
    },
    {
        quote:
            "Cody's attention to detail and creative problem-solving skills made a significant impact on our project. His ability to understand and implement our requirements was outstanding. I highly recommend Cody for any development needs.",
        name: "Jane Smith",
        title: "Project Manager at ABC Corp",
        // img: "/profile2.svg",
    },
    {
        quote:
            "Working with Cody was a game-changer for our team. His expertise in front-end development and his collaborative spirit helped us achieve our goals efficiently. Cody is a true professional and a joy to work with.",
        name: "Michael Johnson",
        title: "Lead Developer at DEF Solutions",
        // img: "/profile3.svg",
    },
    {
        quote:
            "Cody consistently delivers high-quality work on time and exceeds expectations. His innovative approach and dedication to excellence make him an invaluable asset to any project. I look forward to working with Cody again in the future.",
        name: "Emily Davis",
        title: "CTO of GHI Innovations",
        // img: "/profile4.svg",
    },
];


export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer",
        desc: "Developed and optimized a web-based platform using React.js, significantly improving user experience and interactivity. Implemented responsive design and collaborated with backend developers to integrate APIs.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 2,
        title: "Full-Stack Developer",
        desc: "Designed and developed web applications using React.js and Node.js. Implemented RESTful APIs and worked with databases to ensure seamless data integration and retrieval.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp4.svg",
    },
    {
        id: 3,
        title: "Freelance Full-Stack Developer",
        desc: "Led the development of a dynamic website for a client, handling both frontend and backend tasks. Developed server-side logic using Node.js and created interactive user interfaces with React.js.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/supermarpig",
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/hsianglungyu/",

    },
];