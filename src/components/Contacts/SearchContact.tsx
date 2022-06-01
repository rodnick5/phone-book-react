import React, { Dispatch, SetStateAction, useState } from "react";
import { Ico } from "../../assets/Ico";

interface SearchContactProps {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

const SearchContact: React.FC<SearchContactProps> = ({
  searchInput,
  setSearchInput,
}) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="mr-2.5">
        <Ico name={"searchIcon"} width={20} height={20} />
      </div>
      <div>
        <input
          className="p-1.5 rounded-xl outline-0 border border-solid border-gray-400"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchContact;
