const PaginationButtons = () => {
    return ( 
        <div className="pagination-buttons-wrapper flex poke-font">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Prev
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
     );
}
 
export default PaginationButtons;