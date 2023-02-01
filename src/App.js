import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  console.log(data)


  return (
    <div className="App">

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>

              <th>Name</th>
              <th>Contact</th>
              <th>City</th>
              <th>Suite</th>
              <th></th>
            </tr>
          </thead>
          {
            data.map(dataa => <tbody>

              <tr className="hover">

                <td>{dataa.name}</td>
                <td>{dataa.address.street}</td>
                <td>{dataa.address.city}</td>
                <td>{dataa.address.suite}</td>
                <td><label htmlFor="my-modal-3" className="btn btn-sm bg-orange-600 border-none">open modal</label></td>
              </tr>


              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                 <div className=' grid grid-cols-2'>
                 <div className=' m-6 text-xl'>
                  <p className=' p-3'><span className=' font-semibold'>Name :</span>{dataa.name}</p>
                  <p className=' p-3'><span className=' font-semibold'>UserName :</span>{dataa.username}</p>
                  <p className=' p-3'><span className=' font-semibold'>Email :</span>{dataa.email}</p>
                  <p className=' p-3'><span className=' font-semibold'>Phone :</span>{dataa.phone}</p>
                  </div>
                  <div className=' m-6 text-xl'>
                  <p className=' p-3'><span className=' font-semibold'>Website :</span>{dataa.website}</p>
                  <p className=' p-3'><span className=' font-semibold'>Company Name :</span>{dataa.company.name}</p>
                  <p className=' p-3'><span className=' font-semibold'>Company Details :</span>{dataa.company.catchPhrase}</p>
                  <p className=' p-3'><span className=' font-semibold'>Company BS :</span> {dataa.company.bs}</p>
                  </div>
                 </div>
                  
                </div>
              </div>


            </tbody>
            )
          }
        </table>
      </div>

    </div>
  );
}


export default App;
