//JSX
//fragment

import './style.css';

const MyComponent = () => {

    // const hoidanit = "eric 1"; //String
    // const hoidanit = 25; //number
    // const hoidanit = true; //boolean
    // const hoidanit = undefined; //undefined
    // const hoidanit = null; //null
    // const hoidanit = [1,2,3]; //array
    const hoidanit = { //objet
        name: "hoidanit",
        age: 25
    }

    return (
        <>
            {/* <div>{hoidanit.name}</div> */}
            <div>{JSON.stringify(hoidanit)}</div>
            <div>{console.log("ERIC IN CONSOLE")}</div> 
            <div>Eric & hoidanit</div> 
            <div className="child" style={{borderRadius: "10px"}}>child</div>
        </>
        
    )
}


export default MyComponent;