---
# This is the icon of the page
icon: page
# This is the title of the article
title: ... a single SMS
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

## ... a single SMS

**Doc version:** 2020

### **Objective:**  

In this section you will find how to send a SMS (individual)

### **Where is it located within the Salesforce Org?**

|Navigation inside the Org. E.G [Mi Casa App | Contacts | Maria Jose Tamayo](https://micasa.lightning.force.com/lightning/r/Contact/0032M00003AyyzYQAR/view)

**Difficulty:** Beginner.

1. From your home page, search the participant’s name in the global search bar. Click on the participant’s Contact or Prospect.

<img :src="$withBase('/assets/aSingleSMS/1.png')" alt="foo">

2. Once in the Contact or Prospect, ensure that the participant has a phone number in the Mogli Number field. If not, you will need to edit the Contact to add the primary phone/mobile number into the Mogli Number field. There should also (in most cases) be one of 3 options in the Default Gateway field – Business Pathways, Career Pathways, or Program Support. This determines which phone number texts are sent from – this can be overridden later if needed.

<img :src="$withBase('/assets/aSingleSMS/2.png')" alt="foo">

3. On the right sidebar, find the Mogli SMS component. You may need to scroll down, if the participant has an extensive history in Activity Tracking. In the “Message to send…” box, at the top of the bottom section, type your message.

::: warning Note
**When typing your message, hitting enter (or shift-enter) will send the message.**
:::

<img :src="$withBase('/assets/aSingleSMS/3.png')" alt="foo">

4. There are a few additional options for sending your message:

  a. If you’d like to override the Default Gateway, you can do so by selecting from the dropdown list next to the <img :src="$withBase('/assets/aSingleSMS/4.png')" alt="foo"> icon. This can be useful if participants are involved in multiple programs at a time – a Business training participant attending a Career workshop, or a Career training participant attending a Legal Clinic, etc.
  b. If you’d like to use a template rather than writing your own message, you can select your desired template from the dropdown list next to the <img :src="$withBase('/assets/aSingleSMS/5.png')" alt="foo"> icon.
  c. If you’d like to send this message at some point in the future, you can select the date and time from the boxes next to the <img :src="$withBase('/assets/aSingleSMS/6.png')" alt="foo"> and <img :src="$withBase('/assets/aSingleSMS/7.png')" alt="foo"> icons.

<img :src="$withBase('/assets/aSingleSMS/8.png')" alt="foo">

5. When you’re finished with your message, hit the red arrow (<img :src="$withBase('/assets/aSingleSMS/9.png')" alt="foo">) to send the message. Your message will appear in red, with your initials in the gray circle to the right. Any response from the participant will appear in charcoal, with their initials in the gray circle to the left. Any other Mi Casa correspondence will also be in red, but will have the initials of the user who sent the message next to it.

<img :src="$withBase('/assets/aSingleSMS/10.png')" alt="foo">

6. Once notifications have been set up (see next section), you will receive a flashing notification on the bottom bar of your window when there’s an incoming message.

<img :src="$withBase('/assets/aSingleSMS/11.jpg')" alt="foo">

### **Incoming SMS Notifications**

1. To check your incoming SMS notifications, click on the Mogli Notifications Utility (or the <img :src="$withBase('/assets/aSingleSMS/12.png')" alt="foo"> icon) at the bottom left of your Salesforce window. This will show you the incoming texts you’ve been notified of, according to your settings.

::: warning Note
Your settings may match those of your teammates, which means that not all notifications will be a direct response to you. This also means your teammates may also get notifications for direct responses to you.
:::

<img :src="$withBase('/assets/aSingleSMS/13.png')" alt="foo">

2. Clicking on the text in your notification popup will take you directly to the Contact or Prospect that the text is related to.
3. To update which texts you receive notifications for, click on Settings at the upper right side of the notification popup.
  a. This allows you to choose which phone numbers (gateways) you receive notifications from
  b. It also allows you to narrow down by who is sending the SMS – anybody, Contacts you’re the owner of, Leads (prospects) you’re the owner of, or Contacts and Leads (prospects) you’re the owner of.
  c. You can also choose to get a sound notification for new texts.

Once you’ve selected your desired settings, click Update.

<img :src="$withBase('/assets/aSingleSMS/14.png')" alt="foo">
