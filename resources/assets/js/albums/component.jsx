import React from 'react';
import ReactDOM from 'react-dom';

class Album extends React.Component {
    constructor(props) {
        super(props);
        this.showPanel = this.showPanel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getData = this.getData.bind(this);
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
            $.get('/api/v1/albums', function(data) {
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
    handleSubmit() {
        //送出表單
    }
    addImage() {
        const ImageArr = this.state.images.slice(); //先複製一份資料
        const addImage = [
            {
                "title": this.state.title,
                "photo_url": this.state.photo_url,
                "description": this.state.description
            }
        ];

        ImageArr.concat(addImage); //加入新的圖片

        this.setState({
            images: ImageArr, //更新頁面資訊
        });

        this.handleSubmit();
    }
    render() {
        return (
            <div className="album-container">
                <div className="wrapper">
                    <ImageBox images={this.state.images}/>
                </div>
                <div className={this.state.images.length !== 0
                    ? "bottom-controller"
                    : ""}>
                    <span className={this.state.panel
                        ? "up-panel-button"
                        : "panel-button"} onClick={this.showPanel}></span>
                    <div className={this.state.panel
                        ? "panel"
                        : "hidden"}>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label>圖片名稱&nbsp;:</label>
                                    <input type="text" value={this.state.title} name="" onChange={(e) => this.handleChange("title", e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>圖片網址&nbsp;:</label>
                                    <input type="text" value={this.state.photo_url} name="" onChange={(e) => this.handleChange("photo_url", e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>圖片描述&nbsp;:</label>
                                    <textarea value={this.state.description} name="" onChange={(e) => this.handleChange("description", e.target.value)}></textarea>
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
