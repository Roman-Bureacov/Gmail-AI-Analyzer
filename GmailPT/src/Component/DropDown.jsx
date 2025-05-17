import './DropDown.css';

export default function DropDown() {
    return (
        <div className="dropdown">
            <button onclick="myFunction()" class="dropbtn">
                <img src='arrow.png' width="40" 
                height="30" alt='arrow'></img>
            </button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
            </div>
            This dropdown menu will have all your emails and you can select one of them to read!
        </div>
        
    );
}