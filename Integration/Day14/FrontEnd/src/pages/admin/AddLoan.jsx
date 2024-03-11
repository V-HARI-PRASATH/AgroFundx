// LoanDetailsPage.jsx
import { useState } from 'react';
import '../../assets/css/Loan.css';
import { useNavigate } from 'react-router-dom';
import { createLoan } from '../../apis/Admin';


// eslint-disable-next-line react-refresh/only-export-components
function AddLoan() {
    const navigate=useNavigate();
    const [loan,setLoan]=useState({
        "name": "",
        "description": "",
        "rateOfIntrest": 0,
        "loanTenure": 0,
        "eligibility": "",
        "loanAmt": 0
      })
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoan(prevLoan => ({
            ...prevLoan,
            [name]: value
        }));
    };
    const handleSubmit =async (e) => {
        e.preventDefault();
        // Add your logic for form submission here
        console.log((await createLoan(loan)).data);
        navigate("/loans");
    };

  return (
    <div className="loan-details-container">
      <h1 className="loan-details-heading">Add New Loan</h1>
      <form className="loan-application-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name"  onChange={handleInputChange}/>
        </label>
        <label>
          Description
          <input type="text" name="description"  onChange={handleInputChange}/>
        </label>
        <label>
          Eligibility
          <input type="text" name="eligibility"  onChange={handleInputChange}/>
        </label>
        <label>
          Amount
          <input type="number" name="loanAmt"  onChange={handleInputChange}/>
        </label>
        <label>
          RateOfIntrest
          <input type="text" name="rateOfIntrest"  onChange={handleInputChange}/>
        </label>
        <label>
          Tenure
          <input type="number" name="loanTenure"  onChange={handleInputChange}/>
        </label>

        <button type="submit" className="apply-button">
          Add Loan
        </button>
      </form>
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export default AddLoan;
