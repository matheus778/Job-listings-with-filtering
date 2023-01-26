import './style.css';


interface CardProps {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<string>;
  tools: Array<string>;
}

export function Card (props: CardProps) {
  const locahost = 'http://localhost:5173/src/data';

  let featuredBorderColor = props.featured ? 'var(--primary)': 'var(--cyan-100)'
  
  return (
    <div className="card" style={{
      borderColor: featuredBorderColor
    }}>
      <div className="info">
        <img src={`${locahost}${props.logo}`} alt="" />
        <div className="details">
          <div>
            <span>{props.company}</span>

            {props.new && <a href="#">NEW</a> }
            {props.featured &&  <a href="#">FEATURED</a> }

          </div>

          <h2>{props.position}</h2>

          <div>
            <span>{props.postedAt}</span>
              <div className="dot"></div>
            <span>{props.contract}</span>
              <div className="dot"></div>
            <span>{props.location}</span>
          </div>
        </div>
      </div>

      <div className="tags">
        <a href="#">{props.role}</a>

        <a href="#">{props.level}</a>

        {props.languages.map((lang, index) => {
          return (
            <a key={`${props.id}${index}`} href="#">{lang}</a>
          )
        })}

        {props.tools.map((tool, index) => {
          return (
            <a key={`${props.id}${index}`} href="#">{tool}</a>
          )
        })}
      </div>
    </div>
    
  );
}