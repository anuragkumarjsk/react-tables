import React,{useEffect,useState,useMemo} from 'react'
import {useTable} from 'react-table'
import Crudnav from './crudnav'

import axios from 'axios'
import './react-table.css'


function ShowOrders() {

const GroupedColumns = [
  {
     Header:"Personal Details",
     columns:[
      {Header:'ORDER NUM', accessor:'OrderNo'}, 
      {Header:'ORDER DATE', accessor:'Date'}, 
      {Header:'NAME', accessor:'Name'}, 
      {Header:'ADHAR', accessor:'AadharNo'}, 
      {Header:'CONTACT', accessor:'Contact'}, 
      {Header:'ADDRESS', accessor:'Address'}, 
      {Header:'TEHSIL', accessor:'Tehsil'}, 
      {Header:'DISTRICT', accessor:'District'}, 
      {Header:'PINCODE', accessor:'PinCode'}, 
      {Header:'STATE', accessor:'State'}, 
      {Header:'WATSAPP', accessor:'Watsapp'}, 
      {Header:'COMPANY', accessor:'CompanyName'}
     ]
  },
  {
    Header:"Order Details",
    columns:[
      {Header:'ORDER TABLE', accessor:'OrderTable',
                Cell: (cell ) => (                  
                  <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ORDER 
                  </button>
                  <div class="dropdown-menu lg" aria-labelledby="dropdownMenuButton">
                  <table className="embedded">
                    <tr>
                      <th>Srlno</th>
                      <th>Details</th>
                      <th>Quantity</th>
                      <th>Rate</th>
                      <th>Amount</th>
                    </tr>
                    
                    { cell.row.values.OrderTable.map(function(row,index){return <tr>
                       <td>{index}</td>
                       <td>{row.Order_Details}</td>
                       <td>{row.Order_Quantity}</td>
                       <td>{row.Order_Rate}</td>
                       <td>{row.Order_Amount}</td>                      
                       </tr>})}
                  </table>
                  </div>
                </div>
                )


                },
                {Header:'BILL AMOUNT', accessor:'BillAmt'},  
                {Header:'TRANSPORT CHARGE', accessor:'TransportChrg'}, 
                {Header:'TOTAL AMOUNT', accessor:'TotalAmt'}, 
                {Header:'ADVANCE PAID', accessor:'Advance'}, 
                {Header:'DUE AMOUNT', accessor:'DueAmt'  }, 
                {Header:'DELIVERY DATE', accessor:'DeliveryDate' },  
                {Header:'DELIVERY PLACE', accessor:'DeliveryPlace'}, 
                 {Header:'DEPOSIT TABLE', accessor:'DepositTable',Cell: ({ cell }) => (    

                  <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Deposit
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <table className="embedded">
                    <tr>
                      <th>Srlno</th>
                      <th>Date</th>
                      <th>Bank</th>
                      <th>UTR Number</th>
                      <th>Amount</th>
                    </tr>

                        { cell.row.values.DepositTable.map(function(row,index){return <tr>
                       <td>{index}</td>
                       <td>{row.Deposit_Date}</td>
                       <td>{row.Deposit_Bank}</td>
                       <td>{row.Deposit_UTRNo}</td>
                       <td>{row.Deposit_Amount}</td>                      
                       </tr>})}
                  </table>
                  </div>
                </div>


                )  }
    ]
  },
  {
    Header:"Bank Details",
    columns:[
      {Header:'BANK ACCOUNT', accessor:'Ac'             }, 
                {Header:'ACCOUNT HOLDER', accessor:'AcHolder'     }, 
                {Header:'ACCOUNT NUMBER', accessor:'AcNo'         },  
                {Header:'IFSC CODE', accessor:'IFSC'              },  
                {Header:'DEALER NAME', accessor:'DealerName'      },    
                {Header:'DEALER CONTACT', accessor:'DealerContact'}
    ]
  },
]  

// const Columns =[{Header:'ORDER NUM', accessor:'OrderNo'}, 
//                 {Header:'ORDER DATE', accessor:'Date'}, 
//                 {Header:'NAME', accessor:'Name'}, 
//                 {Header:'ADHAR', accessor:'AadharNo'}, 
//                 {Header:'CONTACT', accessor:'Contact'}, 
//                 {Header:'ADDRESS', accessor:'Address'}, 
//                 {Header:'TEHSIL', accessor:'Tehsil'}, 
//                 {Header:'DISTRICT', accessor:'District'}, 
//                 {Header:'PINCODE', accessor:'PinCode'}, 
//                 {Header:'STATE', accessor:'State'}, 
//                 {Header:'WATSAPP', accessor:'Watsapp'}, 
//                 {Header:'COMPANY', accessor:'CompanyName'},   
//                 {Header:'ORDER TABLE', accessor:'OrderTable',
//                 Cell: (cell ) => (                  
//                   <div class="dropdown">
//                   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     ORDER 
//                   </button>
//                   <div class="dropdown-menu lg" aria-labelledby="dropdownMenuButton">
//                   <table className="embedded">
//                     <tr>
//                       <th>Srlno</th>
//                       <th>Details</th>
//                       <th>Quantity</th>
//                       <th>Rate</th>
//                       <th>Amount</th>
//                     </tr>
                    
//                     { cell.row.values.OrderTable.map(function(row,index){return <tr>
//                        <td>{index}</td>
//                        <td>{row.Order_Details}</td>
//                        <td>{row.Order_Quantity}</td>
//                        <td>{row.Order_Rate}</td>
//                        <td>{row.Order_Amount}</td>                      
//                        </tr>})}
//                   </table>
//                   </div>
//                 </div>
//                 )


//                 },
//                 {Header:'BILL AMOUNT', accessor:'BillAmt'},  
//                 {Header:'TRANSPORT CHARGE', accessor:'TransportChrg'}, 
//                 {Header:'TOTAL AMOUNT', accessor:'TotalAmt'}, 
//                 {Header:'ADVANCE PAID', accessor:'Advance'}, 
//                 {Header:'DUE AMOUNT', accessor:'DueAmt'  }, 
//                 {Header:'DELIVERY DATE', accessor:'DeliveryDate' },  
//                 {Header:'DELIVERY PLACE', accessor:'DeliveryPlace'}, 
//                  {Header:'DEPOSIT TABLE', accessor:'DepositTable',Cell: ({ cell }) => (    

//                   <div class="dropdown">
//                   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Deposit
//                   </button>
//                   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                   <table className="embedded">
//                     <tr>
//                       <th>Srlno</th>
//                       <th>Date</th>
//                       <th>Bank</th>
//                       <th>UTR Number</th>
//                       <th>Amount</th>
//                     </tr>

//                         { cell.row.values.DepositTable.map(function(row,index){return <tr>
//                        <td>{index}</td>
//                        <td>{row.Deposit_Date}</td>
//                        <td>{row.Deposit_Bank}</td>
//                        <td>{row.Deposit_UTRNo}</td>
//                        <td>{row.Deposit_Amount}</td>                      
//                        </tr>})}
//                   </table>
//                   </div>
//                 </div>


//                 )  }, 
//                 {Header:'BANK ACCOUNT', accessor:'Ac'             }, 
//                 {Header:'ACCOUNT HOLDER', accessor:'AcHolder'     }, 
//                 {Header:'ACCOUNT NUMBER', accessor:'AcNo'         },  
//                 {Header:'IFSC CODE', accessor:'IFSC'              },  
//                 {Header:'DEALER NAME', accessor:'DealerName'      },    
//                 {Header:'DEALER CONTACT', accessor:'DealerContact'},
// ]

  const [RowData,setRowData] = useState([])

  useEffect(() => {
      axios.get('http://localhost:4000/order/show')
      .then((resp) =>{
          console.log(resp)
          setRowData(resp.data)
         })
      .catch((err)=>{console.log(err)})     
  }, [RowData])

  
  
  // const columns =useMemo( () => Columns,[] ) 
  const columns = useMemo(()=> GroupedColumns,[]  )
  const data = useMemo( () => RowData,[] )


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <>
    <Crudnav/>
    <div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell ,i) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr> 
          )
        })}
      </tbody>
    </table>  
    </div>
    </>
  )
}

export default ShowOrders
