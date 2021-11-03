---
# This is the icon of the page
icon: page
# This is the title of the article
title: How to clone an Application or Enrollment Record
# Set author
author: Huitzi Solutions
# Set writing time
time: 2020-01-01
# A page can only have one category
category: Guide
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: Mi Casa Resource Center | Powered By Huitzi Solutions
---

## How to clone an Application or Enrollment Record

**Doc Version:** 2021

### **Objective:**

In this section you will find how to clone an application or enrollment record. This section will also address how to manage applications and enrollments for workshops.

### **Where is it located within the Salesforce Org?**

|[Mi Casa” | App | Application & Enrollment record](https://micasa.lightning.force.com/lightning/o/Opportunity/list?filterName=Recent)

**Difficulty:** Beginner.

### **Steps**

Go to a participant's Application & Enrollment record.

<img :src="$withBase('/assets/cloneAnApplicationOrEnrollmentRecord/1.png')" alt="foo">


- Look at the top right corner of your screen for the button "Clone" and click on it.

- Now that you have cloned the Application & Enrollment record:

- Find the field: "Account Name". This is the current Application & Enrollment record's Course Account. Click on the x in the Account Name field box, and type in the name of the new Course Account.

- Find the field: ‘Stage’. This is the current Application & Enrollement’s stage, ensuring that the correct value is set for the new (cloned) Application & Enrollment record.

### **How to Manage Applications & Enrollments for Workshops**

### **Create a “List View” to view your applications:**

Go to **Applications & Enrollments:** this tab automatically opens up to the “Recently Viewed” related list. Use the dropdown arrow next to “Recently Viewed” to select a related list that fits the description of what you are looking to pull—ex. “All Interest Forms”, “All Applications”, “All Enrollments”.

<img :src="$withBase('/assets/cloneAnApplicationOrEnrollmentRecord/2.jpg')" alt="foo">

<img :src="$withBase('/assets/cloneAnApplicationOrEnrollmentRecord/3.jpg')" alt="foo">

Once you have selected a “List View” to make a copy of, click on the gear icon in the upper right hand corner of the screen. Select “Clone”.
Click on the gear icon again and then click on **“Select Fields to Display”**... From here you can select any field from the application & enrollment to appear in the list. The default fields are automatically selected. From the fields that are in your page layout, you can display up to 15 different fields in your view. Some key fields to display are: Application & Enrollment Name, Application & Enrollment Record Type, Stage, Contact, Applicant Email, Applicant Phone. 

<img :src="$withBase('/assets/cloneAnApplicationOrEnrollmentRecord/4.png')" alt="foo">

Now Filters! Click on the gear icon again and select “Show List Filters” Select the field to filter, an operator, and a value. Depending on the type of field you selected, you can either select a value or enter one of your own.

Click Done. Click Save. The view appears in the View drop-down list so you can access it later.

### **Manage your Applications & Enrollments:**

#### **Phone Confirmations (Inline Editing):**
For the most efficient update of application information—use the “inline” editing function of SFDC. This means that rather than clicking on each individual application to update, you will work within the related list instead. Note that not all fields on records in a list view can be edited inline. To find out whether a field supports inline editing, hover over it and look for the pencil. Non-editable cells have a lock.
Ensure that the field “Applicant Phone” is displayed in your “List View”. From the list, hover over the cell to edit, and then click . Or, double-click the cell. Alternatively, you can select the to the right of each row and select “Edit”.

Edit the “Stage” field to display the appropriate field “Registered” or “Denied” based on the result of the call.  Save button appears at the bottom of the list view.

Click Save. You have now finished confirming who will be attending your workshop.
 
#### **Post-Workshop Attendance (Mass Update)**


Now that the workshop has ended, you can use your sign-in sheet to update SFDC. Go to your previously created workshop “List View”.


Use the checkboxes to the left of each row to select the participants who attended the workshop.
