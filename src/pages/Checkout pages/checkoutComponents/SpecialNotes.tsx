function SpecialNotes() {
  return (
    <div className=" my-8">
      <h2 className=" text-xl font-medium mb-2 text-gray-700">Special Notes</h2>
      <div className="  w-full p-6 bg-white border border-gray-300 rounded-md flex flex-col gap-3">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Leave order in front of the door"
          />
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Don't ring bell "
          />
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Call 30 min in Advance "
          />
        </div>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="input text ......... "
        />
      </div>
    </div>
  );
}

export default SpecialNotes;
