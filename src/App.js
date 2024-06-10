import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOption, setDiscountCode, setNotes } from './redux/appSlice';

function App() {
  const dispatch = useDispatch();
  const selectedOption = useSelector(state => state.app.selectedOption);
  const discountCode = useSelector(state => state.app.discountCode);
  const notes = useSelector(state => state.app.notes);

  const handleOptionChange = (e) => {
    dispatch(setSelectedOption(e.target.value));
  };

  const handleDiscountCodeChange = (e) => {
    dispatch(setDiscountCode(e.target.value));
  };

  const validateDiscountCode = () => {
    const pattern = /^DISCOUNT2024$/;
    if (pattern.test(discountCode)) {
      alert("Discount code is valid!");
    } else {
      alert("Invalid discount code.");
    }
  };

  const generateDiscountCode = () => {
    const newCode = "NEWCODE123";
    alert(`Generated Discount Code: ${newCode}`);
  };

  const handleNotesChange = (e) => {
    dispatch(setNotes(e.target.value));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mini Application</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Select Options Here</h2>
        <form>
          <div className="mb-2">
            <input
              type="radio"
              id="optionA"
              name="option"
              value="Option A"
              checked={selectedOption === "Option A"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="optionA">Option A</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="optionB"
              name="option"
              value="Option B"
              checked={selectedOption === "Option B"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="optionB">Option B</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="optionC"
              name="option"
              value="Option C"
              checked={selectedOption === "Option C"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="optionC">Option C</label>
          </div>
        </form>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Discount Code Entry</h2>
        <input
          type="text"
          value={discountCode}
          onChange={handleDiscountCodeChange}
          placeholder="Enter discount code"
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={validateDiscountCode}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Validate Code
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Generate Discount Code</h2>
        <button
          onClick={generateDiscountCode}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate Code
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Note Field</h2>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          placeholder="Enter your notes here..."
          className="border p-2 w-full h-32"
        />
      </div>
    </div>
  );
}

export default App;
