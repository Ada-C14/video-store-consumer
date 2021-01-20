import React from 'react'
import Title from './Title'

const TitlesContainer = (props) => {
        return (
            <div>
                {this.props.title.map(title => <Title title = {title}/>)}
            </div>
        )
}
export default TitlesContainer;