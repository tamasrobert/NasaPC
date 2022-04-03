<template>
  Logout
</template>

<script>
import AccountDataService from '../../services/AccountDataService'
export default {
    name: 'Logout',
    created: {
        Logout() {
            AccountDataService.Logout().then(() => {
                this.$router.push('/')
            })
        }
    }
}
</script>

<style>

</style>