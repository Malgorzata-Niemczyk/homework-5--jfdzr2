const PaginationButtons = ({handleGoToNextPage, handleGoToPreviousPage}) => {
    return ( 
        <div className="pagination-buttons-wrapper flex poke-font">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleGoToPreviousPage}>
            Prev
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleGoToNextPage}>
            Next
          </button>
        </div>
     );
}
 
export default PaginationButtons;