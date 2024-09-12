# Collaboration Flow Documentation

This document outlines the user flow for prospect clients and admin interactions in the collaboration process.

## Prospect Client Flow

1. User goes to `/collab`
   
   a. If user enters password:
      - User is redirected to `/collab/quote`
      - User fills out form
   
   b. If user clicks "Get Started":
      - User is redirected to `/collab/get-started`
      - User fills out form
      - Lead is created in database
      - User receives email with password and summary
      - User proceeds to step 1.a

## Admin Flow

1. Leads are viewed in `/admin/leads`
2. Leads have a status field with the following options:
   - `LEAD`
   - `QUOTE_CREATED`

## Additional Notes

- The password entry in step 1.a serves as a gating mechanism for existing clients or those with a provided password.
- The "Get Started" flow in step 1.b is designed for new prospects to capture initial information.
- The email sent after lead creation should include clear instructions on how to proceed with the collaboration process.
- Admin can track the progress of leads through the status field, allowing for better management of the sales pipeline.

## Related Components

- `CollabForm`: Handles password entry (`/collab`)
- `LeadCollectionForm`: Captures prospect information (`/collab/get-started`)
- `CollabFormContainer`: Manages the quote creation process (`/collab/quote`)

## Key Actions

- `createLeadAction`: Creates a new lead in the database
- `checkCollabPassword`: Validates the entered password

