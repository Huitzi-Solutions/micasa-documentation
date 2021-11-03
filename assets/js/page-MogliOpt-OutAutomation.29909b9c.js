(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{569:function(e,t,o){"use strict";o.r(t);var i=o(1),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[o("strong",[e._v("Doc version:")]),e._v(" 2021")]),e._v(" "),o("h1",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" "),o("strong",[e._v("Overview")])]),e._v(" "),o("p",[e._v("This process works with the Mogli app. This is a Salesforce native app that is available in. AppExchange. Mogli allows users to send and receive text messages in Salesforce. Mogli creates a record of type SMS every time a message is received in Mi Casa’s Salesforce org.\nOnce the record is created, the process runs to update the field Mogli Opt Out (boolean). This field is updated to true if the receiver of the SMS wants to stop receiving messages and to false if they want to keep receiving messages.")]),e._v(" "),o("p",[e._v("This field is also used in the process to track if the new record has a contact or a related lead.")]),e._v(" "),o("p",[o("strong",[e._v("Object:")]),e._v(" SMS (custom object)"),o("br"),e._v(" "),o("strong",[e._v("Runs when:")]),e._v(" a record is created or edited"),o("br"),e._v(" "),o("strong",[e._v("Fields updated by the process:")])]),e._v(" "),o("ul",[o("li",[e._v("Mogli Opt Out")]),e._v(" "),o("li",[e._v("Type: Boolean")])]),e._v(" "),o("h2",{attrs:{id:"criteria-of-the-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#criteria-of-the-process"}},[e._v("#")]),e._v(" "),o("strong",[e._v("Criteria of the process")])]),e._v(" "),o("p",[o("strong",[e._v("Criterion name: CONTACT")]),o("br"),e._v("\nIncoming message")]),e._v(" "),o("p",[o("strong",[e._v("Conditions to run this stage:")])]),e._v(" "),o("ul",[o("li",[e._v("Its Direction field (picklist) is of type Incoming AND")]),e._v(" "),o("li",[e._v("Its Contact field (lookup to Contact object) is not null AND")]),e._v(" "),o("li",[e._v("Its Message field (string) is equal to any of the following strings: STOP, STOPALL, UNSUBSCRIBE, END, CANCEL or QUIT.")])]),e._v(" "),o("p",[o("strong",[e._v("Immediate actions:")]),o("br"),e._v("\nUpdates the field Mogli Opt Out (boolean) of the Contact related to the record to true.")]),e._v(" "),o("p",[o("strong",[e._v("Criterion name: LEAD")]),o("br"),e._v("\nIncoming message")]),e._v(" "),o("p",[o("strong",[e._v("Conditions to run this stage:")])]),e._v(" "),o("ul",[o("li",[e._v("Its Direction field (picklist) is of type Incoming AND")]),e._v(" "),o("li",[e._v("Its Lead field (lookup to Lead object) is not null AND")]),e._v(" "),o("li",[e._v("Its Message field (string) is equal to any of the following strings: STOP, STOPALL, UNSUBSCRIBE, END, CANCEL or QUIT.")])]),e._v(" "),o("p",[o("strong",[e._v("Immediate actions:")]),o("br"),e._v("\nUpdates the field Mogli Opt Out (boolean) of the Lead related to the record to true.")]),e._v(" "),o("p",[o("strong",[e._v("Criterion name: CONTACT")]),o("br"),e._v("\nIncoming Opt-in")]),e._v(" "),o("p",[o("strong",[e._v("Conditions to run this stage:")])]),e._v(" "),o("ul",[o("li",[e._v("Its Direction field (picklist) is of type Incoming AND")]),e._v(" "),o("li",[e._v("Its Contact field (lookup to Lead object) is not null AND")]),e._v(" "),o("li",[e._v("Its Message field (string) is equal to any of the following strings: START, UNSTOP, SUBSCRIBE, or RESTART.")])]),e._v(" "),o("p",[o("strong",[e._v("Immediate actions:")]),o("br"),e._v("\nUpdates the field Mogli Opt Out (boolean) of the Contact related to the record to false.")]),e._v(" "),o("p",[o("strong",[e._v("Criterion name: LEAD")]),e._v("\nIncoming Opt-in")]),e._v(" "),o("p",[o("strong",[e._v("Conditions to run this stage:")])]),e._v(" "),o("ul",[o("li",[e._v("Its Direction field (picklist) is of type Incoming AND")]),e._v(" "),o("li",[e._v("Its Lead field (lookup to Lead object) is not null AND")]),e._v(" "),o("li",[e._v("Its Message field (string) is equal to any of the following strings: START, UNSTOP, SUBSCRIBE, or RESTART.")])]),e._v(" "),o("p",[o("strong",[e._v("Immediate actions:")]),o("br"),e._v("\nUpdates the field Mogli Opt Out (boolean) of the Lead related to the record to false.")])])}),[],!1,null,null,null);t.default=s.exports}}]);