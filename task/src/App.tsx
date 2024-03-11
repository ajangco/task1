import { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.length === 0 || address.length === 0 || age.length === 0 || date.length === 0) {
      setError(true);
    } else {
      setSubmittedData({
        fullName: fullName,
        address: address,
        age: age,
        date: date
      });
      setError(false);
    }
  };

  const handleDelete = () => {
    setSubmittedData(null); // Clear submitted data
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        {error && fullName.length <= 0 ?
          <label>Full Name can't be Empty</label> : ""}
        <div>
          <input placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        {error && address.length <= 0 ?
          <label>Address can't be Empty</label> : ""}
        <div>
          <input placeholder='Age' type='number' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        {error && age.length <= 0 ?
          <label>Age can't be Empty</label> : ""}
        <div>
          <input placeholder='BirthDate' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        {error && date.length <= 0 ?
          <label>Date can't be Empty</label> : ""}
        <div>
          <button type="submit">Submit</button>
          {submittedData && <button onClick={handleDelete}>Delete</button>} {/* Display delete button if data submitted */}
        </div>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>Age: {submittedData.age}</p>
          <p>BirthDate: {submittedData.date}</p>
        </div>
      )}
    </>
  );
}

export default App;
