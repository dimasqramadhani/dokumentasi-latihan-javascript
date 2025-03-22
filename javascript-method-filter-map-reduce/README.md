# **Filter, Map & Reduce in JavaScript**

This project demonstrates the use of **filter**, **map**, and **reduce** in JavaScript to process video data. The script selects specific videos, extracts durations, converts them to seconds, and calculates the total duration.

## **📌 Features**
- Selects videos containing **"JAVASCRIPT LANJUTAN"** in the title.
- Extracts durations from the `data-duration` attribute.
- Converts `MM:SS` format to total seconds.
- Uses `.reduce()` to sum up the total duration.
- Formats the duration into **HH:MM:SS** format.

## **📌 Why This Works?**
```javascript
const hours = Math.floor(totalTimes / 3600);
const minutes = Math.floor((totalTimes % 3600) / 60);
const seconds = totalTimes % 60;
```
- totalTimes / 3600 gives the total hours.
- totalTimes % 3600 / 60 extracts remaining minutes.
- totalTimes % 60 gets the remaining seconds.

## **📌 How to Use**
1. Open index.html in your browser.
2. The script will display the total number of "JAVASCRIPT LANJUTAN" videos.
3. It will also show the total duration of the selected videos.
4. Open the browser console to see debugging information.

## **🎯 Summary**
This project showcases the practical use of higher-order functions in JavaScript for efficient data manipulation. 🚀

Happy coding! 🎉
