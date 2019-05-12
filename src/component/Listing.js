import React, { Component } from 'react';
import Story from './Story';
import StoryCard from './StoryCard'
import { getStories } from '../util/StoryAPI'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Listing extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            hasMore: true,
            stories: []
        }
    }

    componentDidMount() {
        var start = (this.state.currentPage - 1) * 5
        getStories(start, 5).then(data => {
            this.setState({
                stories: data.data
            })
        })
    }

    fetchMoreData = () => {
        // a fake async api call like which sends
        var nextPage = this.state.currentPage + 1
        var start = (nextPage - 1) * 5
        setTimeout(() => {
            getStories(start, 5).then(data => {
                var stories = data.data
                var hasMore = true
                if (data.size == 0) {
                    hasMore = false
                }
                this.setState({
                    stories: this.state.stories.concat(stories),
                    currentPage: nextPage,
                    hasMore: hasMore
                })
            });
        }, 1500);
    };


    render() {
        let stories = this.state.stories.map(each => {
            return (
                <div key={each.id}>
                    <StoryCard
                        id={each.id}
                        title={each.title}
                        author={each.author}
                        content={each.content} />
                </div>
            )
        })

        return (
            <div className="container">
                <InfiniteScroll
                    dataLength={this.state.stories.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}>
                    {this.state.stories.map((each) => (
                        <div key={each.id}>
                            <StoryCard
                                id={each.id}
                                title={each.title}
                                author={each.author}
                                content={each.content} />
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        )
    }
}