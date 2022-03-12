# APPIUM-Cucumber-BDD-WDIO
<p style="color:blue">This is demo content.</p>

Project to run native and browser for android and ios using cucumber with page object pattern.
Parallel test runs - configured for android apps.

Future Improvements:
To add parallel config for iOS

## Based on

- WebdriverIO v7
- cucumber v7
- Node version 10.16 or higher version
- Appium

## Supports
- Native Android and iOS apps
- Android Chrome browser 
- iOS Safari browser 
- Supports Page Object Model
- Contains sample test scenarios in cucumber
- Supports multiple cucumber html reports
- Run scripts in parallel devices on Browserstack

## Source and steps

- Install dependencies using `npm i` in the terminal.

- Update the deviceName and platFormVersion in `config/android.info.js` and `config/ios.info.js` respectively.

- Execute `npm run ios` to run ios native app

- Execute `npm run iosBrowser` to run ios safari browser

- Execute `npm run android` to run android native app

- Execute `npm run androidBrowser` to run android chrome browser

- Execute `npm run lint` to run eslint
