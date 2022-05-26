<template>
    
    <div id="console-container"> 
        <div id="console">
            <div id="circle-icons">
                <div id="circle-red"></div>
                <div id="circle-yellow"></div>
                <div id="circle-green"></div>
            </div>

            <div id="code-space">
                <div>
                    &lt;> <br>

                        <p class="line-1 anim-typewriter">
                            Animation typewriter style using css steps()                        
                        </p>

                    &lt;/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})

</script>

<style scoped>
/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

#console-container {
    border-radius: 4px;
}
#console {
    position: absolute; 
    left: 0; 
    right: 0; 
    z-index: 2;
    width: 55%;
    height: 48%;
    background-color: #1D1E22;
    color: white;
    box-shadow: 2px 2px 3px 2px rgba(255, 255, 255, 0.385);
    border-radius: 5px;
    margin: 60px auto 0px auto;    
}
#circle-red, #circle-yellow, #circle-green {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0px 0px 1.5px 0.5px rgb(217, 217, 157);
}
#circle-icons {
    display: flex;
    gap: 8px;
    padding: 6px 7px;
    background-color: #2e2e31;
    border-radius: 5px 5px 2px 2px;
}
#circle-red {
    background-color: rgb(237, 39, 39);
}
#circle-yellow{
    background-color: rgb(218, 218, 58);
}
#circle-green {
    background-color: rgb(25, 166, 25);
}
#code-space > * {
    font-family: 'Anonymous Pro', monospace;  
    text-align: left;
    font-size: 14px;
    padding: 3px 5px;
    background-color: #1D1E22;
}

/*============ Text animation =============*/
.line-1{
    position: relative;
    top: 30%;  
    width: 24em;
    margin: 0 auto;
    border-right: 6px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}
/* Animation */
.anim-typewriter{
    animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
    from{width: 0;}
    to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}

</style>