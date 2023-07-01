import PropTypes from 'prop-types';
import style from './Profile.module.css';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className={style.container}>
      <div className={style.profile}>
        <div className={style.description}>
          <img src={avatar} alt="User avatar" className={style.avatar} />
          <p className={style.name}>{username}</p>
          <p className={style.tag}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>
        <ul className={style.stats}>
          <li className={style.items}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{stats.followers}</span>
          </li>
          <li className={style.items}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{stats.views}</span>
          </li>
          <li className={style.items}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
