import { useState } from 'react';
import './App.css';
import Form from './components/ByCountry/Form';
import GetHoliday from './components/ByCountry/GetHoliday';

function App() {
  const [holiday, setHoliday] = useState([]);

  const getCountry = async (searchTerm) => {
    if (!searchTerm) return;
    try {
      const response = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${searchTerm}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        const simplifiedData = data.map(holiday => ({
          date: holiday.date,
          localName: holiday.localName,
          name: holiday.name
        }));
        setHoliday(simplifiedData);
      } else {
        setHoliday([]);
        console.log('Unexpected response format:', data);
      }
    } catch (err) {
      console.log(err);
      setHoliday([]);
    }
  };

  return (
    <div className='container'>
      <h1 className='header'>Holiday Calendar</h1>
      <Form holidaySearch={getCountry} />
      <GetHoliday holiday={holiday} />
    </div>
  );
}

export default App;
