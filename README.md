## Back-end Developer Test

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

3. Install the dependencies you application need:

  ```none
  npm install
  ```
4. Start the application locally:

  ```none
  npm start
  ```

5. Point your browser to [http://localhost:3000](http://localhost:3000).
### Devcenter Backend Developer Test I

The purpose of this test is not only to quickly gauge an applicant's abilities with writing codes, but also their approach to development.

Applicants may use whatever language they want to achieve the outcome.

## Task

Build a bot that extracts the following from people’s Twitter bio (on public/open accounts), into a Google spreadsheet:

* Twitter profile name
* Number of followers

Target accounts using either of these criteria:
* Based on hashtags used
* Based on number of followers; Between 1,000 - 50,000

The bot is suppose to maintain a session and continously listen to the predefined hashtag

## How to complete the task

1. Fork this repository into your own public repo.

2. Complete the project and commit your work. Make a screencast of how it works with the googlespread sheet and progam side-by-side

3. Send the URL of your own repository and the screencast to @kolawole.balogun on the Slack here bit.ly/dcs-slack.

## Show your working

If you choose to use build tools to compile your CSS and Javascript (such as SASS of Coffescript) please include the original files as well. You may update this README file outlining the details of what tools you have used.

## Clean code

This fictitious project is part of a larger plan to reuse templates for multiple properties. When authoring your CSS ensure that it is easy for another developer to find and change things such as fonts and colours.


## Good luck!

We look forward to seeing what you can do. Remember, although it is a test, there are no specific right or wrong answers that we are looking for - just do the job as best you can. Any questions - create an issue in the panel on the right (requires a Github account).


## Demo
![screen shot](https://user-images.githubusercontent.com/8668661/33088863-330b4250-ceef-11e7-9e9c-b4fd9ca299d8.gif)
