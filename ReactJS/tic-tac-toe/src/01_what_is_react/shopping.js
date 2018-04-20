class ShoppingList extends React.Component{
    /**
     * This component tell React what wanted to be render
     */
    render(){
        return (
            <div className="shopping-list">
                <h1>Danh sach mua sam for{this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )

        //Equivalent to below code
        // return(
        //     React.createElement('div',{className:'shopping-list'},
        //     React.createElement('h1',/**/))
        // )
    };
}