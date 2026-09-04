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

The published student calendar CSV is configured as the default live source. `VITE_NAVIGATOR_CSV_URL` can override it when building. The expected column order is Week, Day, Date, CED Topic, Topic Title / I Can, Class, Campbell, BIOZONE, HOME After Class, AP Target, and Teacher Note.

For GitHub Pages, add the URL as a repository variable under **Settings → Secrets and variables → Actions → Variables**. The included workflow deploys the site whenever `main` is updated.
