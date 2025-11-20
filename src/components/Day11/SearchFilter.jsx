import React, { useMemo, useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Pineapple",
    "Grapes",
    "Strawberry",
    "Blueberry",
    "Watermelon",
    "Papaya",
    "Guava",
    "Peach",
    "Pear",
    "Kiwi",
    "Cherry",
    "Lemon",
    "Lime",
    "Coconut",
    "Pomegranate",
    "Fig",
    "Apricot",
    "Lychee",
    "Dragonfruit",
    "Plum",
    "Blackberry",
    "Raspberry",
    "Jackfruit",
    "Avocado",
    "Tangerine",
    "Cranberry",
    "Date",
    "Mulberry",
    "Starfruit",
    "Passionfruit",
    "Durian",
    "Nectarine",
    "Custard Apple",
    "Sugarcane",
    "Mosambi",
    "Jujube",
    "Soursop",
    "Longan",
    "Persimmon",
    "Cantaloupe",
    "Honeydew",
    "Boysenberry",
    "Elderberry",
    "Gooseberry",
    "Tamarind",
    "Olive",
  ];

  const filteredItems = useMemo(() => {
    console.log("Filtering.........");
    const result = items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    return result;
  }, [search]);




  return (
    <div>
      <h1>Search Filter App</h1>
      <input type="text" placeholder="Search items" 
      value={search} onChange={(e)=> setSearch(e.target.value)}/>
      <h3>Result:</h3>
      <ul style={{listStyle:"number"}}>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
