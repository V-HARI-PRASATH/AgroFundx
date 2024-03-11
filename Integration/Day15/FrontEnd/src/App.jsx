import './App.css'
import CustNavBar from './components/CustNavBar';
import CustSideBar from './components/CustSideBar';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import UserProfile from './pages/user/UserProfile';
import UserDashboard from './pages/user/UserDashboard';
import Home from './pages/auth/Home';
import About from './pages/auth/About';
import TransactionHistory from './pages/user/TransactionHistory';
import Loans from './pages/user/Loans';
import Loan from './pages/user/Loan';
import AdminDashboard from './pages/admin/AdminDashboard';
import LoanApproval from './pages/admin/LoanApproval';
import AddLoan from './pages/admin/AddLoan';
import MyLoans from './pages/user/MyLoans';

const Navi=()=>{
  const location=useLocation();
  if(location.pathname==="/login" || location.pathname==="/signup")
  {
    return null;
  }
  return(
    <>
      <CustNavBar/>
      <CustSideBar/>
    </>
  )
}
function App() {

  return (
    <div className='bg'>
    <BrowserRouter>
      <Navi/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path='/profile' Component={UserProfile}/>
        <Route path='/dashboard' Component={UserDashboard}/>
        <Route path='/admindashboard' Component={AdminDashboard}/>
        <Route path='/transactionhistory' Component={TransactionHistory}/>
        <Route path='/about' Component={About}/>
        <Route path='/loans' Component={Loans}/>
        <Route path='/loan/:id' Component={Loan}/>
        <Route path='/loanapproval' Component={LoanApproval}/>
        <Route path='/addloan' Component={AddLoan}/>
        <Route path='/myloans' Component={MyLoans}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App