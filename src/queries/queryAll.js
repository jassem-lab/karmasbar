"use strict"

module.exports = `
 {
    allWpPost{
         edges{
             node{
                 id
                 slug
                 status
                 template
             }
         }
     }
 }
 {
     allWpPage{
         edges{
             node{
                 id
                 slug
                 status
                 template
                 format
             }
         }
     }
 }
 `
