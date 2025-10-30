// webpage for Restaurant based food illness
import image0 from '../images/free/contamination.png';
import image1 from '../images/free/diningout.jpg';
import image2 from '../images/free/sick_employee.jpg';
import image3 from '../images/free/safety.jpg';


export default function DineSafe() {

  const foodSafetySteps = [
  {
    title: 'Contamination from sick workers',
    description: 'In one study, 40% of restaurant outbreaks were linked to food handlers who were sick and continued to work. '
  },
  {
    title: 'Unsafe food handling',
    description: 'This includes cross-contamination, where bacteria spread from a contaminated surface to a clean one. A common example is using the same cutting board for raw meat and then for salad without washing it in between, says The Drinks Business. '
  },
  {
    title: 'Improper temperatures',
    description: 'Perishable foods that are not heated or cooled properly can allow bacteria to grow to dangerous levels.'
  },
  {
    title: 'Unsafe food sources',
    description: 'Using food from an unsafe source is a risk factor for illness.'
  },
  {
    title: 'Poor hygiene and sanitation',
    description: 'Dirty utensils, equipment, and surfaces can spread germs.'
  }
];


  return (
    <div className="container" style={{ justifyContent: "center", width: "90%", padding: 0 }}>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image0}
          alt="Foodborne illness"
          style={{ width: 250, height: 248, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 260 }}>
          <h3 style={{ color: 'darkblue', fontSize: 24, marginBottom: '0px'}}>Foodborne Illness</h3>
          <p style={{ fontSize: 16 }}>
          <ul> 
            <li style={{ color: 'darkred', fontWeight: 'bold', marginBottom: '11px' }}> <span style={{color:'black', fontWeight:'normal'}}>CDC estimates that each year roughly </span>1 in 6 Americans (or 48 million people) gets sick, 128,000 are hospitalized, and 3,000 die of foodborne diseases.</li>
            <li style={{ color: 'darkred', fontWeight: 'bold', marginBottom: '11px' }}> <span style={{color:'black', fontWeight:'normal'}}>Foodborne illnesses cost the U.S. about </span> $17.6 billion per year.</li>
            <li style={{ color: 'darkred', fontWeight: 'bold', marginBottom: '11px' }}> <span style={{color:'black', fontWeight:'normal'}}>Many of these illnesses occur as part of a</span> foodborne illness outbreak; 841 foodborne illness outbreaks were reported to CDC in 2017.</li>
            <li style={{ color: 'darkred', fontWeight: 'bold', marginBottom: '11px' }}> <span style={{color:'black', fontWeight:'normal'}}>More than half of all foodborne illness outbreaks in the United States are associated with</span> Restaurants, Schools and other food establishments.</li>
          </ul>
            </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image1}
          alt="Dine Safe"
          style={{ width: 250, height: 230, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 260 }}>
          <h3 style={{ color: 'darkblue', fontSize: 24, marginBottom: '0px'}}>Food Establishments</h3>
          <p style={{ fontSize: 16 }}>
          <ul> 
            <li style={{ color: 'darkred', fontWeight: 'bold', marginBottom: '11px' }}> <span style={{color:'black', fontWeight:'normal'}}>More than half of all foodborne illness outbreaks in the United States are associated with</span> Restaurants and other food establishments.</li>
            <li style={{ color: 'darkred', fontWeight: 'bold', marginBottom: '11px' }}> <span style={{color:'black', fontWeight:'normal'}}>Sick employees are a major cause, with a CDC study finding that </span> sick workers were linked to 40% of outbreaks.</li>
            <li style={{ color: 'darkred', fontWeight: 'bold', marginBottom: '11px' }}> <span style={{color:'black', fontWeight:'normal'}}>Illnesses at restaurants are most often caused by </span>Norovirus, Salmonella, and Clostridium perfringens, E. coli, Listeria, and Campylobacter.</li>
            <li style={{ color: 'darkred', fontWeight: 'bold', marginBottom: '11px' }}> <span style={{color:'black', fontWeight:'normal'}}>Even </span>school food service systems violate food safety regulations. </li>
          </ul>
            </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image2}
          alt="Foodborne illness"
          style={{ width: 250, height: 273, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 265 }}>
          <h3 style={{ color: 'darkblue', fontSize: 22 }}>Causes and Reasons</h3>
          <p style={{ fontSize: 18 }}>
          </p>
           <ul>
            {foodSafetySteps.map((step) => (
              <li key={step.title} style={{ marginBottom: '5px' }}>
                <strong style={{color:"black"}}>{step.title}:</strong> {step.description}
              </li>
            ))}
          </ul>
        </div>
      </div> 
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <img
          src={image3}
          alt="Foodborne illness"
          style={{ width: 250, height: 270, cssFloat: 'left', margin: 0 }}
        />
        <div style={{ marginLeft: 260 }}>
          <h3 style={{ color: 'darkblue', fontSize: 24 }}>Dine Safer</h3>
          <p style={{ fontSize: 16 }}>
            It is about healthy practices for food safety in restaurants. It focuses on consumer actions when eating at restaurants. Customers can safeguard themselves from food illness at restaurants, by
          <ul> 
            <li style={{ color: 'darkgreen', fontWeight: 'bold', marginBottom: '5px' }}>Proactively Checking Inspection Reports</li>
             
            <li style={{ color: 'darkgreen', fontWeight: 'bold', marginBottom: '5px' }}>Washing their hands before eating</li>
            
            <li style={{ color: 'darkgreen', fontWeight: 'bold', marginBottom: '5px' }}>Ensuring hot food is served hot and cold food is served cold</li>
          
            <li style={{ color: 'darkgreen', fontWeight: 'bold', marginBottom: '5px' }}>Send undercooked food back to be cooked further, refrigerate leftovers promptly</li>
          </ul>
          If you suspect that you have a foodborne illness from a restaurant, <span style={{fontWeight:"bold"}}>report to the local health department right away!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
