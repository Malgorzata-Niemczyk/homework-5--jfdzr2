const Pagination = (props) => {
    // console.log(props)

    const { goToNextPage, goToPrevPage, page, totalPages } = props;

    return (
        <div className="pagination-buttons-wrapper flex poke-font">
          {goToPrevPage && <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={goToPrevPage}>
            Prev
          </button>}
          <div>
            {page} of {totalPages}
          </div>
          {goToNextPage && <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={goToNextPage}>
            Next
          </button>}
        </div>
     )
}
 
export default Pagination;