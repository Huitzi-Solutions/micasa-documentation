---
# This is the icon of the page
icon: page
# This is the title of the article
title: ... technology lending
# Set author
author: Huitzi Solutions
# Set writing time
time: 2021-11-01
# A page can only have one category
category: Guide
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: Mi Casa Resource Center | Powered By Huitzi Solutions
---

## ... technology lending

**Doc version:** 2021

### **Objective:**  

In this section you will find how to track technology lending

### **Where is it located within the Salesforce Org?**

| Navigation inside the Org. E.G [Mi Casa App | Contacts | Maria Jose Tamayo](https://micasa.lightning.force.com/lightning/r/Contact/0032M00003AyyzYQAR/view)

**Difficulty:** Advanced.

### **Steps:**

1. Navigate to the participant’s Contact record.

2. The Technology Checkout section is at the top of the participant’s Contact page.

<img :src="$withBase('/assets/technologylending/1.png')" alt="foo">

3. For Chromebook loans, enter the date the participant borrowed the Chromebook in the Chromebook Checkout Date field and the date they are expected to return it in the Chromebook Due Date field.
For hotspot loans, enter the date the participant borrowed the hotspot in the Hotspot Checkout Date field and the date they are expected to return it in the Hotspot Due Date field.

<img :src="$withBase('/assets/technologylending/2.png')" alt="foo">

4. When the participant returns the Chromebook or hotspot, record the date they returned the items in the Chromebook Returned Date field and/or the Hotspot Returned Date field.

<img :src="$withBase('/assets/technologylending/3.png')" alt="foo">

5. The Chromebook Status and Hotspot Status fields will automatically update based on the Due Dates, Returned Dates, and today’s date.

  **a. Currently on loan:** the item is currently checkout and the Due Date is in the future

  **b. Loan overdue:** the Due Date is in the past and the item has not been returned yet (there is no Return Date entered)

  **c. Returned on time:** the item has been returned and Returned Date is on or before the Due Date

  **d. Returned Late:** the item has been returned and the Returned Date is after the Due Date

  **e. DUE DATE NEEDED:** the item is currently checked out (a Checkout Date is entered) but no Due Date has been entered.

6. If a participant has previously borrowed a Chromebook and/or hotspot and is borrowing for a second (or more) time, you can overwrite the dates from the previous loan. When you do this, be sure to also erase the previous Returned Date when you add the Checkout Date and Due Date for the new loan – otherwise, the Status will be outdated.
