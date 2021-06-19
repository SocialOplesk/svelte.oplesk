<script>
   import store,{doLogin} from './store';

</script>

<div>
    <h1>Iam Contact</h1>
    <h2>isLogin {$store}</h2>
    {#if $store}
     <h2>now view contact this enable</h2>
    {/if}
    <button on:click={()=>doLogin(false)}>change</button>
</div>