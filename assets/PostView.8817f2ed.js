import{a as n}from"./apiPost.7a37007e.js";import{K as c,r as a,o as p,a as u,f as m}from"./index.d3194987.js";import{_ as i}from"./PostCard.0d863871.js";import"./UserInfo.717dac14.js";import"./apiLike.43a12232.js";const P={setup(l){const e=c(),r=a(e.params.id),t=a([]),s=()=>{n.getOne(r.value).then(o=>{[t.value]=o.data.data}).catch(o=>{console.log(o)})};return p(()=>{s()}),(o,_)=>(u(),m(i,{post:t.value,onGetPosts:s},null,8,["post"]))}};export{P as default};
