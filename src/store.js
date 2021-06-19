import {writable} from 'svelte/store';


export let isLogin = false;

let store = writable(isLogin);


export let doLogin = (v) =>{
    store.set(v);
};

export default store;
