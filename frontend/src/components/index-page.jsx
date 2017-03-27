import React from 'react';
import MediaQuery from 'react-responsive';

import {Header} from 'components/header';
import {FoodMenu} from 'components/menu';
import {SEOAbout} from 'components/seoabout';
import {Footer} from 'components/footer';

export class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <MediaQuery maxWidth={960}>
                    <FoodMenu/>
                </MediaQuery>

                <SEOAbout/>
                <Footer />
            </div>
        )
    }
}