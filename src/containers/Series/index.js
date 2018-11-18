import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component{

    state={
        series:[],
        seriesName:'',
        isFetching: false,
        importantText:''
    }

    componentDidMount(){
        fetch(`http://api.tvmaze.com/search/shows?q=batman`)
            .then((response)=> response.json())
            .then(json => this.setState({series:json, isFetching:false}));
    }

    render(){
        const {series, seriesName, isFetching}=this.state

        return(
            <div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ""
                    &&
                    <p>Plese enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ""
                    &&
                    <p>No TV Series have been found with this name</p>
                }
                {
                    isFetching && <Loader/>
                }
                {
                    !isFetching && <SeriesList list={this.state.series}/>
                }
            </div>
        )
    }
}

export default Series