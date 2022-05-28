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

                        <div class="line-1 anim-typewriter">
                            class Fabian():                        
                        </div>
                        <div class="line-1">
                        &nbsp;&nbsp;    def __init__(self):
                        </div>

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
    box-shadow: 2px 2px 3px 2px rgb(0, 0, 0);
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
    font-size: 18px;
    padding: 3px 5px;
    background-color: #1D1E22;
}

/*============ Text animation =============*/
.line-1{
    font-weight: bold;
    font-family: 'Anonymous Pro', monospace;  
    font-size: 18px;
    position: relative;
    width: auto;
    border-right: 6px solid rgba(255,255,255,.75);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
}
/* Animation */
.anim-typewriter{
    animation: typewriter 2s steps(15) 2s 1 normal both,
    blinkTextCursor 600ms steps(22) 6 normal;
}
@keyframes typewriter{
    from{width: 0;}
    to{width: 8em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(225, 242, 252, 0.85);}
  to{border-right-color: transparent;}
}
</style>