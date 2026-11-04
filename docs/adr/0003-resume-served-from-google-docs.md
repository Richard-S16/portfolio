# `/resume.pdf` redirects to the Google Docs PDF export

Richard maintains the Resume in Google Docs, so `/resume.pdf` is a temporary (307) redirect in `next.config.ts` to the Doc's `export?format=pdf` URL instead of a PDF committed to `public/`. Every edit he makes is live with no redeploy, and Google already names the file `richard-schmidt-resume.pdf`. The cost is a 1–2 s export on each download and a runtime dependency on Google; a cached proxy route was rejected because it could serve a resume up to a day out of date. The Doc must stay shared as "anyone with the link can view".
