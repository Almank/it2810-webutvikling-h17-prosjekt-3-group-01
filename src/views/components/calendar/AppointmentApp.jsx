/**
 * Created by Lohne on 05.10.2017.
 */
import React from 'react';



export default class AppointmentApp extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {isToggleOn: true};
        this.state = {
            itemArray: []
        }
    }

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this);


    /*handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    } */

    newItem(){

        const item = this.state.itemArray;

        const title = 'testTitleContent';


       const text = (<form>
           <div className="inputForm">
               <h2>Name</h2>
               <input type='name' className="nameInput" placeholder='Enter your name' required/>
               <div>
                   <button type="submit" onClick={console.log("Success")} className="nameBtn">Enter</button>
               </div>
           </div>
       </form>);


        item.push({ title, text })
        this.setState({itemArray: item})



}

render(){

    return (
        <div className={"allContent"}>
            <div className={"container"}>
                <h1>This is headline </h1>


                <p> how you doin</p>
                <h2> footer</h2>
            </div>

            <div className ={"popupBtn"}>
                <button onClick={this.newItem.bind(this)}> Create new

                </button>
                <div>
                    {this.state.itemArray.map((item, index) => {
                        return (
                            <div className="new" key={index}>
                                <div>
                                    <h1>{item.title}</h1>
                                    <form>{item.text}</form>
                                </div>
                            </div>
                        )
                    })}

                    </div>
                    </div>
        </div>


            );
        }

}


