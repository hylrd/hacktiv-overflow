<template>
  <div class="container mt-5 text-left">
    <div class="qpart">
    <h2>if i could wait another day, will that mean much to see if you're willing to stay?</h2>
    <p>date created</p>
    <hr>
    <div class="qBody row">
      <div class="col-1 icon text-center">
        <img src="@/assets/up.png" alt="" @click.prevent="upVote">
        <h4 class="mt-2">11</h4>
        <img src="@/assets/down.png" alt="" @click.prevent="downVote">
      </div>
      <div class="col-11">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus accusamus deserunt? Hic impedit quos cupiditate voluptas, aliquam nihil alias suscipit praesentium, molestiae, dolorem dicta placeat blanditiis expedita optio fugit.</p>
      </div>
    </div>
      <hr>
    <div class="qfooter mt-3 mb-5">
      <a href="#" class="badge badge-info mr-2">water</a>
      <a href="#" class="badge badge-info mr-2">earth</a>
      <a href="#" class="badge badge-info mr-2">fire</a>
      <a href="#" class="badge badge-info mr-2">air</a>
    </div>
    </div>

      <h2>3 Answers</h2>
      <hr>

    <answerCard/>

    <router-view/>
  </div>
</template>

<script>
import answerCard from '../components/answerCard'
export default {
name: 'questionDetail',
  computed:{
    getId(){
      return this.$route.params
    }
  },
  components:{
    answerCard
  }
}

</script>

<style scoped>
.container{
  width: 50rem;
}
.icon img{
  max-height: 2rem
}
</style>