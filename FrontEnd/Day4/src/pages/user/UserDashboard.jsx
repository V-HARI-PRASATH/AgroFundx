import { PieChart } from '@mui/x-charts/PieChart';
import "../../assets/css/UserDashboard.css";
import { useState } from 'react';

function UserDashboard()
{
    const loanData = [
        { id: 1, amount: 10000, status: 'Approved' },
        { id: 2, amount: 15000, status: 'Rejected' },
        { id: 3, amount: 20000, status: 'Pending' },
        { id: 3, amount: 20000, status: 'Pending' },
        { id: 3, amount: 20000, status: 'Pending' },
        { id: 3, amount: 20000, status: 'Pending' },
        // ... add more loan items as needed
      ];
      
    
      const [displayedLoans, setDisplayedLoans] = useState(loanData.slice(0, 3));
      const [showAll, setShowAll] = useState(false);
    
    //   const handleViewMore = () => {
    //     setDisplayedLoans(loanData);
    //     setShowAll(true);
    //   };
      const handleViewToggle = () => {
        if (showAll) {
          setDisplayedLoans(loanData.slice(0, 3));
        } else {
          setDisplayedLoans(loanData);
        }
        setShowAll(!showAll);
      };

      const initialTransactions = [
        { id: 1, date: '2022-01-01', amount: 1000, type: 'Deposit' },
        { id: 2, date: '2022-02-15', amount: -500, type: 'Withdrawal' },
        { id: 3, date: '2022-03-30', amount: 1500, type: 'Deposit' },
        { id: 3, date: '2022-03-30', amount: 1500, type: 'Deposit' },
        { id: 3, date: '2022-03-30', amount: 1500, type: 'Deposit' },
        // Add more initial transactions as needed
      ];
    
      const [transactions, setTransactions] = useState(initialTransactions);
      const [showAl, setShowAl] = useState(false);
    
      const handleViewMore = () => {
        setShowAl(true);
      };
    
      const handleViewLess = () => {
        setShowAl(false);
      };
    return(
        <div className="agriculture-funding-dashboard">
          <div className='dashboardleft'>
            {/*Total Funding: Display the total funding amount received by the user.*/}
            <div className='piechart'>
              <h2>Overview</h2>
              <PieChart
                  series={[
                  {
                  data: [
                  { id: 0, value: 10, label: 'Approved',color:"#06D6A0" },
                  { id: 1, value: 15, label: 'Pending',color:"#FFD166" },
                  { id: 2, value: 5, label: 'Rejected',color:"#FF6F61" },
                  ],
                  },
                  ]}
                  width={400}
                  height={200}
              />
            </div>
            {/* <div className='piechart'>
              
            </div> */}
            <div className="loan-list-container">
                <h2>Loan List</h2>
                <table className="loan-table">
                  <thead>
                    <tr>
                      <th>Loan ID</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedLoans.map((loan) => (
                      <tr key={loan.id}>
                        <td>{loan.id}</td>
                        <td>${loan.amount}</td>
                        <td>{loan.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            {loanData.length > 3 && (
              <button className="view-more-btn" onClick={handleViewToggle}>
                {showAll ? 'View Less' : 'View More'}
              </button>
            )}
          </div>
          <div className="transaction-history">
            <h2>Transaction History</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {showAl
                  ? transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.type}</td>
                      </tr>
                    ))
                  : transactions.slice(0, 3).map((transaction) => (
                      <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.type}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          {transactions.length > 3 && (
            <div className="view-buttons">
              {!showAl && (
                <button onClick={handleViewMore} className="view-more-btn">
                  View More
                </button>
              )}
              {showAl && (
                <button onClick={handleViewLess} className="view-less-btn">
                  View Less
                </button>
              )}
            </div>
          )}
        </div>
        </div>
        <div className='dashboardleft'>

        </div>
      </div>
    )
}

export default UserDashboard;