YouTube and Music Clone with Downloader Website

This is a website that aims to replicate the functionality of YouTube and Spotify music streaming services, while also allowing users to download videos and audio files directly from the website.

Features:

1. Search for videos and music using keywords
2. Browse and watch videos or listen to music
3. Download videos and music files in various formats
4. Share videos and music with others through social media

Technologies Used:

This website is built using a variety of web development technologies, including:

>> HTML, CSS, and JavaScript for the frontend
>> Node.js and Express.js for the backend
>> YouTube API for video search and playback

Installation and Usage:

To run the website locally, follow these steps:

	1. Clone the repository to your local machine

	2. Update your Youtube Api key in yt.js file
		To Get YouTube Api key:

			>> Create a Google account if you don't already have one.
			>> Go to the Google Developers Console at https://console.developers.google.com/.
			>> Create a new project by clicking the "Select a project" dropdown in the top navigation bar and then clicking the "New 				Project" button.
			>> Give your project a name, select the billing account you want to use (if you have one), and click the "Create" button.
			>> In the left navigation menu, click "APIs & Services" and then click "Dashboard."
			>> Click the "+ ENABLE APIS AND SERVICES" button.
			>> Search for "YouTube Data API v3" and click on it.
			>> Click the "Enable" button.
			>> In the left navigation menu, click "Credentials."
			>> Click the "Create Credentials" button and select "API Key."
			>> Copy the API Key that is generated.

	3. Update your CLIENT_ID and CLIENT_SECRET in spotify.js file
		To get that:

			>> Create a Spotify developer account if you don't already have one. You can create one at     			https://developer.spotify.com/.		
			>> Once you have signed up, log in to the Spotify Developer Dashboard at https://developer.spotify.com/dashboard.
			>> Click on "Create an App" button and fill out the required information, such as App name, Description, and App website.
			>> Once the app is created, you will be taken to the app's dashboard.
			>> Scroll down to "Client ID" and "Client Secret" section and click on "Show Client Secret" button.
			>> Copy and securely store the Client ID and Client Secret.

	4. You are good to go..just start your live server
