import React from 'react';
import ReactDOM from 'react-dom';

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.showPanel = this.showPanel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    	images:[],
    	panel:false,
    	title:"",
    	url:"",
    	description:"",
    };
  }
  componentWillMount(){
  	//如果已經有圖片，在這裡 ajax
    const defaultImages = [
    	{"title":"CUTE CAT","url":"https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/16835726_10212188257805785_4910818021291423959_o.jpg?oh=6b3c4736dc022c3b7509e2801711741f&oe=59254CA4","description":"This is a cat This is a cat This is a cat This is a cat"},
    	{"title":"CUTE CAT","url":"http://placekitten.com/640/480","description":"This is a cat This is a cat This is a cat This is a cat"},
    	{"title":"CUTE CAT","url":"http://placekitten.com/640/480","description":"This is a cat This is a cat This is a cat This is a cat"},
    	{"title":"CUTE CAT","url":"http://placekitten.com/640/480","description":"This is a cat This is a cat This is a cat This is a cat"},
    	{"title":"CUTE CAT","url":"http://placekitten.com/640/480","description":"This is a cat This is a cat This is a cat This is a cat"},
    	{"title":"CUTE CAT","url":"http://placekitten.com/640/480","description":"This is a cat This is a cat This is a cat This is a cat"},
    	{"title":"CUTE CAT","url":"http://placekitten.com/640/480","description":"This is a cat This is a cat This is a cat This is a cat"},
    	{"title":"CUTE CAT","url":"http://placekitten.com/640/480","description":"This is a cat This is a cat This is a cat This is a cat"},
    ];
    this.setState({
  		images:defaultImages,
  	});
  }
  showPanel(){
  	this.setState({
  		panel:!this.state.panel,
  	});
  }
  deleteImage(){
  	alert("DELETE IMAGE");
  }
  handleChange(key,value){
  	this.setState({
  		[key]:value,
  	});
  };
  handleSubmit(){
  	//送出表單
  }
  addImage(){
  	const ImageArr = this.state.images.slice();//先複製一份資料
  	const addImage = [{
  		"title":this.state.title,
  		"url":this.state.url,
  		"description":this.state.description
  	}];

  	ImageArr.concat(addImage);//加入新的圖片

  	this.setState({
  		images: ImageArr,//更新頁面資訊
  	});

  	this.handleSubmit();
  }
  render() {
    return (
      <div className="album-container">
      	<div className="wrapper">
			<ImageBox images={this.state.images}/>
		</div>
		<div className="bottom-controller">
			<span className={this.state.panel?"up-panel-button":"panel-button"} onClick={this.showPanel}></span>
			<div className={this.state.panel?"panel":"hidden"}>
				<div className="panel-body">
					<form>
						<div className="form-group">
							<label>圖片名稱&nbsp;:</label>
							<input type="text" value={this.state.title} name=""
								onChange={(e)=>this.handleChange("title",e.target.value)}/>
						</div>
						<div className="form-group">
							<label>圖片網址&nbsp;:</label>
							<input type="text" value={this.state.url} name=""
								onChange={(e)=>this.handleChange("url",e.target.value)}/>
						</div>
						<div className="form-group">
							<label>圖片描述&nbsp;:</label>
							<textarea value={this.state.description} name=""
									onChange={(e)=>this.handleChange("description",e.target.value)}>
							</textarea>
						</div>
					</form>
				</div>
				<div className="panel-footer"></div>
			</div>
	  	</div>
      </div>
    );
  }
}

class ImageBox extends React.Component {
	render(){
		const showImages = this.props.images.map((value,index)=>{
				return (
					<div key={index} className="my-image">
						<p className="image-title">{value.title}</p>
						<img src={value.url} alt={value.title}/>
						<p className="image-text">{value.description}</p>
					</div>
				);
			});

		return (
			<div className="image-box">
				{showImages}
			</div>
		);
	}
}

ReactDOM.render(
  <Album />,
  document.getElementById('root')
);
