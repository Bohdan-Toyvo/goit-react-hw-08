import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.pageContainer}>
      <h2>Log In</h2>
      <LoginForm />
    </div>
  );
}
