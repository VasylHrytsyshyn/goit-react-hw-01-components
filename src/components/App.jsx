import { Profile } from './Profile';
import PropTypes from 'prop-types';
import user from './Date/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}/>  
    </div>
  );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}