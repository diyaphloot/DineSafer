//WebPage for info on Mobile Alerts
import image from '../images/free/alerts.png';

export default function Mobile() {
  return (
    <div className="container" style={{ justifyContent: "center", width: "90%", padding: 0 }}>
      <div className="card" style={{ height: "auto", paddingLeft: 150 }}>
        <img
          src={image}
          alt="mobile"
          style={{ width: 250, height: 450, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 300, height: 600, paddingTop: 20 }}>
          <h3 style={{ color: 'darkblue', fontSize: 24}}>DineSafer Mobile App</h3>
          <p style={{ fontSize: 18 }}>Safety On the Go... </p>
          <ul> 
            <li style={{ color: 'darkred', fontWeight: 'bold' }}> - Proximity Alerts of restaurants based on User location</li>
            <li style={{ color: 'darkred', fontWeight: 'bold' }}> - Add Restaurants to favorite list and get notified of violations</li>
            </ul>
            <br/>
          <h3 style={{ color: 'darkblue', fontSize: 24}}>Extend the data to serve the whole nation</h3>
          <p style={{ fontSize: 18 }}>Increase Safety Coverage.. </p>
            <br/>
        </div>
      </div>
      </div>
  );
}
