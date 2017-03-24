import React from 'react';

import {Header} from 'components/header';
import {FoodMenu} from 'components/menu';
import {SEOAbout} from 'components/seoabout';
import {Footer} from 'components/footer';

export class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <FoodMenu/>
                <SEOAbout/>
                <Footer />
            </div>
        )
    }
}