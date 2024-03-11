// AgricultureLoanSchemes.jsx
import { Link } from 'react-router-dom';
import '../../assets/css/Loans.css';
import { getUserLoans } from '../../apis/Common';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
const MyLoans = (props) => {
  const [schemes,setSchemes]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setSchemes((await getUserLoans(props.id)).data);
    };
    fetchData();
  }, []);
  return (
    <div className="schemes-container">
      <h1 className="schemes-heading">My Loan&apos;s</h1>
      <div className="schemes-list">
        {schemes!=null && schemes!=undefined && schemes.map((scheme) => (
          <Link to={`/myloan/${scheme.loan.id}`} key={scheme.loan.id} className="scheme-card">
            <h2>{scheme.loan.name}</h2>
            <p className="scheme-description">{scheme.loan.description}</p>
            <div className="scheme-details">
              <p>
                <strong>Eligibility:</strong> {scheme.loan.eligibility}
              </p>
              <p>
                <strong>Loan Amount:</strong>$ {scheme.loan.loanAmt}
              </p>
              <p>
                <strong>Interest Rate:</strong> {scheme.loan.rateOfIntrest} % pre annum (fixed)
              </p>
              <p>
                <strong>Loan Tenure:</strong> {scheme.loan.loanTenure} year&apos;s
              </p>
              <p>
                <strong>Status:</strong> {scheme.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
const mapstateToprops=(state)=>{
  return{
      id:state.id
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapstateToprops,null)(MyLoans);
