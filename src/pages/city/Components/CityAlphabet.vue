<template>
    <ul class='alphabet-list'>
        <li class='alphabet-list-item'>A</li>
        <li class='alphabet-list-item'>B</li>
        <li class='alphabet-list-item'>C</li>
        <li class='alphabet-list-item'>D</li>
        <li class='alphabet-list-item'>E</li>
        <li class='alphabet-list-item'>F</li>
        <li class='alphabet-list-item'>G</li>
        <li class='alphabet-list-item'>H</li>
        <li class='alphabet-list-item'>I</li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            msg:'cityAlphabet'
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.alphabet-list
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:absolute;
    top:1.58rem;
    right:0;
    bottom:0;
    width:.4rem;
    .alphabet-list-item
        text-align:center;
        line-height:.4rem;
        color:$bgColor


     
</style>