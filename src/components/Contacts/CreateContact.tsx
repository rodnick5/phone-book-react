import React, { Dispatch, SetStateAction } from "react";
import { Ico } from "../../assets/Ico";

type CreateContactProps = {
  setCreatePopupOpen: Dispatch<SetStateAction<boolean>>
}

const CreateContact: React.FC<CreateContactProps> = ({setCreatePopupOpen}) => {
  return <div className="p-1.5 rounded-xl flex bg-slate-100 border border-solid border-gray-300 flex-row cursor-pointer items-center fixed bottom-4 right-5" onClick={() => setCreatePopupOpen(true) }>
    <Ico name={'plusIcon'} width={30} height={30} />
    <p className="sm:hidden">Create contact</p>
  </div>;
};
export default CreateContact;
