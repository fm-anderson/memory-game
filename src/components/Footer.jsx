function Footer() {
  return (
    <footer className="flex w-full justify-between p-2">
      <div className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a target="_blank" href="#">
          LINK
        </a>
      </div>
    </footer>
  );
}

export default Footer;
