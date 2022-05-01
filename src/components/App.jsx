import { Profile } from './Profile';
import { Statistics } from './Statistics';

import user from './Date/user.json';
import data from './Date/data.json';

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
    </div>
  );
};

