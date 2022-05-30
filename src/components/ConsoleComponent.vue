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
                    <br>

                        <div class="line-1 anim-typewriter">
                           <b>class</b> Fabian():                        
                        </div>
                        <div class="line-2 anim-typewriter2">
                            &nbsp;&nbsp;<i>pass</i>
                        </div>


                        <br><br>
                        <div class="line-3 anim-typewriter3">
                            ;
                        </div>

                    
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
.line-1, .line-2, .line-3{
    padding: 3px 0 3px 30px;
    font-weight: 400;
    font-family: 'Anonymous Pro', monospace;  
    font-size: 18px;
    position: relative;
    width: auto;
    border-right: 3px solid rgba(255,255,255,.75);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-shadow: #FC0 1px 0 9.5px;
}
/* Animation */
.anim-typewriter{
    animation: typewriter 1.8s steps(13) 2s 1 normal both,
    blinkTextCursor 600ms steps(30) 7 normal both;
}
@keyframes typewriter{
    from{width: 0;}
    to{width: 150px;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(225, 242, 252, 0.85);}
  to{border-right-color: transparent;}
}

.anim-typewriter2{
    animation: typewriter2 0.5s steps(3) 4s 1 normal both ,
    blinkTextCursor2 600ms steps(30) 4s 4 normal both;
}
@keyframes typewriter2 {
    0%{width: 0em;}
    100%{width: 3.5em;}
}
@keyframes blinkTextCursor2{
    0%{border-right-color: transparent;}
    99%{border-right-color: rgba(225, 242, 252, 0.85);}
    100%{border-right-color: transparent;}
}

.anim-typewriter3{ 
    animation: typewriter3 3s steps(1) 10s 1 normal both,
    blinkTextCursor3 600ms steps(30) 6.5s infinite normal both;
}
@keyframes typewriter3 {
    0%{width: 0;}
    100%{width: 0;}
}
@keyframes blinkTextCursor3{
    0%{border-right-color: transparent;}
    99%{border-right-color: rgba(225, 242, 252, 0.85);}
    100%{border-right-color: transparent;}
}
</style>