# AP Biology Student Hub

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Live Navigator data

The site includes a student-safe snapshot of the supplied Navigator sheet. The `Teacher Note` column is intentionally excluded.

To update it automatically from Google Sheets, publish the student-facing calendar tab as CSV and set `VITE_NAVIGATOR_CSV_URL` when building. The expected column order is Week, Day, Date, CED Topic, Topic Title / I Can, Class, Campbell, BIOZONE, HOME After Class, and AP Target.
