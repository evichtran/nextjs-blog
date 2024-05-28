export default function Home() {
  return (
    <div>
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
              <a href="#">Basic</a>
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
              <a href="#">Advanced</a>
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
      <h1>NinjaDev Team</h1>
      <h4>
        The team is developed by EvichTran - team leader, senior developer, a
        hacker and a wibu
      </h4>
      <button className="button2">
        <div className="glowing">
          <div className="glowing-inner"></div>
        </div>
        <div className="button-text">Click here to register!</div>
      </button>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        mollitia voluptatibus repudiandae dicta hic quisquam omnis in quibusdam
        cumque, earum autem, id explicabo a? Omnis id praesentium quaerat.
        Voluptatibus, aperiam!
      </h3>
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ninja-6853235-5625761.png?f=webp" />
      <img
        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}
