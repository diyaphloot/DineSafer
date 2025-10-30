import react from 'react';

export default function Footr() {
return(
<div className='footer'>
              <footer className="footer">
                <div>
                <p>Data Sources:</p>
                <p>Foodborne Illness: <a href="https://www.cdc.gov/food-safety/about/index.html" target="_blank">CDC</a></p>
                <p>Food Inspection Reports: <a href="https://dhss.delaware.gov/dph/hsp/food-establishment-inspection-reports/?startLetter=x&stopLetter=x&sort=Establishment" target="_blank"> DHSS</a></p>
                </div>
                <p style={{fontSize:"16px"}}>Author: Diya Rajan</p>
                <p><a href="mailto:diyaphloot@gmail.com">diyaphloot@gmail.com</a></p>  
              </footer>
          </div>
); 
}         