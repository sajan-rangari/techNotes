import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Sajan R. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Nagpur City, Sajan R. Repairs provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Sajan R. Repairs
          <br />
          22 Kabir Nagar
          <br />
          Nagpur City, India
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Sajan Rangari</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
