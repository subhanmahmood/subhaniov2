# Setup Links Plan

## Goals
- Display setup links
- Should be fast and easily manageable

## Options

### Store links in db
Pros:
- Ability to track link click counts
- Easier to style and manage
- Easily editable on the fly through admin interface

Cons:
- Requires creating an item for each link
- Won't flow as natural text

### Store links in markdown file
Pros:
- Flows as natural text
- Simple to edit directly in the file

Cons:
- Requires a script to update the markdown file
- Limited editing options when away from computer (only via GitHub app)
- Less dynamic management compared to database storage

## Decision
Based on the pros and cons, I recommend storing the links in a database. This approach offers more flexibility, easier management, and the ability to track link usage. While it may not flow as natural text, the benefits of dynamic editing, styling options, and click tracking outweigh this drawback. Additionally, storing links in a database aligns better with a dynamic web application architecture, allowing for easier future expansions such as user-specific links or analytics.
