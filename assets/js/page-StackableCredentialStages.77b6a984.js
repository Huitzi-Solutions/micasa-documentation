(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{568:function(t,e,o){"use strict";o.r(e);var i=o(1),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[o("strong",[t._v("Doc version:")]),t._v(" 2021")]),t._v(" "),o("h1",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" "),o("strong",[t._v("Overview")])]),t._v(" "),o("p",[t._v("This process is used only by the Financial Services Pathway to track the stages of participant’s Application & Enrollment. This process is unique to the Financial Services Pathway because it works in association with the Community College of Aurora and the Metropolitan State University of Denver (MSU). The stages are tailored to track aspects such as college credits referred to as prior learning assessment (PLA).")]),t._v(" "),o("p",[o("strong",[t._v("Object:")]),t._v(" Application & Enrollment (custom object)"),o("br"),t._v(" "),o("strong",[t._v("Runs when:")]),t._v(" A record is created or edited"),o("br"),t._v(" "),o("strong",[t._v("Acronyms used in this process:")]),o("br"),t._v("\nCommunity College of Aurora (CCA), Prior learning assessment (PLA), math (MAT), English (ENG).")]),t._v(" "),o("h2",{attrs:{id:"criteria-of-the-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#criteria-of-the-process"}},[t._v("#")]),t._v(" "),o("strong",[t._v("Criteria of the process")])]),t._v(" "),o("p",[o("strong",[t._v("Criterion name: CCA S# Added")])]),t._v(" "),o("p",[t._v("Conditions to run this stage:")]),t._v(" "),o("ul",[o("li",[t._v("The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND")]),t._v(" "),o("li",[t._v("The Stage Name (picklist) of the related Opportunity must be Interested AND")]),t._v(" "),o("li",[t._v("The CCA ID (text 20) is not null.")])]),t._v(" "),o("p",[o("strong",[t._v("Immediate actions:")]),o("br"),t._v("\nUpdates the field Stage (picklist) of the Opportunity related to the record to PLA Pre-Registration.")]),t._v(" "),o("p",[o("strong",[t._v("Criterion name: PLA Pre-Registration Stage")])]),t._v(" "),o("p",[t._v("Conditions to run this stage:")]),t._v(" "),o("ul",[o("li",[t._v("The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND")]),t._v(" "),o("li",[t._v("The Stage Name (picklist) of the related Opportunity must be PLA Pre-Registration.")])]),t._v(" "),o("p",[o("strong",[t._v("Immediate actions:")])]),t._v(" "),o("ol",[o("li",[t._v("Send an email alert. Email Alert parameter: How_to_Register_for_PLAs_at_CCA. This will send an email to the student so that they can register to get college credits at CCA.")]),t._v(" "),o("li",[t._v("Creates a Task with the following values.")])]),t._v(" "),o("ul",[o("li",[t._v("Due Date Only (date) is set to 7 days after the record is created")]),t._v(" "),o("li",[t._v("Assigned to field (lookup to User) the user with the following ID: 0052M0000093ynCQAQ. This ID stands for the user Bri Barnes, who is the program manager.")]),t._v(" "),o("li",[t._v("Priority (picklist) set to Normal")]),t._v(" "),o("li",[t._v("Status (picklist) set to Not Started")]),t._v(" "),o("li",[t._v("Subject (string) set to “Check In on PLA Registration”")]),t._v(" "),o("li",[t._v("Related To ID (lookup to Opportunity) set to relate the task with the record’s opportunity. This is the ID of the student.")]),t._v(" "),o("li",[t._v("Name ID (lookup to Contact) set to relate the task with the contact of the record’s opportunity. This is the name ID of the student.")])]),t._v(" "),o("p",[o("strong",[t._v("Criterion name: PLAs Taken Stage")])]),t._v(" "),o("p",[t._v("Conditions to run this stage:")]),t._v(" "),o("ul",[o("li",[t._v("The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND")]),t._v(" "),o("li",[t._v("The Stage Name (picklist) of the related Opportunity must be PLAs Taken.")])]),t._v(" "),o("p",[o("strong",[t._v("Immediate actions:")]),t._v("\nWhen the PLA stage runs, it creates a Task with the following values:")]),t._v(" "),o("ul",[o("li",[t._v("Due Date Only (date) set to 21 days after the record is created")]),t._v(" "),o("li",[t._v("Assigned to field (lookup to User) the user with the following ID: 0052M0000093ynCQAQ. This ID stands for the user Bri Barnes, who is the program manager.")]),t._v(" "),o("li",[t._v("Priority (picklist) set to Normal")]),t._v(" "),o("li",[t._v("Status (picklist) set to Not Started")]),t._v(" "),o("li",[t._v("Subject (string) set to “Enter PLA scores + test dates”")]),t._v(" "),o("li",[t._v("Related To ID (lookup to Opportunity) set to relate the task with the record’s opportunity. This is the ID of the student.")]),t._v(" "),o("li",[t._v("Name ID (lookup to Contact) set to relate the task with the contact of the record’s opportunity. This is the name ID of the student.")])]),t._v(" "),o("p",[o("strong",[t._v("Criterion name: CCA Pre-Registration Stage (stage changed)")])]),t._v(" "),o("p",[t._v("Conditions to run this stage:")]),t._v(" "),o("ul",[o("li",[t._v("The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND")]),t._v(" "),o("li",[t._v("The Stage Name (picklist) of the related Opportunity must be CCA Pre-Registration AND")]),t._v(" "),o("li",[t._v("The MAT Placement (picklist) of the related Opportunity is null AND")]),t._v(" "),o("li",[t._v("The ENG Placement (picklist) of the related Opportunity is null AND")]),t._v(" "),o("li",[t._v("The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No")])]),t._v(" "),o("p",[o("strong",[t._v("Immediate actions:")])]),t._v(" "),o("ol",[o("li",[t._v("Send an email alert. Email Alert parameter: CCA_Math_English_Questionnaire")]),t._v(" "),o("li",[t._v("Creates a Task with the following values:")])]),t._v(" "),o("ul",[o("li",[t._v("Due Date Only (date) set depending on the week day\n"),o("ul",[o("li",[t._v("If the record is created on monday or tuesday, the date will be 4 days after")]),t._v(" "),o("li",[t._v("If the record is created on wednesday, thursday, friday or saturday, the date will be 6 days after")]),t._v(" "),o("li",[t._v("If the record is created on Sunday, the date will be 5 days after.")])])]),t._v(" "),o("li",[t._v("Assigned to field (lookup to User) the user with the following ID: 0052M0000093ynCQAQ. This ID stands for the user Bri Barnes, who is the program manager.")]),t._v(" "),o("li",[t._v("Priority (picklist) set to Normal")]),t._v(" "),o("li",[t._v("Status (picklist) set to Not Started")]),t._v(" "),o("li",[t._v("Subject (string) set to “Enter MAT & ENG Placements”")]),t._v(" "),o("li",[t._v("Related To ID (lookup to Opportunity) set to relate the task with the record’s opportunity. This is the ID of the student.")]),t._v(" "),o("li",[t._v("Name ID (lookup to Contact) set to relate the task with the contact of the record’s opportunity. This is the name ID of the student.")])]),t._v(" "),o("p",[o("strong",[t._v("Criterion name: CCA Pre-Registration (placements added)")])]),t._v(" "),o("p",[t._v("Conditions to run this stage:")]),t._v(" "),o("ul",[o("li",[t._v("The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND")]),t._v(" "),o("li",[t._v("The Stage Name (picklist) of the related Opportunity must be CCA Pre-Registration AND")]),t._v(" "),o("li",[t._v("The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No AND")]),t._v(" "),o("li",[t._v("Any of the following conditions\n"),o("ul",[o("li",[t._v("The MAT Placement (picklist) of the related Opportunity is not null OR")]),t._v(" "),o("li",[t._v("The ENG Placement (picklist) of the related Opportunity is not null")])])])]),t._v(" "),o("p",[o("strong",[t._v("Immediate actions:")]),o("br"),t._v("\nUpdates the field Stage (picklist) of the Opportunity related to the record to PLA Pre-Registration.")]),t._v(" "),o("p",[o("strong",[t._v("Criterion name: PLA Pre-Registration Stage")])]),t._v(" "),o("p",[t._v("Conditions to run this stage:")]),t._v(" "),o("ul",[o("li",[t._v("The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND")]),t._v(" "),o("li",[t._v("The Stage Name (picklist) of the related Opportunity must be Registered at CCA AND")]),t._v(" "),o("li",[t._v("The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No.")])]),t._v(" "),o("p",[o("strong",[t._v("Immediate actions:")]),t._v('\nSend an email alert from "Bri Barnes" '),o("a",{attrs:{href:"mailto:bbarnes@micasaresourcecenter.org"}},[t._v("bbarnes@micasaresourcecenter.org")]),t._v(" to the related contact of the record that triggers the process. Email Alert Template: How_to_Register_for_PLAs_at_CCA")]),t._v(" "),o("p",[o("strong",[t._v("Criterion name: Matriculated at CCA Stage")]),t._v("\nConditions to run this stage:")]),t._v(" "),o("ul",[o("li",[t._v("The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND")]),t._v(" "),o("li",[t._v("The Stage Name (picklist) of the related Opportunity must be Matriculated at CCA AND")]),t._v(" "),o("li",[t._v("The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No.")])]),t._v(" "),o("p",[o("strong",[t._v("Immediate actions:")]),o("br"),t._v("\nCreates a Task with the following values.")]),t._v(" "),o("ul",[o("li",[t._v("Due Date Only field (date) set to 42 days after the record is created")]),t._v(" "),o("li",[t._v("Description field (string) set to “6 Week Check In - Task Requirements: payment check-in (MPN, entrance counseling, holds, etc.); grades in each class; support needed; reminder about email coming from advisors regarding graduation applications - there is a deadline so be sure to complete; show student how to forward CCA email to their personal email; next steps from convo - tell about upcoming registration dates, etc.”")]),t._v(" "),o("li",[t._v("Assigned to field (lookup to User) the user with the following ID: 0052M0000093ynCQAQ. This ID stands for the user Bri Barnes, who is the program manager.")]),t._v(" "),o("li",[t._v("Priority field (picklist) set to Normal")]),t._v(" "),o("li",[t._v("Status field (picklist) set to Not Started")]),t._v(" "),o("li",[t._v("Subject field (string) set to “6 Week CCA Student Check In”")]),t._v(" "),o("li",[t._v("Related field To ID (lookup to Opportunity) set to relate the task with the record’s opportunity")]),t._v(" "),o("li",[t._v("Name ID (lookup to Contact) set to relate the task with the contact of the record’s opportunity")])]),t._v(" "),o("p",[o("strong",[t._v("Criterion name: Graduated CCA Stage")])]),t._v(" "),o("p",[t._v("Conditions to run this stage:")]),t._v(" "),o("ul",[o("li",[t._v("The Record Type (Id) of the related Opportunity must be Stackable Credential Enrollment AND")]),t._v(" "),o("li",[t._v("The Stage Name (picklist) of the related Opportunity must be Graduated CCA AND")]),t._v(" "),o("li",[t._v("The Post-Graduation Communication (picklist) of the contact related to the opportunity is not No.")])]),t._v(" "),o("p",[o("strong",[t._v("Immediate actions:")]),t._v("\nSend an email alert. Email Alert parameter: CCA_Graduation_Congrats")])])}),[],!1,null,null,null);e.default=r.exports}}]);