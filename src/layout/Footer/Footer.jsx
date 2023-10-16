import Icon from "../../assets/icon.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#000854] text-base-content">
      <aside>
        <object className="h-28" data={Icon}></object>
        <p className="text-white">
          Bayarin PH
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title text-white">Services</header>
        <a className="link link-hover text-white">Branding</a>
        <a className="link link-hover text-white">Design</a>
      </nav>
      <nav>
        <header className="footer-title text-white">Company</header>
        <a className="link link-hover text-white">About us</a>
        <a className="link link-hover text-white">Contact</a>
      </nav>
      <nav>
        <header className="footer-title text-white">Legal</header>
        <a className="link link-hover text-white">Terms of use</a>
        <a className="link link-hover text-white">Privacy policy</a>
        <a className="link link-hover text-white">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
