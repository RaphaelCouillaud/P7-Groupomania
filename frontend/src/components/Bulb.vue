<template>
        <nav id="bulb">
            <i class="far fa-lightbulb"></i>
            <a target="_blank" href="https://www.nytimes.com">NY Times</a> 
            <a target="_blank" href="https://www.lemonde.fr/">Le Monde</a> 
            <a target="_blank" href="https://www.mediapart.fr">Mediapart</a>
            <a target="_blank" href="https://www.ouest-france.fr/">Ouest FR</a>  
            <a target="_blank" href="https://www.kaakook.fr/">kaakook</a>
            <a target="_blank" href="https://www.proverbes-citations.com/">Proverbes</a>            
            <a target="_blank" href="https://www.poetica.fr/">Poetica</a> 
            <a target="_blank" href="https://www.tumblr.com/explore/trending">tumblr</a> 
        </nav>
</template>

<script>
export default {
    name: "Bulb",
   
}
</script>

<style lang="css">
#bulb {
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
    opacity: 0.95;
    margin-top: 25px;
    margin-right: 25px;
}
#bulb a {
    color: white;
    margin: auto;
    cursor: pointer;
}
#bulb p {
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
@media screen and (max-width: 768px) {
	#bulb {
    height: auto;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    margin: auto;
    flex-wrap: wrap;
    left: 0;
    margin-top: 15px;
    }
}
</style>