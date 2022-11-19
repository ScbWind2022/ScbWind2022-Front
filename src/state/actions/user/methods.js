// import { toast } from 'react-toastify'

import { setOpenDialog, setUserInfo } from './store'

export const editUser = (values) => async (dispatch) => {
  try {
    // Запрос на сервер
    // const request = await API
    // Сетать данные с сервера
    dispatch(setUserInfo(values))
  } catch (error) {
    // Обработка ошибки
    // toast.error('Ошибка редактировани Профиля')
  }
  dispatch(setOpenDialog(false))
}
export const openNewAccount = (value) => async () => {
  try {
    // Запрос на сервер
  } catch (error) {
    // Обработка ошибки
  }
}

export const toggleDialog = (state) => (dispatch) => {
  dispatch(setOpenDialog(state))
}
