// LoanDetailsPage.jsx
import { useEffect, useState } from 'react';
import '../../assets/css/Loan.css';
import { getLoan } from '../../apis/Common';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Custbtn from '../../components/Custbtn';
import { deleteLoan, updateLoan } from '../../apis/Admin';
import { addLoanToUser } from '../../apis/User';


// eslint-disable-next-line react-refresh/only-export-components
function Loan(props) {
  const navigate=useNavigate();
  const params=useParams();
  const [loan,setLoan]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoan((await getLoan(params.id)).data);
    };
    fetchData();
  }, [params.id]);
  const [formData, setFormData] = useState({
    aadar: null,
    pan:null,
    landdoc:null,
  });

  const handleAadarChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, aadar: file });
  };
  const handlePanChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, pan: file });
  };
  const handleLandDocChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, landdoc: file });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log((await addLoanToUser(props.id,params.id)).data);
    navigate("/myloans");
    console.log('Form submitted:', formData);
  };
  
  const deleteloan=async()=>{
    console.log((await deleteLoan(params.id)).data);
    navigate("/loans");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoan(prevLoan => ({
        ...prevLoan,
        [name]: value
    }));
};
const handleSubmitUpdate = async(e) => {
  e.preventDefault();
  // Add your submission logic here
  console.log((await updateLoan(params.id,loan)).data);
  navigate("/loans");
};

  return (
    <div className="loan-details-container">
      <h1 className="loan-details-heading">Loan Details</h1>

      <div className="loan-details-content">
        <p>Name: {loan!=null && loan.name}</p>
        <p>Description: {loan!=null && loan.description}</p>
        <p>Eligibility: {loan!=null && loan.eligibility}</p>
        <p>Loan Amount: $ {loan!=null && loan.loanAmt}</p>
        <p>Interest Rate: {loan!=null && loan.rateOfIntrest} % per annum</p>
        <p>Tenure: {loan!=null && loan.loanTenure} year&apos;s</p>
      </div>
      {props.roles=="ADMIN" && <Custbtn lable="Delete" func={deleteloan}/>}
      {props.roles=="ADMIN" &&
        <form className="loan-application-form" onSubmit={handleSubmitUpdate}>
        <label>
          Name
          <input type="text" name="name" value={loan!=null && loan.name}  onChange={handleInputChange}/>
        </label>
        <label>
          Description
          <input type="text" name="description" value={loan!=null && loan.description}  onChange={handleInputChange}/>
        </label>
        <label>
          Eligibility
          <input type="text" name="eligibility" value={loan!=null && loan.eligibility}  onChange={handleInputChange}/>
        </label>
        <label>
          Amount
          <input type="number" name="loanAmt" value={loan!=null && loan.loanAmt}  onChange={handleInputChange}/>
        </label>
        <label>
          RateOfIntrest
          <input type="text" name="rateOfIntrest" value={loan!=null && loan.rateOfIntrest}  onChange={handleInputChange}/>
        </label>
        <label>
          Tenure
          <input type="number" name="loanTenure" value={loan!=null && loan.loanTenure}  onChange={handleInputChange}/>
        </label>

        <button type="submit" className="apply-button">
          Update
        </button>
      </form>

      }
{props.roles=="USER" &&
      <form className="loan-application-form" onSubmit={handleSubmit}>
        <h2>Apply for the Loan</h2>
        Upload Documents:
        <label>
          Aadhar Card
          <input type="file" name="uploadFile" onChange={handleAadarChange} />
        </label>
        <label>
          Pan Card
          <input type="file" name="uploadFile" onChange={handlePanChange} />
        </label>
        <label>
          Land Documents
          <input type="file" name="uploadFile" onChange={handleLandDocChange} />
        </label>

        <button type="submit" className="apply-button">
          Apply
        </button>
      </form>
}
    </div>
  );
}
const mapstateToprops=(state)=>{
  return{
      id:state.id,
      roles:state.roles
  }
}
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapstateToprops,null)(Loan);
