<template>
 <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #2193b0;">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" @click.prevent="toHome">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="toQue">Questions</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="toanswer">Answers</a>
      </li>
    </ul>
  </div>
  <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <button class="btn btn-primary" v-if="checkLogin !== true" @click.prevent="signIn">Sign in</button>
            </li>
            <li class="nav-item">
                <button class="btn btn-danger" v-if="checkLogin">Sign Out</button>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
name: 'navbarHome'
export default {
computed:{
  checkLogin(){
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }
},
methods:{
  signIn(){
    console.log('masuk sini');
    
    this.$router.push('/loginPage')
  },
  toHome(){
    this.$router.push('/')
  },
  toQue(){
    this.$router.push('/myQuestions')
  },
  toanswer(){
    this.$router.push('/myAnswers')
  }
}
}
</script>

<style scoped>

* {
   font-family: "Courier New", Times, serif;
}
</style>