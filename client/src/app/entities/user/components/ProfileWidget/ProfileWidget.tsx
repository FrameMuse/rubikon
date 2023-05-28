import "./ProfileWidget.scss"

import { Modal } from "react-modal-global"
import { useAppSelector } from "store/hooks"

import PopupUserAuth from "../../popups/PopupUserAuth"

function ProfileWidget() {
  const user = useAppSelector(state => state.user)
  return (
    <div className="profile-widget">
      <div className="profile-widget-img">
        <img src={user.avatar} alt="user's avatar" />
      </div>
      <div className="profile-widget-text">
        <div className="profile-widget-name">{user.name} {user.middleName}</div>
        <span>{user.specialty}</span>
      </div>
      {!user.signed && (
        <button className="ghost" type="button" onClick={() => Modal.open(PopupUserAuth)} />
      )}
    </div>
  )
}

export default ProfileWidget
