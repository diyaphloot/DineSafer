// Webpage for TechStack
import image1 from '../images/free/react.svg';
import image2 from '../images/free/Nodejs.png';
import image3 from '../images/free/Expressjs.png';
import image4 from '../images/free/Mysql.png';

export default function Techstack() {


  return (
    <div className="container" style={{ justifyContent: "center", width: "90%", padding: 0 }}>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image1}
          alt="Reactjs"
          style={{ width: 100, height: 100, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 150 }}>
          <h3 style={{ color: 'darkblue', fontSize: 24, marginBottom: '0px'}}>ReactJS</h3>
          <p style={{ fontSize: 16 }}>
          ReactJS is used for the frontend web application.
          </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image2}
          alt="Nodejs "
          style={{ width: 100, height: 100, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 150 }}>
          <h3 style={{ color: 'darkblue', fontSize: 22 }}>NodeJS</h3>
          <p style={{ fontSize: 18 }}>
            NodeJS is used as the server-side runtime engine for the backend
          </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image3}
          alt="Express"
          style={{ width: 100, height: 100, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 150 }}>
          <h3 style={{ color: 'darkblue', fontSize: 24 }}>ExpressJS</h3>
          <p style={{ fontSize: 16 }}>
            Express Framework is used as the middleware for API server that serves the inspection data to client apps.
          </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image4}
          alt="Mysql"
          style={{ width: 100, height: 100, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 150 }}>
          <h3 style={{ color: 'darkblue', fontSize: 24 }}>MySQL</h3>
          <p style={{ fontSize: 16 }}>
            MySQL is used as the database server that holds food safety inspection data.
          </p>
        </div>
      </div>
    </div>
  );
}
