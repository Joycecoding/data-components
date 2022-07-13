import React from 'react'

const Pagination = ({variables, setVariables, totalPage, fetchData}) => {
  
    const handlePagination = (value) => {
        setVariables ({...variables, page: value})
        fetchData()
    }
    
    const renderButtons = () => {
        let Buttons = []
        if (variables.page <= 1) {
            for (let i=1; i<= totalPage; i++) {
                if (i< (variables.page + 3)){
                    Buttons.push(i)
                }
            }
        }
        else if (variables.page > 1) {
            for (let i=variables.page - 1; i<= totalPage; i++) {
                if (i< (variables.page + 2)){
                    Buttons.push(i)
                }
            } 
        }
        console.log(Buttons)
        return Buttons 
    }

  return (
          <div className="pagination">
        <button onClick={() => handlePagination(variables.page - 1)} disabled={variables.page <= 1}>&laquo;</button>
       {
        renderButtons().map((x) => (<button onClick={()=> handlePagination(x)}>{x}</button>))
       }
        <button onClick={() => handlePagination(variables.page + 1)} disabled={variables.page === totalPage}>&raquo;</button>
      </div>
  )
}

export default Pagination