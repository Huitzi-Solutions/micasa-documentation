---
# This is the icon of the page
icon: page
# This is the title of the article
title: How to Convert a Prospect
# Set author
author: Huitzi Solutions
# Set writing time
time: 2019-01-01
# A page can only have one category
category: Guide
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: Mi Casa Resource Center | Powered By Huitzi Solutions
---

## How to convert a Prospect

**Doc version:** 2019

### **Objective:**  

In this section you will find how to convert a prospect when they enroll in one of Mi Casa’s courses.

### **Where is it located within the Salesforce Org?**

| Navigation inside the Org. [Mi Casa” | App | Prospect](https://micasa--partial.lightning.force.com/lightning/o/Lead/list?filterName=Recent)

**Difficulty:** Beginner

1. Find the Prospect record you wish to convert, either through the search bar, using your List Views within the Prospect object, or a Related List on the course record.

<img :src="$withBase('/assets/howToConvertAProspect/1.png')" alt="foo">

2. Ensure that all relevant information has been entered. Most importantly, **make sure that a Course has been entered.** Without a Course, the Prospect record cannot be converted.

<img :src="$withBase('/assets/howToConvertAProspect/2.png')" alt="foo">

3. Either select Converted in the progress bar across the top of the Prospect record and then click the blue Select Converted Prospect Status box next to it, or click the Convert button at the top right of the Prospect record. Both methods do the same thing.

<img :src="$withBase('/assets/howToConvertAProspect/3.png')" alt="foo">

4. When the Convert Prospect screen appears, there will be 3 sections – the first for Account, the second for Contact, and the third for Application & Enrollment. You will never need to pay attention to, touch, edit, or do anything else with the Account section or the Application & Enrollment section (see Prospect FAQ’s for more information, if curious). The system is set up to do specific things for those objects, regardless of what you edit on the Convert Prospect screen.

5. You should, however, pay close attention to the Contact section.  Salesforce will search all the Contacts in our system to figure out if there is already a Contact that matches the information for this Prospect. If it finds one (or more), the existing Contact will display on the right side of the screen. To see more info on the existing Contact, click the Choose Existing circle. If the contact is the same (verify through contact info), select the circle on the tile for that Contact.

**If Salesforce doesn’t present a Contact match, but you think there might be one anyway, you can search in the “Search for matching contacts” box. This can happen if the emails differ between the Prospect and existing Contact, or if the last names differ (for example, two last names on the Contact are listed as a middle name and last name on the Prospect).**

**If there's a Prospect that is not otherwise in Salesforce, the Contact section can remain on the Create New option on the left side.**

<img :src="$withBase('/assets/howToConvertAProspect/4.png')" alt="foo">

6. Once the appropriate selection has been made for Contacts, click the Convert button. The following screen will show you and link you to the Account, Contact, and Application & Enrollment records that have been created (and/or merged, in the case of Contacts) from the Prospect. When a prospect has been converted successfully, a pop-up like the one shown in the image below will show.

<img :src="$withBase('/assets/howToConvertAProspect/5.png')" alt="foo">

## **FAQs.**

**Q. What happens when you convert a Prospect?**
**A.** Salesforce splits the single Prospect record into separate but connected Account (Household), Contact, and Application & Enrollment (Registration) records. Each field on the Prospect is mapped to go to a specific field on the new Contact or Application & Enrollment record.

**Q. When should you convert a Prospect?**
A. When a prospective participant has been accepted into the training/program to which they’ve applied. This step essentially registers them for the training/program – they will later be enrolled in Salesforce once they’ve attended.

::: warning
Coaching/consulting Prospects should be converted after attending the initial appointment.
:::
