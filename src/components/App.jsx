import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';

import user from './Date/user.json';
import data from './Date/data.json';
import friends from './Date/friends';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats} />
      <Statistics
        title={'Upload stats'}
        stats={data}
      />
      <FriendList friends={friends} />,
    </div>
  );
};

