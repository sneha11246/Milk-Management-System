function DashboardCard(props){
    return(
        <div className="dashboard-card">
       <h2>{props.number} </h2>
       <h3>{props.title}</h3>
        </div>
    );
}
export default DashboardCard;