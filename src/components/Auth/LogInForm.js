import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Image from '../UI/Image';

const LogInForm = () => {
  return (
    <section className="section-auth">
      <Card>
        <div className="auth-container">
          <Header
            header="Welcome back"
            paragraph="Welcome back! Please enter your details"
          />
          <form>
            <input type="email" placeholder="Email" required className="mb-6" />
            <input
              type="password"
              placeholder="Password"
              required
              className="mb-4"
            />
            <Link
              to="/sign-up"
              className="flex text-xs justify-center mb-6 font-bold underline"
            >
              Forgot password
            </Link>
            <Button>Log in</Button>
          </form>

          <Footer
            to="/sign-up"
            paragraph="Don't have an account?"
            link="Sign up for free"
          />
        </div>

        <Image />
      </Card>
    </section>
  );
};

export default LogInForm;
