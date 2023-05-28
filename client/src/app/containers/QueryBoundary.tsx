import PopupUserAuth from "app/entities/user/popups/PopupUserAuth"
import Column from "app/layouts/Column/Column"
import TextBox from "app/layouts/TextBox/TextBox"
import Button from "app/ui/kit/Button/Button"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"
import { ReactNode, Suspense } from "react"
import { Modal } from "react-modal-global"
import { useLocation } from "react-router-dom"
import { useAppSelector } from "store/hooks"
import { UserType } from "store/reducers/user/types"

import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"

interface QueryBoundaryProps {
  /**
   * - When provided `UserType`, will check if user is signed in and compare user type.
   * - When provided `boolean`, will only check if user is signed in.
   */
  userType?: UserType | boolean
  children: ReactNode
}

/**
 * Provides:
 * - Error boundary
 * - Suspense boundary
 * - User access level boundary
 */
function QueryBoundary(props: QueryBoundaryProps) {
  const errorDefinedFallback = (error: Error, reset: () => void) => (
    <ErrorCover>
      <Column justifyItems="center">
        <TextBox>
          <h4>{error.name}</h4>
          <p>{error.message}</p>
        </TextBox>
        <Button size="small" color="dark" onClick={reset}>Try again</Button>
      </Column>
    </ErrorCover>
  )
  const errorUnknownFallback = (
    <ErrorCover>
      <Column justifyItems="center">
        <TextBox>
          <h4>Ошибка</h4>
          <p>Что-то пошло не так.</p>
        </TextBox>

        <p>Попробуйте через несколько минут.</p>
      </Column>
    </ErrorCover>
  )
  const suspenseFallback = <LoaderCover />

  const user = useAppSelector(state => state.user)
  const userGuestFallback = (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <Column justifyItems="center">
        <br />
        <br />
        <br />
        <br />
        <TextBox>
          <h4>Вы не авторизованы</h4>
          <p>Чтобы начать, пожалуйста, авторизуйтесь.</p>
        </TextBox>

        <Button onClick={() => Modal.open(PopupUserAuth)}>Вход</Button>
      </Column>
    </div>
  )
  const userLackOfAccessFallback = (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <Column justifyItems="center">
        <TextBox>
          <h4>Доступ запрещён</h4>
          <p>У вас не достаточно прав.</p>
        </TextBox>
      </Column>
    </div>
  )

  console.log(user)

  const location = useLocation()

  if (props.userType != null) {
    if (!user.signed) return userGuestFallback

    if (typeof props.userType === "number") {
      if (user.type < props.userType) return userLackOfAccessFallback
    }
  }

  return (
    <ErrorBoundary fallback={(reset, error) => error ? errorDefinedFallback(error, reset) : errorUnknownFallback} deps={[location.pathname]}>
      <Suspense fallback={suspenseFallback}>
        {props.children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default QueryBoundary
