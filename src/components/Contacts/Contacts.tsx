import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import SearchContact from "./SearchContact";
import CreateContact from "./CreateContact";
import ContactItem from "./ContactItem";
import { addContact, changeContact, ContactItemType } from "../../reducers/contacts";
import ChangeContactPopup from "../../shared/popups/ChangeContactPopup";
import CreateContactPopup from "../../shared/popups/CreateContactPopup";
import CallingPopup from "../../shared/popups/CallingPopup";

const Contacts: React.FC = () => {
  const dispatch = useDispatch();
  const [changePopupOpen, setChangePopupOpen] = useState<boolean>(false);
  const [createPopupOpen, setCreatePopupOpen] = useState<boolean>(false);
  const [callingPopupOpen, setCallingPopupOpen ] = useState<boolean>(false)
  const [inputName, setInputName] = useState<string>("");
  const [inputSurname, setInputSurname] = useState<string>("");
  const [inputPhone, setInputPhone] = useState<string>("");
  const [inputPhotoUrl, setInputPhotoUrl] = useState<string>('')
  const [currentChangeContact, setCurrentChangeContact] =
    useState<ContactItemType>({
      name: "",
      surname: "",
      phoneNumber: "",
      photoUrl: "",
    });
  const [searchInput, setSearchInput] = useState<string>("");
  const contacts: any = useSelector<RootState>((state) => state.contacts.contacts);
  const filtered = contacts.filter((item: ContactItemType) =>
    (item.name + item.surname + item.phoneNumber)
      .toLowerCase()
      .includes(searchInput.toLowerCase())
  );
  const setInputsPopupsNull = () => {
    setInputName("");
    setInputSurname("");
    setInputPhone("");
    setInputPhotoUrl("")
  };

  const onCloseChangePopup = () => {
    setChangePopupOpen(false);
    setInputsPopupsNull();
  };
  const changePopupHandler = () => {
    dispatch(
      changeContact({
        name: inputName,
        surname: inputSurname,
        phoneNumber: inputPhone,
        currentPhoneNumber: currentChangeContact.phoneNumber,
      })
    );
    onCloseChangePopup();
  };  
  
  const onCloseCreatePopup = () => {
    setCreatePopupOpen(false);
    setInputsPopupsNull();
  };

  const createPopupHandler = () => {
    dispatch(addContact({
      name: inputName,
      surname: inputSurname,
      phoneNumber: inputPhone,
      photoUrl: inputPhotoUrl,
    }))
    onCloseCreatePopup()
  }

  return (
    <div className="relative pt-5">
      <SearchContact
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="w-full flex flex-wrap justify-evenly">
        {filtered.length ? (
          filtered.map(
            (contact: ContactItemType) => (
              <ContactItem
                key={contact.phoneNumber}
                contact={contact}
                setCurrentChangeContact={setCurrentChangeContact}
                setChangePopupOpen={setChangePopupOpen}
                setCallingPopupOpen={setCallingPopupOpen}
              />
            )
          )
        ) : (
          <p>No contacts</p>
        )}
      </div>
      <CreateContact setCreatePopupOpen={setCreatePopupOpen} />

      <CallingPopup
      currentChangeContact={currentChangeContact}
      callingPopupOpen={callingPopupOpen}
      setCallingPopupOpen={setCallingPopupOpen}
      />
      <ChangeContactPopup
        onCloseChangePopup={onCloseChangePopup}
        changePopupOpen={changePopupOpen}
        setChangePopupOpen={setChangePopupOpen}
        currentChangeContact={currentChangeContact}
        inputName={inputName}
        setInputName={setInputName}
        inputSurname={inputSurname}
        setInputSurname={setInputSurname}
        inputPhone={inputPhone}
        setInputPhone={setInputPhone}
        changePopupHandler={changePopupHandler}
      />
      <CreateContactPopup
        onCloseCreatePopup={onCloseCreatePopup}
        createPopupOpen={createPopupOpen}
        setCreatePopupOpen={setCreatePopupOpen}
        inputName={inputName}
        setInputName={setInputName}
        inputSurname={inputSurname}
        setInputSurname={setInputSurname}
        inputPhone={inputPhone}
        setInputPhone={setInputPhone}
        inputPhotoUrl={inputPhotoUrl}
        setInputPhotoUrl={setInputPhotoUrl}
        createPopupHandler={createPopupHandler}

      />
    </div>
  );
};

export default Contacts;
