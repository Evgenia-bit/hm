/*
async function gerResponse() {
    let response = await fetch('js/countries.json')
    let content = await response.json()
    const optionsWrap = document.querySelector('select');
    for (var key in content) {
        optionsWrap.insertAdjacentHTML('beforeEnd', `
            <option value="${content[key][0]}">${content[key][1]}</option>
        `);
    }
}
gerResponse() 

*/

 /*modal window*/
 const modalWrap = document.querySelector(".modal-wrap");
 const modal = document.querySelector(".modal")
 const footerLinks = document.querySelectorAll(".footer-link");
 document.querySelector(".close").addEventListener("click", ()=> {
         modalWrap.classList.remove("open");
     })
 modalWrap.addEventListener("click", (e)=> {
     if(e!=modal) {
         modalWrap.classList.remove("open"); 
     }
 })
 footerLinks.forEach((item, i) => {

     item.addEventListener('click', () => {
         modalWrap.classList.add("open");
        
 
         if (i == 0) {
             modal.innerHTML = "";
             modal.insertAdjacentHTML('beforeEnd', `
        
             <div class="close">X</div>
             <p>This product website (the “Website”) is owned and operated by Biolab Rx and its affiliates (collectively “Company”). These Terms of Use and Conditions of Purchase, the Company’s, and any amendments or supplements to it, (the "Agreement") form a legally binding agreement between you and the Company. This Agreement governs your access to and use the Website, by placing any orders through this Website or by telephone, you agree with the terms and conditions set for the below. Please read the following terms and conditions of use carefully before placing your order and print a copy for future reference. It is important that you also read our Privacy Policy regarding personal information provided by you, which is incorporated herein by reference.</p>
         <p>&nbsp;</p>
         <p><strong>Health Disclaimer</strong></p>
         <p>&nbsp;</p>
         <p>Any statements on this website or any information, services, materials, products,&nbsp; or supplements distributed or sold have not been evaluated by the Food and Drug Administration (FDA). Our product is not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking any medication, or have any medical conditions we suggest consulting with a physician before using any of our products. The results achieved with all products are not typical, and not everyone will experience these results.</p>
         <p><strong>&nbsp;</strong></p>
         <p><strong>Refund Policy</strong></p>
         <p><strong>&nbsp;</strong></p>
         <p>Once your return has been received your refund will be credited back to your bank account, and may take up to 5-7 business days to show up in your statement, depending on your bank. We will refund the entire purchase price of the order (less shipping cost).</p>
         <p>&nbsp;</p>
         <p><strong>Shipping</strong></p>
         <p><br> The standard ground mail service is shipped <strong>through</strong> (USPS) United States Postal Service First Class Mail. We are dedicated to delivering you the fastest and most reliable shipping. With our Expedited Shipping Option, we will make your shipment our priority and ship the packages out the same day for all orders placed before 2PM Eastern Standard Time and the next day for all orders placed after 2PM Eastern Standard Time (packages will arrive within 3-5 business days). Please note that shipments are not sent out on Saturdays, Sundays, or any Holidays. Orders placed on weekends or Holidays will typically ship the next business day. We do not guarantee arrival dates or times.</p>
         <p>While we will do all that we can to ensure your order is delivered on time, we cannot be held responsible for conditions beyond our control such as severe weather, postal interruptions, etc.</p>
         <p>&nbsp;</p>
         <p><strong>Returns:</strong></p>
         <p><br> Your satisfaction is our priority!</p>
         <p>We have a&nbsp;30-day return policy. We accept returns on any un opened bottles within 30 days of date of purchase. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund.</p>
         <p>We’re sorry; partial, opened, or unsealed bottles do not qualify for a credit if returned. If you wish to return your purchase, please contact customer service at returns@biolabrx.com within 30 days of the date the product was purchased to receive a return authorization number (RAN). Once you have received RAN you may return the product to:</p>
         <p>&nbsp;</p>
         <p>Biolab Rx</p>
         <p>Customer Service</p>
         <p>1923 McDonald Ave, #22</p>
         <p>New York, NY 11223</p>
         <p>&nbsp;</p>
         <p>Please note, returns without a return authorization number will not be accepted.</p>
         <p>&nbsp;</p>
         <p><strong>Use of the Site</strong></p>
         <p><strong>&nbsp;</strong></p>
         <p>This Terms of Service ("TOS") constitute&nbsp; a legally binding agreement made between you, whether personally or on behalf of an entity for whom you are using this website (collectively, "you") and Company ("we", "us", or “our”). This TOS governs your access and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, "Website") and the services we offer on the Website ("Services"), so please read it carefully.</p>
         <p>YOU AGREE THAT BY ACCESSING OR USING ANY PART OF THE WEBSITE, YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND BY ALL OF THIS TOS. IF YOU DO NOT AGREE TO BE BOUND WITH ALL OF THIS TOS, THEN DO NOT ACCESS OR USE THE WEBSITE.</p>
         <p>We make every effort to ensure all information on the Website is current, complete and accurate, however, at times there may be typographical errors, pricing, errors, inaccuracies, or omissions, including descriptions, availability, and various other information.&nbsp; Company does not assume any liability or responsibility in regards to any such errors and omissions, and Company reserves the right to revoke any stated offer to correct any errors, inaccuracies, or omissions; and make changes to the prices, content, promotions, offers, product descriptions, product specifications, or update other information on the Website at any time, without prior notice.</p>
         <p>&nbsp;</p>
         <p><strong>Disclaimer of Warranty</strong></p>
         <p><strong>&nbsp;</strong></p>
         <p>The services, products, and offers provided under this Agreement are provided on an "as is" and "as available" basis. Company makes no warranties that the offers will be successful or error free.&nbsp; Company makes no warranties as to the results that may be obtained from the purchase of the offer as to the accuracy, reliability or content of any information, services or merchandise/goods contained in or provided in connection with the services.<br> COMPANY IS NOT LIABLE AND EXPRESSLY DISCLAIMS ANY LIABILITY, FOR THE INFORMATION OR CONTENT OF ANY DATA TRANSFERRED EITHER TO OR FROM CUSTOMER. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM COMPANY OR THROUGH THE WEBSITE, OR GIVEN BY ANY RELATED PERSON, WILL CREATE ANY WARRANTY; NOR MAY YOU RELY ON ANY SUCH INFORMATION OR ADVICE.<br> The Terms of this section shall and will survive the termination of this agreement.</p>
         <p><strong>&nbsp;</strong></p>
         <p><strong>Limited Warranty</strong></p>
         <p><strong>&nbsp;</strong></p>
         <p>Company represents and warrants to Customer that it will provide the Services (a) in a manner consistent with general industry standards which are reasonably applicable to the performance thereof; and (b) at least at the same quality and level of service as provided by Company to its other Customers for the similar services; and (c) in compliance in all material respects with the applicable Product or Service Descriptions. The foregoing warranties shall not apply to performance issues or defects in the Services (a) caused by factors outside of Company’s reasonable control; (b) that resulted from any actions or inactions of Customer or any third parties, whether or not authorized by Customer; or (c) that resulted from your equipment or any third-party equipment not within the sole control of Company. EXCEPT AS EXPRESSLY PROVIDED IN THIS SECTION, WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESSED OR IMPLIED, WITH RESPECT TO THE SERVICES, PRODUCTS OR ANY OFFERS PROVIDED UNDER THIS AGREEMENT, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE OR NON-INFRINGEMENT OF THIRD-PARTY RIGHTS, OR ANY OTHER WARRANTIES OF ANY KIND IN AND TO THE SERVICE OR AND RESULTS OF THE SERVICE, AND WE HEREBY EXPRESSLY DISCLAIM THE SAME. WITHOUT LIMITING THE FOREGOING, ANY THIRD-PARTY PRODUCTS OR SERVICES PROVIDED TO CUSTOMERS HEREUNDER IS PROVIDED "AS IS" AND WITHOUT ANY CONDITION OR WARRANTY. WE DO NOT WARRANT THAT YOU WILL BE ABLE TO ACCESS OR USE THE SERVICES AT THE TIMES OR LOCATIONS OF YOUR CHOOSING; THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE; THAT THE SERVICES ARE FREE OF INACCURACIES, MISREPRESENTATIONS BY USERS, OR COMPLETELY SECURE.</p>
         <p>&nbsp;</p>
         <p><strong>Limitation of Liability</strong></p>
         <p><strong>&nbsp;</strong></p>
         <p>EXCEPT AS EXPRESSLY PROVIDED BELOW, NEITHER PARTY SHALL BE LIABLE IN ANY WAY TO THE OTHER PARTY OR ANY OTHER PERSON FOR INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. THIS INCLUDES WITHOUT LIMITATION, ANY LOST PROFITS OR REVENUES, ANY LOSS OF USE OF SUCH PROFITS OR REVENUES, LOSS OF GOODWILL, LOSS OF DATA OR COSTS OF PROCUREMENT OF SUBSTITUTE GOODS, LICENSES OR SERVICES OR SIMILAR ECONOMIC LOSS, OR FOR ANY PUNITIVE, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL AND/OR INCIDENTAL DAMAGES, OR SIMILAR&nbsp; DAMAGES OF ANY NATURE, WHETHER FORESEEABLE OR NOT, UNDER ANY WARRANTY OR OTHER RIGHT HEREUNDER, ARISING OUT OF OR IN CONNECTION WITH THE PERFORMANCE OR NON-PERFORMANCE OF ANY ORDER, OR FOR ANY CLAIM AGAINST THE OTHER PARTY BY A THIRD PARTY, REGARDLESS OF WHETHER IT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH CLAIM OR DAMAGES. The limitations contained in this Section apply to all causes of action in the aggregate, whether based in contract, tort or any other legal theory (including strict liability), other than claims based on fraud or willful misconduct. Notwithstanding anything to the contrary in this Agreement, Company maximum liability under this Agreement for any and all damages, liabilities, losses, costs and expenses, and causes of actions from any and all claims (whether in contract, tort, including negligence, quasi-contract, statutory or otherwise) shall not exceed the dollar amount paid by customer for the purchase of the offer or any product which gave rise to such damages, losses and causes of actions. This limitation of liability reflects an informed, voluntary allocation between the parties of the risks (known and unknown) that may exist in connection with this Agreement. The terms of this section shall survive any termination of this Agreement.</p>
         <p><strong>&nbsp;</strong></p>
         <p><strong>Indemnification</strong></p>
         <p><br> Customer agrees to indemnify, defend and hold harmless Company and its affiliates, parent company and subsidiaries, and all of their respective owners, officers, directors, managers, employees, shareholders, attorneys and agents (each an "indemnified party" and, collectively, "indemnified parties") for, from and against any and all claims, damages, losses, liabilities, suits, actions, demands, proceedings (whether legal or administrative), and expenses (including, but not limited to reasonable attorney's fees, costs and expenses) threatened, asserted, or filed by a third party against any of the indemnified parties arising out of or relating to customer's purchase of the offer, any breach of any representation, warranty or covenant of customer contained in this Agreement or any acts or omissions of customer. The terms of this section shall survive any termination of this Agreement.</p>
         <p><strong>&nbsp;</strong></p>
         <p><strong>Waiver of Jury Trial</strong></p>
         <p><br> Both You and Company hereby agree to waive all respective rights to a jury trial of any claims, disputes, or causes of action related to or arising out of this Agreement. The scope of this waiver is intended to be all encompassing of any and all disputes that may be filed in any court or other tribunal, and that relate to the subject matter herein, (including without limitation, contract claims, tort claims, breach of duty claims, and all other common law and statutory claims).</p>
         <p>The parties, you and Company each acknowledge that the waiver is a material inducement for each party to enter into a business relationship, that each party has already relied on the waiver in entering into this Agreement and that each will continue to rely on the waiver in their related future dealings. Each party further warrants and represents that each has had the opportunity to have counsel review the waiver. This waiver is irrevocable, meaning that it may not be modified either orally or in writing, and this waiver shall apply to any subsequent amendments, renewals, supplements or modifications to this Agreement. In the event of litigation, this Agreement may be filed as written consent to a trial by the court.</p>
         <p><strong>&nbsp;</strong></p>
         <p><strong>Miscellaneous</strong></p>
         <p><br> <strong>Independent Contractor.</strong> Company and customer are independent contractors. Nothing contained in this Agreement shall be deemed to constitute a partnership or joint venture between the Parties.</p>
         <p>Neither party has, expressly or by implication, or may represent itself as having, any authority to make contracts or enter into any agreements in the name of the other party, or constitute any Party to be the agent of the other Party for any purpose, or to obligate or bind the other party in any manner whatsoever. <br> </p>
         <p><strong>Governing Law; Jurisdiction.</strong> Any and all controversy or claim arising out of or relating to this Agreement, the formation of this Agreement or the breach of this Agreement, including any claim based upon or arising from an alleged tort, shall be governed by construed, and enforced in accordance with the laws of the State of Florida, regardless of the legal theory upon which such matter is asserted.</p>
         <p>The United Nations Convention on Contracts for the International Sale of Goods (CISG) does not apply to this Agreement. The parties agree that any suit, action or proceeding concerning this Agreement must be brought in a state or federal court located in Miami, Florida.&nbsp;EACH PARTY HEREBY IRREVOCABLY CONSENTS TO THE EXCLUSIVE JURISDICTION OF SUCH COURTS (AND OF THE APPROPRIATE APPELLATE COURTS THEREFROM) IN ANY SUCH SUIT, ACTION OR PROCEEDING AND IRREVOCABLY WAIVES, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ANY OBJECTION WHICH IT MAY NOW OR HEREAFTER HAVE TO THE LAYING OF VENUE OF ANY ACTION, SUCH SUIT, OR PROCEEDING IN ANY COURT OR THAT ANY SUCH SUIT, ACTION OR PROCEEDING WHICH IS BROUGHT IN ANY SUCH COURT HAS BEEN <strong>BROUGHT IN AN INCONVENIENT FORUM </strong>TO THE MAINTENANCE OF SUCH ACTION OR PROCEEDING IN ANY SUCH COURT.</p>
         <p><br> <strong>Headings.</strong> The headings herein are for convenience only, do not constitute a part of this Agreement and shall not be deemed to limit or affect any of the provisions hereof.<br> &nbsp;<br> <strong>Entire Agreement; Amendments.</strong> This Agreement, including documents incorporated herein by reference, supersedes all prior discussions, negotiations and agreements between the parties hereto&nbsp; with respect to the subject matter hereof, and contain the sole and entire agreement between the parties hereto with respect to the subject matter covered hereof. In case of a conflict between this Agreement and any purchase order, and/or service order, work order, confirmation, correspondence or other written or oral communication or other documentation&nbsp; of customer or Company, the Terms and Conditions of this Agreement shall control. No additional Terms or Conditions relating to the subject matter of this Agreement shall be effective unless approved in writing, and signed by an authorized representative of Customer and Company. The Agreement may not be changed, modified or amended except by another agreement in writing executed by the parties hereto; provided, however, that the Company may change or modify these Terms of Service from time to time in its sole discretion, such changes or&nbsp; modifications will be effective when posting to Company website or on any subsequent date as may be set forth in any required notice provided by us in connection therewith.</p>
         <p><strong>&nbsp;</strong></p>
         <p><strong>Severability.</strong> All rights and restrictions contained in the Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary such that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portions of any provision of the Agreement shall be held to be illegal, invalid or unenforceable by any court of competent jurisdiction, it is the intention of the parties that all&nbsp; remaining provisions or portions of this Agreement shall constitute their Agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect&nbsp; unless otherwise agreed to in writing by the Parties.</p>
         <p><br> <strong>Notices and Other Communications. </strong>Any and all notices, requests, demands and other communications required or otherwise contemplated hereunder by one party to the other shall be in writing and shall be deemed to have been duly made and given upon date of delivery if delivered personally or by an overnight courier service or postal service, upon receipt if transmitted by facsimile the receipt of which is confirmed by the recipient, or upon the expiration of five days after the date of posting if mailed by certified mail, postage prepaid mail, to the addresses or facsimile numbers set forth below the parties' signatures. Either party may change his, her or its address, fax number, or email address for purposes of this Agreement by giving&nbsp; notice in writing of such change to the other party as provided herein. Company may give written notice to Customer via electronic mail to the Customer's electronic mail address as maintained in Company’s billing records. <br> <br> <strong>Waiver.</strong> No failure or delay by any party hereto to exercise any right, power, privilege, or remedy hereunder shall operate as a waiver thereof nor shall any single or partial exercise of any right, power, privilege, or remedy by any party preclude any other or further exercise thereof or the exercise of any other right, power, privilege, or remedy. No express waiver or assent by any party hereto to any breach of or default in any of these Term or Condition of the Agreement shall constitute a waiver of or an assent to any succeeding breach of or default in the same or any other term or condition hereof. <br> <br> <strong>Assignment; Successors.</strong> The Customer may not assign or transfer either this Agreement or any of its rights, interests, or obligations hereunder, without the prior written consent of Company. And any attempted assignment or transfer in violation of the foregoing provision shall be null and void and of no force or effect whatsoever. The Company may assign any of its rights and/or obligations under this Agreement, and may engage subcontractors or agents in performing its duties and exercising its rights hereunder, without the consent of customer. All the terms and provisions of this Agreement shall be binding upon and inure to the benefit of the parties and their respective successors and permitted assigns.</p>
         <p><br> <strong>Limitation of Actions.</strong> No action, regardless of form, arising by reason of or in connection with the Agreement may be brought by either party more than two years after the cause of action has arisen. <br> <br> <strong>Violation of the Terms.</strong> You agree that Company, in its sole discretion and without prior notice, may terminate your access to the Website, indefinitely suspend or terminate your account, cancel your order or exercise any other remedy available and remove any unauthorized User Content, whether with or without cause or warning, and without liability, if Company believes that the User Content you provided has violated or is inconsistent with these Terms of Use violated the rights of Company, another User or the law. You agree that monetary damages may not provide a sufficient remedy to the Company for violations of these Terms and Conditions and you consent to injunctive or other equitable relief for such violations. In certain circumstances, Company may release user information about you if required by subpoena, law or regulation, or if the information is necessary or appropriate to release to address an illegal or harmful activity. Company is not required to provide any refund to you if you are terminated as a user because you have violated the Terms of Use.&nbsp; <br> </p>
         <p><strong>Copyright Policy.</strong></p>
         <p>It's Company’s policy to respect the copyright and intellectual property rights of others. Company may choose to terminate the privileges of any user who uses this Website to unlawfully transmit copyrighted material without a license express consent, valid defense or fair use exemption to do so. In particular, users who submit any information, any content to this Website, whether text, articles, images, stories, data, document,&nbsp; software or other copyrightable material must ensure that the any Content they upload does not infringe or violate any third-party rights, the copyrights or other rights of third parties (such as privacy or publicity rights). After proper notification by the copyright holder or its agent to us, and confirmation through court order or admission by the user that they have used this Website as an instrument of unlawful infringement, we will terminate the infringing users' rights to use and/or access this Website. We may at our sole discretion, decide to disable and/or terminate the User's rights to use or access to the Website prior to that time if we suspect that the alleged infringement has occurred.</p>
         <p>&nbsp;</p>
         <p><strong>Links to Other Websites.</strong> The Website may automatically produce search results that reference or link to third party websites throughout the global Internet. Company has no control over the contents, information or functionality of these websites. Company cannot and does not guarantee, represent or warrant that the content contained in the websites, including, without limitation other links, is accurate, legal and/or inoffensive. Company does not endorse the content of any third party website, nor do we warrant that they will not contain computer viruses or otherwise impact your computer or other web access device. By using the Website to search for or link to another website, you agree and understand that such use is entirely at your own risk, and you may not make any claim against Company for any damages or losses, whatsoever, resulting from such use of the Website to obtain search results or to link to another website. If you have a problem with a link from the Website, please notify us at info@biolabrx.com, and we will investigate your claim promptly and take any actions we deem appropriate at our sole discretion.</p>
         <p>INTERNET TECHNOLOGY AND THE APPLICABLE LAWS, RULES, AND REGULATIONS CHANGE FREQUENTLY. ACCORDINGLY, WE RESERVE THE RIGHT TO MAKE CHANGES TO THIS TO WEBSITE AT ANY TIME. YOUR CONTINUED USE OF THE WEB SITE CONSTITUTES YOUR AGREEMENT TO ANY NEW OR MODIFIED PROVISION OF THIS AGREEMENT THAT MAY BE POSTED ON THE WEB SITE.</p>

         `);
         } else if (i == 1) {
             modal.innerHTML = "";
             modal.insertAdjacentHTML('beforeEnd', `
             <div class="close">X</div>
                 <p><strong>Privacy Policy</strong></p>
         <p>&nbsp;</p>
         <p>You linked to this Privacy Policy ("Privacy Policy") through a product website owned and operated by Biolab Rx ("Company", “us”, “our” or “we”). The Company's network includes numerous product marketing Websites (each a "Website" and collectively, the “Websites"). This privacy policy is in effect for all websites owned and operated by the Company. By using any of the websites you signify that you have read, understand and agree to be bound by this Privacy Policy. This privacy policy covers the collection, use and disclosure of personal information that may be collected by the Company anytime you interact with the Company, when you provide it through various forms and places on the Websites such as in connection with a request or purchase of a product, service, or information or if you register for a Website account.</p>
         <p>Your privacy is a priority at the Company, and We go to great lengths to protect it. You acknowledge that this Privacy Policy is part of our Terms of Service, and by visiting or using our site and/ or purchasing something any of the offers associated with, you agree to be bound by all of its terms and conditions.</p>
         <p>This Privacy Policy discusses the collection, use, and disclosure of personal information that may be collected from you via the Site. Please read the following carefully to understand how we collect information, including what type of information is gathered, how that information is used and for what purposes, to whom we disclose the information, and how we safeguard your personal information.</p>
         <p>If you disagree to these terms, please do not access or use this website.<br> The Company reserves the right to revise, amend, or modify this Privacy Policy at any time in any manner. When we change the policy, any changes, modifications, additions or deletions shall be effective immediately. You acknowledge and agree that it is your responsibility to review this website and this Policy periodically and to be aware of any modifications. Your continued use of our website and any other services provided by the Company after such modifications will constitute your agreement to and acceptance of the modified Policy, and agreement to abide and be bound by the modified Policy.</p>
         <p><br> <strong>Information Collection</strong></p>
         <p>In order to better serve you, we collect two basic types of information about our users: personally identifiable information and non-personally identifiable information. Our primary goal in collecting information from you is to provide you with a smooth, efficient, and customized&nbsp; experience while using our Website.</p>
         <p>Personally Identifiable Information</p>
         <p>This refers to information that lets us know the specifics of who you are. When you engage in certain activities on this website, such as, ordering a service or making a purchase, submitting content and/or posting content in discussion forums or other public areas, or sending us feedback, questions or comments, we may ask you to provide certain information about yourself by filling out and submitting an online form. It is totally optional for you to engage in these activities. If you elect to engage in these activities, however, we may ask that you provide us personal information, such as your first and last name and contact information (e.g., mailing address including zip code, email address, telephone number) and other personal identifying information. When ordering services or making a purchase on the website, you may be asked to provide a credit card number. Depending upon the activity, some of the information we ask you to provide is identified as mandatory and some as voluntary. If you do not provide the mandatory data with respect to a particular activity, you will not be able to engage in that activity or you limit your ability to use all or a portion of the Website. In addition, if using a mobile device to access the Website, we collect the device’s Unique Device Identifier which may be considered Personal Information. In general, you may browse our Website without providing any Personal Information other than the Unique Device Identifier when using a mobile device.</p>
         <p>Non-Personally Identifiable Information</p>
         <p>This refers to information that does not by itself identify a specific individual. This information may include referring URL, your IP address, what browser type you are using, such as Internet Explorer®, Safari®, Chrome®, etc., city, time zone, and operating system such as Windows®, Mac®, iOS® or Android®. Networks like the Web use the TCP/IP protocol to route information based on the IP address of the destination.</p>
         <p>&nbsp;<br> <strong>Collection Methods and Use of Information</strong><br> We collect no personal information about you when you visit our website unless you voluntarily provide it to us. You provide certain Personally Identifiable Information to us when you: register on our website, register for our services,&nbsp; register your e-mail address with us, or making a purchase; sign up for special offers or promotions from selected third parties; send e-mail messages, submit forms or transmit another information by telephone or letter; or submit your credit card or other payment information when ordering and purchasing products and/or services on our website. We may also collect information from you at other points on our website that state that such information is being collected.</p>
         <p>In addition, we may also collect, or our server may collect, or our third party ad server and/or content server may collect, certain Non-Personally Identifiable Information. This information is ultimately stored in the form of store categories, and, in some cases, specific URLs. We use your IP address to diagnose problems with our servers, software, to administer our site and to gather demographic information. In the event of third-party advertising on our site, our third party ad servers will also provide us with a summary, but not individual reports that will tell us how many ads were presented and clicked upon at our site.</p>
         <p>We will primarily use your Personally Identifiable Information to provide our services to you, as required by our agreements with you. We will also use Personally Identifiable Information to enhance the operation of our website, improve our marketing and/or promotional efforts, statistically analyze website use, improve our product and service offerings, fill orders, and&nbsp; customize our website's content, layout, and services. We may use Personally Identifiable Information to deliver information to you and to contact you regarding administrative notices. We may also use Personally Identifiable Information to resolve disputes, troubleshoot problems and enforce our agreements with you, including our Website Terms of Use, Sales Terms and Conditions, and this Private Policy.</p>
         <p><br> <strong>Foreign use of the Website. </strong></p>
         <p>To the extent that you are accessing the Website while domiciled outside of the United States, you acknowledge that the Personal Information you are providing Company is collected, transferred, processed, used, and stored in the United States, and therefore by using our Website, you consent to the transfer, processing of information to and storage of the information outside of your domiciled country and in the United States.</p>
         <p>&nbsp;</p>
         <p><strong>Release of&nbsp; Information</strong></p>
         <p>Disclosure of Information to Service Providers and Third Party Vendors. We may disclose your personally identifiable information to third party service providers and vendors in order to effect or to carry out any transaction that you have requested from Company or as necessary to complete its contractual obligations with you. This includes email service providers, providers of direct marketing services and applications, including lookup and reference, and data enhancement, suppression and validation services.</p>
         <p>We prohibit the sale or transfer of Personally Identifiable Information by such service providers and vendors. We may share Personally Identifiable Information with affiliated companies that are directly or indirectly controlled by, or under common control of Company.<br> We provide some of our services through contractual arrangements with affiliates, services providers, partners and other third parties. We and our service partners use your Personally Identifiable Information to operate and maintain our websites and to deliver their services. For example, we must release your credit card information to the card-issuing bank to complete a transaction and confirm payment for products and/or services purchased on this website; release your address information to the delivery service to deliver products that you ordered; and provide order information to third parties that help us provide customer service.</p>
         <p>In rare circumstances, we may be contacted and required by law enforcement or judicial authorities to provide personally identifiable information to the appropriate government authorities. We will disclose personally identifiable information upon receipt of a court order, subpoena, and to cooperate with a law enforcement investigation. We fully cooperate with law enforcement agencies in identifying those who use our services for fraudulent or illegal activities. We reserve the right to report to law enforcement agencies judicial authorities any activities that we, in good faith, believe to be unlawful or criminal. <br> We may also provide Non-Personally Identifiable Information about our customers' sales, traffic patterns, and related website information to third party advertisers, for the purpose of targeting future campaigns, but these statistics do not include any Personally Identifiable Information.</p>
         <p>Please note that the Company has safeguards in place to keep your personal information accurate, complete, and up-to-date for the purposes for which it is used. You may always access,&nbsp; change and/or correct the personal information you have provided and can help us ensure that your contact information and preferences are accurate, complete, and up-to-date by checking this website. You may ask to have a copy of your personal information, your product registration history, your transactions on this site and your interactions with our sales and support agents by contacting us at the email address below: support@biolabrx.com</p>
         <p>&nbsp;</p>
         <p><strong>Security</strong><br> At our website, you can be assured that your Personally Identifiable Information is secure, consistent with current industry standards. The importance of security for all information associated with our user is of utmost concern to us. We use a variety of security technologies and procedures to protect your information. Your Personally Identifiable Information is protected in several ways. You can access to your Personally Identifiable Information using a password and unique customer ID selected by you.&nbsp;This password is encrypted. We recommend that you do not share your password with anyone. Your Personally Identifiable Information resides on a secure server that only selected&nbsp;Company&nbsp;personnel and contractors have access to via password. We encrypt your Personally Identifiable Information and thereby prevent unauthorized parties from viewing such information when it is transmitted to us. In order to most efficiently serve you, credit card transactions and order fulfillment are handled by established third party banking, processing agents and distribution institutions. They receive the information needed to verify and authorize your credit card or other payment information and to process and ship your order. Please be advised that, although Company takes reasonable technological precautions to protect your data, unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your Personally Identifiable Information, you acknowledge that: (a) there are security and privacy limitations of the Internet which are beyond our control; (b)&nbsp; the security, integrity and privacy of any and all information and data exchanged between you and us through this website cannot be guaranteed; and (c) any such information and data may be viewed or tampered with in transit by a third party.</p>
         <p><strong>&nbsp;</strong></p>
         <p><strong>Cookies</strong><br> When you use our website we will store cookies on your computer in order to facilitate the navigation of our website and customize your use of our site.</p>
         <p>Cookies are small text file that a Website stores on your computer's hard drive (if your Web browser permits) that can later be retrieved to identify you to us. Our cookies store randomly assigned user identification numbers, demographic information about the visitor such as the country where you are located, and your first name to welcome you back to our site. The cookies make your use of the website easier, make the website run smoothly and help us to maintain a secure website. If you decide to disable or decline cookies, you may not be able to access some parts of this website and connected subdomains, or they may not function properly.</p>
         <p>We may use an outside ad serving company or content server to display banner advertisements and other information on our site. As part of their service, they place a separate cookie on your computer. We do not provide any third-party ad servers with any of your Personally Identifiable Information or information about your purchases. We and our third party ad servers will collect and use Non-Personally Identifiable Information about you, such as your IP address, browser type, the URLs from which you came, the country, where the servers that your computer is logged onto is located, the area code and zip code associated with your server and whether you responded to a particular ad. Other advertisers may also place banner ads on our site in the same manner as above, but we do not disclose any Personally Identifiable Information to them.</p>
         <p>&nbsp;</p>
         <p><strong>Privacy Policies Of Third Party Sites</strong> <br> Except as otherwise discussed in this Privacy Policy, this document only addresses the use and disclosure of information we collect from you. Other websites accessible through our website have their own privacy policies and data collection, use and disclosure practice. Please consult each site’s privacy policy. We are not responsible for the policies or practices of third parties. Additionally, other companies which place advertising on our website may collect information about you when you view or click on their advertising through use of cookies. We cannot control this collection of information. You should contact these advertisers directly if you have any questions about their use of the information they collect.</p>
         <p>&nbsp;</p>
         <p><strong>Wireless Policy to add to Existing Terms and Conditions/Privacy Policy</strong></p>
         <p>We may use personal information to provide personalized services, the services you've requested, including services that display content and advertising. In addition to any fee of which you are notified, your carrier’s standard messaging rates apply to our confirmation and all subsequent SMS correspondence and/or transmissions. You may opt-out and withdraw your SMS information by sending "STOP", "END", "QUIT" to the SMS text message you have received.</p>
         <p><strong>&nbsp;</strong></p>
         <p><strong>Wireless Policy</strong><br> Data obtained from you in connection with this SMS service may include your name, address, cell phone number, your carrier’s name, and the date, time and content of your messages,&nbsp; as well as other information that you provide. In addition to any fee of which you are notified, your carrier’s standard messaging rates apply to our confirmation and all subsequent SMS correspondence and/or transmissions. All charges are billed by and payable to your mobile service provider. We will not be liable for any delays in the receipt of any SMS messages as delivery is subject to effective transmission from your mobile service operator. SMS message services are provided on an "AS IS" basis. We may use personal information to contact you and to provide the services you've requested from us, including the display of customized content and advertising. We may also use personal information for auditing, research and analysis in order to maintain, operate and improve our technologies and services.</p>
         <p>&nbsp;</p>

`);
         } else {
             modal.innerHTML = "";
             modal.insertAdjacentHTML('beforeEnd', `
             <div class="close">X</div>
         <p>&nbsp;</p>
         <div class="pop-heding" style="text-align:center;">
             <h1>We Are Always Here To help!</h1>
             </div>
 <div class="pop-content">
     <p>&nbsp;</p>

 <p><strong>EMAIL:</strong> <a href="mailto:support@biolabrx.com">support@biolabrx.com</a></p>
 <p>24 hours a day, 7 days a week</p>
 <p>&nbsp;</p>
 <p><strong>PHONE: </strong>1-888-960-0025 phone</p>
 <p>is open from 9am-5pm EST M-F</p>
 <p>&nbsp;</p>
 <p>Our team of experts is standing by to answer your questions and help you improve your health!</p>

         </div>
   

  
           `);
         }
     })

 })
   
 
 /*timer*/ 
let deadLine = '2021-08-30';


function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000)%60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/1000/60/60)%24);
    days = Math.floor((t/(1000*60*60*24)));
    return {
        'total' : t,
        'days' : days,
        'hours' : hours+12,
        'minutes' : minutes+17,
        'seconds' : seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
       
        days.textContent  = (t.days < 10 ? '0' + t.days:  t.days);
        hours.textContent  = (t.hours < 10 ? '0' + t.hours :  t.hours);
        minutes.textContent = ( t.minutes < 10 ? '0' + t.minutes : t.minutes);
        seconds.textContent = (t.seconds < 10 ? '0' + t.seconds : t.seconds);

        if(t.total <=0) {
            clearInterval(timeInterval);
            days.textContent = '00'
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
        
    }
}
setClock('timer', deadLine);
