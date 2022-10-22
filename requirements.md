# Software Requirements

## Vision


What is the vision of this product?
- HandyDandy's vision is to provide a one-stop-shop for homeowners seeking to perform maintenance or upgrades to their home, as well as give professionals and amateurs the ability to connect with people in their community.

What pain point does this project solve?
- HandyDandy allows users to track and schedule upgrades or preventative maintenance on their homes, either by choosing to DIY or contacting someone with experience.

Why should we care about your product?
- HandyDandy makes home maintenance and upgrades simple and easy while supporting the local community and small businesses.

## Scope (In/Out)

- IN - Key Features:
  - Allow users to sign-up and login securely
  - Allows users to track and schedule maintenance and/or upgrades to their home
    - Users are able to choose to DIY or contact a Pro
  - If a user chooses DIY, they are presented with video and written instruction
  - If a user chooses a Pro, they are presented with a list of experienced people in their area
  - Pro Users will be able to add category-specific competencies to their profile so users can find and hire them

- OUT - This app does NOT:
- Does not handle monetary transactions
- Does not handle disputes between parties
- Does not handle licensing, bonding, or insurance

### Minimum Viable Product

1. Ability for users and pros to sign up
2. Tracking maintenance requirements/upgrades completed with email reminders
3. Being presented with an option to choose DIY or PRO
4. Ability to search for pros with in their metro area, down to the neighborhood level
5. If choosing DIY, user selects category/task and is presented with a how-to video and a set of step by step instructions

### Stretch
1. "Like/Dislike" functionality to indicate to users how many people have used a particular Pro and had a positive or negative experience. User side will display a percentage.
2. Map integration, which will provide users the ability to see Pros near them 
3. Web-scraping to look up product by brand/serial number to find recommended maintenance schedule

## Functional Requirements
- An admin can create and delete user accounts
- A user can update their profile information and create/modify their maintenance schedule or upgrades
- A user can find and select a Pro in their area 
- A Pro User can input their competencies
- A user can select DIY (video or step-by-step instruction)
- A user can log in/out


### Data Flow
The user will first sign-up or login, where their information will be authenticated by the backend. After authentication, the backend will then fetch data from the DB, format it as required, and send to the front-end, where it will be displayed to the user as a personalized dashboard. The user will then be able to decide if they would like to create, update, or delete a maintenance or upgrade task. This action performs a CRUD operation on the database through the API.

## Non-Functional Requirements

- **Usability:** the app functionality is imperative to ensure it works at every level. It needs to load quickly (15 seconds or less), which will be done through choosing an appropriate cloud platform (AWS, Azure, Vercel, etc.). Once a platform is chosen and the MVP achieved, we can test by accessing the app through multiple browsers.

- **Testability:** the app will have a minimum test-coverage of 80%. This will be achieved by performing basic, manual, functionality testing on each new function as it is written. In addition, the app will be covered by automated unit tests throughout the project.

