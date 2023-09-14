---
layout: post
title: Message Counter (Android)
category: Learning
comments: true 
featured: /public/images/2023/09/15/message-counter-banner.png
featured_alt_text: An screenshot of webpage showing concentric arcs and circles on them.
featured_hero: true
hero_darken: true
summary: A quick look into how we can count the number of messages (sms/text) on an Android device. As well as an Android app that I published to the Play Store.
tags: [android, app]
---
Have you heard of Unicorn, Valkyrie, Wyvern or Xingtian? Surely you would have come across the **Yeti**. These are all code names for various development versions of an Open Source Android App, simply called **Message Counter**.

## Introduction
**Message Counter** was one of the first Android apps that I made on my own and published to the Play Store. It's an app that basically counts the number of sent messages (sms/text) on the device. As well as a sorted count of messages received from contacts.

![message counter version history](/public/images/2023/09/15/version-history.png)

## History
Over the years it was iterated upon to add more features like set custom cycles, notifications when the limit is crossed and even widgets. Even dynamically update the counts including if the app was running and a message is received. There is a feature to ignore certain numbers from contributing the limit like a free number like the service provider and such.

Lot of features were suggested by the users in app reviews or directly via support emails. Some people even reached out for support and quirky issues on their devices. The Android ecosystem is so vast that there are thousands of hardware and software combinations. There was one issue reported which only happens on certain **LG** devices, where the app crashes on the press of back button. The logs were available on Google Play and a code fix was made.

## Android SMS API
Development of this app was a foray into the `SMS API` of Android, and how it is structured and finally how we can get data from it. It also requires an interface with the `Contacts API` to cross link the contact details and the message.

It is very trivial to retrieve the sms counts as shown in the below snippet shows. For version 4 of the app, it was completly rewritten in Kotlin making use of the latest architectural and design patterns available at that time.

```kotlin
import android.net.Uri
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val sentSmsCount = countSentSms()
        Log.d("Sent SMS Count", sentSmsCount.toString())
    }

    private fun countSentSms(): Int {
        var sentSmsCount = 0
        val uri = Uri.parse("content://sms/sent") // URI for sent messages

        // Query the SMS content provider to get sent messages
        val cursor = contentResolver.query(uri, null, null, null, null)
        if (cursor != null) {
            sentSmsCount = cursor.count
            cursor.close()
        }
        return sentSmsCount
    }
}
```

Note that we need to request the necessary permissions in the config file to access SMS messages, specifically the **READ_SMS** permission. 
```xml
<uses-permission android:name="android.permission.READ_SMS"/>
``` 

![message counter widgets](/public/images/2023/09/15/widgets.png)

For an app with surprisingly simple concept and functionality, it has been downloaded more than **100,000 times**, showing it as useful for many people without any marketing or such.


## Google Play Policy Update
Since there was a [Google Play Policy Update](https://support.google.com/googleplay/android-developer/answer/10208820?hl=en) that restricts the usage of apps with the **READ_SMS** permission, the app was no longer compliant to function as such and was unpublished. Although I requested Google Play to reinstate the app since **READ_SMS** is a core functionality of the app, it was rejected.

The app functions as it was, but cannot be uploaded to Google Play. As a backup it is available on other Android App Stores, but not necessarily updated. Power users can build the app from the source code and install directly on their device.

## Closing thoughts
Probably this is fine when it comes to privacy as it is very easy to inspect the contents of the messages and infer data for malicious purposes. Google taking the Apple route of protecting its users, but had came after many years since the release of the platform.

### References
1. [Message Counter App Source Code](https://github.com/midhunhk/message-counter)
2. [Google Play Policy Update](https://support.google.com/googleplay/android-developer/answer/10208820?hl=en)