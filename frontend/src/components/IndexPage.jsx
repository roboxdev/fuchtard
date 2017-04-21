import React from 'react';
import MediaQuery from 'react-responsive';

import FoodMenu from 'components/FoodMenu';
import SEOAbout from 'components/SEOAbout';

export class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery maxWidth={960}>
                    <FoodMenu/>
                </MediaQuery>
                <SEOAbout/>
            </div>
        )
    }
}


export default IndexPage;