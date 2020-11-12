<template>
    <div class="topnav">
      <nav>
          <img class="logo" src="../../assets/images/nbbpvi.png" alt="NBBPVI Logo">
          <router-link tag="a" class="active" to="/users">Users</router-link>
          <router-link tag="a" to="/equipment">Equipment</router-link>
          <router-link tag="a" to="/jurisdictions">Jurisdictions</router-link>
          <router-link tag="a" to="/insurance-carriers">Insurance</router-link>
      </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style>
/* Add a green background color to the top navigation */
.topnav {
  background-color:#2e8b57;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 25px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
nav a.router-link-active,
nav a.router-link-exact-active {
  background-color: #064b09;
  color: white;
}

.logo {
    height: 65px;
    width: auto;
    padding-left: 5px;
    padding-right: 5px;
}

</style>