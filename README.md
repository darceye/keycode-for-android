# keycode-for-android
Return keycode for android. Could be useful for appium android test.
Data from [Android KeyEvent](https://developer.android.com/reference/android/view/KeyEvent)
As you know, Android keycodes are different from PCs. For example, "Enter" keycode is 13 on PC but 66 on Android.
This module gives your the Android's.

## Usage

```js
const keycode = require('keycode-for-android')

// You can use a keycode name which is exactly the same as Google document.
keycode('KEYCODE_ENTER') // Return 66

// You can use a short name, with out "KEYCODE_"
keycode('ENTER') // Return 66

// Lowercase is OK, too.
keycode('Enter') // Return 66
keycode('Enter') // Return 66

// From keycode to its name.
keycode(66) // Return 'KEYCODE_ENTER'
keycode('66') // Return 'KEYCODE_ENTER'
```
Fork me on [github](https://github.com/darceye/keycode-for-android).