import React from 'react';

import TiledFoodMenu from './TiledFoodMenu';
import SEOAbout from './SEOAbout';

export class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <TiledFoodMenu/>
                <SEOAbout/>
            </div>
        )
    }
}


export default IndexPage;