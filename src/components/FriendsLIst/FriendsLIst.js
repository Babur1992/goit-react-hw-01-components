import PropTypes from 'prop-types';
import styles from './Friends.module.css';

// export default function FriendsList({ friends }) {
//   return (
//     <ul className={styles.list}>
//       {friends.map(friend => (
//         <li key={friend.id} className={styles.item}>
//           <span className={styles.status}></span>
//           <img
//             className={styles.avatar}
//             src={friend.avatar}
//             alt="User avatar"
//             width="48"
//           />
//           <p className={styles.name}>{friend.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.length ? (
        friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span className={styles.status}></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))
      ) : (
        <p>NOT</p>
      )}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
