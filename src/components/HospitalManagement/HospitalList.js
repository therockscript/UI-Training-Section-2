import hospitals from '../../json_data/hospital.json';
import Hospital from "./hospital";

function HospitalList(props){
        const {list, deleteHospital} = props;
        return <div className="container p-4">
              <table className="table table-hover">
            <thead>
                <tr>
                    <th>Hospital Id</th>
                    <th>Hospital Name</th>
                    <th>Hospital Place</th>
                    <th>No Of Beds</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list && list.map(
                        function(hospital) {
                            return <Hospital hospital={hospital} deleteHospital={deleteHospital}></Hospital>
                        }
                    )
                }
            </tbody>
        </table>
        </div>
}
export default HospitalList;