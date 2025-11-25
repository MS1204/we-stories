const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;