<template>

    <div class="container">
        <div class="modal-body">
            <form class="form-signin">
                <div class="form-label-group">
                    <input type="text" v-model="title" id="inputName" class="form-control" placeholder="Title" required autofocus>
                </div>
                <hr>

                <div class="form-label-group">
                    <label for="inputArticle" style="text-center">Write Question Here</label>
                    <wysiwyg v-model="myHTML" />
                </div>

                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" @click="addQuestion">SUBMIT</button>
            </form>
            <hr>
        </div>

        <div class="card mb-3" v-for="(question,index) in myQuestion" :key="index">
            <div class="card-header">
                {{question.title}}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{{question.description}}}</p>
                    <footer class="blockquote-footer">
                        <cite title="Source Title">post {{formatDate(question.createdAt)}}</cite>
                        <hr>
                        <div>
                            <a href="" class="btn btn-success" @click="updateQuestion">UPDATE</a>
                            <a href="" class="btn btn-danger" @click="deleteQuestion(question._id)">DELETE</a>
                        </div>
                    </footer>
                </blockquote>
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
                title: '',
                myHTML: '',
                myQuestion: []
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
            addQuestion: function () {
                axios({
                        method: "POST",
                        url: "http://localhost:3000/questions/create",
                        data: {
                            date: this.date,
                            title: this.title,
                            description: this.myHTML,
                        },
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(response => {
                        router.push('/myQuestion')
                    }) 
                    .catch(err => {
                        console.log(err);
                    })
            },
            deleteQuestion: function (id) {
                axios({
                        method: "DELETE",
                        url: `http://localhost:3000/questions/${id}`,
                    })
                    .then(response => {
                        router.push('/myQuestion')
                    })
            },
            getOneArticle() {
                let id = req.params.id
                let token = localStorage.getItem('token')
                axios({
                        method: 'GET',
                        url: `http://localhost:3000/questions/:id`,
                        headers: {
                            token
                        }
                    })
                    .then((result) => {
                        // console.log(result);
                        this.title = result.data.title[0].title,
                        this.myHTML = result.data.description[0].description
                    })
                    .catch((err) => {
                        console.log(err);

                    });
            },
            updateQuestion: function () {
                axios({
                        method: "PUT",
                        url: `http://localhost:3000/questions/${this.updateQuestion}`,
                        data: {
                            title: this.updateArticleTitle,
                            description: this.updateArticleDescription
                        },
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            token: localStorage.getItem("token")
                        }
                    })
                    .then(result => {
                        this.oneArticle = result;

                    })
                    .catch(err => {
                        this.message = err.message;
                    });
            },



        },

        mounted() {
            let token = localStorage.getItem('token')
            axios({
                    method: 'GET',
                    url: 'http://localhost:3000/questions/myQuestion',
                    headers: {
                        token
                    }
                })
                .then(({
                    data
                }) => {
                    this.myQuestion = data.question

                })
                .catch((err) => {
                    console.log(err)
                });



        }
    }
</script>

<style>
    @import "~vue-wysiwyg/dist/vueWysiwyg.css";

    .form {
        padding-left: 1000;
        padding-right: 1000;
    }

    #card-body {
        padding: 1000;
    }
</style>