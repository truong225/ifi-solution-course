import React, {Component} from 'react'
import ReactDOM from 'react-dom'

/* Như ví dụ trên ta có thể hiểu sẽ có các bộ phận như bộ
 phận to nhất là **blog-list**, trong blog-list sẽ có nhiều
  các **blog-item**, trong blog-item sẽ có ** user ** và
   **blog-content**.
// Để tạo ra các khối compoment thì ta dùng đến phương thức
 createClass và tham số là đối tượng đặc tả của compoment.
  Đối tượng đặc tả này bao gồm các phương thức để hình
   thành nên component. Trong hàm đó, bạn sẽ trả về một mô
    tả cho việc bạn muốn React render cái gì lên trên page.
     Tối sẽ làm 1 ví dụ render 1 component là user:
// ```
// var UserComponent = React.createClass({
//     render: function () {
//         return (
//             <div className="user">
//                 <p>Ho va ten: </p>
//                 <p>Tuoi: </p>
//             </div>
//         )
//     }
// });
// ```
*/

const styles={
    app:{
        fontWeight:'bold',
        color:'#999999'
    }
}

/**
 * Should be like this
 */
class App extends Component{
    render(){
        return (
            <div>
                <h1 style={styles.app}>Hello world</h1>
                <User/>
                {/* Pass data from Component */}
                <UserComponent hoten="Anister" tuoi="22"/>
            </div>
        )
    }
}

class User extends Component{
    render(){
        return(
            <div>
                <h1>Welcome User</h1>
            </div>
        )
    }
}

class UserComponent extends Component{
    render(){
        return(
            <div>
                <p>Name: {this.props.hoten}</p>
                <p>Age: {this.props.tuoi}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);