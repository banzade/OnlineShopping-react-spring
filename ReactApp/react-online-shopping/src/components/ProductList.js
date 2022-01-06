import React,{Component} from "react";
import axios from "axios";

class ProductList extends Component{
    constructor(props){

        super(props);
        this.state={

            prodName:"",
            result_array:[]

        };

    }
    
    componentDidMount(){
    axios.get("http://localhost:8080/productlist").then((res)=>{
                    this.setState({result_array
                    :res.data})
            })
            }


            render(){
                var ui = <div> 
                                <table>
                    <ul>                    
                    <tr>
                         <th>Product name</th>
                         <th>Product price</th>
                        <th>Product quantity</th>
                    </tr>            
            {this.state.result_array.map((e)=>{
                return <tr>
                    <td>{e.prodName}</td>
                    <td>{e.prodPrice}</td>
                    <td>{e.prodQuantity}</td>
                    </tr>

            })}
                                
                
                </ul>
                </table>
                </div>
                return ui
            }


}
export default ProductList;




