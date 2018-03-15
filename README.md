#Twitter Bot

A bot that extracts the following from people’s Twitter bio (on public/open accounts), into a Google spreadsheet:

Twitter profile name
Number of followers
Target accounts using either of these criteria:

Based on hashtags used.
The bot maintains a session and continously listens to the predefined hashtag

## Getting Started

1. You need to have Node.js installed. You can download and install Node.js [here](http://nodejs.org/)

2. Create a `.env` file in the root directory. The `.env` file will look something like the following:

  ```none
    TWITTER_CONSUMER_KEY = <Twitter Consumer Key>
    TWITTER_CONSUMER_SECRET = <Twitter Consumer Secret>
    TWITTER_ACCESS_TOKEN = <Twitter Access Token>
    TWITTER_ACCESS_TOKEN_SECRET = <Twitter Access Token Secret>
    GOOGLE_CLIENT_ID = <Google Client Id>
    GOOGLE_CLIENT_SECRET = <Google Client Secret>
    GOOGLE_REDIRECT_URL = <Google Redirect Url>
    GOOGLE_SPREADSHEET_ID = <Google Spreadsheet Id>
    MAX_COUNT = <Maximum number of tweets to fetch>
  ```

3. Install the dependencies your application needs:

  ```none
  npm install
  ```
4. Start the application locally:

  ```none
  npm start
  ```

5. Point your browser to [http://localhost:3000](http://localhost:3000).

![screen shot](https://user-images.githubusercontent.com/8668661/33088863-330b4250-ceef-11e7-9e9c-b4fd9ca299d8.gif)
