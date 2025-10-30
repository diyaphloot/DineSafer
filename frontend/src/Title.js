// Title page
import image from './images/free/dinesafe.jpg';

export default function Foodborne() {


  return (
    <div className="container" style={{ justifyContent: "center", width: "90%", height: "400px", paddingTop:100 }}>
      <div className="card" style={{ height: "300px", padding: 10 }}>
              <img
                src={image}
                alt="Foodborne illness"
                style={{ width: 300, height: 300, cssFloat: 'left', margin: 0 }}
              />
              <div style={{ paddingBottom: 250 }}>
                <h3 style={{ color: 'darkblue', fontSize: 32, marginLeft: '620px', marginTop:'100px'}}>DineSafer</h3>
          <p style={{ fontSize: 18, textAlign:'center', color:'green', marginLeft: '0px'}}>
          Empowers people to make safe food choices and Keep away from Food Illness.</p>
          <p style={{ fontSize: 18, textAlign:'center', color:'green', marginLeft:'0px'}}>Happy and Safe Dining!!!</p>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
}
