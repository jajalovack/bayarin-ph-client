import Icon from "../../assets/icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#000854] text-base-content">
      <aside>
        <object className="h-28" data={Icon}></object>
        <p className="text-white font-bold">
          Bayarin PH
          <br />
          Providing reliable tech since 2023
        </p>
      </aside>
      <nav>
        <header className="footer-title text-white">Explore</header>
        <a className="link link-hover text-white">Services</a>
      </nav>
      <nav>
        <header className="footer-title text-white">Company</header>
        <Link to="/about" className="link link-hover text-white">
          About us
        </Link>
        <a className="link link-hover text-white">Contact</a>
      </nav>
      <nav>
        <header className="footer-title text-white">Legal</header>
        <a className="link link-hover text-white">Terms of use</a>
        <a className="link link-hover text-white">Privacy policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
