---
# This is the icon of the page
icon: page
# This is the title of the article
title: ...How to take attendance for a training course

# Set author
author: Huitzi Solutions
# Set writing time
time: 2020-01-01
# A page can only have one category
category: Guide
# A page can have multiple tags
tag:
  - Page config
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: Mi Casa Resource Center | Powered By Huitzi Solutions
---

##...How to take attendance for a training course

**Doc version:** 2021 

**Objective:**  In this section you will find how to enter a Career Coaching Enrollment.

**Where is it located within the Salesforce Org?** |Navigation inside the Org. E.G [Mi Casa” | App |Account](https://micasa--partial.lightning.force.com/lightning/o/Account/list?filterName=00B41000008l06gEAA)



**Difficulty:** Beginner
.

**Steps: Enrolling participants on the first day**

1. Use your global search bar to find the Course that you’re entering attendance for.

**imagenaqui**

2. After the first day of class, enroll all participants who attended the first day.
Select View All in the Applications & Enrollments 
check the box on the left for each participant that attended day one. It may be helpful to sort the list by name – you can do so by clicking on the word Contact in the header.

**imagenaqui**


Once all of the participants have been selected – Salesforce will tell you at the upper left of the list how many registrations have been selected, which should match the number of people who attended– select the Mass Update button at the upper right. This will take you through the Mass Update Wizard. 

**Mass Update Wizard Steps**

            - Step 1: This asks you to confirm the records to update. Click Next.
            - Step 2: This asks you which field on all of these records you wish to update. You’ll want to update the Stage, so scroll through the Field Name list and click on Stage. When you do, it will appear in the box as StageName. Click Next.
            - Step 3: This asks you what you want the new value to be in the Stage field for all of the records. In order to take attendance, you need to enroll the folks who are in stage Registered, so you’ll select Enrolled. Click Next.
            
            **Note: Do NOT select In Progress as the stage – you must select Enrolled in order for the system to turn these Applications into Enrollments**

            - Step 4 – This asks to review the updates you’ve selected – the number of records, the field you want to update, and the new value for that field. Click Update. Once it’s updated, click End.

Once you’ve completed the Mass Update Wizard, it’ll take you back to your Applications & Enrollments list. Click the refresh button () at the upper right to see the updated records. All participants who attended the first day of class should be listed as In Progress as their stage.
 
Repeat this process with any folks who did not show up (or reply to contact by MCRC staff). In the stage- mark these participants as No Show.

*Note: This process only needs to happen on the first day of class.*

**Entering Attendance for Classes**


1. At the Course record, ensure that all relevant participants have Course Enrollment records with a stage of In Progress.

2. At the top right of the Course record page, click on the Add Class and Participants button.

**imagenaqui**

3. Enter the name, start/end date and time, and type of class. Click Save.
Career Pathways Training Class List: M(Meeting number).
4. Once the Class has been created, you will need to go to the Class record to take attendance. From the Course record page, click on the Class related tab and select the Class.
5. Under the Class record snapshot, you should see the Class Participation tile. Click the   pencil at the top right of the tile to edit.
6. Enter all of the information relevant to your Course.\
    a. Marking Present for all participants present for the whole class.\
    b. Marking Late/Partial Absence  or Absent as appropriate.\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. List Hours Not Attended in hour increments (.25= 15 minutes late. 1= 1 hour absent).\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii. Put in notes as needed.\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii. Career Pathways staff does not use Absent With Excuse option.\
    c. Mark No Call No Show as appropriate.
7. Click Save.

**Withdrawing a Participant**

Follow these steps if a participant attends at least one class and then decides to withdraw from the program (or is removed).

1. Ensure that past attendance is entered and correct. Once a participant is withdrawn, they cannot be marked as present for classes they previously attended. 
2. Select the participant’s Course Enrollment (this is not the same as the participant’s contact).
3. You should see a progress bar near the top of the page. Select Mark Stage as Complete.
4. Select Withdrew.
5. Enter notes in Reason for Withdrawal using the pencil icon. Select Save when finished. 
6. Participant should be marked as Withdrew within the Course Account.


**Entering Course Completion at the end of a Training**


1. Upon course completion, go to the course account. 
2. Select View All in the Applications & Enrollments

**imagenaqui**

3. Check the box on the left for each participant that is marked as In Progress. Do not select the boxes for any participant who is marked as No Call, No Show or Withdrew.
4. Once participants have been selected – Salesforce will tell you at the upper left of the list how many registrations have been selected, which should match the number of people who completed the training– select the Mass Update button at the upper right. This will take you through the Mass Update Wizard.

**imagenaqui**

**Mass Update Wizard Steps**

            - Step 1: This asks you to confirm the records to update. Click Next.
            - Step 2: You’ll want to update the Stage, so scroll through the Field Name list and click on Stage. When you do, it will appear in the box as StageName. Click Next.
            - Step 3: This asks you what you want the new value to be in the Stage field for all of the records. Select Complete. Click Next.
            - Step 4 – This asks to review the updates you’ve selected – the number of records, the field you want to update, and the new value for that field. Click Update. Once it’s updated, click End.

5. Once you’ve completed the Mass Update Wizard, it’ll take you back to your Applications & Enrollments list. Click the refresh button at the upper right to see the updated records. All participants who completed the training should be listed as Completed as their stage.
