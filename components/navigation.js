import Link from 'next/link';
import React from "react";

const navigation = () => {
    return ( 
    <ul>
         <li>
            <Link href="../pages/index.js">
                <a>Index</a>
            </Link>
        </li>
        <li>
            <Link href="../pages/about.js">
                <a>Index</a>
            </Link>
        </li>
        
    </ul>
    )
}

export default navigation;