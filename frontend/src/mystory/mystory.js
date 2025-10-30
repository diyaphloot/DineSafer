// My Intro Story
import image1 from '../images/free/dineout.jpg';
import image2 from '../images/free/sickgirl.jpg';

export default function MyStory() {


  return (
    <div className="container" style={{ justifyContent: "center", width: "90%", padding: 0 }}>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image1}
          alt="Foodborne illness"
          style={{ width: 500, height: 500, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 600, paddingBottom: 250 }}>
          <h3 style={{ color: 'darkblue', fontSize: 24, marginLeft: '100px', marginTop:'200px'}}>Happy Family Dining!!!</h3>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image2}
          alt="Foodborne illness"
          style={{ width: 500, height: 500, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 700, paddingBottom:250}}>
          <h3 style={{ color: 'darkblue', fontSize: 24, marginTop: '200px' }}>Iam too sick to study...</h3>
          
        </div>
      </div> 
      <br/>
      <br/>
    </div>
  );
}
