import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="border-y border-black mt-2 py-2">
      <ul className="flex justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ul className='mt-4'>
        <l1>
          <a
            className='underline'
            href="mailto:alexander.ag150@gmail.com">info@gmail.com</a>
        </l1>
        <li>
          <a
            className='underline underline-offset-2'
            href="https://www.instagram.com/manetatulyan/"
            target="_blank"
            rel="noopener noreferrer">Instagram</a>
        </li>
        <li>
          <a
            className='underline underline-offset-2'
            href="https://www.youtube.com/@ManeTatulyan"
            target="_blank"
            rel="noopener noreferrer">YouTube</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 
