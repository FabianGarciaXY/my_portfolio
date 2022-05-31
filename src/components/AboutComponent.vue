<template>

    <div id="about">

        <h1>About Me</h1>

        <div class="content">

            <div id="image">
                <img src="../assets/me.jpg" alt="">
            </div>
            <div id="text">

                <h3>Hi, my name is Fabian!</h3>
                I'm a self-tought software developer from Mexico and I am passionate about coding in languajes like JS and Python. I'm enrolled in a engineering in Computer Systems which has provided me knowledge to design systems with an analytical approach.
                <br><br><br>

                <h3>Technologies</h3>
                <div class="technologies">

                    <div>
                        <img src="../assets/python.png" id="github"/>
                        <a>Python</a>
                    </div>
                    <div>
                        <img src="../assets/js.png" id="github"/>
                        <a>JavaScript</a>
                    </div>
                    <div>
                        <img src="../assets/sql.png" id="github" />
                        <a>SQL</a>
                    </div>
                    <div>
                        <img src="../assets/linux.png" id="github"/>
                        <a>Linux</a>
                    </div>
                    <div>
                        <img src="../assets/node.png" id="github"/>
                        <a>Node</a>
                    </div>
                    <div>
                        <img src="../assets/vue.png" id="github"/>
                        <a>Vue JS</a>
                    </div>
                </div>


                <br><br><br>
                <h3>Education</h3>
                &nbsp;&nbsp;&nbsp;&nbsp;<b>UVEG</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>In progress</i><br>
                &nbsp;&nbsp;&nbsp;&nbsp; 
                    &#9900; Engineering in Computer Systems

                
                <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<b>Bedu Exponential Education</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i>May 2022 - In progress</i><br>
                &nbsp;&nbsp;&nbsp;&nbsp;    
                    &#9900; Data Sciece course with Python and R
                     
                     
                <br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<b>LaunchX</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <i>February 2022 - April 2022</i><br>
                &nbsp;&nbsp;&nbsp;&nbsp;    
                    &#9900; Fullstack programming Bootcamp with JS


                <br><br><br>
                <h3>You can reach me on:</h3>
                <div class="socials">

                    <div>
                        <img src="../assets/email.png" id="github"/>
                        <a>fabyan_0798@hotmail.com</a>
                    </div>
                    <div>
                        <img src="../assets/twitter.png" id="github"/>
                        <a href="https://twitter.com/fabyanGaHezz" target="_blank">@fabyanGaHezz</a>
                    </div>
                    <div>
                        <img src="../assets/github.png" id="github" />
                        <a href="https://github.com/FabianGarciaXY" target="_blank">@FabianGarciaXY</a>
                    </div>
                    <div>
                        <img src="../assets/linkedin.png" id="github"/>
                        <a href="https://www.linkedin.com/in/fabyangarcia/" target="_blank">@fabyangarcia</a>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script lang="ts">
import { defineComponent  } from "vue";

export default defineComponent ({
    name: 'AboutMe'
})

</script>

<style scoped>
#about {
    background-color: #151515;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 0 0;
    padding: 0px;
}
h1 {
    padding-bottom: 50px;
    text-shadow: 10px 12px 4px black;
}
.content {
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 82%;
    justify-content: center;
    border-radius: 12px;
    padding: 20px;
    text-shadow: 10px 12px 4px black;
    
}

.content > #text {
    width: 80%;
    text-align: justify;
    margin: 0 50px;
    font-size: 20px;
}
#image {
    border: 2px white ;
    filter: contrast(1.1);
}

#image > div > img {
    width: 100%;
    height: auto;
    border-radius: 3px;
    z-index: 20;
}

.socials {
    display: flex;
    flex-direction: column;
    gap: 7px;
}
.socials > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}
.socials > div > img {
    max-width: 45px;
    height: auto;
    background: white;
    border-radius: 10%;
}

.technologies {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.technologies > div {
    display: flex;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}
.technologies > div > img {
    max-width: 45px;
    height: auto;
    background: white;
    border-radius: 10%;
}

</style>