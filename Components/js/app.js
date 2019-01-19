Vue.component('card', {
    props: ['title', 'content'],
    data() { 
       return {claps:0}
    },
    template: `
    <div class="card">
        <div class="card-body">
            <h3 class="card-title"> {{title}} </h3>
            <div class="card-text">{{content}}</div>
            <span class="badge badge-info">Votes: {{claps}}</span>
            <button @click="clapFortArticle" class="btn btn-info btn-sm float-right" >Vote</button>
            <button @click="deleteArticle" class="btn btn-danger btn-sm float-right" >Delete Me</button>
        </div>
    </div>
    `,
    methods: {
        deleteArticle(){
            this.$emit('delete-article',this.title)
        },
        clapFortArticle(){
            this.claps++;
        }
    }
})

new Vue({
    el: '#app',
    data: {
        articles: [{
            title: 'janusz chcial byc dobry321',
            content: 'janusz  reds chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobry'
        },
        {
            title: 'janusz chcial byc dobry11',
            content: 'janusz zfvzx chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobry'
        },
        {
            title: 'janusz chcial byc  abc dobry',
            content: 'janusz fadf chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobry'
        },
        {
            title: 'janusz chcial byc cdef dobry',
            content: 'janusz  htwnr chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobry'
        },
        {
            title: 'janusz chcial byc ghd dobry',
            content: 'janusz ng chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobryjanusz chcial byc dobry'
        },
        ]
    },
    methods:{
        removeArticle(event){
            console.log(event);
            this.articles = this.articles.filter(article => article.title!== event);
        }
    }
})