# Welcome to Yasser's pokedex

|Home|Pokedex|Pokemon Detail|
|---|---|---|
|![photo_2023-01-30_10-37-48](https://user-images.githubusercontent.com/9702671/215538924-17d3cf91-9c21-43ad-9961-7851da91702a.jpg)|![photo_2023-01-30_10-37-55](https://user-images.githubusercontent.com/9702671/215539255-da2e1e12-41ee-417f-9460-6bf00d24337b.jpg)|![photo_2023-01-30_10-38-06](https://user-images.githubusercontent.com/9702671/215539302-9497adc1-dc93-4ff2-9ddf-a22de9d0194f.jpg)|



## How to get started?
### Requirements
- Android Studio
- Xcode (optional)
- Movile device (ios/android, optional)
- Android Virtual Device

> You are able to have runnig an android virtual device on your local
---


**Clone the app**

`$ git clone git@github.com:yasskate/pokedex.git && cd pokedex/`

**Install expo globally (optional)**

`$ npm i expo -g`

**Install dependencies**

`$ yarn install`


**Starting the server**

`$ yarn start`
> Download expo app and scan the QR code

**Starting android device**

`$ yarn run android`

**Starting ios simulator (mac)**

`$ yarn run ios`


---

## Folder Structure
|Folder|File|Description|
|---|---|---|
|/assets| ... | Contain the image files for splash screen and launch app icon |
|src/components| ... | Reusable components to use through the app |
|src/hooks| ... | Hook functions |
|src/navigation| ... | Navigation stacks and tab bar navigation files |
|src/screens| ... | The screens that the user can navigate through |
|src/store| ... | Context and reducer declarations which manage the pokedex global state |
|src/utils| ... | Any useful function, method, constant that we can use through the app |
|| App.js | Main file |
|| app.json | [Expo configuration](https://docs.expo.dev/workflow/configuration/) file |
|| README.md | This file |


```bash
.
|__./expo
|__/assets
|__/src
|      |__components/
|      |__hooks/
|      |__navigation/
|      |           |__stacks/
|      |__screens/
|      |__store/
|      |       |__contexts/
|      |       |__reducers/
|      |__utils/
|__App.js
|__app.json
|__README.md
```
---

# Stack
- Node >v16.10
- Yarn
- React Native powered by Expo
