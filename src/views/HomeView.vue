<template>
      <section class="container position-relative" v-if="$store.state.hasEnteredPassword">
        
      <div class="col-12 headline-text position-relative">
        <h1 data-aos="fade-up" data-aos-duration="800">
          A front end developer & designer passionate about finding the overlap between usability,
          accessibility, feasibility & joy
        </h1>
        <div class="d-inline position-absolute" id="smileyContainer">
          <span class="eyes">:</span><span class="smile">)</span>
        </div>
      </div>
    </section>
    <div class="container" style="height: 15vh; width:100%">
    </div>
    <section class="container" style="min-height: calc(50vh);">
      <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
        <h2>projects</h2>
        <div class="horizontal-line mb-5"></div>
        <div class="grid-container">
          <div class="row gx-5">
            <div class="col-md-5" data-aos="fade-up" data-aos-duration="1600">
              <h3>MyPocketSkill</h3>
              <p>
                Over the course of a year at MyPocketSkill, I helped grow their
                site from X users to X users, assisting by continuously
                improving site usability and performance.
              </p>
              <div class="mb-5">
                <div class="tag">html</div>
                <div class="tag">css</div>
                <div class="tag">javascript</div>
                <div class="tag">vue</div>
                <div class="tag">django</div>
                <div class="tag">python</div>
                <div class="tag">usability testing</div>
                <div class="tag">wireframing</div>
                <div class="tag">google analytics</div>
                <div class="tag">UI design</div>
              </div>
              <a href="/">Read more</a>
            </div>
            <div class="col-md-7">
              <div style="
                  background-color: gray;
                  width: 100%;
                  min-height: 50vh;
                  height: 100%;
                "
              ></div>
            </div>
          </div>
        </div>
        <div class="container" style="height: 10vh; width:100%">
        </div>
        <div class="container mt-5" style="min-height: calc(50vh);" data-aos="fade-up" data-aos-duration="800">
          <div class="row gx-5">
            <div class="col-md-5" >
              <h3>MyPocketSkill</h3>
              <p>
                Over the course of a year at MyPocketSkill, I helped grow their
                site from X users to X users, assisting by continuously
                improving site usability and performance.
              </p>
              <div class="mb-5">
                <div class="tag">html</div>
                <div class="tag">css</div>
                <div class="tag">javascript</div>
                <div class="tag">vue</div>
                <div class="tag">django</div>
                <div class="tag">python</div>
                <div class="tag">usability testing</div>
                <div class="tag">wireframing</div>
                <div class="tag">google analytics</div>
                <div class="tag">UI design</div>
              </div>
              <a class="">Read more</a>
            </div>
            <div class="col-md-7">
              <div style="
                  background-color: gray;
                  width: 100%;
                  height: 100%;
                "
              ></div>
            </div>
          
          </div>
        </div>
        
      </div>
    </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
}
</script>
