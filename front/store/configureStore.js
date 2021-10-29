const {createWrapper} = require('next-redux-wrapper');

const configureStore = () =>{

}

const wrapper = createWrapper(configureStore,{
    // debug해놓으면, 개발할 때 redux에 관한 설명이 좀 더 자세하게 나옴.
    debug : process.env.NODE_ENV === 'development'
});

export default wrapper;