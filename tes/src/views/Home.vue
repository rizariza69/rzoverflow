<template>
  <div>
    <div class="container">
      <div class="home">
        <div class="card mb-3" v-for="(question,index) in dataQuestion" :key="index">
          <div class="card-header">
            {{question.title}}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{{question.description}}</p>
              <footer class="blockquote-footer">
                <cite title="Source Title">post {{formatDate(question.createdAt)}}</cite>
                <br>
                <hr>
                <div>
            
                </div>
                <hr>
                <div>
                  <a  class="toAnswer" href="" style="font-style: oblique;" data-toggle="modal" data-target="#exampleModalCenter">answer</a>
                  <div class="card">
                    {{question.answer}}
                    <div class="card-body">

                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <br>
      <br>
    </div>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Create Your Answer</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <wysiwyg v-model="myHTML" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="answerQuestion">Answer</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import router from '../router'
  import axios from 'axios'

  export default {
    data() {
      return {
        dataQuestion: [],
        dataAnswer: [],
        answer: ''

      }
    },
    methods: {
      formatDate(date) {
        var monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        let day = date.slice(8, 10);
        let month = date.slice(6, 7);
        let year = date.slice(0, 4);
        if (month > 9) {
          month = `1${month}`;
        }
        return day + " " + monthNames[month - 1] + " " + year;
      },
      answerQuestion() {
        let id = this.$route.params.id
        let token = localStorage.getItem('token')
        axios({
            method: 'PUT',
            url: `http://localhost:3000/questions/createAnswer/${id}`,
            headers: {
              token
            },
            data: {
              answer: this.answer,
            }
          })
          .then((result) => {
            this.answer = ''
          })
          .catch((err) => {
            console.log(err);

          });
      },

    },
    created() {

      let id = req.params.id
      axios({
          method: 'GET',
          url: `http://localhost:3000/questions/${id}`,
        })
        .then((result) => {
          this.answer = result.data.question[0].dataAnswer
          console.log(result);
          
        })
        .catch((err) => {
          console.log(err)
        })

      // axios({
      //   method: "GET",
      //   url:"http://localhost:3000/questions/:id",
      //   headers:{
      //     token: localStorage.getItem('token')
      //   }
      // })
      // .then(response => {
      //   console.log(response)
      //   this.dataQuestion = (response.data.data)
      // })
      // .catch(err => {
      //     console.log(err);
      //   })

    },
    mounted() {
      axios({
          method: "GET",
          url: "http://localhost:3000/questions",
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log(response)
          this.dataQuestion = (response.data.data)
        })

        .catch(err => {
          console.log(err);

        })

    },


  }
</script>

<style scoped>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
  .roundrect .up {
border-radius: 2rem 2rem 0 0;
}
.roundrect .down {
border-radius: 0 0 2rem 2rem;
}
.roundrect .count {
border-radius: .5rem .5rem;
}
.chev .up {
border-radius: 50% 50% 0 0;
}
.chev .down {
border-radius: 0 0 50% 50%;
}
.chev .count {
border-radius: 100%/50%;
}
.circle .up {
border-radius: 10rem 10rem 0 0;
}
.circle .down {
border-radius: 0 0 10rem 10rem;
}
.circle .count {
border-radius: 50%;
}
.vote {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
font-family: "Noto Sans";
position: relative;
width: 10rem;
height: 10rem;
margin: 1rem;
}
.increment {
-webkit-box-flex: 1;
-ms-flex: 1 0 0;
flex: 1 0 0;
text-align: center;
opacity: .5;
-webkit-transition: 0.3s;
transition: 0.3s;
cursor: pointer;
}
.increment.up {
background: #4BC35F;
height: 50%;
margin-bottom: 0.25rem;
}
.increment.down {
background: #C15044;
height: 50%;
}
.increment:hover {
opacity: 1;
}
.count {
position: absolute;
top: 0;
border-radius: 0.1rem;
margin: 2.5rem;
background: #F6F3E4;
width: 5rem;
font-size: 2.5rem;
font-weight: bold;
line-height: 5rem;
text-align: center;
box-shadow: 0 0 0 0.5rem #F6F3E4;
pointer-events: none;
}
.count.upvoted {
color: #4BC35F;
}
.count.downvoted {
color: #C15044;
}
.bump {
-webkit-animation: bump 200ms;
animation: bump 200ms;
}
@-webkit-keyframes bump {
30% {
-webkit-transform: scale(1.2);
transform: scale(1.2);
}
}
@keyframes bump {
30% {
-webkit-transform: scale(1.2);
transform: scale(1.2);
}
}
* {
box-sizing: border-box;
}
html, body {
height: 100%;
}
body {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
background: #F6F3E4;
}
</style>