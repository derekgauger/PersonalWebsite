



let sidebarInfo = [
    { label: 'Home', link: "/" },
    { label: 'About', 
      link: '/about',
      subTabs: [
        // { name: 'Interests', link: <AboutInterests /> },
        { name: 'Work Experience', link: "/work-experience" },
        { name: 'Education', link: "/education" },
      ]
    },
    {
      label: 'Projects',
      link: "/projects",
      subTabs: [],
    },
    { label: 'Contact', link: "/contact"},
];


export default sidebarInfo;