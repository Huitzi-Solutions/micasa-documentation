const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Mi Casa's Salesforce Documentation",
  description: "",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap' }],
  ],

  locales: {
    "/": {
      lang: "en-US",
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Huitzi Solutions",
    repo: "https://github.com/Huitzi-Solutions/micasa-documentation",

    nav: [
      { text: "Home", link: "/home/", icon: "home" },
      {
        text: "Documentation",
        icon: "doc",
        link: "/documentation/",
      },
    ],

    sidebar: {
      "/documentation/": [
        {
          title: "1.0 Introduction",
          prefix: "introduction/",
          collapsable: true,
          children: ["1.1 How to use this guide", "1.2 Program Dictionary Mi Casa Resource Center"],
        },
        {
          title: "2.0 MCRC Everyday Processes",
          prefix: "Everyday Processes/",
          collapsable: true,
          children: [
            {
              title: "2.1 User Guides",
              icon: "user",
              collapsable: false,
              children: [
                {
                  title: "2.1.1 How to create...",
                  collapsable: true,
                  children: ["...an Internal Referral", "...an External Referral", "...an Appointment", "...an New Prospect", "...an Enrollment Report", "...a Course", "...a New Contact", "...mPowered Financial Coaching Referrals", "...mPowered Financial Coaching Appointments"],
                },
                {
                  title: "2.1.2 How to send…",
                  collapsable: true,
                  children: ["... an Email", "... a Bulk Email", "... a single SMS", "... multiple SMS "],
                },
                {
                  title: "2.1.3 How to track...",
                  collapsable: true,
                  children: ["... technology lending", "... and manage Partner Engagement"],
                },
                {
                  title: "2.1.4 Other guides...",
                  collapsable: true,
                  children: ["How to complete a COVID-19 Assessment", "How to update a contact", "Salesforce Beginner Onboarding", "How to convert a Prospect", "Reports & Dashboards: Basic Guide", "How to print forms in Salesforce", "How to clone an Application or Enrollment Record", "How to enter a Navigation Appointment", "ow the Lead Processes Paths work", "How the Sales Processes Paths work", "How the Support Processes Paths work", "Prospects FAQ"],
                },
              ],
            },
            {
              title: "2.2 Admin Guides",
              icon: "admin",
              collapsable: false,
              children: [
                {
                  title: "2.2.1 Org model structure |How the database is organized",
                  collapsable: true,
                  children: ["Primary Object Relationship"],
                },
                {
                  title: "2.2.2 Other guides",
                  collapsable: true,
                  children: ["Data Request Form: Initial Guide", "Support Alert: Introduction", "How to submit a Support Alert"],
                },
              ],
            },
            {
              title: "2.3 Developer Guides",
              icon: "code",
              prefix: "Developer Guides/",
              collapsable: false,
              children: [
                  "Mogli Opt-Out Automation | On lead and Contact",
              ],
            },
          ],
        },
        {
          title: "3.0 Career Pathway",
          prefix: "Career Pathway/",
          collapsable: true,
          children: [
            {
              title: "3.1 User Guides",
              icon: "user",
              collapsable: false,
              children: [
                {
                  title: "3.1.1 How to create...",
                  collapsable: true,
                  children: ["... Career Pathways Appointments", "... Career Coaching Appointments", "... and update Career Retentions"],
                },
                {
                  title: "3.1.2 How to enter…",
                  collapsable: true,
                  children: ["... Support Services- Career Pathways", "... a Career Coaching Enrollment"],
                },
                {
                  title: "3.1.3 Other guides...",
                  collapsable: true,
                  children: ["How to take attendance for a training course", "How to manage workshop attendance", "How to update a contact and enroll in Career Coaching", "How to view a Career Dashboard"],
                },
              ],
            },
            {
              title: "2.2 Admin Guides",
              icon: "admin",
              collapsable: false,
              children: [
                "How to clear search filters with respect to Career Coaching & EV Appointments",
              ],
            },
            {
              title: "2.3 Developer Guides",
              icon: "code",
              prefix: "Developer Guides/",
              collapsable: false,
              children: [
                {
                  title: "Mogli Opt-Out Automation | On lead and Contact",
                },
              ],
            },
          ],
        },
        {
          title: "4.0 Business Pathway",
          prefix: "Business Pathway/",
          collapsable: true,
          children: [
            {
              title: "4.1 User Guides",
              icon: "user",
              collapsable: false,
              children: [
                {
                  title: "3.1.1 How to create...",
                  collapsable: true,
                  children: ["... Business Consulting Appointment | Form 641", "... a Business Counseling Survey"],
                },
                {
                  title: "3.1.2 How to enter…",
                  collapsable: true,
                  children: ["... Business Appointments and 641s", "... a Business Consulting Appointment", "... Pre, Post & Hope Surveys"],
                },
                {
                  title: "3.1.3 Other guides...",
                  collapsable: true,
                  children: ["How to search for and request a 641 Form", "How to view a Business Dashboard"],
                },
              ],
            },
            {
              title: "4.2 Admin Guides",
              icon: "admin",
              collapsable: false,
              children: [
                "",
              ],
            },
          ],
        },
      ],
      "/": ["", "home/", "documentation/"],
    },

    footer: {
      display: true,
      content: "2021 Mi Casa Resource Center",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
