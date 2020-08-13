import React from 'react'

const Category = (props) => {
    
        let category = props.category[props.match.params.id - 1]
        let currentCategory = props.category.id

    return (
        <div>
            <h2>{category.name}</h2>
                    <div>
                    {/* {category.costumes.map(costume =>
                        <h2>{costume ? costume.title : null } - {costume ? costume.price : null }</h2>
                        <p>{costume ? costume.location : null }<br></br>
                        {costume ? costume.category : null }<br></br>
                        {costume ? costume.owner_name : null } - {costume ? costume.owner_email : null }<br></br>
                        {costume ? costume.description : null }<br></br></p>
                        )} */}
                    </div>
        </div>
    )
}
export default Category