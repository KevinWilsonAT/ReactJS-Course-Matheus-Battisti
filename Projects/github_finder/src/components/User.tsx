import { UserProps } from '../types/user';
import {MdLocationPin} from 'react-icons/md';
import {Link} from 'react-router-dom';

import classes from './User.module.css';

const User = ({login, avatar_url, followers, following, location}: UserProps) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && (
        <p className={classes.location}>
            <MdLocationPin />
            <span>{location}</span>
        </p>
        )}
        <div className={classes.stats}>
            <div>
                <p className={classes.number}>Followers:</p>
                <p>{followers}</p>
            </div>
            <div>
                <p className={classes.number}>Following</p>
                <p>{following}</p>
            </div>
        </div>
        <Link to={`/repos/${login}`}>Best projects</Link>
    </div>
  )
}

export default User