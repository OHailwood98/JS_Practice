import React from "react";

class MemeGen extends React.Component{
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randImg:"https://i.imgflip.com/1bij.jpg",
            allImg: {}
        };
        this.wasClicked = this.wasClicked.bind(this);
        this.dataChange = this.dataChange.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response =>
            {
                const {memes} = response.data;
                this.setState({allImg: memes})
            })
          
    }

    render(){
        return(
            <div>
                <form>
                    <button onClick={this.wasClicked}> Change Picture </button>
                    <br/>
                    <input type="text" name="topText" value={this.state.topText} placeholder="Top text" onChange={this.dataChange}/>
                    <br/>
                    <input type="text" name="bottomText" value={this.state.bottomText} placeholder="bottom text" onChange={this.dataChange}/>
                </form>
                <img src={this.state.randImg} alt="fail" />
            </div>
        );
    }

    wasClicked(event){
        const imgSrc = this.state.allImg[Math.floor(((Math.random()*this.state.allImg.length)+1))].url;
        this.setState({randImg:imgSrc})
    }

    dataChange(event){
        const {name, value, type, checked} = event.target
         if(type==="checkbox"){
          this.setState({
            [name]: checked
          })
        }else{
          this.setState({
            [name]: value
          })
        } 
    }
}

export default MemeGen