import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
    <footer>
      <div className="container-footer">
        <div className="row">
          {/* Primera Columna */}
          <div className="footer-col">
            <h4>Finegap</h4>
            <ul>
              <li>
                <Link to="#">Tutorials</Link> <br />
                <Link to="#">Programing</Link><br />
                <Link to="#">Development</Link><br />
                <Link to="#">Technology</Link>
              </li>
            </ul>
          </div>
          {/* Segunda Columna */}
          <div className="footer-col">
            <h4>Proteties</h4>
            <ul>
              <li>
                <Link to="#">Home</Link> <br />
                <Link to="#">About</Link> <br />
                <Link to="#">Contact US</Link> <br />
                <Link to="#">Team</Link><br />
                <Link to="#">Our_History</Link>
              </li>
            </ul>
          </div>
          {/* Tercera Columna*/}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="#">API Integration</Link><br />
                <Link to="#">Web Development</Link><br />
                <Link to="#">Mobile Development</Link>
              </li>
            </ul>
          </div>
          {/* Cuarta Columna*/}
          <div className="footer-col">
            <h4>Finegap</h4>
            <form action="">
              <input type="text" placeholder='Your Name' className='inputName'/>
              <input type="email" placeholder='Your Company Email' className='inputEmail'/>
              <input type="submit" value='Submit' className='inputSubmit'/>
            </form>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;
