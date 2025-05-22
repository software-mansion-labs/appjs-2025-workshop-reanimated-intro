# The Reanimated Workshop – App.js Conference 2025

## Hosted by

- Catalin Miron ([@mironcatalin](https://x.com/mironcatalin))
- Kacper Kapuściak ([@kacperkapusciak](https://x.com/kacperkapusciak))

## Setup

In order to make setup more seamless we have prepared a so-called Expo's development client builds that include all the native code for all the dependencies that are used as a part of the workshop, running only inside the simulators.

You should be able to use iOS simulator, Android emulator, or any modern Android or iOS phone to perform the exercises, however, we recommend that you stick to one choice to avoid additional setup steps you may need to do in the future.
If you choose to work with an emulator (either iOS or Android) make sure that you have that emulator installed and configured as setting it up is outside of this setup scope.

1. Clone the repo:

```bash
git clone git@github.com:software-mansion-labs/appjs-2025-workshop-reanimated-intro.git && cd appjs-2025-workshop-reanimated-intro
```

2. Install project dependencies (run the below command from the project main directory):

```bash
bun install
```

## Preparing device or simulator

Depending on what device or simulator you choose to use, you'll need to install custom made Development Client application in your environment.
Follow one of the sections below for detailed instructions.

### For iOS simulator

1. Download Development Client build [from this link](https://expo.dev/artifacts/eas/x8X24oYLYFhJcpRJ7TYuvW.tar.gz)
1. Extract `AppjsWorkshop2025.app` file from the downloaded archive
1. Launch your iOS simulator
1. Drag and drop the `.app` file onto the simulator

### For Android emulator

1. Download Development Client build [from this link](https://expo.dev/artifacts/eas/befVmhVddsdPmCVwe2meBv.apk)
1. Launch Android emulator on your computer
1. Drag and drop the downloaded `.apk` file onto emulator

### For physical iOS/Android device

1. Install dependencies `bun install`
1. Create development builds for iOS and Android:
   `bun expo prebuild`

#### For Android devices

1. Connect your Android device to your computer via USB
1. `bun android -d` and select the physical device from the list

#### For iOS devices

1. Connect your iOS device to your computer via USB
1. Open XCode `xed ios`
1. Select your device from the list of simulators
1. Go to `AppjsWorkshop2025` -> `Signing & Capabilities` and select your team and create the certificate
1. Build and run the app on your device by clicking the play button in XCode or by pressing `Cmd + R`
1. Once this project it is signed, you can also run `bun ios -d` from the terminal.

Check the following guide in case you encounter any issues with signing the app: [Setup XCode signinin](https://github.com/expo/fyi/blob/main/setup-xcode-signing.md)

> [!TIP]
> To set up a local development environment for running your project on Android and iOS, follow [this guide](https://docs.expo.dev/get-started/set-up-your-environment/).

## Running the app

After completing _Preparing device_ installation step, you now should be able to run and launch the app.
Follow the below steps from the terminal:

1. Launch the app with Expo CLI:

```bash
bun start
```

> [!TIP]
> The above step will print instructions on how to launch the app on phone or simulator. For iOS simulator you'll need to press `"i"`, for Android press `"a"`, and if you'd like to run the app on a physical device you'll need to scan the QR code that will be displayed on the command line output.

## Tools and libraries

During the workshop we will be using primarily:

- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Next step

**Go to: [CSSAnimations](./src/lessons/1_CSSAnimations/)**
