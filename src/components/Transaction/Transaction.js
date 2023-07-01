import PropTypes from 'prop-types';
import style from './Transaction.module.css';

export default function Transaction() {
  const transactionData = [
    { type: 'Invoice', amount: 125, currency: 'USD' },
    { type: 'Withdrawal', amount: 85, currency: 'USD' },
  ];

  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.typeList}>
          <th className={style.type}>Type</th>
          <th className={style.type}>Amount</th>
          <th className={style.type}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.body}>
        {transactionData.length > 0 ? (
          transactionData.map((transaction, index) => (
            <tr key={index}>
              <td className={style.text}>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No transaction data available.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
