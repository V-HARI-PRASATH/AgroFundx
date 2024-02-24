// LoanDetailsPage.jsx
import { useState } from 'react';
import '../../assets/css/Loan.css';

function Loan() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    uploadFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, uploadFile: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="loan-details-container">
      <h1 className="loan-details-heading">Loan Details</h1>

      <div className="loan-details-content">
        <p>Loan Type: Agriculture Loan</p>
        <p>Loan Amount: $10,000</p>
        <p>Tenure: 24 months</p>
        <p>Interest Rate: 5%</p>
        {/* Add more loan details as needed */}
      </div>

      <form className="loan-application-form" onSubmit={handleSubmit}>
        <h2>Apply for the Loan</h2>

        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>

        <label>
          Loan Amount:
          <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} />
        </label>

        <label>
          Upload Documents:
          <input type="file" name="uploadFile" onChange={handleFileChange} />
        </label>

        <button type="submit" className="apply-button">
          Apply Now
        </button>
      </form>
    </div>
  );
}

export default Loan;
