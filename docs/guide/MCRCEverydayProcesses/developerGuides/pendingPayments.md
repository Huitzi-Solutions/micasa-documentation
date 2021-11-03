---
# This is the icon of the page
icon: page
# This is the title of the article
title: Pending Payments
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

Process to automatically calculate how much students owe for their enrollment in a course. Mi Casa provides support to many students through scholarships for example; therefore, this process needs to run for every student. This process references household income tabulations created by the government every year. Therefore, the calculation parameters need to be updated every year. This information can be found at www.Huduser.gov .

**Object:** Form\
**Runs when:** a record is created

## **Criteria of the process**

**Criterion name: Denver Participants**

Conditions to run this stage:

- The Record Type of the form must be 01241000000vdI7AAI (refers to a records type in the object Form called Payments) AND
- The Total Cost of the form must be greater than 0.01 AND
- The Denver Resident field (boolean) of the form must be true AND
- The Account ID of the form must be different to 0014100001FlxITAAZ (refers to the ProBoPat program) AND
- The Account Type of the form must be “Training”

**Immediate actions:**

Creates a Payment record.

**Criterion name: Exempt from Registration Fee Participants**

Conditions to run this stage:

- The Record Type of the form must be 01241000000vdI7AAI (refers to a records type in the object Form called Payments) AND
- The Total Registration Fee field (boolean) of the related account to the form must be true AND
- The Exempt from Payment field (boolean) of the form must be true AND
- The Account ID of the form must be different to 0014100001FlxITAAZ (refers to the ProBoPat program) AND
- The Account Type of the form must be “Training”

**Immediate actions:**

Creates a Payment record that indicates that the student did not have to pay a registration fee.

**Criterion name: Participants with Tuition Scholarships**

Conditions to run this stage:

- The Record Type of the form must be 01241000000vdI7AAI (refers to a records type in the object Form called Payments) AND
- The Account Type of of the related Account to the form must be Training AND
- The Tuition Scholarship field (currency) of the form must be greater than 0 AND
- The Account Type of the form must be “Training”

**Immediate actions:**

Creates a Payment record.
