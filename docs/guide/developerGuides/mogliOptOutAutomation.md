---
# This is the icon of the page
icon: page
# This is the title of the article
title: Mogli Opt-Out Automation
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

This process works with the Mogli app. This is a Salesforce native app that is available in. AppExchange. Mogli allows users to send and receive text messages in Salesforce. Mogli creates a record of type SMS every time a message is received in Mi Casa’s Salesforce org.
Once the record is created, the process runs to update the field Mogli Opt Out (boolean). This field is updated to true if the receiver of the SMS wants to stop receiving messages and to false if they want to keep receiving messages.

This field is also used in the process to track if the new record has a contact or a related lead.

**Object:** SMS (custom object)\
**Runs when:** a record is created or edited\
**Fields updated by the process:**

- Mogli Opt Out
- Type: Boolean

## **Criteria of the process**

**Criterion name: CONTACT**\
Incoming message

**Conditions to run this stage:**

- Its Direction field (picklist) is of type Incoming AND
- Its Contact field (lookup to Contact object) is not null AND
- Its Message field (string) is equal to any of the following strings: STOP, STOPALL, UNSUBSCRIBE, END, CANCEL or QUIT.

**Immediate actions:**\
Updates the field Mogli Opt Out (boolean) of the Contact related to the record to true.

**Criterion name: LEAD**\
Incoming message

**Conditions to run this stage:**

- Its Direction field (picklist) is of type Incoming AND
- Its Lead field (lookup to Lead object) is not null AND
- Its Message field (string) is equal to any of the following strings: STOP, STOPALL, UNSUBSCRIBE, END, CANCEL or QUIT.

**Immediate actions:**\
Updates the field Mogli Opt Out (boolean) of the Lead related to the record to true.

**Criterion name: CONTACT**\
Incoming Opt-in

**Conditions to run this stage:**

- Its Direction field (picklist) is of type Incoming AND
- Its Contact field (lookup to Lead object) is not null AND
- Its Message field (string) is equal to any of the following strings: START, UNSTOP, SUBSCRIBE, or RESTART.

**Immediate actions:**\
Updates the field Mogli Opt Out (boolean) of the Contact related to the record to false.

**Criterion name: LEAD**
Incoming Opt-in

**Conditions to run this stage:**

- Its Direction field (picklist) is of type Incoming AND
- Its Lead field (lookup to Lead object) is not null AND
- Its Message field (string) is equal to any of the following strings: START, UNSTOP, SUBSCRIBE, or RESTART.

**Immediate actions:**\
Updates the field Mogli Opt Out (boolean) of the Lead related to the record to false.
