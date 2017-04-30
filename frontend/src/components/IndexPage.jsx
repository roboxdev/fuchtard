import React from 'react';

import TiledFoodMenu from 'components/TiledFoodMenu';
import SEOAbout from 'components/SEOAbout';

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