import React, { useState } from "react";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const inputHandler = (e) => {
    setDescription(e.target.value);
  };

  const quantityHandler = (e) => {
    // setQuantity(+e.target.value);
    setQuantity(Number(e.target.value));
  };

  function submitHandler(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your 🧜‍♂️ trip?</h3>
      <select value={quantity} onChange={quantityHandler}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        type="text"
        placeholder="Item..."
        onChange={inputHandler}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
