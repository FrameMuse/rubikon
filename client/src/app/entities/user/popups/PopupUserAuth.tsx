import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import TextBox from "app/layouts/TextBox/TextBox"

import AuthPrompt from "../components/AuthPrompt/AuthPrompt"

function PopupUserAuth() {
  return (
    <PopupLayout width="25em">
      <TextBox>
        <h4>Вход</h4>
        <p>Войдите чтобы получить доступ к сайту.</p>
      </TextBox>
      <AuthPrompt
        githubLink="github"
        googleLink="google"
        facebookLink="facebook"
      />
    </PopupLayout>
  )
}

export default PopupUserAuth
