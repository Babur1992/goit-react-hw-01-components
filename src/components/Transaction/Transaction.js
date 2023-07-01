import PropTypes from 'prop-types';
import style from './Transaction.module.css';

export default function Transaction(id, type, amount, currency) {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.typeLict}>
          <th className={style.type}>Type</th>
          <th className={style.type}>Amount</th>
          <th className={style.type}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.body}>
        <tr>
          <td className={style.text}>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td className={style.text}>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
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
