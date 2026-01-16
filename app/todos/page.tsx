import axios from "axios";

export default async function getTodo() {
    
    const response = await axios.get('http://localhost:3000/api/v1/getTodo');

    return (
        <div>
            hi
        </div>
    )
}