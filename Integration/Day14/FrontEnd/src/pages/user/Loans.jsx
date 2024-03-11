// AgricultureLoanSchemes.jsx
import { Link } from 'react-router-dom';
import '../../assets/css/Loans.css';
import { getAllLoans } from '../../apis/Common';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Custbtn from '../../components/Custbtn';

// eslint-disable-next-line react-refresh/only-export-components
const Loans = (props) => {
  const [schemes,setSchemes]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setSchemes((await getAllLoans()).data);
    };
    fetchData();
  }, []);
  return (
    <div className="schemes-container">
      <h1 className="schemes-heading">Agriculture Loan Schemes</h1>
      {props.roles=="ADMIN" && <center><Link to="/addloan"><Custbtn lable="Add New Loan"/></Link></center>}
      <div className="schemes-list">
        {schemes!=null && schemes!=undefined && schemes.map((scheme) => (
          <Link to={`/loan/${scheme.id}`} key={scheme.id} className="scheme-card">
            <h2>{scheme.name}</h2>
            <p className="scheme-description">{scheme.description}</p>
            <div className="scheme-details">
              <p>
                <strong>Eligibility:</strong> {scheme.eligibility}
              </p>
              <p>
                <strong>Loan Amount:</strong>$ {scheme.loanAmt}
              </p>
              <p>
                <strong>Interest Rate:</strong> {scheme.rateOfIntrest} % pre annum (fixed)
              </p>
              <p>
                <strong>Loan Tenure:</strong> {scheme.loanTenure} year&apos;s
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
      roles:state.roles
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapstateToprops,null)(Loans);
