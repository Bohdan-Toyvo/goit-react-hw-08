import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div className={css.pageContainer}>
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
}
