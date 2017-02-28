import React from 'react';
import ReactDOM from 'react-dom';

class Album extends React.Component {
    constructor(props) {
        super(props);
        this.showPanel = this.showPanel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getData = this.getData.bind(this);
        this.addImage = this.addImage.bind(this);
        this.state = {
            images: [],
            panel: false,
            title: "",
            photo_url: "",
            description: ""
        };
    }
    componentWillMount() {
        this.getData().then((data) => {
            this.setState({images: data});
        });
    }
    getData() {
        return new Promise((resolve, reject) => {
            $.get("/api/v1/albums", function(data) {
                resolve(data);
            });
        });
    }
    showPanel() {
        this.setState({
            panel: !this.state.panel
        });
    }
    deleteImage() {
        //
    }
    handleChange(key, value) {
        this.setState({[key]: value});
    };
    handleSubmit(e) {
        e.preventDefault();
        const postData = new FormData(document.querySelector("form" [0]));
        postData.append("title", this.state.title);
        postData.append("photo_url", this.state.photo_url);
        postData.append("description", this.state.description);

        $.ajax({url: "/api/v1/albums", type: "POST", data: postData, processData: false, contentType: false})

    }
    addImage(e) {
        const imageArr = this.state.images.slice(); //先複製一份資料
        const addImage = [
            {
                "title": this.state.title,
                "photo_url": this.state.photo_url,
                "description": this.state.description
            }
        ];

        const newImages = imageArr.concat(addImage); //加入新的圖片

        this.setState({
            images: newImages, //更新頁面資訊
            panel: false
        });

        this.handleSubmit(e);
    }
    render() {
        return (
            <div className="album-container">
                <div className="wrapper">
                    <ImageBox images={this.state.images}/>
                </div>
                <div className={this.state.images.length !== 0
                    ? "bottom-controller"
                    : "hidden"}>
                    <span className={this.state.panel
                        ? "up-panel-button"
                        : "panel-button"} onClick={this.showPanel}>{this.state.panel ? "收合" : "開啟"}
                    </span>
                    <div className={this.state.panel
                        ? "panel"
                        : "hidden"}>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label>圖片名稱&nbsp;:</label>
                                    <input type="text" value={this.state.title} name="title" onChange={(e) => this.handleChange("title", e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>圖片網址&nbsp;:</label>
                                    <input type="text" value={this.state.photo_url} name="photo_url" onChange={(e) => this.handleChange("photo_url", e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>圖片描述&nbsp;:</label>
                                    <textarea value={this.state.description} name="description" onChange={(e) => this.handleChange("description", e.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <button onClick={(e) => this.addImage(e)}>送出</button>
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
    render() {
        const showImages = this.props.images.map((value, index) => {
            return (
                <div key={index} className="my-image">
                    <p className="image-title">{value.title}</p>
                    <img src={value.photo_url} alt={value.title}/>
                    <p className="image-text">{value.description}</p>
                </div>
            );
        });

        return (
            <div className={this.props.images.length !== 0
                ? "image-box"
                : ""}>
                {showImages}
            </div>
        );
    }
}

ReactDOM.render(
    <Album/>, document.getElementById('root'));
