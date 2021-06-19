<script>
    import {Router, Route, Link} from 'svelte-navigator';
    import About from './About.svelte';
    import Users from './Users.svelte';
    import Contact from './Contact.svelte';
</script>


<Router>
    <nav>
        <Link to='/'>about</Link>
        <Link to='users'>users</Link>
        <Link to='contact'>contact</Link>
    </nav>
  
    <Route exact><About /></Route>
    <Route path='users'><Users /></Route>
    <Route path='contact'><Contact /></Route>
</Router> 

