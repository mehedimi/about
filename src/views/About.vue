<template>
    <div class="container">
        <div class="is-row">
            <div class="is-col is-30">
                <Avatar></Avatar>
            </div>
            <div class="is-col is-70">
                <Bio></Bio>
                <Bio></Bio>
                <Bio></Bio>
                <Bio></Bio>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from '../components/Avatar'
    import Bio from '../components/Bio'

    export default {
        components: {
            Avatar, Bio
        }
    }
</script>