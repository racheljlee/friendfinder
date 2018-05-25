# friendfinder

## Front-End:

`"/"` root route:

![homepage](https://i.gyazo.com/228993ead7de5e35bc3a8367f380a3d9.jpg)

`"/survey"` survey route:
+ new user input form for "name" and "photo url":

![survey page](https://i.gyazo.com/d7824f9d39f18b883420e62b10e94040.png)

+ survey questions 1-10 with radio inputs for user to choose:

![survey page](https://i.gyazo.com/7e3627cf37915561de6b50411b85c5f2.png)

+ submit survey button:

![survey page](https://i.gyazo.com/3cc6caff762e940211b3e4824c846da5.png)

+ clicking "Submit Survey" button pushes new user info to `friendList` array in `friends.js`:
`friends.js`:

![friends.js](https://i.gyazo.com/8f47cf4f51b8f96c5d181b48820c6082.png)

`/api/friends`: shows current friends list in jSON objects:

![friends.js](https://i.gyazo.com/1518f88b05aa1ffeb287659c2d7fdddb.png)

**PROBLEM!** when user hits submit survey button, the user's info and scores should be pushed to the `friends.js` array list, but this doesn't happen. It worked before... (need to fix)

+ Bootstrap modal pops up when the submit button is clicked, showing matching best friend's name and photo:

![best friend modal](https://i.gyazo.com/5613b3f345f3dad24c42b510dbc93cc8.jpg)

**PROBLEM** Modal doesn't show actual best friend match data; currently shows dummy plaeholder data (need to fix)


## Back-End:

+ `server.js`: requires dependencies, sets up Express app, sets up server PORT, sets up Body Parser, links to `htmlRoutes.js` & `apiRoutes.js ` files:

![server.js](https://i.gyazo.com/6a824d09ff3cb32bc60b466e271df600.png)

+ `htmlRoutes.js`: sets up `GET` and `POST` routes for website's URL paths;
links respective html pages to routes so that approptiate content shows up when user is directed to different URL paths:

![htmlRoutes.js](https://i.gyazo.com/f2045f11086e1371b90daca6819626b1.png)

+ `apiRoutes.js`: sets up `GET` and `POST` for `/api/friends` to retrieve API data from `friends.js` as jSON data and then send API data to `friends.js` to update the array list of friends with new user info

![apiRoutes.js](https://i.gyazo.com/d50247275ae92a44b7d1169069eec028.png)

+ use a `forEach()` function to loop through friends array

![apiRoutes.js](https://i.gyazo.com/27ac4cb1dc3b57e49c6d98edc90a33e6.png)