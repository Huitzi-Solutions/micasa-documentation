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
    logo: "/logo.png",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Huitzi Solutions",
    repo: "https://github.com/Huitzi-Solutions/micasa-documentation",

    nav: [
      { text: "Home", link: "/home/", icon: "home" },
      {
        text: "Documentation",
        icon: "doc",
        link: "/guide/",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          title: "Introduction",
          prefix: "introduction/",
          collapsable: true,
          children: ["howToUseThisGuide", "programDictionaryMiCasaResourceCenter"],
        },
        {
          title: "MCRC Everyday Processes",
          prefix: "MCRCEverydayProcesses/",
          collapsable: true,
          children: [
            {
              title: "User Guides",
              icon: "user",
              collapsable: false,
              children: [
                {
                  title: "How to create...",
                  prefix: "howToCreate/",
                  collapsable: true,
                  children: ["anInternalReferral", "anExternalReferral", "anAppointment", "aNewProspect", "howToConvertAProspect", "anEnrollmentReport", "aCourse", "aNewContact", "mPoweredFinancialCoachingReferrals", "mPoweredFinancialCoachingAppointments"],
                },
                {
                  title: "How to send…",
                  prefix: "howToSend/",
                  collapsable: true,
                  children: ["anEmail", "aBulkSMSForACampaign", "aSingleSMS"],
                },
                {
                  title: "How to track...",
                  prefix: "howToTrack/",
                  collapsable: true,
                  children: ["technologyLending", "andManagePartnerEngagement"],
                },
                {
                  title: "Other guides...",
                  prefix: "otherGuides/",
                  collapsable: true,
                  children: ["howToCompleteACOVID-19Assesment", "How to update a contact", "addNewSupportService", "Salesforce Beginner Onboarding", "How to convert a Prospect", "reportsAndDashboardsBasicGuide", "howToPrintFormsInSalesforce", "howToCloneAnApplicationOrEnrollmentRecord", "howToEnterANavigationAppointment", "How the Lead Processes Paths work", "How the Sales Processes Paths work", "How the Support Processes Paths work", "Prospects FAQ", "supportAlertIntroduction", "howToSubmitASupportAlert", "dataRequestFormInitialGuide"],
                },
              ],
            },
            {
              title: "Admin Guides",
              icon: "admin",
              prefix: "adminOtherGuides/",
              collapsable: false,
              children: [
                {
                  title: "Other guides",
                  collapsable: true,
                  children: ["createAndConfigureALeadProcess", "Data Request Form: Initial Guide", "Support Alert: Introduction", "How to submit a Support Alert"],
                },
              ],
            }
          ],
        },
        {
          title: "Career Pathway",
          prefix: "careerPathway/",
          collapsable: true,
          children: [
            {
              title: "User Guides",
              icon: "user",
              collapsable: false,
              children: [
                {
                  title: "How to create...",
                  prefix: "CPhowToCreate/",
                  collapsable: true,
                  children: ["careerPathwaysAppointments", "careerCoachingAppointments", "andUpdateCareerRetentions"],
                },
                {
                  title: "How to enter…",
                  prefix: "CPhowToEnter/",
                  collapsable: true,
                  children: ["supportServicesCareerPathways", "aCareerCoachingEnrollment"],
                },
                {
                  title: "Other guides...",
                  prefix: "CPotherGuides/",
                  collapsable: true,
                  children: ["howToTakeAttendanceForATrainingCourse", "howToManageWorkshopAttendance", "howToUpdateAContactAndEnrollInCareerCoaching", "howToViewACareerDashboard"],
                },
              ],
            },
            {
              title: "Admin Guides",
              icon: "admin",
              prefix: "AdminGuides/",
              collapsable: false,
              children: [
                "How to clear search filters with respect to Career Coaching & EV Appointments",
              ],
            },
          ],
        },
        {
          title: "Business Pathway",
          prefix: "Business Pathway/",
          collapsable: true,
          children: [
            {
              title: "User Guides",
              icon: "user",
              collapsable: false,
              children: [
                {
                  title: "How to create...",
                  prefix: "howToCreate/",
                  collapsable: true,
                  children: ["... Business Consulting Appointment | Form 641", "... a Business Counseling Survey"],
                },
                {
                  title: "How to enter…",
                  prefix: "howToEnter/",
                  collapsable: true,
                  children: ["... Business Appointments and 641s", "... a Business Consulting Appointment", "... Pre, Post & Hope Surveys"],
                },
                {
                  title: "Other guides...",
                  prefix: "otherGuides/",
                  collapsable: true,
                  children: ["How to search for and request a 641 Form", "How to view a Business Dashboard"],
                },
              ],
            },
            {
              title: "Admin Guides",
              icon: "admin",
              collapsable: false,
              children: [
                "",
              ],
            },
          ],
        },
        {
          title: "Developer Guides",
          prefix: "developerGuides/",
          collapsable: true,
          children: [
            {
              title: "Process Builders",
              collapsable: true,
              children: ["introToProcessBuilders", "howToReadSection","mogliOptOutAutomation", "stackableCredentialsStages", "updateOpportunityAccountOnLeadConversion", "scheduledAppointments", "pendingPayments"],
            }
          ],
        },
      ],
      "/": ["", "home/", "documentation/"],
    },

    footer: {
      display: true,
      content: "2021 Mi Casa Resource Center",
    },
    // This property adds a comments box at the end of the page. It was disabled for now but we will use it in the future.
    // comment: {
    //   type: "waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

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
