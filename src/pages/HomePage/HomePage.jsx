import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.homePageContainer}>
      <h1>Welcome to the Phonebook App!</h1>
      <p>Please register or log in to manage your contacts.</p>
    </div>
  );
}
