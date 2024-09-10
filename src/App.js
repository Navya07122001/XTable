
import './App.css';
import data from './data';
import { useEffect, useState } from 'react';
function App() {
  const [data1, setData] = useState(data);
  const handleSortDate = () => {
    const res = [...data1].sort((a, b) => new Date(b.date) - new Date(a.date))
    setData(res)

  }
  const handleSortViews = () => {

    const res = [...data1].sort((a, b) => b.views - a.views)
    setData(res)
  }


  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleSortDate}>Sort By Date</button>
      <button onClick={handleSortViews}>Sort By Views</button>
      <table>

        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {
          data1.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
