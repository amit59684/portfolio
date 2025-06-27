# 📱 Android App Guide - Amit Adhikary Portfolio

Your React portfolio has been successfully converted to an Android app using Capacitor! 

## 🚀 Quick Start

### Option 1: Use the Build Script (Recommended)
```bash
# Run the automated build script
build-android.bat
```

### Option 2: Manual Commands
```bash
# Build React app
npm run build

# Sync with Android
npm run android:sync

# Open in Android Studio
npm run android:open
```

## 📋 Prerequisites

You'll need to install:

1. **Android Studio** - [Download here](https://developer.android.com/studio)
2. **Java Development Kit (JDK) 17+** - [Download here](https://adoptium.net/)

## 🛠️ Building Your App

### Development Build (Testing)
1. Run `npm run android:build` or `build-android.bat`
2. Android Studio will open
3. Wait for Gradle sync to complete
4. Click "Run" button or press Shift+F10 to test on emulator/device

### Production APK
1. In Android Studio: **Build** → **Build Bundle(s)/APK(s)** → **Build APK(s)**
2. APK will be generated in: `android/app/build/outputs/apk/debug/`

### Signed Release APK
1. **Build** → **Generate Signed Bundle/APK**
2. Choose **APK** → **Next**
3. Create a new keystore or use existing
4. Fill in details and build

## 🎨 App Features

Your Android app includes:
- ✅ Native Android launcher icon
- ✅ Dark theme integration
- ✅ Splash screen
- ✅ Hardware acceleration
- ✅ Proper status bar styling
- ✅ Keyboard handling
- ✅ Haptic feedback support
- ✅ Network connectivity detection

## 📱 App Information

- **App Name**: Amit Adhikary
- **Package ID**: com.amitadhikary.portfolio
- **Version**: 0.1.0

## 🔧 Making Changes

After any changes to your React code:

1. Build React app: `npm run build`
2. Sync changes: `npm run android:sync`
3. Test in Android Studio

## 📦 Distribution

### Google Play Store
1. Create a signed release APK/AAB
2. Create a Google Play Developer account
3. Upload your app bundle
4. Fill in store listing details

### Direct APK Distribution
- Share the APK file directly
- Users need to enable "Install from unknown sources"

## 🐛 Troubleshooting

### Common Issues:

**Gradle Build Failed**
- Ensure Java 17+ is installed
- Check Android Studio SDK requirements

**App Won't Load**
- Run `npm run build` before syncing
- Check network permissions in manifest

**Icons Not Showing**
- Run `npm run android:sync` after icon changes
- Clear app data and reinstall

## 🚀 Next Steps

1. **Test thoroughly** on different Android devices/emulators
2. **Optimize for mobile** - ensure touch targets are appropriate
3. **Add native features** like push notifications if needed
4. **Publish to Google Play Store** for wider distribution

## 📞 Need Help?

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Studio Guide](https://developer.android.com/studio/intro)
- [Google Play Console](https://play.google.com/console)

---

🎉 **Congratulations!** Your portfolio is now a native Android app! 