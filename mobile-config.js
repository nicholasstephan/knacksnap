App.info({
  id: 'com.knacksnap.app',
  name: 'Knack Snap',
  description: 'Snap it!',
  author: 'Knack Design',
  email: 'info@knackdesign.com',
  website: 'http://www.knacksnap.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  // 'iphone': 'icons/icon-60.png',
  // 'iphone_2x': 'icons/icon-60@2x.png',
  // ... more screen sizes and platforms ...
});

App.launchScreens({
  // 'iphone': 'splash/Default~iphone.png',
  // 'iphone_2x': 'splash/Default@2x~iphone.png',
  // ... more screen sizes and platforms ...
});

App.setPreference('Fullscreen', true);
App.setPreference('UIViewControllerBasedStatusBarAppearance', false);

