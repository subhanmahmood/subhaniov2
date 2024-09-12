# Links Management Documentation

This document outlines the user flow for managing links and the admin interactions in the link management process.

## Public User Flow

1. User goes to `/links`
   - User sees a list of categories and links
   - Links are clickable and open in a new tab
   - Clicking a link increments its click count

## Admin Flow

1. Admin logs in and accesses `/admin/links`
   - Admin can view all links grouped by categories
   - Admin can add, edit, or delete links
   - Admin can reorder links within categories

2. Adding a new link
   - Admin clicks "Add Link" button
   - Admin is redirected to `/admin/links/add`
   - Admin fills out the link form
   ```typescript:src/components/link/link-form.tsx
   startLine: 31
   endLine: 132
   ```

3. Editing an existing link
   - Admin clicks the edit icon next to a link
   - Admin is redirected to `/admin/links/edit/[id]`
   - Admin modifies the link details in the form

4. Deleting a link
   - Admin clicks the delete icon next to a link
   - A confirmation dialog appears
   - Upon confirmation, the link is deleted

5. Reordering links
   - Admin goes to the category edit page
   - Admin can drag and drop links to reorder them
   - Admin clicks "Save" to persist the new order
   ```typescript:src/components/categories/edit-category-links-form.tsx
   startLine: 19
   endLine: 72
   ```

## Key Components

- LinkListItem: Displays individual link items
- LinkForm: Handles link creation and editing
- EditCategoryLinks: Manages link reordering within categories

## Server Actions

- createLinkAction: Creates a new link
- updateLinkAction: Updates an existing link
- deleteLinkAction: Deletes a link
- addLinkClickAction: Increments the click count for a link
- updateLinksAction: Updates the order of links within a category
