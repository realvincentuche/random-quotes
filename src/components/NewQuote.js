const NewQuote = ({ fetchQuote }) => {
  return (
    <button
      onClick={fetchQuote}
      className="rounded-md shadow flex sm:inline-flex w-full sm:w-auto items-center justify-center border border-transparent bg-gray-600 px-5 py-3 text-base font-medium text-white hover:bg-gray-700 mr-0 mb-2 sm:mr-2 sm:mb-0"
    >
      New Quote
    </button>
  );
};

export default NewQuote;
