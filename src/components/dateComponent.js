// import React from 'react'
// import DataComponenent from './Data/dataComponenent'

// const DateComponents = ({ data, variables, setVariables, handleSubmit }) => {

//     const [dateList, setDateList] = useState([])


//   useEffect(() => {
//     data.forEach((character) => {
//       const date = (new Date(character.created).toLocaleDateString())
//       if (dateList.includes(date)) return
//       setDateList([...dateList, date])
//     })
//   }, [data])
//   return (
//     <div>
//         {
//             dateList.map((date, dateIndex) => (
//                 <div className='date-componenents' key={dateIndex}>
//                     <h2>{date}</h2>
//                     {data.map((character) => (
//                          new Date(character.created).toLocaleDateString() === date &&
//                         <DataComponenent character={character} />
//                     ))}
//                 </div>
//             ))
//         }
//        </div>
//   )
// }

// export default DateComponents
