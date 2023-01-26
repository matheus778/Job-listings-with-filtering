import './style.css';

export function Card () {
  return (
    <div className="card">
      <div className="info">
        <img src="https://images.unsplash.com/photo-1562176564-0280c730d87c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTEzMDI5OXx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60" alt="" />
        <div className="details">
          <div>
            <span>Photoshop</span>
            <a href="#">NEW</a>
            <a href="#">FETURED</a>
          </div>

          <h2>Senior Frontend Developer</h2>

          <div>
            <span>1d ago</span>
              <div className="dot"></div>
            <span>full time</span>
              <div className="dot"></div>
            <span>Usa only</span>
          </div>
        </div>
      </div>

      <div className="tags">
        <a href="#">Frontend</a>
        <a href="#">Senior</a>
        <a href="#">HTML</a>
        <a href="#">CSS</a>
        <a href="#">JavaScript</a>
      </div>
    </div>
    
  );
}