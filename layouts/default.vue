<template>
  <div class="overflow-hidden">
    <Navbar
      :navItems="navItems"
      @mobileMenu="handleMobileMenu"
    />
    <slot />
    <MobileNavbar
      :navItems="navItems"
      :isMobileMenuOpen="isMobileMenuOpen"
      @mobileMenu="handleMobileMenu"
    />
    <Footer />
  </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
    data() {
      return {
        isMobileMenuOpen: false,
        navItems: [
          {
            name: "Home",
            path: "/"
          },
          {
            name: "Partners",
            path: "/partners"
          },
          {
            name: "Teledentistry",
            path: "/teledentistry"
          },
          {
            name: "Contact",
            path: "/contact"
          }
        ]
      };
    },
    methods: {
      handleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    }
  };
</script>