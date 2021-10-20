
// import "./index.css";
import {Table} from "antd";
import "./index.css";
import "./index.less";
import "./index.styl";
import API from "../apis/ajax";

export default class APP extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        API.getUserList().then(res => this.setState({data: res}))
    }
    render(){
        const {data} = this.state;
        console.log(data);
        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Age",
                dataIndex: "age",
                key: "age"
            }
        ]
        return <div>
                <Table rowKey={record => record.id} columns={columns} dataSource={data.lists}/>
            </div>
    }
}