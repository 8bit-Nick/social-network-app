import { useSelector } from 'react-redux';

import {
  getAboutMe,
  getContacts,
  getFullName,
  getLookingForAJob,
  getLookingForAJobDescription,
} from '../../../../store/selectors/profileSelectors';
import classes from './UserDescription.module.css';

const UserDescription = () => {
  const fullName = useSelector(getFullName);
  const aboutMe = useSelector(getAboutMe);
  const lookingForAJob = useSelector(getLookingForAJob);
  const lookingForAJobDescription = useSelector(getLookingForAJobDescription);
  const { facebook, instagram, github } = useSelector(getContacts);

  return (
    <div className={classes.userDescription}>
      <div>
        <div>
          <span className={classes.textStyle}>Name: </span>
          {fullName}
        </div>
        <div>
          <span className={classes.textStyle}>About me: </span>
          {aboutMe}
        </div>
        <div>
          <span className={classes.textStyle}>Open to work: </span>
          {lookingForAJob ? lookingForAJobDescription : 'Not looking for a job'}
        </div>
        <div>
          <span className={classes.textStyle}>Country: </span>
          Ukraine
        </div>
        <div>
          <span className={classes.textStyle}>Contacts: </span>
          <a href={facebook ? facebook : 'https://facebook.com'}>facebook </a>
          <a href={instagram ? instagram : 'https://instagram.com'}>
            instagram{' '}
          </a>
          <a href={github ? github : 'https://github.com'}>github</a>
        </div>
      </div>
    </div>
  );
};

export default UserDescription;
