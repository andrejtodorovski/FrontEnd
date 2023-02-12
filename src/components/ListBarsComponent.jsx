import React, { Component } from 'react';
import BarsService from '../services/BarsService';
import { Link } from 'react-router-dom'
import AttributesService from '../services/AttributesService';

class ListBarsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: [],
            attributes: []
        }
    }
    componentDidMount(){
        BarsService.getBars().then((res) => {
            this.setState({bars: res.data});
        });
        AttributesService.getAttributesForBar().then((r)=>{
            this.setState({attributes: r.data});
        });
    }
    handleChange = (event) => {
        let cred = {
            category: "Bar",
            attribute: event.target.value
        }
        console.log(cred)
        fetch("https://bekend.azurewebsites.net/place/attributeAll",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(cred) 
        }).then((response)=>
            response.json()
        ).then((user)=>{
            this.setState({bars: user})
        })
          
    }
    render() {
        return (
            <div className='grayBackground'>
                <div className='mr-5'>
                    <select className='form-control w-25 ml-5 mb-5' required 
                        onChange={this.handleChange}>
                            <option value="default">Choose attribute</option>
                    {this.state.attributes.map(at =>
                    <option value={at}>{at}</option>
                )}
                    </select>
                    </div>
            <div className='listContainer grayBackground pt-2'>
                {this.state.bars.map(bar =>
                <div className='listItem '>
                    <img className='listImg' src={bar.imgUrl}></img>
                    <div className='d-flex justify-content-center'>
                            <div><img className='icon2 mr-2' src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png'></img></div>
                            <div><h6 className='textDarkGray mt-1'>{bar.rating}</h6></div>
                    </div>
                    <h5 className='text-center mt-2'>{bar.name}</h5>
                    <Link to={`/${bar.id}`}><img className='icon' src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png'></img></Link>
                </div>
                )}
            </div>
            </div>
        );
    }
}           

export default ListBarsComponent;