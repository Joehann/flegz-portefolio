import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Flegz Music</div>
      <ul>
        <li>
          <Link href="/main">
            <a>Un artiste musical multidisciplinaire</a>
          </Link>
        </li>
        <li>2022</li>
        <li>Médias</li>
        <li>Contacts & crédits</li>
      </ul>
    </nav>
  );
};

export default Navbar;
