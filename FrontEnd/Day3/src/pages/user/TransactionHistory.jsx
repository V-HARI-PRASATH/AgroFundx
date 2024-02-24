// TransactionHistory.jsx
import { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import '../../assets/css/TransactionHistory.css';

const transactions = [
    { id: 1, type: 'Loan Withdrawn', amount: 1000, date: '2024-02-23' },
    { id: 2, type: 'Money Paid', amount: 500, date: '2024-02-24' },
    { id: 3, type: 'Loan Withdrawn', amount: 1500, date: '2024-02-25' },
    { id: 4, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    { id: 5, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    { id: 6, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    { id: 7, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    { id: 8, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    { id: 9, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    { id: 10, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    { id: 11, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    { id: 12, type: 'Money Paid', amount: 800, date: '2024-02-26' },
    
    // Add more transactions as needed...
  ];

const TransactionHistory = () => {
  const [visibleTransactions, setVisibleTransactions] = useState(10);

  const handleViewMore = () => {
    setVisibleTransactions((prevCount) => prevCount + 10);
  };

  return (
    <div className="history-container">
      <h1 className="history-heading">History of Transactions</h1>
      <Table className="history-table">
        <TableHead>
          <TableRow className="history-header">
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.slice(0, visibleTransactions).map((transaction) => (
            <TableRow
              key={transaction.id}
              className={transaction.type === 'Loan Withdrawn' ? 'withdrawn-entry' : 'paid-entry'}
            >
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {visibleTransactions < transactions.length && (
        <Button
          variant="contained"
          className="view-more-button"
          onClick={handleViewMore}
          
        >
          View More
        </Button>
      )}
    </div>
  );
};

export default TransactionHistory;
