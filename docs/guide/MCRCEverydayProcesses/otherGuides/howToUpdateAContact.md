---
# This is the icon of the page
icon: page
# This is the title of the article
title: How to Update a Contact
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

## How to update a contact
**Doc Version:** 2020


### **Objective:**  
In this section you will find how to update the information of a contact.


### **Where is it located within the Salesforce Org?** 
|[Mi Casa” | App | Contact](https://micasa--partial.lightning.force.com/lightning/o/Contact/list?filterName=Recent)

**Difficulty:** Beginner.

### **Steps**

In the **Global Search Bar**, enter the participant’s name. Select the Contact that appears in the list.

<img :src="$withBase('/assets/howtoupdateacontact/1.png')" alt="foo">

::: warning Note
It is crucial to be sure to **select the Contact rather than the Household.**
:::

<img :src="$withBase('/assets/howtoupdateacontact/2.png')" alt="foo">

Or, you can select the option **‘Contacts’** ‘on the left side of the bar as follows: 

<img :src="$withBase('/assets/howtoupdateacontact/3.png')" alt="foo">

- Click on Details -> Form Links -> Click the link to **update a Career Welcome Form** on the record header.

<img :src="$withBase('/assets/howtoupdateacontact/4.png')" alt="foo">

- Check the boxes next to Welcome Form, select your name from the list, then click the Next Page button.

::: warning Note **Do NOT use this to update any application information or to create a new application. That can be done directly on the application or Application & Enrollments object.**
:::

- Fill out all applicable information.

::: warning Note
on the 2nd page of the Welcome Form, please ensure that you begin the Household Relationship table on line A, NOT the example line.
:::

When finished, click the Save to SFDC button.