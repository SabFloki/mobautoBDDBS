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
        app: 'bs://52c1fde59b9a46d1882d6c2072d7fd7b01ac09f6',
        'browserstack.debug': true,
        'browserstack.appium_version': '1.21.0',
        realMobile: true,
    }
];

config.cucumberOpts.tagExpression = '@androidBS'; // pass tag to run tests specific to android

exports.config = config;