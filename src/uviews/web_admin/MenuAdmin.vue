<template>
    <div>使用axios</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            data:''
        }
    },
    methods:{

    },
    mounted(){
        axios({
            method:'get',
            url:'users',
            data:{
                user:'li',
                password:'1484'
            }
        }).then(res=>{
            console.log(res);
        })
    }
}
</script>