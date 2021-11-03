---
# This is the icon of the page
icon: page
# This is the title of the article
title: Stackable Credential Stages
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

**Doc version:** 2021

# **Overview**

This process is used only by the Financial Services Pathway to track the stages of participant’s Application & Enrollment. This process is unique to the Financial Services Pathway because it works in association with the Community College of Aurora and the Metropolitan State University of Denver (MSU). The stages are tailored to track aspects such as college credits referred to as prior learning assessment (PLA).

**Object:** Application & Enrollment (custom object)\
**Runs when:** A record is created or edited\
**Acronyms used in this process:**\
Community College of Aurora (CCA), Prior learning assessment (PLA), math (MAT), English (ENG).

## **Criteria of the process**

**Criterion name: CCA S# Added**

Conditions to run this stage:

- The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND
- The Stage Name (picklist) of the related Opportunity must be Interested AND
- The CCA ID (text 20) is not null.

**Immediate actions:**\
Updates the field Stage (picklist) of the Opportunity related to the record to PLA Pre-Registration.

**Criterion name: PLA Pre-Registration Stage**

Conditions to run this stage:

- The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND
- The Stage Name (picklist) of the related Opportunity must be PLA Pre-Registration.

**Immediate actions:**

1. Send an email alert. Email Alert parameter: How_to_Register_for_PLAs_at_CCA. This will send an email to the student so that they can register to get college credits at CCA.
2. Creates a Task with the following values.

- Due Date Only (date) is set to 7 days after the record is created
- Assigned to field (lookup to User) the user with the following ID: 0052M0000093ynCQAQ. This ID stands for the user Bri Barnes, who is the program manager.
- Priority (picklist) set to Normal
- Status (picklist) set to Not Started
- Subject (string) set to “Check In on PLA Registration”
- Related To ID (lookup to Opportunity) set to relate the task with the record’s opportunity. This is the ID of the student.
- Name ID (lookup to Contact) set to relate the task with the contact of the record’s opportunity. This is the name ID of the student.

**Criterion name: PLAs Taken Stage**

Conditions to run this stage:

- The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND
- The Stage Name (picklist) of the related Opportunity must be PLAs Taken.

**Immediate actions:**
When the PLA stage runs, it creates a Task with the following values:

- Due Date Only (date) set to 21 days after the record is created
- Assigned to field (lookup to User) the user with the following ID: 0052M0000093ynCQAQ. This ID stands for the user Bri Barnes, who is the program manager.
- Priority (picklist) set to Normal
- Status (picklist) set to Not Started
- Subject (string) set to “Enter PLA scores + test dates”
- Related To ID (lookup to Opportunity) set to relate the task with the record’s opportunity. This is the ID of the student.
- Name ID (lookup to Contact) set to relate the task with the contact of the record’s opportunity. This is the name ID of the student.

**Criterion name: CCA Pre-Registration Stage (stage changed)**

Conditions to run this stage:

- The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND
- The Stage Name (picklist) of the related Opportunity must be CCA Pre-Registration AND
- The MAT Placement (picklist) of the related Opportunity is null AND
- The ENG Placement (picklist) of the related Opportunity is null AND
- The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No

**Immediate actions:**

1. Send an email alert. Email Alert parameter: CCA_Math_English_Questionnaire
2. Creates a Task with the following values:

- Due Date Only (date) set depending on the week day
  - If the record is created on monday or tuesday, the date will be 4 days after
  - If the record is created on wednesday, thursday, friday or saturday, the date will be 6 days after
  - If the record is created on Sunday, the date will be 5 days after.
- Assigned to field (lookup to User) the user with the following ID: 0052M0000093ynCQAQ. This ID stands for the user Bri Barnes, who is the program manager.
- Priority (picklist) set to Normal
- Status (picklist) set to Not Started
- Subject (string) set to “Enter MAT & ENG Placements”
- Related To ID (lookup to Opportunity) set to relate the task with the record’s opportunity. This is the ID of the student.
- Name ID (lookup to Contact) set to relate the task with the contact of the record’s opportunity. This is the name ID of the student.

**Criterion name: CCA Pre-Registration (placements added)**

Conditions to run this stage:

- The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND
- The Stage Name (picklist) of the related Opportunity must be CCA Pre-Registration AND
- The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No AND
- Any of the following conditions
  - The MAT Placement (picklist) of the related Opportunity is not null OR
  - The ENG Placement (picklist) of the related Opportunity is not null

**Immediate actions:**\
Updates the field Stage (picklist) of the Opportunity related to the record to PLA Pre-Registration.

**Criterion name: PLA Pre-Registration Stage**

Conditions to run this stage:

- The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND
- The Stage Name (picklist) of the related Opportunity must be Registered at CCA AND
- The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No.

**Immediate actions:**
Send an email alert from "Bri Barnes" <bbarnes@micasaresourcecenter.org> to the related contact of the record that triggers the process. Email Alert Template: How_to_Register_for_PLAs_at_CCA

**Criterion name: Matriculated at CCA Stage**
Conditions to run this stage:

- The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND
- The Stage Name (picklist) of the related Opportunity must be Matriculated at CCA AND
- The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No.

**Immediate actions:**\
Creates a Task with the following values.

- Due Date Only field (date) set to 42 days after the record is created
- Description field (string) set to “6 Week Check In - Task Requirements: payment check-in (MPN, entrance counseling, holds, etc.); grades in each class; support needed; reminder about email coming from advisors regarding graduation applications - there is a deadline so be sure to complete; show student how to forward CCA email to their personal email; next steps from convo - tell about upcoming registration dates, etc.”
- Assigned to field (lookup to User) the user with the following ID: 0052M0000093ynCQAQ. This ID stands for the user Bri Barnes, who is the program manager.
- Priority field (picklist) set to Normal
- Status field (picklist) set to Not Started
- Subject field (string) set to “6 Week CCA Student Check In”
- Related field To ID (lookup to Opportunity) set to relate the task with the record’s opportunity
- Name ID (lookup to Contact) set to relate the task with the contact of the record’s opportunity

**Criterion name: Graduated CCA Stage**

Conditions to run this stage:

- The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND
- The Stage Name (picklist) of the related Opportunity must be Graduated CCA AND
- The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No.

**Immediate actions:**
Send an email alert. Email Alert parameter: CCA_Graduation_Congrats
