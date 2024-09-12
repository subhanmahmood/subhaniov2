### 1. Enhance Lead Inbox Page (13 points)

**Description:** Create a detailed view for individual leads and implement navigation from the lead list to this view. This enhancement will include a comprehensive display of lead information, including contact details, interaction history, and associated documents. The new lead detail page will also feature quick action buttons for common tasks such as creating a quote or updating lead status.

**Reason:** To provide a comprehensive overview of each lead and improve lead management efficiency. This detailed view will allow sales representatives to quickly access all relevant information about a lead in one place, reducing the time spent switching between different screens or systems. It will also enable more informed decision-making and personalized communication with potential clients.

**Acceptance Criteria:**
- Given I am on the lead list page
  When I click on a lead
  Then I should be navigated to a detailed view of that lead

- Given I am on the lead detail page
  When I view the page
  Then I should see all relevant lead information

- Given I am on the lead detail page
  When I click a "back to list" button
  Then I should be navigated back to the lead list page

- Given I am on the lead detail page
  When I click a "create quote" button
  Then I should be navigated to a quote builder page

- Given I am on the quote builder page
  When I click a "save draft" button
  Then the current state of the quote should be saved without finalizing it 

**Files to modify:**
- `src/components/admin/lead-list.tsx`
- `src/app/admin/leads/[id]/page.tsx` (new file)
- `src/components/admin/lead-detail.tsx` (new file)