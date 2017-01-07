import React from 'react';

import {connect} from 'react-redux';

import {Header} from './header';
import {Footer} from './footer';
import {Cart} from './cart';
import {SEOAbout} from './seoabout';


class FoodItem extends React.Component {
    render() {
        return (
            <div>
        <div className="food-item-container col-xs-12 col-sm-4 col-md-3">
          <div className="food-item" data-food-id="{{ food_item.id }}" data-food-title="{{ food_item.title }}" data-food-price="{{ food_item.price }}">
            <div className="food-photo"><img className="img-responsive" src="{% static food_item.photo.url %}" /></div>
            <div className="food-text">
              <h4 className="food-title">
                <a role="button" data-toggle="collapse" href="#food-category-{{ food_category.id }}-item-{{ food_item.id }}-details" aria-expanded="false" aria-controls="food-category-{{ food_category.id }}-item-{{ food_item.id }}-details">{this.props.title}</a>
              </h4>
              <div className="food-description">
                <p>{this.props.description}</p>
              </div>
              <div className="food-details collapse" id="food-category-{{ food_category.id }}-item-{{ food_item.id }}-details">
              </div>
              <div className="food-tags">
                {'{'}% for food_tag in food_item.tags.all %{'}'}
                <span className="label label-warning">{'{'}{'{'} food_tag.title {'}'}{'}'}</span>
                {'{'}% endfor %{'}'}
              </div>
            </div>
            <div className="buttons-and-price-block row">
              <div>
                <div className="col-xs-4 price-block">
                  {'{'}% if food_item.raw_price != food_item.price %{'}'}
                  <p className="food-raw-price">{'{'}{'{'} food_item.raw_price|floatformat:"0" {'}'}{'}'}&nbsp;〒</p>
                  {'{'}% endif %{'}'}
                  <p className="food-price">{'{'}{'{'} food_item.price|floatformat:"0" {'}'}{'}'}&nbsp;〒</p>
                </div>
                <div className="col-xs-8">
                  <div className="quantity-buttons btn-group btn-group-justified btn-group-raised">
                    <a href="#" className="btn btn-primary quantity-button quantity-decrease invisible">
                      -
                      <div className="ripple-container" />
                    </a>
                    <a href="javascript:void(0)" className="btn quantity-counter invisible">0</a>
                    <a href="#" className="btn btn-primary quantity-button quantity-increase">
                      <i className="material-icons">add_shopping_cart</i>
                      <div className="ripple-container" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        )
    }
}


class FoodCategory extends React.Component {

    render() {
        const food_items = this.props.food_items.map((food_item) => {
            return <FoodItem key={food_item.id}
                             title={food_item.title}
                             description={food_item.description}/>
        });
        return (
        <div className="food-category" id={this.props.slug}>
        <div className="food-category-title">
          <h3>
            <a role="button" data-toggle="collapse" href="#food-items-{{ food_category.id }}" aria-expanded="{% if food_category.expanded %}true{% else %}false{% endif %}" aria-controls="food-items-{{ food_category.id }}">{this.props.title}
              <i className="pull-right collapse-arrow material-icons">keyboard_arrow_up</i>
            </a>
          </h3>
        </div>
        <div className="list-group food-items-container collapse{% if food_category.expanded %} in{% endif %}" id="food-items-{{ food_category.id }}">
          {'{'}% for food_item in food_category.fooditem_set.all %{'}'}
          {'{'}% if forloop.first %{'}'}
          {food_items}
          <div className="row">
            {'{'}% endif %{'}'}
            {'{'}% include 'food/_food-item.html' %{'}'}
            {'{'}% if forloop.last %{'}'}</div>{'{'}% endif %{'}'}
          {'{'}% endfor %{'}'}
        </div>
      </div>
        )
    }
}


class NavBar extends React.Component {
    render() {
        return(
            <div className="scrollbar navbar navbar-default navbar-fixed-top hidden">
        <div className="container">
          <div id="navbar-container" className="navbar-header">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a id="current_category" href="#" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                  <b className="caret" /></a>
                <ul className="dropdown-menu scrollable-menu">
                  <li><a href="#scroll-to-top">В начало</a></li>
                  <li className="divider" />
                  {'{'}% for food_category in object_list %{'}'}
                  {'{'}% if food_category.enabled and food_category.visible and food_category.fooditem_set.exists %{'}'}
                  <li><a href="#{{ food_category.slug }}">{'{'}{'{'} food_category.title {'}'}{'}'}</a></li>
                  {'{'}% endif %{'}'}
                  {'{'}% endfor %{'}'}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

        )
    }
}



class CarouselItem extends React.Component {
    render() {
        return (
            <div className="item"
                 style={{backgroundImage: 'url(' + this.props.image + ')'}}>
                <div className="carousel-caption">
                    <h3>{this.props.heading}</h3>
                    <p>{this.props.subheading}</p>
                </div>
            </div>

        )
    }
}


class Carousel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
        }
    }

    loadCarouselsFromServer() {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/banners/',
            dataType: 'json',
            success: (data) => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadCarouselsFromServer();
    }

    render() {
         const carousel_items = this.state.data.map((carousel_item) => {
            return <CarouselItem key={carousel_item.id}
                                 image={carousel_item.image}
                                 heading={carousel_item.heading}
                                 subheading={carousel_item.subheading}/>
        });
        return(
            <div>
                {carousel_items}
        <div id="banner_carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#banner_carousel" data-slide-to="{{ forloop.counter0 }}" className="{% if forloop.first %}active {% endif %}" />
          </ol>
          <div className="carousel-inner" role="listbox">
              {carousel_items}
          </div>
          <a className="left carousel-control" href="#banner_carousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#banner_carousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

        )
    }
}


class StickyBar extends React.Component {
    render() {
        return(
            <div>
        <div className="sticky_bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 center-block">
                <div className="sticky_bar_inner">
                  <form id="cart_form" action="{% url 'order:cart-update-view' %}" method="POST">
                    {'{'}% csrf_token %{'}'}
                    <div className="btn-group btn-group-justified btn-group-raised">
                      <a href="#" className="btn btn-primary" id="cart-overlay-button">
                        <span>
                          <span id="cart-total-price">0</span>
                          <span>&nbsp;〒&nbsp;&nbsp;&nbsp;</span>
                        </span>
                      </a>
                      <a className="order_button btn btn-danger" id="cart_form_submit_button" data-loading-text="Подождите..." disabled>&nbsp;&nbsp;&nbsp;Заказать</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky_bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 center-block">
                <div className="sticky_bar_inner">
                  <a id="gift_button" href="javascript:void(0)" className="center-block btn btn-raised btn-primary btn-fab">
                    <span className="available-gifts" data-gift-breakpoints="{{ view.get_gift_breakpoints|escapejs }}">
                      <i className="mdi mdi-gift gift-icon" aria-hidden="true" />
                      <span className="gifts-counter badge hidden" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        )
    }
}




class App extends React.Component {

    render() {
        // const menu_data = this.props.menu_data.map((food_category) => {
        //     return <FoodCategory key={food_category.slug}
        //                          title={food_category.title}
        //                          caption={food_category.slug}
        //                          food_items={food_category.food_itemsy}
        //     />
        // });

        return (
            <div>
                <Header />
                {/*<div className='container'>*/}
                    {/*<Carousel/>*/}
                    {/*{menu_data}*/}
                    {/*<SEOAbout/>*/}
                {/*</div>*/}
                {/*<NavBar />*/}
                {/*<Cart />*/}
                {/*<StickyBar />*/}
                <Footer />
            </div>
        );
    }
}


export const ConnectedApp = connect(
    function mapStateToProps(state) {
        return {
            // project: state.get('project'),
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            // selectVideo: videoSlug => dispatch(actions.selectVideo(videoSlug)),
            // selectLivestream: videoSlug => dispatch(actions.selectLivestream()),
            // switchToNextInPlaylist: () => dispatch(actions.switchToNextInPlaylist()),
        }
    }
)(App);