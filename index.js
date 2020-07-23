"use strict";
const colorCodesMap = {};
const users = [
  {
    id: 1,
    firstName: "Jason",
    lastName: "Statham",
    profilePicture:
      "https://i.pinimg.com/originals/24/f5/f8/24f5f8ef9f8af9c7e795ff0ba15f6881.jpg",
    birthday: "26 July 1967",
    isMale: true,
    isDeleted: false,
    isSelected: false,
    contacts: [
      "https://www.instagram.com/jasonstatham/?hl=en",
      "https://twitter.com/realjstatham?lang=en",
      "https://www.facebook.com/JasonStatham/",
      "https://web.telegram.org/jasonstatham/",
    ],
  },
  {
    id: 2,
    firstName: "Dwayne",
    lastName: "Johnson",
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/800px-Dwayne_Johnson_2%2C_2013.jpg",
    birthday: "2 May 1972",
    isMale: true,
    isDeleted: false,
    isSelected: false,
    contacts: [
      "https://www.facebook.com/DwayneJohnson/",
      "https://www.instagram.com/therock/?hl=en",
      "https://twitter.com/TheRock",
    ],
  },
  {
    id: 3,
    firstName: "Emma",
    lastName: "Stone",
    profilePicture:
      "https://upload.wikimedia.orgipedia/commons/thumb/9/9a/Emma_Stone_at_the_39th_Mill_Valley_Film_Festival_%28cropped%29.jpg/320px-Emma_Stone_at_the_39th_Mill_Valley_Film_Festival_%28cropped%29.jpg",
    birthday: "6 November 1988",
    isMale: false,
    isDeleted: false,
    isSelected: false,
    contacts: [
      "https://www.facebook.com/ImEmmaStone/",
      "https://www.instagram.com/emmastone/?hl=en",
      "https://twitter.com/stoneemma_?lang=en",
    ],
  },
  {
    id: 4,
    firstName: "Somebody",
    lastName: "Tuffak",
    profilePicture: null,
    birthday: "30 February 2000",
    isMale: null,
    isDeleted: false,
    isSelected: false,
    contacts: [
      "https://www.facebook.com/somebody/",
      "https://www.instagram.com/somebody/?hl=en",
      "https://twitter.com/somebody?lang=en",
    ],
  },
  {
    id: 5,
    firstName: "Scarlett",
    lastName: "Johansson",
    profilePicture:
      "https://m.media-amazon.com/images/M/BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",
    birthday: "22 November 1984",
    isMale: false,
    isDeleted: false,
    isSelected: false,
    contacts: [
      "https://www.facebook.com/pages/category/Actor/Scarlett-Johansson-Official-101457158013203/",
      "https://twitter.com/scarlett_jo?lang=en",
      "https://www.instagram.com/scarlett.johansson.fc/?hl=en",
    ],
  },
  {
    id: 6,
    firstName: "Yevgeny",
    lastName: "Ponasenkov",
    profilePicture:
      "https://www.factroom.ru/wp-content/uploads/2019/06/10-faktov-o-evgenii-ponasenkove-kotoryj-svodit-vsekh-s-uma-1250x883.jpg",
    birthday: "13 March 1982",
    isMale: true,
    isDeleted: false,
    isSelected: false,
    contacts: [
      "https://www.facebook.com/Ponasenkov",
      "https://twitter.com/Ponasenkov",
      "https://www.instagram.com/evgenii_ponasenkov/?hl=en",
    ],
  },
  {
    id: 7,
    firstName: "Daniel",
    lastName: "Day-Lewis",
    profilePicture:
      "https://i2.wp.com/comicbookdebate.com/wp-content/uploads/2019/07/There20will20be20blood202-750x460.jpg?resize=750%2C460&ssl=1",
    birthday: "29 April 1957",
    isMale: true,
    isDeleted: false,
    isSelected: false,
    contacts: [
      "https://www.facebook.com/DanielDayLewis/",
      "https://twitter.com/blakedaylewis?lang=en",
      "https://www.instagram.com/danielbdaylewis/?hl=en",
    ],
  },
  {
    id: 8,
    firstName: "Test",
    lastName: "Testovich",
    profilePicture:
      "https://i2.wp.com/comicbookdebate.com/wp-content/uploads/2019/07/There20will20be20blood202-750x460.jpg?resize=750%2C460&ssl=1",
    birthday: "29 April 1957",
    isMale: true,
    isDeleted: false,
    isSelected: false,
    contacts: [
      "https://www.facebook.com/DanielDayLewis/",
      "https://twitter.com/blakedaylewis?lang=en",
      "https://www.instagram.com/danielbdaylewis/?hl=en",
    ],
  },
];

document
  .getElementById("usersList")
  ?.append(...users.map((user) => createUserListItem(user)));

/**
 *
 * @param {object} user
 * @param {number | string} user.id
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @param {string} user.profilePicture
 * @returns {HTMLLIElement}
 */
function createUserListItem(user) {
  const userListItemElem = document.createElement("li"); // <LI>
  userListItemElem.setAttribute("id", user.id);
  userListItemElem.append(createUserCard(user)); //<LI><ARTICLE><IMG></ARTICLE></LI>
  return userListItemElem;
}

/**
 *
 * @param {object} user
 * @returns {HTMLArticleElement}
 */
function createUserCard(user) {
  const userCardElem = document.createElement("article"); // <ARTICLE>
  userCardElem.classList.add("userCard");
  userCardElem.append(
    createUserImage(user),
    createUserFullNameElem(user),
    createDeleteUserBtn(user)
  ); // <ARTICLE><IMG><DIV></ARTICLE>
  return userCardElem;
}

/**
 *
 * @param {object} user
 * @returns {HTMLDivElement}
 */
function createUserImage({ id, firstName, lastName, profilePicture }) {
  const container = document.createElement("div");
  container.setAttribute("id", `imageContainer${id}`);
  container.classList.add("userPictureContainer", "flexCenter");
  container.append(createUserInitialsElem({ firstName, lastName }));
  container.style.setProperty(
    "background-color",
    stringToColorCode(`${id}${firstName}${lastName}`)
  );
  const image = document.createElement("img"); // <IMG>
  image.setAttribute("data-container-id", `imageContainer${id}`);
  image.addEventListener("load", onImageLoadHandler);

  image.addEventListener("error", onImageErrorHandler);

  image.setAttribute("src", profilePicture);
  image.setAttribute("alt", `${firstName} ${lastName} picture`);
  image.classList.add("userPicture");

  return container;
}
/**
 *
 * @param {object} param0
 * @returns {HTMLDivElement}
 */
function createUserFullNameElem({ firstName, lastName }) {
  const fullNameElem = document.createElement("div"); // <DIV>
  fullNameElem.classList.add("userFullName");
  fullNameElem.append(document.createTextNode(`${firstName} ${lastName}`));
  return fullNameElem;
}
/**
 *
 * @param {object} param0
 * @returns {HTMLSpanElement}
 */
function createUserInitialsElem({ firstName, lastName }) {
  const initialsElem = document.createElement("span");
  initialsElem.setAttribute("title", `${firstName} ${lastName} initials`);
  initialsElem.append(
    document.createTextNode(`${firstName[0] || ""}${lastName[0] || ""}`)
  );
  return initialsElem;
}
/**
 * @param {object} user
 * @returns {HTMLButtomElement}
 */
function createDeleteUserBtn({ id }) {
  const btn = document.createElement("button");
  const btnImg = document.createElement("img");
  btnImg.setAttribute("src", "./icons/del-user.svg");
  btn.setAttribute("data-card-id", id);
  btn.append(btnImg);
  btn.addEventListener("click", onRemoveBtnClickHandler);

  return btn;
}

/**
 * Events Handlers
 */

function onRemoveBtnClickHandler(e) {
  document.getElementById(e.target.dataset.cardId)?.remove();
}
function onImageLoadHandler({ target }) {
  document.getElementById(target.dataset.containerId)?.append(target);
}
function onImageErrorHandler({ target }) {
  target.remove();
}

/**
 * Utils
 */

function stringToColorCode(str) {
  let userValue = 0;

  for (const char of str) {
    userValue += char.charCodeAt(0);
  }

  while (userValue > 1) {
    userValue /= 10;
  }

  return localStorage.getItem(str)
    ? localStorage.getItem(str)
    : localStorage.setItem(
        str,
        "#" + ("000000" + ((userValue * 0xffffff) << 0).toString(16)).slice(-6)
      );
}
