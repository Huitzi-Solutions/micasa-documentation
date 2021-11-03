---
# This is the icon of the page
icon: page
# This is the title of the article
title: ...How to clear search filters with respect to Career Coaching and EV Appointments

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

**Doc version:** 2017

### **Objective:**

In this section you will find how to clean up Career Coaching & EV Appointments.

### **Where is it located within the Salesforce Org?** [“Mi Casa” | App | Account](https://micasa--partial.lightning.force.com/lightning/r/Account/0014100001MROyxAAH/view)

**Difficulty:** Advanced

1. Review 2017 Career Coaching **(Correct)** list view

- **Filters:** All Career Coaching Appointments w/ Account Name equal to Career Coaching 2017.

2. Review 2017 Career Coaching **(Incorrect)** list view

- **Filters:** All Career Coaching Appointments w/ Account Name not equal to Career Coaching 2017.

  If an appointment is listed in this list view, then it has been incorrectly entered into SFDC. This list view can be checked on occasion to ensure that your appointments are correctly being entered into SFDC.

3. **Fixing incorrectly** entered Career Coaching Appointments:
   Ultimately, the reason why the Career Coaching Counts report is not correctly reporting on numbers is because this report is only looking for Career Coaching appointments that have been created under the Career Coaching 2017 course. If appointments were created under a participant household, the appointment will not appear in the report.

To fix this, follow the steps below.

#### - **Manual Exercise**

- Click on the 2017 Career Coaching (Incorrect) list view

- Select an appointment in the 2017 Career Coaching (Incorrect) list view

- Under “Account Name” remove the listed participant household and replace it with Career Coaching 2017. Save.

#### - **Automated Exercise:**

- Go to the Career Coaching 2017

- Scroll down to the bottom of the page.

- Copy the Case Safe ID (Account)

- Click on the 2017 Career Coaching (Incorrect) list view

- Notice the checkboxes to the left of the appointments, click on the checkbox in the header, to select all appointments in this list view.

  - Step 1: Click on the Mass Update button. Click Next.
  - Step 2: Select “Account ID” as the field to be updated. Click Next.
  - Step 3: Paste the “Case Safe ID (Account)” field that you copied from the Career Coaching 2017 course. Click Next. Click Update.

    ### **Employment Verification:**

    Review 2017 EV Appointments **(Correct)** list view
    Filters: All EV Appointments w/ Account Name does not contain “Household” and Form not equal to “blank”.
    Review 2017 EV Appointments **(Incorrect Account)** list view
    Filters: All EV Appointments w/ Account Name contains “Household” and Form.
    Review 2017 EV Appointments **(Incorrect Form)** list view
    Filters: All EV Appointments w/ Form equals “blank”.

    ### **Fixing incorrectly entered Career Coaching Appointments:**

    Ultimately, the reason why the Employment Retention report is not correctly reporting on numbers is because this report is only looking for EV appointments that have been created in the participant’s cohort (not household), and have been attached to the EV form bucket in SFDC. If appointments were created under a participant household and not in an EV form bucket, the appointment will not appear in the report. To fix this, follow the steps below.

#### Error #1: Fixing Accounts:

- Click on the 2017 EV Appointments (Incorrect Account) list view

- Select an appointment in the 2017 EV Appointments (Incorrect Account) list view

- Under “Account Name” remove the listed participant household and replace it with the appropriate participant’s training cohort (to find this, go to the participant’s contact profile and look under applications and enrollment for the appropriate cohort). Save and repeat for all remaining appointments in the list view.

#### Error #2: Creating Form:

- Click on the 2017 EV Appointments (Incorrect Account) list view

- Select an appointment in the 2017 EV Appointments (Incorrect Account) list view

- Click “Edit” and Click into the “Form” field

- Select “New Form”

- Select “EV”

- Enter following information:

- Contact-=Participant Name

- Account=Participant Training Cohort

- EV Name=a (this will be renamed by the system)

- Save
