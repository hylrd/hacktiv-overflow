<template>
  <div class="card text-left mt-5">
  <div class="card-header">
    Question
  </div>
  <div class="card-body row" @click.prevent="seeDetail(12)">
    <!-- <div class="col-1 icon">
    <img src="@/assets/up.png" alt="" @click.prevent="upVote">
    <img src="@/assets/down.png" alt="" @click.prevent="downVote">
    </div> -->
    <div class="col-11">
      <blockquote class="blockquote mb-0">
      <p>if i could wait another day, will that mean much to see if you're willing to stay?</p>
      <footer class="blockquote-footer">17-year-old me a  <cite title="Source Title">Sucker for love</cite></footer>
    </blockquote>
    </div>
  </div>
   <div class="card-footer text-muted">
    <!-- <span class="badge badge-pill badge-info">info</span> -->
    <a href="#" class="badge badge-info mr-2">water</a>
    <a href="#" class="badge badge-info mr-2">earth</a>
    <a href="#" class="badge badge-info mr-2">fire</a>
    <a href="#" class="badge badge-info mr-2">air</a>
  </div>
</div>
</template>

<script>
name: 'cardHome'
export default {
  methods:{
    upVote(){
      console.log('upVOte');
      
    },
    downVote(){
      console.log('downVote');  
    },
    seeDetail(id){
      this.$router.push(`/question/${id}`)
      // this.$router.push(`/question/`)
    }
  }
}
</script>

<style scoped>
.icon img{
  max-height: 2rem
}
</style>