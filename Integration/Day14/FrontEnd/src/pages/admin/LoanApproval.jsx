// Importing CSS file using 'use'
import { useEffect, useState } from 'react';
import '../../assets/css/LoanApproval.css';
import { getPendingLoans, updateLoanStatus } from '../../apis/Admin';
function LoanApproval() {
  const [change,setChange]=useState(true);
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoans((await getPendingLoans()).data);
    };
    fetchData();
  }, [change]);
  
  const handleApproval = async (id, isApproved) => {
    if (!isApproved) {
      console.log((await updateLoanStatus(id,"Rejected")).data);
    } 
    else {
      console.log((await updateLoanStatus(id,"Approved")).data);
    }
    setChange(!change);
    // You can perform further actions here, like updating the database, sending notifications, etc.
  };

  return (
    <div className="loan-approval-page">
      <h2>Pending Loan Approval</h2>
      <div className="loan-applications">
        {loans.map(application => (
          <div key={loans!=null && application.id} className="application-card">
            <h3>User Name: {loans!=null && application.appuser.name}</h3>
            <h3>Loan Name: {loans!=null && application.loan.name}</h3>
            <p>Amount: $ {loans!=null && application.loan.loanAmt}</p>
            <p>Interest Rate: {loans!=null && application.loan.rateOfIntrest}% per annum(fixed)</p>
            <p>Tenure: {loans!=null && application.loan.loanTenure} year&apos;s</p>
            <div className="approval-buttons">
              <button className="approval-buttonp" onClick={() => handleApproval(application.id, true)}>Approve</button>
              <button className="approval-buttonn" onClick={() => handleApproval(application.id, false)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoanApproval;