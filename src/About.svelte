<script>
   import {useNavigate} from 'svelte-navigator';
   import store, {doLogin} from './store';
    
   let navigate = useNavigate();

   let doRedirect = () =>{
      navigate('users');   
   };
</script>

<div>
   <h1>Iam About</h1>
   <h2>isLogin: {$store}</h2>
   {#if $store}
    <h3>welcome to de app</h3>
    {:else}
    <h3>...</h3>
   {/if}

   <button on:click={()=>doLogin(true)}>change</button>
   <button on:click={()=>doRedirect()}>redirect</button>
</div>