import React, { Component } from 'react';
import { getStory } from '../util/StoryAPI'

export default class Story extends Component {
    constructor(props) {
        super(props)
        this.storyId = props.match.params.id
        console.log(props.match.params.id)
        this.state = {
            story: {}
        }
    }

    componentDidMount() {
        getStory(this.storyId).then(data => {
            console.log(data)
            this.setState({
                story: data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header font-weight-bold">
                        {this.state.story.title}
                    </div>
                    <div className="card-body">
                        <p style={{'white-space':'pre-line'}} className="card-text">{this.state.story.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}