# Sweet as Pie Website Redesign

## Student Information

- **Student Name:** Lazola Mntuyedwa
- **Student Number:** ST10523148
- **Module:** Web Development (WEDE5020w)
- **Year:** 2026

## 1. Project Overview

The Sweet as Pie Website Redesign is a web development project for Sweet As Pie, a Cape Town artisanal bakery specialising in handcrafted pies and tarts.

The project aims to create a functional, attractive, responsive and user-friendly website that provides customers with information about the business, its products, contact details and ordering options.

The project was completed in three stages: website planning and HTML development (Part 1), CSS styling and responsive design (Part 2), and JavaScript functionality, form validation and search engine optimisation (Part 3).

## 2. Website Goals and Objectives

The website aims to:

- Present Sweet As Pie and its products professionally.
- Provide clear and consistent website navigation.
- Allow customers to explore available pie flavours.
- Provide product enquiry and contact forms.
- Support a prototype shopping cart and checkout process.
- Improve accessibility and usability across different devices.
- Implement interactive functionality using JavaScript.
- Improve search engine visibility through SEO techniques.

## 3. Target Audience

The target audience includes existing and potential Sweet As Pie customers, Cape Town residents and visitors, families, dessert lovers, and customers seeking handcrafted desserts for celebrations, events and special occasions.

## 4. Website Pages and Features

The website contains six main HTML pages:

| Page | File | Description |
|---|---|---|
| Home | index.html | Introduces the business and its offerings. |
| About Us | about.html | Presents the business background, mission, vision and values. |
| Products | products.html | Displays available pie flavours, descriptions and prices. |
| Enquiry | enquiry.html | Allows customers to submit product, catering and large-order enquiries. |
| Contact | contact.html | Provides contact information, location maps and a general contact form. |
| Checkout | checkout.html | Provides a prototype shopping cart and checkout process. |

All pages share a consistent navigation menu and external stylesheet.

## 5. Sitemap

```text
                    SWEET AS PIE
                         |
                        HOME
                     index.html
                         |
       +-----------------+------------------+
       |                 |                  |
    ABOUT             PRODUCTS           ENQUIRY
  about.html        products.html       enquiry.html
                         |
                      CHECKOUT
                    checkout.html

                      CONTACT
                    contact.html
```

## 6. File and Folder Structure

```text
Sweet as Pie/
|
|-- index.html
|-- about.html
|-- products.html
|-- enquiry.html
|-- contact.html
|-- checkout.html
|-- README.md
|-- robots.txt
|-- sitemap.xml
|
|-- css/
|   |-- style.css
|
|-- js/
|   |-- script.js
|
|-- images/
    |-- logo.png
    |-- hero-image.jpg
    |-- about-image.jpg
    |-- apple-pie.jpg
    |-- blueberry-pie.jpg
    |-- cherry-pie.jpg
```

The actual image filenames in the project may differ from the examples above. The project uses organised folders to separate HTML, CSS, JavaScript and image assets.

## 7. Technologies Used

- **HTML5:** Provides the structure and content of the website using semantic elements.
- **CSS3:** Provides styling, responsive layouts, animations and interactive visual states.
- **JavaScript:** Implements product search, image lightbox functionality, shopping cart operations and form validation.
- **Local Storage:** Temporarily stores shopping cart information in the user's browser.
- **Google Maps Embed:** Displays the two business collection locations on the Contact page.
- **Visual Studio Code:** Used for website development and editing.
- **GitHub:** Used for version control and project submission.
- **GitHub Pages / Netlify:** Intended for free website deployment, subject to final deployment configuration.

## 8. Part 1 – Website Planning and HTML Development

Part 1 established the website foundation through organisation research, target-audience identification, website objectives, content planning, sitemap development and wireframes.

Six linked HTML pages were created using semantic HTML5 elements, including header, navigation, main, section, article and footer elements.

The project also includes organised CSS, JavaScript and image folders, consistent navigation and appropriate content for each page.

## 9. Part 2 – CSS Styling and Responsive Design

Part 2 developed the website's visual presentation through an external stylesheet linked to all six HTML pages.

The stylesheet uses reusable CSS custom properties, consistent typography, spacing, colours, borders, shadows, Flexbox and CSS Grid.

The desktop layout includes a sticky header, flexible navigation, hero sections, product cards, styled forms and consistent calls to action.

Responsive design includes:

- A tablet breakpoint at 900px.
- A mobile breakpoint at 600px.
- Responsive navigation and product layouts.
- Flexible image sizing.
- Responsive typography and spacing.
- Hover, focus, focus-visible and active states for interactive elements.

The website was designed to provide a consistent experience on desktop, tablet and mobile devices.

## 10. Part 3 – Enhancing Functionality and SEO

Part 3 enhanced the existing website through JavaScript functionality, improved forms, interactive elements and search engine optimisation.

### 10.1 JavaScript Enhancements

JavaScript was used to introduce interactive functionality across the website.

The enhancements include:

**Product Search and Filtering**

The Products page includes a search field that allows customers to search for pies by product name or description. Products that do not match the search are hidden, and a message displays the number of matching products.

**Product Image Lightbox**

Customers can click a product image to view an enlarged version. The lightbox can be closed using the close button, clicking outside the image or pressing the Escape key.

**Product Card Animations**

CSS transitions and hover effects provide visual feedback when customers interact with product cards and images.

**Shopping Cart Functionality**

Customers can add Apple, Blueberry and Cherry pies to their cart. The selected products are stored using browser localStorage.

The checkout page displays selected products, quantities, subtotal and total. Customers can increase or decrease quantities and select delivery or collection.

**Dynamic DOM Manipulation**

JavaScript updates the product search results, shopping cart contents, quantities, totals and form confirmation messages without requiring a complete page reload.

### 10.2 Form Functionality and Validation

The website contains two forms with different purposes.

**Enquiry Form**

The Enquiry page allows customers to submit:

- Full name.
- Email address.
- Telephone number.
- Type of enquiry.
- Enquiry message.

The form uses HTML5 validation and JavaScript email validation. Required fields, input formats and message character lengths are checked before a confirmation message is displayed.

After submission, the prototype provides a confirmation explaining that the enquiry details have been captured for review.

**Contact Form**

The Contact page collects:

- Full name.
- Email address.
- Telephone number.
- Message type.
- Full message.

HTML5 and JavaScript validation prevent incomplete or incorrectly formatted information from proceeding.

The contact form prepares an email addressed to orders@sweetaspie.co.za using a mailto link. The visitor must have an email application configured and manually send the prepared message.

**Form Functionality Limitation**

The forms currently demonstrate client-side validation and prototype interactions. They do not use a backend database or server-side email service. The enquiry form displays a prototype confirmation, while the contact form prepares an email for the customer to send.

### 10.3 Interactive Maps

The Contact page includes embedded Google Maps showing:

- Makers Landing, V&A Waterfront, Cape Town.
- The Old Biscuit Mill, Woodstock, Cape Town.

The maps allow visitors to view the two listed collection locations.

### 10.4 Search Engine Optimisation (SEO)

SEO improvements were implemented to improve the website's discoverability and provide clearer information to search engines.

The improvements include:

- Unique page titles for all six HTML pages.
- Relevant meta descriptions for each page.
- Descriptive image alternative text.
- Appropriate heading hierarchy.
- Descriptive product information.
- Internal links between website pages.
- Responsive and mobile-friendly layouts.
- Descriptive image filenames where applicable.
- A robots.txt file.
- A sitemap.xml file.

**Robots.txt**

The robots.txt file provides search engine crawlers with instructions about website access and identifies the sitemap location.

**Sitemap.xml**

The sitemap lists the main website pages to help search engines discover the website structure.

The sitemap and robots.txt must be updated with the actual deployed website URL before publication. The official Sweet As Pie business domain must not be used as the student's website deployment address unless the student controls that domain.

### 10.5 Accessibility and Usability

Accessibility and usability improvements include:

- Alternative text for product images and the business logo.
- Labels associated with form fields.
- Required-field validation.
- Descriptive navigation links.
- ARIA labels and live status messages where appropriate.
- Keyboard support for closing the product lightbox.
- Responsive layouts for different screen sizes.

## 11. Testing and Debugging

Testing was conducted throughout development to check that the website pages, interactive features and forms work as intended.

The following functionality should be checked before final submission:

| Test | Expected result |
|---|---|
| Navigation links | All six pages open correctly. |
| Product images | All three product images display. |
| Product search | Matching products display and non-matching products are hidden. |
| Image lightbox | Clicking an image opens an enlarged image. |
| Lightbox closing | Close button, outside click and Escape key close the lightbox. |
| Add to Checkout | Selected product is added to the cart. |
| Quantity controls | Cart quantities and totals update correctly. |
| Enquiry validation | Required fields and invalid email addresses are rejected. |
| Contact validation | Required fields and invalid email addresses are rejected. |
| Contact email | A prepared email opens for the customer to send. |
| Google Maps | Both location maps display. |
| Responsive design | Pages adapt to desktop, tablet and mobile widths. |

Testing evidence should be retained using screenshots of the website and its interactive features.

## 12. Changelog

### Version 1.0 – Part 1

- Created six HTML pages and common navigation.
- Added semantic HTML structure, relevant content, forms and comments.
- Added sitemap and initial README documentation.
- Created CSS, JavaScript and image folders.
- Added image assets and checked local file paths.
- Added a second contact and collection location.
- Corrected the README to reflect the project structure.

### Version 2.0 – Part 2

- Developed a comprehensive external stylesheet used across all six pages.
- Added reusable CSS custom properties.
- Improved typography, spacing and visual hierarchy.
- Added desktop Flexbox and CSS Grid layouts.
- Added consistent brand colours, borders, rounded cards and shadows.
- Added hover, focus, focus-visible and active states.
- Added tablet and mobile breakpoints.
- Improved responsive navigation and product layouts.
- Added responsive image rules.
- Updated the colour palette and typography to match the approved proposal.
- Implemented product-to-checkout functionality using localStorage.
- Added checkout quantity controls and calculated totals.
- Added prototype confirmation messages to forms.

### Version 3.0 – Part 3

- Added JavaScript product search and filtering.
- Added a product image lightbox with multiple closing options.
- Added product card hover animations and CSS transitions.
- Improved the shopping cart and checkout interactions.
- Added additional HTML5 form validation.
- Added JavaScript email validation to the Enquiry and Contact forms.
- Added telephone number validation and message character limits.
- Improved the enquiry form confirmation message.
- Added a contact form with message categories and email preparation.
- Added embedded Google Maps for Makers Landing and The Old Biscuit Mill.
- Added unique SEO page titles and meta descriptions.
- Improved image alternative text.
- Added robots.txt and sitemap.xml.
- Updated project documentation to include Part 3 functionality and testing requirements.

## 13. Content Research and Image Sourcing

Sweet As Pie's official website was consulted for business information, product details, contact information and collection information.

Product photography is sourced from the official Sweet As Pie website's product image CDN. The product images used in the website should be acknowledged in accordance with the institution's referencing requirements.

Any additional third-party images or content must be appropriately credited.

## 14. References

Mozilla Developer Network (MDN). n.d. *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed 2 November 2026).

Mozilla Developer Network (MDN). n.d. *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed 2 November 2026).

Mozilla Developer Network (MDN). n.d. *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed 2 November 2026).

Mozilla Developer Network (MDN). n.d. *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed 2 November 2026).

Google. n.d. *Google Maps*. Available at: https://www.google.com/maps (Accessed 2 November 2026).

Sweet As Pie. n.d. *Sweet As Pie*. Available at: https://www.sweetaspie.co.za/ (Accessed 2 November 2026).

Sweet As Pie. n.d. *Frequently Asked Questions*. Available at: https://www.sweetaspie.co.za/pages/faq (Accessed 2 November 2026).

Sweet As Pie. n.d. *Sharing Pies*. Available at: https://www.sweetaspie.co.za/products/sharing-pies (Accessed 2 November 2026).

## 15. Repository Information

The project is maintained using GitHub for version control and source-code management.

The repository should contain all six HTML pages, the external CSS stylesheet, JavaScript functionality, images, robots.txt, sitemap.xml and this README file.

Changes should be committed using descriptive commit messages that accurately reflect the work completed.

**GitHub Repository:** Insert the actual public repository URL here.

**Live Website:** Insert the actual deployed website URL here once deployment is complete.

## 16. Submission Evidence and Final Checks

Before submission, confirm that:

- All six HTML pages are included.
- CSS and JavaScript files are included.
- Images and other required assets are included.
- The README contains the Part 1, Part 2 and Part 3 documentation.
- The changelog records the actual changes made.
- The website has been tested on desktop and mobile.
- Screenshots of functionality and responsive layouts are retained.
- The GitHub repository contains the latest changes.
- The live website is deployed if required by the assessment.
- The GitHub repository URL is included in the submission.

Any lecturer feedback received should be documented accurately, together with the corrections made. Do not invent feedback or testing results.

## 17. AI Use Declaration

AI tools were used as an assistance resource during aspects of planning, coding support, debugging and documentation. The final submission should include the AI acknowledgement, disclosure and supporting evidence required by the institution and the assessment brief.

The student remains responsible for reviewing, understanding, testing and verifying all submitted work.