const apiHost = 'http://localhost:8000';


export const endpoints = {
    orders: `${apiHost}/api/orders/`,
    foodItems: `${apiHost}/api/food_items/`,
    foodCategories: `${apiHost}/api/food_categories/`,
    gifts: `${apiHost}/api/gifts/`,

};


export const restaurantSettings = {
    minimalOrderRequirement: 3000,
    workdayStart: '10:00',
    workdayEnd: '22:45',
};
