import React,{useState,useEffect} from 'react'
import ReactTable from "react-table";
import _ from "lodash" ;
const pageSize=5;
var arr=[];


var values = [],
keys = Object.keys(localStorage),
i = keys.length;
while ( i-- ) {
    var my_obj=localStorage.getItem(keys[i]);
    my_obj=JSON.parse(my_obj);
    

    values.push(my_obj);

    
}
arr = _(values).slice(0).take(pageSize).value();

export default function View() {

    
    


    

    const[detail,setdetail]=useState(arr)
    const[currentPage, setCurrentPage] = useState(1) 

    useEffect(()=>{
        
        var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        while ( i-- ) {
            var my_obj=localStorage.getItem(keys[i]);
            my_obj=JSON.parse(my_obj);
            
        
            values.push(my_obj);
    
            
        }
        
        const pageCount=values ? Math.ceil(values.length/pageSize) :0
        if (pageCount === 1) return null;

        const pages = _.range(1,pageCount+1);
   
        arr = _(values).slice(0).take(pageSize).value();
        console.log("inside")

        
        console.log(arr)
        
        
        
        
    }, []);
    
    
    
    
    
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    

    

    while ( i-- ) {
        var my_obj=localStorage.getItem(keys[i]);
        my_obj=JSON.parse(my_obj);
    
        values.push(my_obj);

        
    }
    
    
    
    
    
    






   

    
    const pageCount=values ? Math.ceil(values.length/pageSize) :0
    if (pageCount === 1) return null;

    const pages = _.range(1,pageCount+1);
   
    arr = _(values).slice(0).take(pageSize).value();
    

    const pagination=(pageNo)=>{
        
        setCurrentPage(pageNo);
        
        const startIndex = (pageNo - 1)*pageSize;
        arr = _(values).slice(startIndex).take(pageSize).value();
        setdetail(arr)
        

    }


    
    


    return (
        <div className="app-container">  
        <table className='table table-bordered'>
            < thead className="thead-dark">
                <tr>
                    <th border="1"> Name</th>
                    <th> Mail Id</th>
                    <th> Phone Number</th>
                    <th> Office Address</th>
                    <th> Home Address</th>
                    
                </tr>
            </thead>
            <tbody>
                {   

                
                    detail && detail.map(item =>(
                        
                     <tr>
                         <td>{item.name}</td>
                         <td>{item.mail}</td>
                         <td>{item.number}</td>
                         <td>{item.officeaddress}</td>
                         <td>{item.homeaddress}</td>
                     </tr>
                     
                                       
                        
                       

                    ))
                }
            </tbody>
        </table>
        <nav className= "d-flex justify-content-center" >
            <ul className="pagination"> 
            {
                pages.map((page)=>(
                    <li className={
                        page === currentPage ? "page-item active" :"page-item"
                    }>
                        <p className="page-link" onClick={()=>pagination(page)}>{page}</p>
                        </li>
                ))
            }
             
             
            </ul>
        </nav>
     </div>          
    )
}
