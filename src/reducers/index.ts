import { combineReducers } from "@reduxjs/toolkit";
import contacts from "./contacts";
import called from './called'

export const reducer = combineReducers({
  contacts,
  called,
});
