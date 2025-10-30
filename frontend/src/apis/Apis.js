// Webpage for Info on Foodborne Illness
export default function Foodborne() {


  return (
    <div className="container" style={{ justifyContent: "center", width: "90%", padding: 0 }}>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <div style={{ marginLeft: 10 }}>
          <h2 style={{ color: 'darkblue', fontSize: 22}}>Community Collaboration</h2>
          <p style={{ fontSize: 16 }}>
          The following APIs are exposed for public consumption of the Food Safety Inspection Reports data, 
          saving development time and effort for other students and enthusiasts. This enables them to quickly and efficiently
          build enhanced features and/or even to build new better products to create more awareness and safeguard our people from the food illnesses. </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <h2 style={{ width: 100, height: 100, cssFloat: 'left', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Search Business
        </h2>
        <div style={{ marginLeft: 150 }}>
          <h2 style={{ color: 'darkblue', fontSize: 22}}>GET /api/search</h2>
          <p style={{ fontSize: 16 }}>
          API endpoint to Search Establishments with Inspection details. </p>
          <p>Sample Query: GET /api/search?establishment=dunkin&city=newark</p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
        <h2 style={{ width: 100, height: 100, cssFloat: 'left', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
            Inspection Graph
        </h2>
        <div style={{ marginLeft: 150 }}>
          <h2 style={{ color: 'darkblue', fontSize: 22}}>GET /api/graph</h2>
          <p style={{ fontSize: 16 }}>
            API endpoint to Retrieve Inspection metrics by year. </p>
          <p>  Sample Query: "GET /api/graph?year=2025" </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
         <h2 style={{ width: 100, height: 100, cssFloat: 'left', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
            Top 10 Violators
        </h2>
        <div style={{ marginLeft: 150 }}>
          <h2 style={{ color: 'darkblue', fontSize: 22 }}>GET /api/violators</h2>
          <p style={{ fontSize: 16 }}>
             API endpoint to Retrieve top 10 Violaters by City.</p>
          <p> Sample Query: "GET /api/graph?year=2025" </p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="card" style={{ height: "auto", padding: 10 }}>
         <h2 style={{ width: 100, height: 100, cssFloat: 'left', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
            DE Cities
        </h2>
        <div style={{ marginLeft: 150 }}>
          <h2 style={{ color: 'darkblue', fontSize: 22 }}>GET /api/cities</h2>
          <p style={{ fontSize: 16 }}>
            API endpoint to Retrieve all the cities in the state of DE.
           </p>
        </div>
      </div>
    </div>
  );
}
