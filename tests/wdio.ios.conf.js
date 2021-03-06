exports.config = {
    host: '127.0.0.1',
    // 4723 is the default port for Appium
    port: 4723,
  
    // How much detail should be logged. The options are:
    // 'silent', 'verbose', 'command', 'data', 'result', 'error'
    logLevel: 'error',
  
    // This defines which kind of device we want to test on, as well as how it should be
    // configured.
    waitforTimeout: 60000,
    capabilities: [{

      browserName: '',
      appiumVersion: '1.8.1',


      automationName: 'Appium',
      // 'Android' or 'iOS'
      platformName: 'iOS',
  
      // The version of the Android or iOS system
      platformVersion: '11.4',
  
      // For Android, Appium uses the first device it finds using "adb devices". So, this
      // string simply needs to be non-empty.
      // For iOS, this must exactly match the device name as seen in Xcode.
      deviceName: 'iPhone 8',
  
      // Where to find the .apk or .ipa file to install on the device. The exact location
      // of the file may change depending on your Cordova version.
      //app: '/Users/ivanprotsyk/job/appium-test/AppiumTest/platforms/android/app/build/outputs/apk/debug/app-debug.apk',
      app: '/Users/ivanprotsyk/job/appium-test/AppiumTest/platforms/ios/build/emulator/HelloCordova.app',
  
      // By default, Appium runs tests in the native context. By setting autoWebview to
      // true, it runs our tests in the Cordova context.
      autoWebview: true,
  
      // When set to true, it will not show permission dialogs, but instead grant all
      // permissions automatically.
      autoGrantPermissions: true
    }],
  
    // Where the files we are testing can be found.
    specs: ['./tests/specs/**/*.js'],
  
    // Use the Appium plugin for Webdriver. Without this, we would need to run appium
    // separately on the command line.
    services: ['appium'],

    appium: {
      waitStartTime: 10000,
      command: 'appium',
      args: {
          address: '127.0.0.1',
          port: 4723,
          commandTimeout: '7200',
          sessionOverride: true,
          debugLogSpacing: true
      }
  },
  
    // The reporter is what formats your test results on the command line. 'spec' lists
    // the names of the tests with a tick or X next to them. See
    // https://www.npmjs.com/search?q=wdio-reporter for a full list of reporters.
    reporters: ['spec'],
  
    // wdio will run your tests using the framework below. You can choose from several,
    // much like the reporters. The full list is at https://www.npmjs.com/search?q=wdio-framework
    framework: 'jasmine',
  
    // By default, Jasmine times out within 10 seconds. This is not really enough time
    // for us as it takes a while for Appium to get set up.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 90000
    }
  }
