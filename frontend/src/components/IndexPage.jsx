import React from 'react';
import MediaQuery from 'react-responsive';

import Header from 'components/Header';
import FoodMenu from 'components/FoodMenu';
import SEOAbout from 'components/SEOAbout';
import Footer from 'components/Footer';

class IndexPage extends React.Component {
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


export default IndexPage;