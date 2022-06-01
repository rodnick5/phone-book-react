import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Ico } from "../../assets/Ico";
import { ContactItemType } from "../../reducers/contacts";

interface ChangeContactPopupProps {
  onCloseChangePopup: () => void;
  changePopupOpen: boolean;
  setChangePopupOpen: Dispatch<SetStateAction<boolean>>;
  currentChangeContact: ContactItemType;
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>;
  inputSurname: string;
  setInputSurname: Dispatch<SetStateAction<string>>;
  inputPhone: string;
  setInputPhone: Dispatch<SetStateAction<string>>;
  changePopupHandler: () => void;
}

const ChangeContactPopup: React.FC<ChangeContactPopupProps> = ({
  onCloseChangePopup,
  changePopupOpen,
  setChangePopupOpen,
  currentChangeContact,
  inputName,
  setInputName,
  inputSurname,
  setInputSurname,
  inputPhone,
  setInputPhone,
  changePopupHandler,
}) => {
  const [phoneError, setPhoneError] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [surnameError, setSurnameError] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
    if (e.target.value.length <= 1) {
      setNameError("Имя должно содержать не меньше 2 символов");
    } else {
      setNameError("");
    }
    if(e.target.value.length == 0){
      setNameError("")
      setIsFormValid(true)
    }
  };
  const surnameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSurname(e.target.value);
    if (e.target.value.length <= 1) {
      setSurnameError("Фамилия должна содержать не меньше 2 символов");
    } else {
      setSurnameError("");
    }
    if(e.target.value.length == 0){
      setSurnameError('')
      setIsFormValid(true)
    }
  };
  const phoneInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhone(e.target.value.replace(/[^+\d]/g, ''))
    if (e.target.value[0] !== "+" || e.target.value.includes("+", 1)) {
      setPhoneError(`Номер должен содержать '+' в начале`);
    } else if (e.target.value.length < 11) {
      setPhoneError("Номер должен содержать не меньше 10 символов");
    } else {
      setPhoneError("")
    }
    if (e.target.value.length == 0) {
      setIsFormValid(true)
      setPhoneError("");
    } 
  };

  useEffect(( ) => {
    if(phoneError){
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [phoneError])

  return (
    <Popup
      position={"center center"}
      closeOnDocumentClick={true}
      closeOnEscape={true}
      onClose={onCloseChangePopup}
      open={changePopupOpen}
    >
      <div className="relative p-5 bg-gray-300 rounded-xl flex justify-center items-center flex-col w-3/5 sm:w-5/6">
        <div
          className="absolute right-5 top-5 cursor-pointer sm:hidden"
          onClick={() => setChangePopupOpen(false)}
        >
          <Ico name={"cancelIcon"} />
        </div>
        <h1 className="text-lg">Change Contact information</h1>
        <div className="py-4  flex flex-col">
          <label htmlFor="nameInput">Name: </label>
          <input
            className="rounded-lg px-1.5"
            maxLength={19}
            type="text"
            name="nameInput"
            placeholder={currentChangeContact.name}
            value={inputName}
            onChange={(e) => nameInputHandler(e)}
          />
        </div>
        {nameError && <p className="text-red-500">{nameError}</p>}
        <div className="py-4 flex flex-col">
          <label htmlFor="inputSurname">Suraname: </label>
          <input
            className="rounded-lg px-1.5"
            type="text"
            name="inputSurname"
            maxLength={19}

            placeholder={currentChangeContact.surname}
            value={inputSurname}
            onChange={(e) => surnameInputHandler(e)}
          />
        </div>
        {surnameError && <p className="text-red-500">{surnameError}</p>}
        <div className="py-4 flex flex-col">
          <label htmlFor="phoneInput">Phone number: </label>
          <input
            className="rounded-lg px-1.5"
            type="text"
            name="phoneInput"
            inputMode="numeric"
            placeholder={currentChangeContact.phoneNumber}
            maxLength={19}
            value={inputPhone}
            onChange={(e) => phoneInputHandler(e)}
          />
        </div>
        {phoneError && <p className="text-red-500">{phoneError}</p>}
        <div>
          <button
          disabled={!isFormValid}
            className="rounded-lg px-3 py-1 bg-white border border-solid border-gray-400"
            onClick={changePopupHandler}
          >
            Change
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default ChangeContactPopup;
