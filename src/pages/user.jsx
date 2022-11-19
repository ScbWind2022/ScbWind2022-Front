import { Profile } from '../components/user'

const UserPage = () => {
  const data = {
    firstName: 'Ivan',
    surname: 'Ivanov',
    patronomyc: 'Ivanovich',
    phone: '+7 (999) 999-99-99',
    email: 'user@email.com',
    password: '111111'
  }
  return <Profile user={data} />
}

export default UserPage
