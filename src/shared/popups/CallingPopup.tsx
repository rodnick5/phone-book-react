import React, { Dispatch, SetStateAction } from "react";
import Popup from "reactjs-popup";
import { Ico } from "../../assets/Ico";
import { ContactItemType } from "../../reducers/contacts";

interface CallingPopupProps {
  callingPopupOpen: boolean;
  setCallingPopupOpen: Dispatch<SetStateAction<boolean>>;
  currentChangeContact: ContactItemType;
}

const CallingPopup: React.FC<CallingPopupProps> = ({
  callingPopupOpen,
  currentChangeContact,
  setCallingPopupOpen,
}) => {
  return (
    <Popup
      position={"center center"}
      closeOnDocumentClick={false}
      closeOnEscape={false}
    onClose={() => setCallingPopupOpen(false)}
      open={callingPopupOpen}
    >
      <div className="w-1/4 bg-gray-200 p-3 rounded-lg">
          <div className="py-2 flex justify-start items-center">
              <p className="px-1 font-semibold text-xl" >{currentChangeContact.name}</p>
              <p className="px-1 font-semibold text-xl">{currentChangeContact.surname}</p>
          </div>
          <div className="flex justify-center">
              <p className="font-semibold">{currentChangeContact.phoneNumber}</p>
          </div>
        <div className="flex justify-center py-3">
            <p>Calling..</p>
        </div>
        <div className="flex justify-center py-2 " >
            <div className="cursor-pointer" onClick={() => setCallingPopupOpen(false)}>
            <Ico name={'endcallIcon'} />
            </div>
            
        </div>
    <div>

    </div>
      </div>
    </Popup>
  );
};

export default CallingPopup;
