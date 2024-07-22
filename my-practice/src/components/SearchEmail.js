import React, { useState } from "react";

const users = [
  { name: "Avishkar", email: "avishkargawali8@gmail.com" },
  { name: "Abhay", email: "abhay12@gmail.com" },
  { name: "Ashok", email: "ashokgawali12@gmail.com" },
];

const SearchEmail = () => {
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function submitHandler(e) {
    const searchText = e.target.value.toLowerCase();
    setSearch(searchText);
    const user = users.find((user) =>
      user.name.toLowerCase().startsWith(searchText)
    );

    if (user) {
      setEmail(user.email);
    } else {
      setEmail("Cannot get the Email");
    }
  }

  const handleSubmit= ()=>{ 
    alert(`Name: ${name}`)
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <input
        type="text"
        placeholder="Enter the name"
        className="border-2 border-black"
        value={search}
        onChange={submitHandler}
      />
      <div>
        <h3 className="text-3xl font-bold mt-2">Email: {email}</h3>
      </div>
      <input
        type="text"
        placeholder="test"
        className="border-2 border-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>click </button>
    </div>
  );
};

export default SearchEmail;
