---
# This is the icon of the page
icon: page
# This is the title of the article
title: Reports & Dashboards Basic Guide
# Set author
author: Huitzi Solutions
# Set writing time
time: 2017-01-01
# A page can only have one category
category: Guide
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: Mi Casa Resource Center | Powered By Huitzi Solutions
---

**Doc Version:** 2017


## **Objective:**  
In this section you will find the basic theory about the reports and dashboards in Salesforce. 


**Difficulty:** Beginner.


### **What is a report?**

A report is a list of records that meet the criteria you define. It’s displayed in Salesforce in rows and columns, and can be filtered, grouped, or displayed in a graphical chart.
Every report is stored in a folder. Folders can be public, hidden, or shared, and can be set to read-only or read/write. You control who has access to the contents of the folder based on roles, permissions, public groups, and license types. You can make a folder available to your entire organization, or make it private so that only you, as the owner, have access.

### **What is a dashboard?**

A dashboard is a visual display of key metrics and trends for records in your org. The relationship between a dashboard component and report is 1:1; for each dashboard component, there is a single underlying report. However, you can use the same report in multiple dashboard components on a single dashboard (e.g., use the same report in both a bar chart and pie chart). Multiple dashboard components can be shown together on a single dashboard page layout, creating a powerful visual display and a way to consume multiple reports that often have a common theme, like sales performance, customer support, etc.
Like reports, dashboards are stored in folders, which control who has access. If you have access to a folder, you can view its dashboards. However, to view the dashboard components, you need access to the underlying reports as well. You can also follow a dashboard in Chatter to get updates about the dashboard posted to your feed.
Each dashboard has a running user, whose security settings determine which data to display in a dashboard. If the running user is a specific user, all dashboard viewers see data based on the security settings of that user—regardless of their own personal security settings. For this reason, you’ll want to choose the running user wisely, so as not to open up too much visibility. For example, set the Recruitment Coordinator as the running user for a dashboard for her team. This allows her team members to view the dashboard for their individual team, but not other teams.
Dynamic dashboards are dashboards for which the running user is always the logged-in user. This way, each user sees the dashboard according to his or her own access level. If you’re concerned about too much access, dynamic dashboards might be the way to go.

### **What is a report type?**

A report type is like a template which makes reporting easier. The report type determines which fields and records are available for use when creating a report. This is based on the relationships between a primary object and its related objects. For example, with the ‘Contacts and Accounts’ report type, ‘Contacts’ is the primary object and ‘Accounts’ is the related object.
Reports display only records that meet the criteria defined in the report type. Out of the box, Salesforce provides a set of predefined standard report types. Don’t see all the fields you want? Your administrator might need to create a custom report type.

For example, an administrator can create a report type that shows only job applications that have an associated resume; applications without resumes won't show up in reports using that type. An administrator can also show records that may have related records—for example, applications with or without a welcome form. In this case, all applications, whether or not they have a welcome form, are available to reports using that type. An administrator can also add fields from a related object by creating a lookup relationship to that object, allowing for even more reporting possibilities.

<img :src="$withBase('/assets/reportsAndDashboardsBasicGuide/1.png')" alt="foo">

An image showing the relationships between folders, dashboards, reports, and report types.


### **Let's build a report!**

| Type of information | Examples                                                                                                                                                                                                                                                                                                                |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Main Question       | Where do our program participants come from?                                                                                                                                                                                                                                                                            |
| Follow-up Questions | - What type of program participants should be included in the report (alumni who have successfully completed the program, participants with Spanish as their primary language, etc)? - Do you want to see the results grouped by city, country, or Zip Code? - What is your date range?                                 |
| Requirements        | - 'Program Participants' excludes prospects who did not enroll in a program. - Group participants by Race/Ethnicity. - Show all Closed/Won Applications & Enrollments*                                                                                                                                                  |
| Criteria            | - Report Type = Applications & Enrollments w/Class Participations and Contact. - Report Format = Summary - Grouping = Zip Code - Show = My Team's Applications & Enrollments  - Date Field = Close Date - Range = All Time - Filter = Stage 'equals' Completed - Filter = City 'equals' Denver - Filter Logic = 1 AND 2 |

