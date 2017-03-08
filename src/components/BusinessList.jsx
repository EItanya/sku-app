import React from 'react'

const BusinessList = ({business}) => {
  const listItems = business.data.map((item) => {
    return(
      <li key={item.data.id}><p>{item.data.title}</p></li>
    );
  })

  return (
    <ul className="business-list">{listItems}</ul>
  );
}

export default BusinessList