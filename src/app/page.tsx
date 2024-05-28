export default function Home() {
  return (
    <div>
      {/* <h1>NinjaDev Team</h1> */}
      <ul className="nav">
        <li>
          <a href="#">Homepage</a>
          <ul className="sub-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Collaborate</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Blogs</a>
          <ul className="sub-menu">
            <li>
              <a href="#">HTML & CSS</a>
            </li>
            <li>
              <a href="#">Javascript</a>
            </li>
            <li>
              <a href="#">Typescript</a>
            </li>
            <li>
              <a href="#">Reactjs</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Course</a>
          <ul className="sub-menu">
            <li>
              <a href="#">Cơ bản</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Nâng cao</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">Nextjs(Frontend)</a>
                </li>
                <li>
                  <a href="#">Nestjs(Backend)</a>
                </li>
                <li>
                  <a href="#">Deloy web app</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Create CV</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="button">Register</button>
    </div>
  );
}
