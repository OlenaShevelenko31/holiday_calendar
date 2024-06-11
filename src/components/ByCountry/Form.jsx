import { useState } from 'react';

function Form({ holidaySearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    holidaySearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='formInput'
        name="searchTerm"
        value={searchTerm}        
        onChange={handleChange} 
        placeholder="Enter country code (e.g., US, CA, DE)" 
      />
      <input className='submitBtn' type="submit" />
    </form>
  );
}

export default Form;
