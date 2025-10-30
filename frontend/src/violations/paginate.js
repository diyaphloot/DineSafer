// Component for Card Pagination
import ReactPaginate from "react-paginate";
import React, {
  useEffect,
  useState
} from "react";
import styled from 'styled-components';
import Modal from './modal';



const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 2rem;
  padding: 0;
  border-radius: 50%;

  li {
    margin: 0 0.25rem;
  }

  a {
    padding: 0.5rem 0.75rem;
    border-radius: 50%;
    text-decoration: none;
    color: #e8e1e1ff;
    border1: 1px solid #ddd;
    font-size: 0.8rem; /* Smaller font size */
  }

  a:hover {
    background-color: #f0f0f0;
    color: #333;
  }

  li.active a {
    background-color: #eff2f5ff;
    color: white;
    border-color: #1e2022ff;
  }

  li.selected a {
    background-color: #7f8892ff;
  }


`;



function Paginate({items}) {

  const [showModal, setShowModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (item) => {
    setSelectedCardData(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCardData(null); // Clear selected card data on close
  };


  function Items({ currentItems }) {
      console.log('curr', currentItems);
    return (
      <div>
        <div className="card-container" >
          {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <div className="card" style={{display:"flex", justifyContent: "center"}}>
                  <div key={item.Establishment} style={{width:"200px", textAlign:'center'}}>
                    <div style={{height: '5rem', padding:0}}>
                      <h4 style={{margin:0, textAlign: 'center'}}>{item.Establishment}</h4>
                      <p style={{marginTop:0}}>{item.Address}, {item.City} {item.Zipcode}</p>
                    </div>
                    <hr/>
                    <h10>Active Violations: <span style={{color:'red', fontWeight: 'bold', fontSize: '18px'}}>{item.Violations!=='None'?item.count : 0}</span></h10>
                    <hr/>
                    <p>{item.Date} - {item.InspectionType}</p>
                    <button style={{padding: "5px 10px", fontSize: '0.8rem', display: 'block', margin: '0 auto'}} onClick={() => handleCardClick(item)}>View Details</button>
                  </div>
                </div>  
              ))
          ) : (
              <p></p>
          )}
        </div>
        
        {showModal && selectedCardData && (
        <Modal data={selectedCardData} onClose={handleCloseModal} />
        )}
      </div>
    );
  }

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([{Violations:"new,old"}]);
  console.log('curritem',currentItems);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };
  
  if (pageCount!=0) {
  return (
    
    <div >   
      <Items currentItems={currentItems} />
      <StyledReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={pageCount}
      onPageChange={handlePageClick}
    />
    </div>
  );
  }
}

// Add a <div id="container"> to your HTML to see the componend rendered.
return <PaginatedItems itemsPerPage={4} /> ;

};

export default Paginate;