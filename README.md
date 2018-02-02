GRADIENT SHOWCASE

For this small challenge we would like you to develop the App Gradient Showcase, it will have 3 screens, which will be:

* Login: Required for server authentication using an Instagram account;

* Showcase: List with all the gradients registered in the platform (you could make pre-entries to consume this data). In this screen it will be possible to press a gradient, favor it or unfavorable it (if it is already marked) it will be possible to also log off the application (making a confirmation before);

* Favorites: List with all the favorite gradients, in this screen it will be possible to delete all the favorites and also to deselect some when pressing one of the gradients;

The idea of ​​this test is to perform the challenge using the front end: React, React-Native, ReduxObservable, Redux and any library you believe is important to solve the problem.
~~For the backend you will need: Node.js, MongoDB and Express.js, and any other module you prefer.~~ ( We go backendless for this demo app ¯\_(ツ)_/¯ )


![alt text](http://i.imgur.com/hpHL1FY.jpg)

#  Gradient Showcase Setup
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)
* Demo ANDROID APP available for download [HERE](https://www.dropbox.com/s/yklp88dxavcv75b/GradientShowcase-release.apk?dl=1)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :arrow_forward: How to manage the gradient list
1. go to this [jsoneditoronline](https://jsoneditoronline.org/?id=5f5c494ac495469df612fad1cda415a1) and modify the json file at your wish
2. then save the online file
3. restart the app, and voilà!
Keep in mind that even if the redux store is persisted across app restarts, the favorite list will be completely cleared on logout.

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!
