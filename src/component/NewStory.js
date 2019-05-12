import React, { Component } from 'react';
import { saveStory } from '../util/StoryAPI'

export default class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            content: '',
            message: ''
        }
        this.handleSave = this.handleSave.bind(this)
        this.handleTitle = this.handleTitle.bind(this)
        this.handleAuthor = this.handleAuthor.bind(this)
        this.handleContent = this.handleContent.bind(this)
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    handleAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }
    handleContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSave(e) {
        saveStory(this.state)
        this.setState({
            title: '',
            author: '',
            content: '',
            message: 'Saved'
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.message == 'Saved' &&
                    <div className="alert alert-success" role="alert">
                        {this.state.message}
                    </div>
                }
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTitle">Title</label>
                            <input type="text" className="form-control" id="inputTitle"
                                placeholder="Title" onChange={this.handleTitle} value={this.state.title} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAuthor">Author</label>
                            <input type="text" className="form-control" id="inputAuthor" placeholder="Author"
                                onChange={this.handleAuthor} value={this.state.author} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="20"
                            onChange={this.handleContent} value={this.state.content}>
                        </textarea>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.handleSave}>Save</button>
                </form>
                <br />
            </div>
        )
    }
}