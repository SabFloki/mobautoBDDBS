const { config } = require('./wdio.conf');

config.capabilities = [
    {
        'browserstack.user': 'sabareeshuthayab1',
        'browserstack.key': 'xQCVbb4rR5s4EwabYaeK',
        platformName: 'Android',
        build: 'NGA Android',
        os_version:'11.0',
        name: 'Sab-Android-IB-Auto',
        deviceName: 'Samsung Galaxy S21',
        app: 'bs://fd9dc7690f1a4f4a2929b56306a4f729bfb6face',
        'browserstack.debug': true,
        'browserstack.appium_version': '1.21.0',
        realMobile: true,
    }
];

config.cucumberOpts.tagExpression = '@androidBS'; // pass tag to run tests specific to android

exports.config = config;