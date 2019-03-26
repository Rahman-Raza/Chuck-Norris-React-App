import React from 'react';
const Loading = ( ) => {
	return ( <div className="d-flex flex-column align-items-center">
               <strong>Making API Request...</strong>
               <div className="spinner-border" role="status" aria-hidden="true" ></div>              
            </div>)}

export default Loading;