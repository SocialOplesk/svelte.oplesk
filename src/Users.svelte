<script>
   import {useNavigate} from 'svelte-navigator';
   import axios from 'axios';
   import store, {doLogin} from './store';    
   import { onMount } from 'svelte';
   
   let navigate = useNavigate();   
   let extras = '?email=baz@gmail.com&pass=baz';
   let endpoint = 'https://script.google.com/macros/s/AKfycbxjbD02RhZFlNW7LNg1ivvZWZpiXOELh67jEbkOa6LkbCBRY8SW/exec'+extras;
   let email, pass;
   
   onMount(()=>{
       if(!$store){
          navigate('/')
       }
   });

   let doLogout = () =>{
       doLogin(false);
       navigate('/');
   }

   let fetchData = (async()=>{
     try{
        let res = await axios.post(endpoint);
        email = res.data.email;
        pass = res.data.pass;           
     }catch(err){
         console.log(err);
     }   
   })();
</script>

<div>
    <h1>welcome to test</h1>
    <h1>islogin: {$store}</h1>
    <button on:click={()=>doLogout()}>logout</button> 
    {#if $store}
      {#await fetchData then data}
      <div>{email}</div>
      <div>{pass}</div>
      {/await} 
    {/if} 
</div>