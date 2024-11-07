
# EcoWing: Urban Mobility Redefined

EcoWing is an innovative urban air mobility app designed to streamline travel within Hong Kong and the Greater Bay Area through VTOL (Vertical Take-Off and Landing) eVTOL technology. Developed for the Cathay Hackathon, EcoWing embodies sustainable, efficient, and accessible urban transit, integrating an engaging customer experience with Cathay’s loyalty program to attract and retain eco-conscious, brand-loyal travelers.

## Project Overview

EcoWing offers a revolutionary, eco-friendly transport alternative to Hong Kong and Greater Bay Area’s congested traffic. This app aims to minimize travel time, enhance customer engagement, and foster a community of environmentally conscious users. With real-time booking, vertiport integration, and AR-enhanced navigation, EcoWing redefines the urban commute experience.

Our mission: "To give people back hours, not just minutes."
## Features


Core Functionality

- Scheduled eVTOL Rides: Book rides at set intervals every 15 minutes for a streamlined, predictable travel schedule.
- Duty-Free Shopping: Access an integrated duty-free shopping menu, allowing users to purchase items before or during their journey.
- Real-Time Ride Booking: On-demand eVTOL transport options for quick and efficient urban travel.
- Vehicle Selection: Choose from vehicle types (e.g., Comfort, Black) for a tailored ride experience.
- Booking Confirmation & Driver Contact: View booking details in a confirmation modal and connect with the driver via chat or call buttons.


Loyalty and Rewards

- Promotions and Discounts: 15% promotion for first-time riders.
Cathay Loyalty Integration: Earn Asia Miles and rewards for each ride, encouraging repeat usage.
- Eco-Conscious Rewards: Incentives for eco-friendly routes and carbon-conscious choices.

In-Flight and Post-Booking Features

- AR-Enhanced Navigation: Real-time cultural insights as users navigate Hong Kong's landmarks.
- Concierge and Recommendations: AI-powered suggestions for nearby attractions, restaurants, and personalized routes based on preferences.
- In-App Purchase Options: Seamless purchases for in-flight snacks, souvenirs, and more through the duty-free menu.


Advanced Features

- Map View: Visualize pickup and drop-off points, track ride status, and view routes on an interactive map.
- Personalized Suggestions: AI-driven recommendations for popular routes, hotels, and other attractions.
- Green Tier Incentives: A dedicated tier for sustainable choices, unlocking exclusive discounts and features.


## Tech Stack

**Frontend**

- React Native: Cross-platform mobile app framework for iOS and Android.
- Expo: Toolchain for developing React Native applications, simplifying configuration and deployment.
 - TypeScript: Superset of JavaScript, adding static typing and improving code reliability.

**Backend**

AWS Amplify:

- Authentication: Manages user sign-up, sign-in, and secure session management with Cognito. This service verifies email and phone numbers, supports multi-factor authentication (MFA), and handles password resets.
- API Gateway & Lambda Functions: For handling custom backend logic, including user verification, driver-ride matching, and loyalty point management.
- Storage and Access Control: Secure data storage and access management to ensure that only authenticated users access their information.

Firebase Firestore:

- Real-Time Messaging: Stores and manages chat messages between users and drivers in real-time, enabling quick and reliable communication.
- Driver and User Data: Stores driver and passenger profiles, ride history, and associated details.
- Push Notifications (with Firebase Cloud Messaging): Notifies users of booking updates, ride status changes, and other timely alerts.

**Database**

Firebase Firestore:

- User and Driver Data: Stores user profile data, loyalty rewards, ride history, and chat interactions.
- Real-Time Data: Tracks ride progress, location updates, and messaging in real-time.
 - Secure Access Rules: Defines access control to protect user data, ensuring data privacy and integrity.

**Maps and Navigation**

react-native-maps with Google Maps API:

- Map and Location Services: Provides maps, location selection, and real-time tracking of routes and driver locations.
- AR Navigation: Optional integration with Google ARCore for augmented reality navigation features.
- Interactive Route Planning: Displays routes between pickup and drop-off points, live traffic updates, and vertiport options.

**Communication**

In-App Chat and Call:

- Real-Time Chat (Firebase Firestore): For secure, fast communication between the driver and user. Stores messages in Firestore and provides real-time updates.
- VoIP Integration (e.g., Twilio): For in-app calling functionality, allowing users to call drivers directly if additional communication is required.

**Verification and Security**

Authentication and OTP Verification (via AWS Amplify):

- AWS Cognito: Manages user authentication, ensuring secure sign-up, login, and password resets.
- OTP for Phone Number Verification: Uses AWS Cognito’s MFA capabilities for OTP-based verification for added security.

**Payment Gateway**

Stripe API Integration:

- Real-Time Payment Processing: Facilitates in-app payments for duty-free purchases and ride payments, offering a seamless checkout experience.
- Secure Transaction Management: Handles payments with tokenization, ensuring all transactions are securely processed and user payment data is protected.
- Payment History and Receipts: Records transaction history and provides digital receipts to users.

**Additional Integrations**

Cathay Loyalty Program API :

- Rewards and Loyalty Points Management: Tracks and updates Asia Miles or other loyalty rewards for each ride and duty-free purchase.
- API Integration for Rewards Redemption: Allows users to redeem rewards or view loyalty points within the app.

## Usage

1. Login or Sign-Up: Access the app with either a new or existing Cathay account.
2. Select Pickup and Drop-off Locations: Pick a starting point and destination using the drop-down menus with Hong Kong’s major vertiports.
3. Vehicle Selection: Choose the preferred ride type with price transparency.
4. Duty-Free Shopping: Access the duty-free menu at any time to purchase items before or during your journey.
5. Booking Confirmation: A confirmation modal shows booking details, with options to chat or call the driver.
6. Earn Rewards: Get Asia Miles or discounts for each ride and track them in the rewards section.
## Future Enhancements

- Expanded Vertiport Network: Scale beyond Hong Kong to include Greater Bay Area locations.
- Multi-Language Support: Add language options to cater to a global audience.
- Real-Time Duty-Free Inventory Updates: Enhance shopping experience with real-time inventory and order tracking.
- Dynamic Pricing and Loyalty Tiers: Rewards based on user engagement, sustainability, and loyalty.
## Authors

@Sudha Shree Mohanarangam
@Surya Narayan
@Arjun Arora
@Arpit Dua
@Nidhish Sachdeva

