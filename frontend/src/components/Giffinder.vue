<template>
        <nav id="giffinder">
            <i class="far fa-lightbulb"></i>
            <a target="_blank" href="https://giphy.com/">GIPHY</a> 
            <a target="_blank" href="https://www.kaakook.fr/">kaakook</a> 
            <a target="_blank" href="https://www.gifbin.com/">GIFBIN</a> 
            <a target="_blank" href="https://imgflip.com/">imgflip</a> 
            <a target="_blank" href="https://www.proverbes-citations.com/">proverbes</a> 
            <a target="_blank" href="https://gfycat.com/fr/">gfycat</a> 
            <a target="_blank" href="https://knowyourmeme.com/">KYM</a> 
            <a target="_blank" href="https://www.tumblr.com/explore/trending">tumblr</a> 
        </nav>
</template>

<script>
export default {
    name: "Giffinder",
   
}
</script>

<style lang="css">
#giffinder {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    position: fixed;
    right: 1%;
    margin: auto;
    box-shadow: inset 0px 0px 0px 4px white;
  border: 6px solid #d44c5c;
  border-radius: 30px;
  padding: 15px;
  background-color:#0c2444;
  opacity: 0.9;
  margin-top: 25px;
  margin-right: 25px;

}
#giffinder a {
    color: white;
    margin: auto;
}
#giffinder p {
    font-size: 2em;
    margin: 0;
}
.fa-lightbulb {
    color: white;
    font-size: 2.5em;
    font-weight: lighter;
     text-shadow: -1px 0 1px#fcf404, 0 1px 1px#fcf404, 1px 0 1px #fcf404, 0 -1px 10px#fcf404;
     margin: auto;
}

</style>