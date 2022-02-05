class AndroidInfo {
    static deviceName() {
        return 'emulator-5556'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '11.0'; // pass the platform version
    }

    static appName() {
        return 'app-release (6).apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;
