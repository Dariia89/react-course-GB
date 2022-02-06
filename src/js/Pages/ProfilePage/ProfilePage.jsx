import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { profileSelector, toggleVisible } from "../../../store/profile";
import './ProfilePage.scss';
import ProfileForm from "../../ProfileForm/ProfileForm";

const useStyles = makeStyles(() => {
  return {
    main: {
      background: 'rgb(176, 196, 222)',
      minHeight: '90vh',
      padding: '40px 40px',
    },
  };
});

export const ProfilePage = () => {
  const s = useStyles();
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch();

    return (
      <div className={s.main}>
        <h1>Profile Page</h1>
        <div className="profile-container">
          <div>
            <Checkbox
              icon={<RemoveRedEyeOutlinedIcon />}
              checkedIcon={<VisibilityOffOutlinedIcon />}
              onClick={() => dispatch(toggleVisible())}
            />
            <br />
            {profile.isVisible && (
              <div className="user-info_container">
                <p><span>Фамилия:</span> {profile.lastName ?? 'Не указано'}</p>
                <p><span>Имя:</span> {profile.firstName ?? 'Не указано'}</p>
                <p><span>Город:</span> {profile.city ?? 'Не указан'}</p>
                <p><span>Номер телефона:</span> {profile.phone ?? 'Не указан'}</p>
              </div>
            )}
          </div>

          <ProfileForm {...profile} className="user-info_form-container" />
        </div>
      </div>
    );
  };