import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export function FriendList({friends}) {
    return (
        <ul className={style.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li className={style.item} key = {id}>
                        <span className={style.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
                        <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={style.name}>{name}</p>
                    </li>
                )
            })}
        </ul>
    )
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}