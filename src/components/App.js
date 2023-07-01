import statsData from './data.json';
import user from './user.json';
import friends from './friends.json';
import trunsaction from './transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsLIst from './FriendsLIst/FriendsLIst';
import Transaction from './Transaction/Transaction';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <div>
        <Statistics title={statsData.title} stats={statsData.stats} />
      </div>

      <div>
        <FriendsLIst friends={friends} />
      </div>

      <div>
        <Transaction
          id={trunsaction.id}
          tupe={trunsaction.type}
          amount={trunsaction.amount}
          currency={trunsaction.currency}
        />
      </div>
    </div>
  );
}
