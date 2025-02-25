import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import LoginCreate from './LoginCreate.jsx';
import LoginPasswordLost from './LoginPasswordLost.jsx';
import LoginPasswordReset from './LoginPasswordReset.jsx';
import { UserContext } from '../../UserContext.jsx';
import styles from './Login.module.css';
import NotFound from '../NotFound.jsx';

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
