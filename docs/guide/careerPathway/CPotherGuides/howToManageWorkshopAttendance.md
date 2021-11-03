---
# This is the icon of the page
icon: page
# This is the title of the article
title: ...How to manage workshop attendance

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

## ...How to manage workshop attendance

**Doc version:** 2020

### **Objective:**

In this section you will find how to manage Workshop Attendance

### **Where is it located within the Salesforce Org?**|Navigation inside the Org. E.G [Mi Casa” | App |Account](https://micasa--partial.lightning.force.com/lightning/o/Opportunity/list?filterName=00B41000005htrcEAA)

**Difficulty:** Beginner.

### **Steps:**

::: warning
If your workshop has simultaneous English and Spanish classes, choose one to start with and go through all the steps, then repeat with the other language.
:::

1. Open the Applications & Enrollments tab, and find the appropriate registration list view for the workshop/webinar. Once in the list view, it’s a good idea to double check the filters (by using the filter icon at the upper right), to ensure it’s filtered for the correct workshop/webinar.

<img :src=“$withBase(‘/assets/attendanceTrainingCourse/1.png’)” alt=“foo”>

2. Using your sign-in sheet/webinar attendance list, check the box on the left for each participant that attended. It may be helpful to sort the list by name – you can do so by clicking on the word Contact in the header.
3. Once all of your participants have been selected – Salesforce will tell you at the upper left of the list how many registrations have been selected, which should match the number of people on your sign-in sheet – select the Mass Update button at the upper right. This will take you through the Mass Update Wizard.

**Step 1** – This asks you to confirm the records to update. Click Next.

**Step 2** - This asks you which field on all of these records you wish to update. You’ll want to update the Stage, so scroll through the Field Name list and click on Stage. When you do, it will appear in the box as StageName. Click Next.

**Step 3** - This asks you what you want the new value to be in the Stage field for all of the records. In order to take attendance, you need to enroll the folks who are in stage Registered (or No Show), so you’ll select Enrolled. Click Next. **Note: Do NOT select In Progress as the stage – you must select Enrolled in order for the system to turn these Applications into Enrollments**

**Step 4** – This asks to review the updates you’ve selected – the number of records, the field you want to update, and the new value for that field. Click Update. Once it’s updated, click End.

<img :src=“$withBase(‘/assets/attendanceTrainingCourse/2.png')” alt=“foo”>

Once you’ve completed the Mass Update Wizard, it’ll take you back to your Applications & Enrollments list. Click the refresh button at the upper right to see the updated records. The people you just selected should have been moved off of this list.

4. Now that all participants have been enrolled – and should show as In Progress – go to the Course for the workshop or webinar. You can do this by searching for the Course, or by clicking on the link to the Course in the Account Name column of your list view. Use the Add Class and Participants on the Course page to add the workshop class. Once the Class has been created, open the Class record and mark the attendance. Everyone that gets added to the Class should be marked as Present.
5. After the class has been created and attendance has been taken, return to the Course record and click View All on the Applications & Enrollments tile. You’ll now want to click on the Stage header at the top of the list to sort the list by stage. Once sorted, select each In Progress record by checking the box to the left. Then use the Mass Update button at the upper right to mark these participants as Completed.

<img :src=“$withBase(‘/assets/attendanceTrainingCourse/3.png')” alt=“foo”>

- **Step 1**: This asks you to confirm the records to update. Click Next.

- **Step 2** This asks you which field on all of these records you wish to update. You’ll want to update the Stage, so scroll through the Field Name list and click on Stage. When you do, it will appear in the box as StageName. Click Next.

- **Step 3** This asks you what you want the new value to be in the Stage field for all of the records. Select Complete from the drop down list.

- **Step 4** This asks to review the updates you’ve selected – the number of records, the field you want to update, and the new value for that field. Click Update. Once it’s updated, click End.

<img :src=“$withBase(‘/assets/attendanceTrainingCourse/4.png')” alt=“foo”>

6. For dual language workshops, repeat steps 2-5 for the other language.

7. Once attendance has been taken for all workshop sessions, return to the registration list view in the Application & Enrollments tab. Select the remaining records – which should all be in stage Registered – by checking the box to the left. Once all remaining registrations have been selected, use the Mass Update button at the upper right to mark these participants at No Shows.

- **Step 1** This asks you to confirm the records to update. Click Next.

- **Step 2** This asks you which field on all of these records you wish to update. You’ll want to update the Stage, so scroll through the Field Name list and click on Stage. When you do, it will appear in the box as StageName. Click Next.

- **Step 3** This asks you what you want the new value to be in the Stage field for all of the records. Select No Show from the drop down list.

- **Step 4** This asks to review the updates you’ve selected – the number of records, the field you want to update, and the new value for that field. Click Update. Once it’s updated, click End.
