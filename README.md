#installation
- yarn

#IOS STEPS
- cd ios/
- pod install
- npx react-native bundle --entry-file index.tsx --platform ios --dev false --bundle-output ios/Boon/main.jsbundle --assets-dest ios/Boon
- release or debug build

create react-native-pjsip.podspec file in pjsip module ios/ path and include this code

require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
s.name         = package['name']
s.version      = package['version']
s.summary      = package['description']
s.license      = package['license']

s.authors      = package['author']
s.homepage     = package['homepage']
s.platform     = :ios, "10.0"

s.source_files  = "ios/RTCPjSip/**/*.{h,m}"

s.vendored_frameworks='ios/VialerPJSIP.framework'
s.dependency 'React'
end

#ANDROID
- cd android/
- gradlew clean
- bundle app - react-native bundle --platform android --dev false --entry-file index.tsx --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
- debug on phone: yarn android
- build release apk: cd android/, gradlew app:assembleDebug
