import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    query FirstQuery  {
    site {
        info : siteMetadata {
        author
        description
        simpleData
        title
        complexData {
            age
            name
        }
        person {
            age
            name
        }
        }
    }
    }
`

const FechData = () => {

    const {
        site:{
            info:{title},
        },
    } = useStaticQuery(getData)


    return (
        <div>
            {/* <h2>Name : {data.site.siteMetadata.person.name}</h2> */}
            <h2>site title is : {title}</h2>
        </div>
    )
}

export default FechData
