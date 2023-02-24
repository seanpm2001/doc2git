import Typography from '@mui/material/Typography';
import Link from 'next/link';

import styles from '@/styles/terms.module.css';

export default function Privacy() {
	return (
		<div className={styles.terms}>
			<Typography>
				<strong>TL;DR</strong>: When you process a doc using doc2git, the only
				communication is between your browser and Google. No content or
				information relating to that doc is stored or shared. The resulting zip
				file only exists in your browser until you download it, and it
				isn&apos;t uploaded anywhere.
			</Typography>
			<Typography variant="h5">Google user data</Typography>
			<Typography>
				When you authenticate with Google, doc2git displays your name, email
				address and profile picture to allow you to identify which account
				you&apos;ve signed in with. This data is not stored or shared.
			</Typography>
			<Typography>
				When you enter a Google Doc URL, doc2git requests read-only access to
				Google Drive.
				<ul>
					<li>
						This access isn&apos;t persisted. I.e. The access token isn&apos;t
						stored anywhere except your browser, or transmitted elsewhere.
					</li>
					<li>
						doc2git uses this only to access the Google Doc you requested.
					</li>
					<li>
						doc2git uses the Google Drive API to fetches the list of revisions
						to this Doc, and creates a plain text export of each revision. This
						export is committed to the Git repo (in your browser) with the
						corresponding author (name and email address) and time of revision.
					</li>
					<li>
						The Git repo is made available to you as a download, but isn&apos;t
						stored anywhere or shared.
					</li>
					<li>
						Once you close the browser tab running doc2git, all access and
						Google user data is gone.
					</li>
				</ul>
			</Typography>
			<Typography variant="h5">Tracking / analytics</Typography>
			<Typography>
				In order to protect your privacy, doc2git does not use any web
				analytics.
			</Typography>
		</div>
	);
}
