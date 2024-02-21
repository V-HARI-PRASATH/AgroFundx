import './Clients.css';
import { connect } from "react-redux";

function Clients(props)
{
    return(
        <div className="clients">
            <div className="allclients">
            <h1>Client List</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Fees Status</th>
            </tr>
        </thead>
        <tbody>
            {props.clients.map((client,index)=><tr>
                <td>{index+1}</td>
                <td>{client.user.name}</td>
                <td>{client.user.email}</td>
                <td>{client.gender}</td>
                <td>{client.paymentstatus}</td>
            </tr>)}
        </tbody>
    </table>
            </div>
        </div>
    )
}
const mapstateToprops=(state)=>{
    return{
        clients:state.trainer.clients
    }
}
export default connect(mapstateToprops,null)(Clients);