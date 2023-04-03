import React from 'react'
import { useParams } from 'react-router-dom';
function PageLink() {
    let { pageslink } = useParams();
    console.log(pageslink);
    return (
        <div>
            404 not found
        </div>
    );
}

export default PageLink;