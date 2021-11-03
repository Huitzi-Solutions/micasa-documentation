---
# This is the icon of the page
icon: page
# This is the title of the article
title: Scheduled Appointments
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

This process is used whenever an appointment is scheduled with a Career consultant at Mi Casa.

**Object:** Appointment\
**Runs when:** a record is created or edited

## **Criteria of the process**

**Criterion name: Career Coaching Appointment**

Conditions to run this stage:

- The related Case record Type ID is 01241000001A1KbAAK (corresponds to the Career Coaching program) AND
- The related Case Appointment Status (picklist) is equal to “Scheduled”

**Immediate actions:**

Creates an Event record. These fields will be populated as follows.

- Sets the End Date Time field (lookup to Contact) to be the same as the End Time of the related Case
- Sets the Assigned to ID field (lookup to Account) to be the Owner of the related Case
- Sets the Start Date Time field (date time) to be same as the Start Date Time of the related Case
- Sets the Subject field (text) to be “Career Coaching - [First name of the contact of the related Case][second name of the contact of the related case]
- Sets the Type (picklist) to be Meeting
- Sets the Related to ID field (lookup) to be related with the case
- Sets the Name Id field (lookup) to be related with the contact of the related Case

**Criterion name: Employment Retention Appointment**

Conditions to run this stage:

- The related Case record Type Id is 01241000001A1KgAAK (corresponds to the Employment Retention) AND
- The related Case Appointment Status (picklist) is equal to “Scheduled”

**Immediate actions:**

Creates an Event record.

**Criterion name: Define Criteria for this Action Group**

Conditions to run this stage:

- The related Case record Type Id is 01241000001A1KlAAK (corresponds to Needs Assessment) AND
- The related Case Appointment Status (picklist) is equal to “Scheduled”

**Immediate actions:**

Creates an Event record.
