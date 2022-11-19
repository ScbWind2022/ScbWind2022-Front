import { useState } from 'react'

import Avatar from '@mui/material/Avatar'
import MaterialButton from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { user as _user } from '../../state/actions'
import { EditUserForm } from './EditUserForm'
import { NewAccountForm } from './NewAccountForm'

export const Profile = () => {
  const dispatch = useDispatch()
  const [openFields, setOpenFields] = useState({
    account: false,
    history: false
  })

  const { user: initialValues, isOpen } = useSelector(_user.selectors.userSelector)
  const { firstname, surname, phone, account, currency } = initialValues

  const toggleDialog = () => {
    dispatch(_user.methods.toggleDialog(!isOpen))
  }
  const onEditProfile = (values) => {
    dispatch(_user.methods.editUser(values))
  }

  const onOpenAccount = () => {
    setOpenFields({ ...openFields, account: !openFields.account })
  }
  const onSubmitAccountForm = (values) => {
    dispatch(_user.methods.openNewAccount(values))
  }

  return (
    <>
      <Container maxWidth="md">
        <Title>Личный финансовый кабинет</Title>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Column background="#71c571">
              <Content>
                <strong>Основной Счет</strong>
                <div>{`${account} ${currency}`}</div>
              </Content>
            </Column>
            <Column>
              <Content>
                <strong>История</strong>
                <Button>Открыть историю</Button>
              </Content>
            </Column>
            <Column>
              <Content>
                <Button onClick={onOpenAccount}>открыть новый счет</Button>
                {openFields.account && <NewAccountForm onSubmit={onSubmitAccountForm} />}
              </Content>
            </Column>
          </Grid>
          <Grid item xs={8}>
            <Column>
              <UserBlock>
                <Avatar />
                <UserInfo>
                  <div>
                    <strong>{`${firstname} ${surname}`}</strong>
                    <span>{phone}</span>
                  </div>
                  <Button onClick={toggleDialog}>Редактирование профиля</Button>
                </UserInfo>
              </UserBlock>
            </Column>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={isOpen} onClose={toggleDialog}>
        <DialogTitle>Редактирование профиля</DialogTitle>
        <EditUserForm onSubmit={onEditProfile} initialValues={initialValues} onClose={toggleDialog} />
      </Dialog>
    </>
  )
}
const Title = styled.h1`
  font-size: 18px;
  text-align: center;
`
const Column = styled.div`
  background-color: ${({ background }) => background || '#fff'};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 14px;
`
const UserBlock = styled.div`
  display: flex;
  align-items: center;
`
const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 10px;

  strong {
    display: block;
  }
  span {
    font-size: 12px;
    color: #818c99;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
const Button = styled(MaterialButton)`
  font-size: 12px !important;
  border: 1px solid #f2f3f5 !important;

  &:hover {
    background-color: #f2f3f5 !important;
  }
`
