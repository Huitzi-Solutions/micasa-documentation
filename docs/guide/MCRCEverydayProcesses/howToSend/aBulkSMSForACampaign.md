---
# This is the icon of the page
icon: page
# This is the title of the article
title: ... a Bulk SMS for a Campaign
# Set author
author: Huitzi Solutions
# Set writing time
time: 2020-01-01
# A page can only have one category
category: Guide
# this page is sticky in article list
sticky: true
# this page will appear in aricle channel in home page
star: true
# You can customize the footer
footer: Mi Casa Resource Center | Powered By Huitzi Solutions
---

## ... bulk SMS for a campaign

**Doc version:** 2020

### **Objective:**  

In this section you will find how to send a Bulk SMS from a campaign

### **Where is it located within the Salesforce Org?**

|Navigation inside the Org. E.G [Mi Casa App | Contacts | Maria Jose Tamayo](https://micasa.lightning.force.com/lightning/r/Contact/0032M00003AyyzYQAR/view)

**Difficulty:** Beginner.

### **Steps:**

1. From your Salesforce homepage, click on the Bulk SMS tab. It may be under the More <img :src="$withBase('/assets/bulkSMS/1.png')" alt="foo"> dropdown on the right.

2. This will load the Mogli Bulk SMS wizard. From here, you can choose to add Contacts or Leads individually – this could be helpful if you want to text just a couple participants the same thing – or you can add a Campaign.

<img :src="$withBase('/assets/bulkSMS/2.png')" alt="foo">

3. To add a Campaign, search for it in the “Search Campaign…” box. This box will also auto-populate a list of your recently viewed Campaigns. Once you’ve selected the desired campaign, the SMS Recipients box at the upper right will populate the name and Mogli phone numbers of the Contacts or Leads associated with the Campaign. It will also give you a count of the total number of recipients.

<img :src="$withBase('/assets/bulkSMS/3.png')" alt="foo">

4. Once your Contacts or Leads are loaded, you can either load an SMS Template or type your message in the box. You can also add a merge field from the drop down list – this will fill in a certain field from Salesforce to each participant – for example, if you want to send a personalized greeting to each recipient, you can use the Contact.FirstName! merge field to auto-fill each recipient’s first name.
This box also counts the number of characters you use. Keep in mind that some phone carriers may split messages into multiple texts after a certain number of characters (usually around 140 characters).

<img :src="$withBase('/assets/bulkSMS/4.png')" alt="foo">

5. The SMS Send Configuration box allows you to choose which phone number (Gateway) to send the message from, as well as schedule the text to be sent later. The Send From number should be the relevant program. If you want to send the text at a later date and/or time, select the specific date <img :src="$withBase('/assets/bulkSMS/5.png')" alt="foo"> and time <img :src="$withBase('/assets/bulkSMS/6.png')" alt="foo"> from the boxes.

<img :src="$withBase('/assets/bulkSMS/7.png')" alt="foo">

6. Once your Campaign is selected, a message is written (or template is chosen), and Send Configuration is set, you can hit the blue Send box to send the message. A green “Bulk Group ID…” box will appear on your screen when the send is successful

<img :src="$withBase('/assets/bulkSMS/8.png')" alt="foo">

### **How to Send A Bulk SMS - From a List View**

1. From the Salesforce home page, click on the Contacts (or Prospects) tab. In the Contacts object, click on the words Recently Viewed at the upper left to change the list view. Scroll or search for your desired list view.

<img :src="$withBase('/assets/bulkSMS/9.jpg')" alt="foo">

2. In the list view, select the box next to the Name column to select all contacts (alternatively, you can select certain Contacts or Prospects you’d like to text). Once the contacts are selected, click on the down arrow button at the upper right (next the Add to Campaign button) and select Send SMS Lightning.

<img :src="$withBase('/assets/bulkSMS/10.jpg')" alt="foo">

3. This will take you to the Bulk SMS page. The upper right box, SMS Recipients, lists everyone selected to receive the message. In the middle right box, SMS Message, type the desired message or choose an SMS Template from the dropdown list.
In the bottom right box, SMS Send Configuration, you can leave the Send From: box on Default (all Staff contacts are set to default to the Program Support/general number). If you want to schedule the message to send at a later point, you can select the date and time.
When finished entering the message, hit Send.

<img :src="$withBase('/assets/bulkSMS/11.jpg')" alt="foo">