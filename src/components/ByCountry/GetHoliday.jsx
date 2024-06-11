import React from 'react';

function formatDate(isoDate) {

  const date = new Date(isoDate);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

return `${dayOfWeek} ${month}/${day}/${year}`;
}

function GetHoliday({ holiday }) {

  return (
    <div className='holidayContainer'>
      { holiday.length > 0 && ( <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Local Name</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {holiday.map((holidayItem) => (
            <tr className='holidayItem' key={holidayItem.date}>
              <td>{formatDate(holidayItem.date)}</td>
              <td>{holidayItem.localName}</td>
              <td>{holidayItem.name}</td>
            </tr>
          ))}
        </tbody>
      </table>  )}
   
  
      
    </div>
  );
}

export default GetHoliday;
