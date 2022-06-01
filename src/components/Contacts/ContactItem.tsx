import React, { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { Ico } from "../../assets/Ico";
import { addCalled } from "../../reducers/called";
import { ContactItemType, deleteContact } from "../../reducers/contacts";

export type ContactItemProps = {
  contact: {
    name: string;
    surname: string;
    phoneNumber: string;
    photoUrl: string;
    date?: string
  };
  setChangePopupOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentChangeContact: Dispatch<SetStateAction<ContactItemType>>;
  setCallingPopupOpen: Dispatch<SetStateAction<boolean>>;
};

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  setChangePopupOpen,
  setCurrentChangeContact,
  setCallingPopupOpen,
}) => {
  const dispatch = useDispatch();

  const setCalledContactDate = () => {
    dispatch(addCalled(contact));
    setCurrentChangeContact({
      name: contact.name,
      surname: contact.surname,
      phoneNumber: contact.phoneNumber,
      photoUrl: contact.photoUrl,
    });
    setCallingPopupOpen(true);
  };

  return (
    <div className="m-2.5 flex flex-col p-2.5 border bg-gray-100 border-solid border-gray-200 rounded-xl w-52">
      <div className="flex justify-center items-center">
        <img src={contact.photoUrl} alt="photoContact" className="h-24" />
      </div>
      <div className="border-b border-solid border-gray-300 flex flex-col flex-wrap">
        <p className="py-0.5 font-semibold">{contact.name} &nbsp;</p>
        <p className="py-0.5 font-semibold">{contact.surname}</p>
      </div>
      <div className="flex flex-row justify-between border-b border-solid border-gray-300">
        <div
          className="flex items-center py-1 cursor-pointer"
          onClick={() => setCalledContactDate()}
        >
          <Ico name={"callIcon"} width={15} height={15} />
          {/* <p className=" text-blue-500 font-semibold "  >CALL</p> */}
        </div>
        <div className="flex items-center py-1 cursor-pointer">
          <Ico name={"smsIcon"} width={15} height={15} />
          {/* <p className="py-1 text-blue-500 font-semibold ">SMS</p> */}
        </div>
        <div>
          <p className="py-1 text-blue-500 font-semibold cursor-pointer">
            Videocall
          </p>
        </div>
      </div>
      <div className="border-b border-solid border-gray-300">
        <p className="text-base py-1 ">{contact.phoneNumber}</p>
      </div>
      <div className="mt-1 flex felx-row justify-evenly items-center">
        <div
          className="cursor-pointer rounded-lg p-1.5 mr-1 bg-sky-100 flex flex-row items-center transition-colors hover:bg-sky-200"
          onClick={() => {
            setChangePopupOpen(true);
            setCurrentChangeContact({
              name: contact.name,
              surname: contact.surname,
              phoneNumber: contact.phoneNumber,
              photoUrl: contact.photoUrl,
            });
          }}
        >
          <Ico name={"changeIcon"} width={20} height={20} />
          <p className="select-none pl-1.5">Change Contact</p>
        </div>
        <div
          className="rounded-lg px-1.5 py-0.5 bg-red-100 h-full flex items-center cursor-pointer transition-colors hover:bg-red-200"
          onClick={(e) => dispatch(deleteContact(contact.phoneNumber))}
        >
          <Ico name={"trashIcon"} width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
