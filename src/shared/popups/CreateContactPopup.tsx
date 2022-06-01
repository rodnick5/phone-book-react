import { is } from "immer/dist/internal";
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Ico } from "../../assets/Ico";

interface ChangeContactPopupProps {
  onCloseCreatePopup: () => void;
  createPopupOpen: boolean;
  setCreatePopupOpen: Dispatch<SetStateAction<boolean>>;
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>;
  inputSurname: string;
  setInputSurname: Dispatch<SetStateAction<string>>;
  inputPhone: string;
  setInputPhone: Dispatch<SetStateAction<string>>;
  setInputPhotoUrl: Dispatch<SetStateAction<string>>;
  inputPhotoUrl: string;
  createPopupHandler: () => void;
}

const CreateContactPopup: React.FC<ChangeContactPopupProps> = ({
  onCloseCreatePopup,
  createPopupOpen,
  setCreatePopupOpen,
  inputName,
  setInputName,
  inputSurname,
  setInputSurname,
  inputPhone,
  setInputPhone,
  inputPhotoUrl,
  setInputPhotoUrl,
  createPopupHandler,
}) => {
  const [nameInputWasActive, setNameInputWasActive] = useState<boolean>(false);
  const [surnameInputWasActive, setSurnameInputWasActive] =
    useState<boolean>(false);
  const [phoneInputWasActive, setPhoneInputWasActive] =
    useState<boolean>(false);
  const [nameError, setNameError] = useState("Поле не должно быть пустым");
  const [surnameError, setSurnameError] = useState(
    "Поле не должно быть пустым"
  );
  const [phoneError, setPhoneError] = useState("Поле не должно быть пустым");
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    if( nameError || surnameError || phoneError){
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [nameError, surnameError, phoneError])


  const onCloseCreatePopupLocal = ( ) => {
    setNameError('')
    setSurnameError('')
    setPhoneError('')
    }

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
    if (e.target.value.length <= 1) {
      setNameError("Имя должно содержать не меньше 2 символов");
    } else {
      setNameError("");
    }
  };
  const surnameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSurname(e.target.value);
    if (e.target.value.length <= 1) {
      setSurnameError("Фамилия должна содержать не меньше 2 символов");
    } else {
      setSurnameError("");
    }
  };
  const phoneInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhone(e.target.value.replace(/[^+\d]/g, ""));
    if (e.target.value[0] !== "+" || e.target.value.includes("+", 1)) {
      setPhoneError(`Номер должен содержать '+' в начале`);
    } else if (e.target.value.length < 11) {
      setPhoneError("Номер должен содержать не меньше 10 символов");
    } else {
      setPhoneError("");
    }
  };

  return (
    <Popup
      position={"center center"}
      closeOnDocumentClick={true}
      closeOnEscape={true}
      onClose={() => {
        onCloseCreatePopup();
        onCloseCreatePopupLocal()
      }}
      open={createPopupOpen}
    >
      <div className="relative w-3/5 p-5 bg-gray-300 rounded-xl flex justify-center items-center flex-col sm:w-5/6">
        <div
          className="absolute right-5 top-5 cursor-pointer sm:hidden"
          onClick={() => {
            setCreatePopupOpen(false);
            onCloseCreatePopupLocal()
          }}
        >
          <Ico name={"cancelIcon"} />
        </div>
        <h1 className="text-lg">Create new contact</h1>
        <div className="py-4 flex flex-col">
          <label htmlFor="nameInput">Photo: </label>
          <input
            type="text"
            name="nameInput"
            className="rounded-lg px-1.5"
            placeholder="Необязательное поле"
            value={inputPhotoUrl}
            onChange={(e) => setInputPhotoUrl(e.target.value)}
          />
        </div>
        <div className="py-4 flex flex-col">
          <label htmlFor="nameInput">Name: </label>
          <input
            type="text"
            name="nameInput"
            className="rounded-lg px-1.5"
            maxLength={19}
            onBlur={() => setNameInputWasActive(true)}
            value={inputName}
            onChange={(e) => nameInputHandler(e)}
          />
        </div>
        {nameInputWasActive && nameError && (
          <p className="text-red-600">{nameError}</p>
        )}
        <div className="py-4 flex flex-col">
          <label htmlFor="inputSurname">Suraname: </label>
          <input
            type="text"
            name="inputSurname"
            className="rounded-lg px-1.5"
            value={inputSurname}
            maxLength={19}
            onBlur={() => setSurnameInputWasActive(true)}
            onChange={(e) => surnameInputHandler(e)}
          />
        </div>
        {surnameInputWasActive && surnameError && (
          <p className="text-red-600">{surnameError}</p>
        )}
        <div className="py-4 flex flex-col">
          <label htmlFor="phoneInput">Phone number: </label>
          <input
            type="tel"
            inputMode="tel"
            name="phoneInput"
            className="rounded-lg px-1.5"
            value={inputPhone}
            maxLength={19}
            onBlur={() => setPhoneInputWasActive(true)}
            onChange={(e) => phoneInputHandler(e)}
          />
        </div>
        {phoneInputWasActive && phoneError && (
          <p className="text-red-600">{phoneError}</p>
        )}
        <div>
          <button
          disabled={!isFormValid}
            className="rounded-lg px-3 py-1 bg-white border border-solid border-gray-400"
            onClick={() => {
              createPopupHandler();
              onCloseCreatePopupLocal();
            }}
          >
            Create
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default CreateContactPopup;
