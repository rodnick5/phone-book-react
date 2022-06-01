import { createSlice } from "@reduxjs/toolkit";

export type ContactItemType = { 
  name: string;
  surname: string;
  phoneNumber: string;
  photoUrl: string;
}

export type ContactsArray = {
  contacts: ContactItemType[]
}



const initialState = {
  contacts: [
    {
      name: "Igor",
      surname: "Donald",
      phoneNumber: "+380501545090",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Richard",
      surname: "Steven",
      phoneNumber: "+380504545021",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    },
    {
      name: "Joseph",
      surname: "Paul",
      phoneNumber: "+380504845090",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
    },
    {
      name: "Pasha",
      surname: "Andrew",
      phoneNumber: "+380504505090",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Thomas",
      surname: "Kuznets",
      phoneNumber: "+38050045011",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    },
    {
      name: "Nick",
      surname: "Joshua",
      phoneNumber: "+380504545041",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
    },
    {
      name: "Charles",
      surname: "Kenneth",
      phoneNumber: "+380504545090",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Lesli",
      surname: "Lopov",
      phoneNumber: "+380504545080",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    },
    {
      name: "Christopher",
      surname: "Kevin",
      phoneNumber: "+380507545090",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Rone",
      surname: "Brian",
      phoneNumber: "+380504545000",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    },
    {
      name: "Daniel",
      surname: "George",
      phoneNumber: "+380504545020",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Matthew",
      surname: "Timothy",
      phoneNumber: "+380504544090",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Anthony",
      surname: "Ronald",
      phoneNumber: "+380504543095",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Mark",
      surname: "Edward",
      phoneNumber: "+380504541094",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
    },
    {
      name: "Oleg",
      surname: "Kuznets",
      phoneNumber: "+380505545093",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "James",
      surname: "Jason",
      phoneNumber: "+380504545092",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Robert",
      surname: "Jeffrey",
      phoneNumber: "+380504545097",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
    },
    {
      name: "John",
      surname: "Ryan",
      phoneNumber: "+380504045090",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "Michael",
      surname: "Jacob",
      phoneNumber: "+380959969040",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
    {
      name: "David",
      surname: "Gary",
      phoneNumber: "+380504645090",
      photoUrl:
        "https://thumbs.dreamstime.com/z/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
    },
    {
      name: "William",
      surname: "Nicholas",
      phoneNumber: "+380506545090",
      photoUrl: "https://cdn.picpng.com/man/pic-man-33229.png",
    },
  ],
} as ContactsArray;

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContact(state, action) {
      let index = state.contacts.findIndex(
        (item) => item.phoneNumber == action.payload
      );
      state.contacts.splice(index, 1);
    },
    changeContact(state, action) {
      let index = state.contacts.findIndex(
        (item) => item.phoneNumber == action.payload.currentPhoneNumber
      );
      state.contacts[index].name = action.payload.name ? action.payload.name : state.contacts[index].name;
      state.contacts[index].surname = action.payload.surname ? action.payload.surname : state.contacts[index].surname;
      state.contacts[index].phoneNumber = action.payload.phoneNumber ? action.payload.phoneNumber : state.contacts[index].phoneNumber;
      state.contacts[index].photoUrl = action.payload.photoUrl
        ? action.payload.photoUrl
        : state.contacts[index].photoUrl;
    },
    addContact(state, action){
      if(!action.payload.photoUrl || !action.payload.photoUrl.includes('https://')){
        action.payload.photoUrl = "https://cdn.picpng.com/man/pic-man-33229.png"
      }
      state.contacts.push(action.payload)
    }
  },
});

const { actions, reducer } = contactsSlice;
export default reducer;
export const { deleteContact, changeContact, addContact } = actions;
