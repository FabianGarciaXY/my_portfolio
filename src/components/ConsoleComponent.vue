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
                    &lt;code>

                    <br>
                    &lt;/code>
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
#console-container {
    border-radius: 4px;
}
#console {
    position: absolute; 
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    z-index: 3;
    width: 600px;
    height: 270px;
    background-color: #1D1E22;
    color: white;
    box-shadow: 2px 2px 3px 2px rgba(255, 255, 255, 0.385);
    border-radius: 5px;
    margin: 0px auto 50px auto;    
}
#circle-red, #circle-yellow, #circle-green {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}
#circle-icons {
    display: flex;
    gap: 7px;
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
    text-align: left;
    font-size: 14px;
    padding: 3px 5px;
    background-color: #1D1E22;
}
</style>