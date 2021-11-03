---
# This is the icon of the page
icon: page
# This is the title of the article
title: Update Opportunity Account on Lead Conversion
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

An Opportunity Account represents all the applications and enrollments of a student. It is created when the prospective student applies or enrolls in one of Mi Casa’s courses. This process allows the staff at Mi Casa to convert a prospective student’s record into an active applicant or enrolled student.

**Object:** Prospect\
**Runs when:** a record is created or edited\

## **Criteria of the process**

**Criterion name: Is Account Converted**

Conditions to run this stage:

- The related Lead is converted AND
- The Converted Account Id (Id) is not null

**Immediate actions:**

1. Updates the converted Account related with the related Lead. These fields will be populated as follows.

- Sets the Contact field (lookup to Contact) to relate with the lead contact
- Sets the Course field (lookup to Account) to null.
- Sets the Account Name field (string) to be populated with the lead first name and last name
- Sets the Record Type to be Household. Household records are generated automatically by Salesforce. However, they are not used by Mi casa for anything.
- Updates the MCRC Referrals related with the related Lead. This field will be populated as follows.
- Sets the Participant (lookup) to be related with the converted contact related with the lead

**Criterion name: Is Opportunity Converted**

Conditions to run this stage:

- The related Lead is converted AND
- The Converted Opportunity Id (Id) related with the related Lead is not null AND
- The Course cost (decimal) related to the related Lead is greater than 0.01 AND
- The Course Id (Id) related to the Lead is not 0014100001FlxITAAZ. This ID corresponds to the ProBoPat program.

**Immediate actions:**

1. Updates the converted Application and Enrollment record related with the related Lead. These fields will be populated as follows.

- Sets the Account Id field (lookup to Account) to relate it with the Id related with the Course related with the Lead
- Sets the Contact field (lookup to Contact) to relate the record with the Converted contact related to the Lead
- Sets the Receive Date field (date) to have the same value of Created date of the related Lead
- Sets the Stage field (picklist) to “Registred”

2. Updates the Change Tracking related record. These fields will be populated as follows.

- Sets the Change Report Date (date) to today's date
- Sets the Contact field (lookup to Contact) to relate the record with the Converted Contact related with the related Lead
- Sets the City field to have the related Lead City
- Set the Change Tracking Name (string) field to have this string “.”
- Sets the Record Type ID to be 0122M000001EicCQAS
- Sets the State field to have the related Lead State
- Sets the Street Address to have the related Lead Street
- Sets the Zip Code to have the related Lead Postal Code

3. Updates phone screen related to the related Lead
