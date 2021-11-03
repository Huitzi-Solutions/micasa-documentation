---
# This is the icon of the page
icon: page
# This is the title of the article
title: Introduction to Process Builder
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

# **Process Builders**

Process Builder is a tool in Salesforce that is commonly used to automate processes such as:

- Create records,
- Update a record,
- Submit a record for approval,
- Send emails using specified email templates.

## **Anatomy of a Process**

Every process consists of a trigger, at least one criteria node, and at least one action. You can configure inmediat actions or scheduled actions to be executed at a specific time.
Here is an example of a simple process:

<img :src="$withBase('/assets/processBuilders/anatomyProcessBuilder.png')" alt="foo">

1. Parent Object: Every process builder needs to start by making reference to a parent object. This object will make available the data that will be used in the process. For example, the process shown in the diagram above will make data from the opportunity object available to use in the process.

Additionally, Process Builder will attach a trigger to the object, which will determine when the process should run. There are two options for triggers that can be chosen:

- Only when a record is created
- Anytime a record is created or edited

2. Criteria: In process builder, it is possible to add as many criteria nodes as desired. Each criteria node controls whether or not the process executes the associated actions. If the record doesn’t meet the criteria, the process skips those actions and moves on to the next criteria node in the process.

In each criteria node, you can:

- Set filter conditions.
- Enter a custom formula. Like in validation rules, the formula must resolve to true or false.
- Opt out of criteria and always execute the associated actions.

3. Immediate Actions: If the record meets the conditions defined on the criteria, all the actions defined on this section will be executed immediately. For example, if all the criteria is met, the process will email a draft of a contract to a set of email addresses immediately.

4. Scheduled Actions: If the record meets the conditions defined on the criteria, all the actions defined on this section will be executed at the scheduled time. For example, if all the criteria is met, the process will send a reminder to a set of email addresses after 6 days.
